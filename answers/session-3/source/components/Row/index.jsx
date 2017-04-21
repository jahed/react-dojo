import React, { Children, cloneElement } from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

export default function Row({ className, spacing, children, ...otherProps}) {
    const classes = ['Row']
    
    if(spacing) {
        classes.push(`Row--spacing-${spacing}`)
    }

    if(className) {
        classes.push(className)
    }

    const columnSize = Math.min(Children.count(children), 3)

    const columnsWithSize = Children.map(children, column => {
        return cloneElement(column, {
           size: columnSize
        })
    })

    return (
        <div className={classes.join(' ')} {...otherProps}>
            {columnsWithSize}
        </div>
    )
}

Row.propTypes = {
    className: PropTypes.string,
    spacing: PropTypes.oneOf(['large', 'small']),
    children: PropTypes.node.isRequired
}

Row.defaultProps = {
    className: undefined,
    spacing: undefined
}