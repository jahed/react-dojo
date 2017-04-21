import React from 'react'
import './styles.scss'

export default function Container({ ...otherProps }) {
    return (
        <div className="Container" {...otherProps} />
    )
}