import React from 'react'
import PropTypes from 'prop-types'
import './Drawer.scss'

function DrawerNavigationItem({ href, onClick, children }) {
    return (
        <li className="Drawer__Navigation__Item">
            <a className="Drawer__Navigation__Item__Link" href={href} onClick={onClick}>
                {children}
            </a>
        </li>
    )
}

DrawerNavigationItem.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
}

DrawerNavigationItem.defaultProps = {
    onClick: () => undefined
}

function DrawerNavigation({ children }) {
    return (
        <ul className="Drawer__Navigation">
            {children}
        </ul>
    )
}

DrawerNavigation.propTypes = {
    children: PropTypes.node.isRequired
}

export default function Drawer({ active, onInteraction }) {
    const classes = ['Drawer']
    if(active) {
        classes.push('Drawer--active')
    }

    return (
        <div className={classes.join(' ')}>
            <DrawerNavigation>
                <DrawerNavigationItem href="#" onClick={onInteraction}>Intro</DrawerNavigationItem>
                <DrawerNavigationItem href="#dominion"  onClick={onInteraction}>Dominion</DrawerNavigationItem>
                <DrawerNavigationItem href="#serenity"  onClick={onInteraction}>Serenity</DrawerNavigationItem>
            </DrawerNavigation>
        </div>
    )
}

Drawer.propTypes = {
    active: PropTypes.bool,
    onInteraction: PropTypes.func
}

Drawer.defaultProps = {
    active: false,
    onInteraction: () => undefined
}
