import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export default function Column({ className, size, ...otherProps }) {
    const classes = ['Column', `Column--size-${size}`]
    return (
        <div className={classes.join(' ')} {...otherProps} />
    )
}

Column.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf([1, 2, 3])
}

Column.defaultProps = {
    className: undefined,
    size: 1
}
