const React = require('react')
const ReactDOM = require('react-dom')
const div = React.DOM.div
const MyTitle = require('./MyTitle')

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
