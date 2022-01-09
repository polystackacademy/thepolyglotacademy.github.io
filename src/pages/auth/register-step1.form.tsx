import React from 'react'
import PropTypes from 'prop-types'
import { Button, TextField } from '@mui/material'

function RegisterStep1Form(props: any) {
    const { nextStep } = props;
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
            <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={nextStep}
            >
                Send OTP
            </Button>
        </React.Fragment>
    )
}

RegisterStep1Form.propTypes = {
    nextStep: PropTypes.func.isRequired,
    previousStep: PropTypes.func
}

export default RegisterStep1Form
