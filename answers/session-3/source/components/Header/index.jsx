import React from 'react'
import './styles.scss'
import Container from '~/components/Container'
import DrawerToggle from './DrawerToggle'

function Navigation({ children }) {
    return (
        <nav className="Header_Navigation">
            {children}
        </nav>
    )
}

function NavigationHeading({ children }) {
    return (
        <h1 className="Header_NavigationHeading">
            {children}
        </h1>
    )
}

function NavigationGroup({ children }) {
    return (
        <ul className="Header_NavigationGroup">
            {children}
        </ul>
    )
}

function NavigationGroupItem({ href, children }) {
    return (
        <li className="Header_NavigationGroupItem">
            <a href={href}>
                {children}
            </a>
        </li>
    )
}

export function Spacer() {
    return (
        <div className="Header_Spacer" />
    )
}

export default function Header() {
    return (
        <header className="Header">
            <Container>
                <Navigation>
                    <DrawerToggle />
                    <NavigationHeading>A Website</NavigationHeading>
                    <NavigationGroup>
                        <NavigationGroupItem href="#">Intro</NavigationGroupItem>
                        <NavigationGroupItem href="#dominion">Dominion</NavigationGroupItem>
                        <NavigationGroupItem href="#serenity">Serenity</NavigationGroupItem>
                    </NavigationGroup>
                </Navigation>
            </Container>
        </header>
    )
}