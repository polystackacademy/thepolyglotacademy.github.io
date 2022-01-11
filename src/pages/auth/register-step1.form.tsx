import React from 'react'
import PropTypes from 'prop-types'
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { Box } from '@mui/system';

function RegisterStep1Form(props: any) {
    const { nextStep } = props;
    return (
        <React.Fragment>
            <Box sx={{
                mt: 4,
                mx: 4
            }}>
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
                <TextField
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email (Optional)"
                    name="email"
                    autoComplete="email"
                />
            </Box>
            <FormControlLabel
                control={<Checkbox value="otponmail" color="primary" />}
                label="Send OTP on email."
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
