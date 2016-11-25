const React = require('react')
const ReactDOM = require('react-dom')

// you need div to be a parent element for the instances of your class
const App = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>V1d305</h1>
      <input className='search' type='text' placeholder='Search' />
      <button className='browse-all'> or Browse All </button>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
