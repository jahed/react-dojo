import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

export default function Section({ className, ...otherProps }) {
    const classes = ['Section']
    if(className) {
        classes.push(className)
    }

    return (
        <section className={classes.join(' ')} {...otherProps} />
    )
}

Section.propTypes = {
    className: PropTypes.string
}

Section.defaultProps = {
    className: undefined
}