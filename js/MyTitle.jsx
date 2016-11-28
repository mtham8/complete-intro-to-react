const React = require('react')

// creating you element -- composite component
// can only return one element per component ==> wrap in div to include multiple elements
/*
const MyTitle = React.createClass({
  render () {
    return (
      <div>
        <h1 style={{color: this.props.color}}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})
*/

const MyTitle = ({color, title}) => (
  <div>
    <h1 style={{color: color}}>
      {title}
    </h1>
  </div>
)

module.exports = MyTitle
