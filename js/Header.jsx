const React = require('react')
const { Link } = require('react-router')

const Header = React.createClass({
  render () {
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>V1d305</Link>
        </h1>
        <h2 className='header-back'>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      </header>
    )
  }
})

module.exports = Header
