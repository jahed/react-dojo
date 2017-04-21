import React from 'react'
import PropTypes from 'prop-types'
import './DrawerToggle.scss'
import Icon from '~/components/Icon'

export default function DrawerToggle({ active, onActivate, onDeactivate }) {
    const classes = ['DrawerToggle']
    let iconType = 'bars'
    let title = 'Show drawer'

    if(active) {
        classes.push('DrawerToggle--active')
        iconType = 'times'
        title = 'Hide drawer'
    }

    return (
        <button 
            className={classes.join(' ')} 
            onClick={() => (active ? onDeactivate() : onActivate())}
            title={title}
        >
            <Icon type={iconType} fixedWidth />
        </button>
    )
}

DrawerToggle.propTypes = {
    active: PropTypes.bool.isRequired,
    onActivate: PropTypes.func.isRequired,
    onDeactivate: PropTypes.func.isRequired
}
