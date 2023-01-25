import React, { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

const themeReducer = (state, { type, payload }) => {
    switch (type) {
        case 'CHANGE_COLOR':
            return { ...state, color: payload }
        case 'CHANGE_MODE':
            return { ...state, mode: payload }
        default:
            return state
    }
}

export default function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, {
        color: '#52489c',
        mode: 'dark',
    })

    const changeColor = color => {
        dispatch({ type: 'CHANGE_COLOR', payload: color })
    }
    const changeMode = mode => {
        dispatch({ type: 'CHANGE_MODE', payload: mode })
    }

    return (
        <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
            {children}
        </ThemeContext.Provider>
    )
}
