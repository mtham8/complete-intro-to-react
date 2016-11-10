const div = React.DOM.div
const h1 = React.DOM.h1

// creating you element
const MyTitle = React.createClass({
  render(){
    return (
      div(null,
        h1(null, 'What is reality pt. 1')
      )
    )
  }
})

// null is for the attributes you pass into the element ie. style="color: 'green'"
// you need div to be a parent element for the instances of your class
const MyFirstComponent = (
  div({ style: { color: 'green' }},
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null)
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
