const React = require('react')
const { Link } = require('react-router')

// you need div to be a parent element for the instances of your class
const Landing = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>V1d305</h1>
      <input className='search' type='text' placeholder='Search' />
      <Link to='/search' className='browse-all'> or Browse All </Link>
    </div>
  </div>
)

module.exports = Landing
