import React, {useEffect, useState} from 'react';
import {AppBar, Button, Toolbar, Tooltip} from '@material-ui/core';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {BsToggleOff, BsToggleOn} from 'react-icons/bs';

import {FC} from '../../util';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary
    },
    title: {
        flexGrow: 1
    },
    link: {
        textDecoration: 'none'
    }
}));

export interface HeaderProps {
    switchTheme: () => void;
    siteTitle?: string;
}

const Header: FC<HeaderProps> = (props) => {
    const [showOn, setShowOn] = useState<boolean>(true);
    const styles = useStyles();

    const onSwitch = (): void => {
        setShowOn((prev) => !prev);
        props.switchTheme();
    };

    // const fixTheme = (isLight: boolean) => {
    //     if (isLight) {
    //         setShowOn(false);
    //     } else {
    //         setShowOn(true);
    //     }
    //     props.switchTheme();
    // }
    //
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //             fixTheme(false)
    //         } else {
    //             fixTheme(true)
    //         }
    //     }
    // }, []);
    //
    // if (typeof window !== 'undefined') {
    //     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    //         event.matches ? fixTheme(false) : fixTheme(true);
    //     });
    // }


    return (
        <AppBar component="header" position="static" className={styles.root}>
            <Toolbar>
                <Tooltip title="switch theme">
                    <Button onClick={onSwitch}>
                        {showOn ? <BsToggleOn size="40"/> : <BsToggleOff size="40"/>}

                    </Button>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
