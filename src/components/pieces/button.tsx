import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Button, Menu, MenuItem, Theme} from '@material-ui/core';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {FCC} from '../../util';

const useStyles = makeStyles((theme: Theme) => ({
    heroContent: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(0, 1, 0)
    },
    subMenu: {
        marginTop: theme.spacing(16.5),
        width: "100%"
    },
    subMenuItem: {
        justifyContent: "center"
    }

}));

export interface ButtonProps {
    title: string;
    link?: string | null;
    submenu?: any;
}

const ExpertButton: FCC<ButtonProps> = (props) => {
    const styles = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleMultiComponentClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMultiComponentClose = () => {
        setAnchorEl(null);
    };

    const getSingleComponent = (title: string, link: any) =>
        <Button
            onClick={() => {
                alert(link);
            }}
            className={styles.heroContent}
            variant="contained"
            fullWidth
        >
            {title}
        </Button>

    const getMultiComponent = (title: string, submenu: any) =>
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleMultiComponentClick}
                endIcon={<KeyboardArrowDownIcon/>}
                className={styles.heroContent}
                variant="contained"
                disableElevation
                fullWidth
            >
                {title}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMultiComponentClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                classes={{
                    paper: styles.subMenu,
                }}
            >
                {
                    submenu.map(
                        (item: any) =>
                            <MenuItem key={item.title} className={styles.subMenuItem} onClick={handleMultiComponentClose} disableRipple>
                                {item.title}
                            </MenuItem>
                    )
                }

            </Menu>
        </div>


    return (
        <>
            {props.submenu ?
                getMultiComponent(props.title, props.submenu) :
                getSingleComponent(props.title, props.link)}
        </>
    );
};

export default ExpertButton;
