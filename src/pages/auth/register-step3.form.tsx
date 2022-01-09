import React from 'react'
import PropTypes from 'prop-types'
import { Button, TextField, Box } from '@mui/material'

function RegisterStep3Form(props: any) {
    const { nextStep, previousStep } = props;
    return (
        <React.Fragment>
            <TextField
                margin="normal"
                required
                fullWidth
                id="phone-number"
                label="Phone Number"
                name="phone-number"
                autoComplete="phone-number"
                autoFocus
            />
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <Button
                    variant="text"
                    onClick={previousStep}
                >
                    skip
                </Button>
                <Button
                    variant="contained"
                    onClick={nextStep}
                >
                    Make Payment
                </Button>
            </Box>
        </React.Fragment>
    )
}

RegisterStep3Form.propTypes = {
    nextStep: PropTypes.func.isRequired,
    previousStep: PropTypes.func
}

export default RegisterStep3Form
