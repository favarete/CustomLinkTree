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
    },
    text: {
        textAlign: "center"
    }
}));

const Footer: FC = () => {
    const styles = useStyles();
    return (
        <footer className={styles.footer}>
            <Container maxWidth="md" className={styles.text}>
                <Typography variant="body2" color="textSecondary">
                    {`Built by Rodrigo Favarete`}
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
