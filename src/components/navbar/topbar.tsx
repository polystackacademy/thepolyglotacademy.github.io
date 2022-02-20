import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'


function AppTopNavbar(props: any) {
    const { expandSidebar, defaultState } = props;
    const [collapse, setCollapse] = useState(defaultState);
    const handleDrawerOpen = () => {
        let collapsible = !collapse;
        setCollapse(collapsible);
        expandSidebar(collapsible);
        console.log(collapse);
    };
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar variant="dense">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: '10px',
                    }}
                >
                    {collapse ? <FontAwesomeIcon icon={faAngleDoubleLeft} /> : <FontAwesomeIcon icon={faAngleDoubleRight} />}
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    The Polyglot Academy
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

AppTopNavbar.propTypes = {
    expandSidebar: PropTypes.func.isRequired,
    defaultState: PropTypes.bool.isRequired
}

export default AppTopNavbar
