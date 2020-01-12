import React from 'react'
import PropTypes from 'prop-types'

const EmailMe = ({ className, text }) => 
  <a className={className} rel="noopener" href='mailto:contact@raincode.org'>{text}</a>

EmailMe.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired
}

EmailMe.defaultProps = {
  className: ''
}

export default EmailMe
