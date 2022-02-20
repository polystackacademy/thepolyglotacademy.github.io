import PropTypes from 'prop-types'
import { ThemeProvider } from '@mui/system';
import Paper from '@mui/material/Paper';
import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, IconButton, Link, TextField, Typography } from '@mui/material';
import theme from '../../theme';
import { faIdBadge, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import CopyrightWidget from '../../components/copyright.widget';


function LoginPage(props: any) {
    const navigator = useNavigate();

    const handleClose = () => {
        navigator("/", { replace: true });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        navigator("/dashboard", { replace: true });
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={8}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'end',
                        }}
                    >
                        <IconButton aria-label="delete" edge="end" onClick={() => handleClose()}>
                            <FontAwesomeIcon icon={faTimes} size="sm" />
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            my:  8,
                            mx: 4,
                            px:10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main', width: 60, height: 60 }}>
                            <FontAwesomeIcon icon={faIdBadge} size="lg" />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Welcome
                        </Typography>
                        <Typography component="h6" variant="subtitle1">
                            Please enter your mobile number or email address.
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email-phone"
                                label="Email/Phone Number"
                                name="email-phone"
                                autoComplete="email-phone"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/register" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <CopyrightWidget sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider >
    )
}

LoginPage.propTypes = {
    previousRoute: PropTypes.string.isRequired,
    value: PropTypes.object
}

export default LoginPage
