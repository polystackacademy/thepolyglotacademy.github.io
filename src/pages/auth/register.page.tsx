import React from "react";
import { ThemeProvider } from '@mui/system';
import Paper from '@mui/material/Paper';
import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, IconButton, Link, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material';
import theme from '../../theme';
import { faIdBadge, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import CopyrightWidget from '../../components/copyright.widget';
import RegisterStep1Form from "./register-step1.form";
import RegisterStep2Form from "./register-step2.form";
import RegisterStep3Form from "./register-step3.form";

function RegisterPage() {
    const [activeStep, setActiveStep] = React.useState(0);
    const navigator = useNavigate();
    const steps = ["Enter mobile number", "Confirm OTP", "Payment Details"];

    const setActiveView = (step: number) => {
        switch (step) {
            case 0:
                return (<RegisterStep1Form nextStep={handleNext} />);
            case 1:
                return (<RegisterStep2Form nextStep={handleNext} previousStep={handleBack} />);
            case 2:
                return (<RegisterStep3Form nextStep={handleNext} previousStep={handleBack} />);
        }
    }
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <Stepper activeStep={activeStep} alternativeLabel>
                                {steps.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};
                                    return (
                                        <Step key={label} {...stepProps}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            {
                                setActiveView(activeStep)
                            }
                        </Box>
                        <CopyrightWidget sx={{ mt: 5 }} />
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider >
    )
}

export default RegisterPage;
