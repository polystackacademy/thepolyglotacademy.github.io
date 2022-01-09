import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, TextField } from '@mui/material'

function RegisterStep2Form(props: any) {
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
                    Change Number
                </Button>
                <Button
                    variant="contained"
                    onClick={nextStep}
                >
                    Confirm OTP
                </Button>
            </Box>

        </React.Fragment>
    )
}

RegisterStep2Form.propTypes = {
    nextStep: PropTypes.func.isRequired,
    previousStep: PropTypes.func
}

export default RegisterStep2Form
