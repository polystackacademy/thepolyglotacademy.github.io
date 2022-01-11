import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, TextField } from '@mui/material'

function RegisterStep2Form(props: any) {
    const { nextStep, previousStep } = props;
    return (
        <React.Fragment>
            <Box sx={{
                my: 4,
            }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="otp"
                    label="Please enter OTP."
                    name="otp"
                    autoComplete="otp"
                    autoFocus
                />
            </Box>
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
