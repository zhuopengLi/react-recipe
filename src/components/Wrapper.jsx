import React from 'react'
import ThemeProvider from './reactContexts/ThemeContext'
import App from './App'

export default function Wrapper() {
    return (
        <div>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </div>
    )
}
