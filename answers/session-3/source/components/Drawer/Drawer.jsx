import React from 'react'
import PropTypes from 'prop-types'
import './Drawer.scss'

export default function Drawer({ active }) {
    const classes = ['Drawer']
    if(active) {
        classes.push('Drawer--active')
    }

    return (
        <div className={classes.join(' ')}>
            content
        </div>
    )
}

Drawer.propTypes = {
    active: PropTypes.bool
}

Drawer.defaultProps = {
    active: false
}