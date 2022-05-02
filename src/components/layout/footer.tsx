import React from 'react';
import { Container, Typography, Link } from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';

import { FC } from '../../util';

const useStyles = makeStyles((theme: Theme) => ({
    footer: {
        padding: theme.spacing(2, 2),
        marginTop: 'auto',
        bottom: '0',
        position: 'fixed',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        justifyContent: 'center'
    },
    text: {
        textAlign: "center"
    }
}));

const Footer: FC = () => {
    const styles = useStyles();
    return (
        <footer className={styles.footer}>
            <Container maxWidth="md">
                <Typography className={styles.text} variant="body1" color="textSecondary">
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <Link href="https://www.gatsbyjs.org" color="inherit">
                        Gatsby
                    </Link>
                    ,{` `}
                    <Link href="https://www.typescriptlang.org" color="inherit">
                        Typescript
                    </Link>{' '}
                    and
                    {` `}
                    <Link href="https://material-ui.com/" color="inherit">
                        @Material-ui
                    </Link>
                    ,
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
