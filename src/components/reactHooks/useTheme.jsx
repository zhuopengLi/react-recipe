import { useContext } from 'react'
import { ThemeContext } from '../reactContexts/ThemeContext'

export default function useTheme() {
    const context = useContext(ThemeContext)

    if (context === undefined) {
        throw new Error('useTheme() must be used inside a ThemeProvider')
    }

    return context
}
