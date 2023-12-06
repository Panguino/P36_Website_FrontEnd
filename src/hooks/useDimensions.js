import { useEffect, useRef, useState } from 'react'

export default function useDimensions() {
    const ref = useRef()
    const [dimensions, setDimensions] = useState({})
    useEffect(() => {
        setDimensions(ref.current.getBoundingClientRect().toJSON())
    }, [ref.current])
    return [ref, dimensions]
}
