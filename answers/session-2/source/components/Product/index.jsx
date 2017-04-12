import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

export default function Product({ name, image, children }) {
    return (
        <div className="Product">
            <img className="full-width" src={image} />
            <h4>{name}</h4>
            <p>
                {children}
            </p>
        </div>
    )
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

Product.defaultProps = {
    image: 'http://placehold.it/300x200'
}