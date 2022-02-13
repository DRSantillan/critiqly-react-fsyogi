import React from 'react';
import PropTypes from 'prop-types'

const Button = ({children, version, type, isDisabled}) => {
    return(
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

export default Button;