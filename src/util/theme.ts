import deepMerge from 'deepmerge';
import { createTheme, responsiveFontSizes, ThemeOptions, Theme } from '@material-ui/core/styles';

const makeTheme = (variant: ThemeOptions): Theme => {
    const common = {
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    '*::-webkit-scrollbar': {
                        width: '0.5rem'
                    },
                    '*::-webkit-scrollbar-thumb': {
                        background: '#888'
                    },
                    '*::-webkit-scrollbar-thumb:hover': {
                        background: '#555'
                    }
                }
            }
        }
    };
    const theme = createTheme(deepMerge(common, variant));
    return responsiveFontSizes(theme);
};

const light: ThemeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#1d1d1d'
        },
        secondary: {
            main: '#be00ff'
        },
        error: {
            main: '#be00ff'
        },
        warning: {
            main: '#be00ff'
        },
        info: {
            main: '#be00ff'
        },
        success: {
            main: '#be00ff'
        },
        text: {
            primary: '#818181',
            secondary: '#1f1f1f',
            hint: '#eaeaea',
            disabled: '#be00ff'
        },
        background: {
            default: '#eaeaea',
            paper: '#ffffff'
        }
    }
};

const dark: ThemeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: '#eaeaea'
        },
        secondary: {
            main: '#be00ff'
        },
        error: {
            main: '#be00ff'
        },
        warning: {
            main: '#be00ff'
        },
        info: {
            main: '#be00ff'
        },
        success: {
            main: '#be00ff'
        },
        text: {
            primary: '#b8b8b8',
            secondary: '#eaeaea',
            hint: '#000000',
            disabled: '#be00ff'
        },
        background: {
            default: '#1c1b1b',
            paper: '#000000'
        }
    }
};

const themes: { [key: string]: Theme } = {
    light: makeTheme(light),
    dark: makeTheme(dark)
};

export const themeCookie = 'clthmvar';

export default themes;
