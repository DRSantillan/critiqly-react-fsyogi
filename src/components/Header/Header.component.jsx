import React from 'react'
import PropTypes from 'prop-types'

const Header = ({text}) => {
    return (<header>
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>)
}

Header.defaultProps = {
    text: 'CRITIQLY - Feedback on Steriods!'
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header;
