import React from 'react'
import './styles.scss'

export default function Footer() {
    return (
        <footer className="Footer">
            <div className="container">
                <div className="row">
                    &copy; {new Date().getFullYear()} You
                </div>
            </div>
        </footer>
    )
}