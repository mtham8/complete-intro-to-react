const div = React.DOM.div
const h1 = React.DOM.h1

// creating you element -- composite component
const MyTitle = React.createClass({
  render(){
    return (
      div(null,
        h1({ style: { color: this.props.color }}, this.props.title)
      )
    )
  }
})

const MyTitleFactory = React.createFactory(MyTitle)
const ce = React.createElement

// null is for the attributes you pass into the element ie. style="color: 'green'"
// you need div to be a parent element for the instances of your class
const MyFirstComponent = (
  div(null,
    MyTitleFactory({ title: 'Props are great', color: 'rebeccapurple'}),
    ce(MyTitle, {title: 'Props are so cool', color: 'mediumaquamarine'}),
    React.createElement(MyTitle, {title: 'Use props everywhere', color: 'peru'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
