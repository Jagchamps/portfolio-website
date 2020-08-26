import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { 
            syntax: '#333333', 
            highlight: {
                primary: '#7A3E9D',
                secondary: '#AA3731',
                tertiary: '#4B69C6'
            },
            ui: '#f0c6ff66', 
            bg: '#f2f2f2' 
        },
        dark: { 
            syntax: '#d4d4d4', 
            highlight: {
                primary: '#569CD6',
                secondary: '#CE9178',
                tertiary: '#4EC9B0'
            },
            ui: '#cccccc33', 
            bg: '#1e1e1e' 
        }
    }

    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme });
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;