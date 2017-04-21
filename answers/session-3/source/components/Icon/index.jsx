import React from 'react'
import PropTypes from 'prop-types'
import 'font-awesome/scss/font-awesome.scss'

export default function Icon({ type, fixedWidth }) {
    const classes = ['fa', `fa-${type}`]
    if(fixedWidth) {
        classes.push('fa-fw')
    }

    return (
        <i className={classes.join(' ')} />
    )
}

Icon.propTypes = {
    type: PropTypes.string.isRequired,
    fixedWidth: PropTypes.bool
}

Icon.defaultProps = {
    fixedWidth: false
}
