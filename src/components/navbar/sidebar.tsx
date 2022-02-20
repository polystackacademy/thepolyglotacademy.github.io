import React from 'react'
import PropTypes from 'prop-types'
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, styled } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faMailBulk } from '@fortawesome/free-solid-svg-icons'

function AppSideNavbar(props: any) {
  const { isCollapsed } = props;
  return (
    <Box sx={{ overflow: 'auto' }}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <FontAwesomeIcon icon={faMailBulk} /> : <FontAwesomeIcon icon={faAddressBook} />}
            </ListItemIcon>
            <ListItemText className={!isCollapsed ? 'd-none' : 'd-block'} primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List >
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <FontAwesomeIcon icon={faMailBulk} /> : <FontAwesomeIcon icon={faAddressBook} />}
            </ListItemIcon>
            <ListItemText className={!isCollapsed ? 'd-none' : 'd-block'} primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

AppSideNavbar.propTypes = {
  isCollapsed: PropTypes.bool.isRequired
}

export default AppSideNavbar
