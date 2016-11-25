const React = require('react')

const div = React.DOM.div
const h1 = React.DOM.h1

// creating you element -- composite component
// can only return one element per component ==> wrap in div to include multiple elements
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

module.exports = MyTitle
