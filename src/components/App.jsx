import React from 'react'
import ThemeProvider from './context/ThemeContext'
import ChildApp from './ChildApp'

export default function App() {
    return (
        <div>
            <ThemeProvider>
                <ChildApp />
            </ThemeProvider>
        </div>
    )
}
