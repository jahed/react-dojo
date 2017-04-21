import React from 'react'
import './styles.scss'
import Container from '~/components/Container'
import Row from '~/components/Row'
import Column from '~/components/Column'

export default function Footer() {
    return (
        <footer className="Footer">
            <Container>
                <Row spacing="small">
                    <Column>
                        &copy; {new Date().getFullYear()} You
                    </Column>
                </Row>
            </Container>
        </footer>
    )
}