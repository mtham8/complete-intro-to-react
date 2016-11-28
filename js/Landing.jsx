const React = require('react')

// you need div to be a parent element for the instances of your class
const Landing = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>V1d305</h1>
      <input className='search' type='text' placeholder='Search' />
      <button className='browse-all'> or Browse All </button>
    </div>
  </div>
)

module.exports = Landing
