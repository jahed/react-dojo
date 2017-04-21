import React from 'react'
import './styles.scss'
import Container from '~/components/Container'
import Row from '~/components/Row'
import Column from '~/components/Column'
import Section from '~/components/Section'

export default function Feature({ heading, background, children, ...otherProps }) {
    const classes = ['Feature']

    let backgroundElement
    if(background) {
        classes.push('Feature--background')
        backgroundElement = (
            <div className="Feature__Background" style={{ backgroundImage: `url(${background})` }} />            
        )
    }

    return (
        <Section className={classes.join(' ')} {...otherProps}>
            {backgroundElement}
            <Container>
                <Row spacing={background ? 'large' : undefined}>
                    <Column>
                        <h2>{heading}</h2>
                        <p>{children}</p>
                    </Column>
                </Row>
            </Container>
        </Section>
    )
}