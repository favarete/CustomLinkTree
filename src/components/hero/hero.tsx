import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Container, Theme, Typography} from '@material-ui/core';
import {Avatar, Grid, Link} from '@mui/material';
import user from '../../../content/images/user.jpg'

import {FCC} from '../../util';

const useStyles = makeStyles((theme: Theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 0, 2),
        display: 'flex'
    },
    image: {
        margin: theme.spacing(0, 0, 1),
    },
    avatar: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

export interface HeroProps {
    instagram: string | JSX.Element;
    instagramUser: string | JSX.Element;
    instagramName: string | JSX.Element;
    instagramLocation: string | JSX.Element;
}

const Hero: FCC<HeroProps> = (props) => {
    const styles = useStyles();
    return (
        <div className={styles.heroContent}>
            <Container className={styles.avatar}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Avatar
                        className={styles.image}
                        src={user}
                        sx={{width: 90, height: 90}}
                    />
                    {/*@ts-ignore*/}
                    <Typography variant="h6" color="textSecondary">
                        <Link href={props.instagram} color="inherit">
                            {props.instagramUser}
                        </Link>
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {props.instagramName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {props.instagramLocation}
                    </Typography>
                </Grid>
            </Container>
        </div>
    );
};

export default Hero;
