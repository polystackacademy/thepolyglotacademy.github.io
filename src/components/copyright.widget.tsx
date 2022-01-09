import { Link, Typography } from "@mui/material";

function CopyrightWidget(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                The Polyglot Academy
            </Link>{' '}
            {'2022.'}
        </Typography>
    );
}

export default CopyrightWidget;