import { useState, useEffect } from 'react'

export default function useWindowDimensions() {
    const hasWindow = typeof window !== 'undefined'

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null
        const height = hasWindow ? window.innerHeight : null
        return {
            width,
            height,
            isMobile: width && width < 850,
            isDesktop: width && width >= 850
        }
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

    useEffect(() => {
        if (hasWindow) {
            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }
        function handleResize() {
            setWindowDimensions(getWindowDimensions())
        }
    }, [hasWindow])

    useEffect(() => {
        if (hasWindow) {
            setWindowDimensions(getWindowDimensions())
        }
    }, [])

    return windowDimensions
}
