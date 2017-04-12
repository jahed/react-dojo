import React, { Children } from 'react'
import './styles.scss'
import _ from 'lodash'
import PropTypes from 'prop-types'
import Section from '~/components/Section'
import Container from '~/components/Container'
import Row from '~/components/Row'
import Column from '~/components/Column'

export function Cell({ heading, children, ...otherProps }) {
    return (
        <Column className="Cell" {...otherProps}>
            <h4 className="no-margin">{heading}</h4>
            <p>{children}</p>
        </Column>
    )
}

export default function Grid({ columns, children, ...otherProps }) {
    const rows = _(Children.toArray(children))
        .chunk(columns)
        .map((rowItems, i) => {
            return (
                <Row spacing="small" key={i}>
                    {rowItems}
                </Row>
            )
        })
        .value()

    return (
        <Section className="Grid" {...otherProps}>
            <Container>
                <Row>
                    <Column>
                        {rows}
                    </Column>
                </Row>
            </Container>
        </Section>
    )
}

Grid.propTypes = {
    columns: PropTypes.number,
    children: PropTypes.node.isRequired
}

Grid.defaultProps = {
    columns: 2
}