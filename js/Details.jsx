const React = require('react')
const Header = require('./Header')
const axios = require('axios')

class Details extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      omdbData: {}
    }
  }

  componentDidMount () {
    // DOESN'T WORK
    // TODO: Implement shows into redux
    axios.get(`http://www.omdbapi.com/?${this.props.shows[this.props.params.id].imdbID}`)
      .then( (resp) => {
        this.setState({ omdbData: resp.data })
      })
      .catch( (err) => {
        console.error('axios error', err)
      })
  }

  render () {
    const params = this.props.params || {}
    const { title, description, year, poster, trailer } = params
    let rating
    if (this.state.omdbData.imdbRating) {
      rating = <h3 className='video-rating'>{this.state.omdbData.imdbRating}</h3>
    }
    return (
      <div className='container'>
        <Header />
        <div className='video-info'>
          <h1 className='video-title'>{title}</h1>
          <h2 className='video-year'>({year})</h2>
          <img className='video-poster' src={`public/img/posters/${poster}`} />
          <p className='video-description'>{description}</p>
        </div>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' />
        </div>
      </div>
    )
  }
}

const { object } = React.PropTypes
Details.propTypes = {
  params: object
}
module.exports = Details
