import React from 'react'
import Hero from '../../components/Hero/hero'
import Watermark from '../../components/Watermark/watermark'

export default function NotFound() {
    return (
        <div>
            <Hero text="404 Page Not Found" />
            <Watermark />
        </div>
    )
}
