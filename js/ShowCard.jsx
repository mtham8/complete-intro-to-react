const React = require('react')

const ShowCard = (props) => (
  <div className='show-card'>
    <img src={`public/img/posters/${props.poster}`} className='show-card-img' />
    <div className='show-card-text'>
      <h3 className='show-card-title'>{props.title}</h3>
      <h4 className='show-card-year'>({props.year})</h4>
      <p className='show-card-description'>{props.description}</p>
    </div>
  </div>
)

const { string } = React.PropTypes
// makes sure that props is passed as an object
ShowCard.propTypes = {
  title: string,
  year: string,
  poster: string,
  description: string
}

module.exports = ShowCard
