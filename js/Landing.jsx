const React = require('react')
const { Link, hashHistory } = require('react-router')
const { connector } = require('./Store')

// you need div to be a parent element for the instances of your class
class Landing extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.gotoSearch = this.gotoSearch.bind(this)
  }

  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  }

  gotoSearch (event) {
    hashHistory.push('search')
    event.preventDefault()
  }

  render () {
    return (
      <div className='home-info'>
        <h1 className='title'>V1d305</h1>
        <form onSubmit={this.gotoSearch}>
          <input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className='search' type='text' placeholder='Search' />
        </form>
        <Link to='/search' className='browse-all'> or Browse All </Link>
      </div>
    )
  }
}

const { string, func } = React.PropTypes
Landing.propTypes = {
  searchTerm: string,
  setSearchTerm: func
}

module.exports = connector(Landing)
