const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data.json')

const Search = () => (
  <div className='container'>
    <div className='shows'>
      {data.shows.map(show => (
        // show={show} ==> show= is the name of the property we're passing it down as
        <ShowCard {...show} key={show.imdbID} />
      ))}
    </div>
  </div>
)

module.exports = Search
