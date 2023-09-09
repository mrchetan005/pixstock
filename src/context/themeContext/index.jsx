/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { themeContext } from '..';

export function ThemeProvider({ children }) {
    const [, setTheme] = useState('dark');

    useEffect(() => {
        const isDefaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        let themeToSet;
        if (window.localStorage.getItem('theme')) {
            themeToSet = window.localStorage.getItem('theme');
        } else {
            themeToSet = isDefaultDark ? 'dark' : 'light';
        }

        document.documentElement.dataset.theme = themeToSet;
        setTheme(themeToSet);
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const themeToSet = prevTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.dataset.theme = themeToSet;
            window.localStorage.setItem('theme', themeToSet);
            return themeToSet;
        });
    };

    return (
        <themeContext.Provider value={{ toggleTheme }}>
            {children}
        </themeContext.Provider>
    );
}
