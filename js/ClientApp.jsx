const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')

// null is for the attributes you pass into the element ie. style="color: 'green'"
// you need div to be a parent element for the instances of your class
const MyFirstComponent = cb => (
    <div>
      <MyTitle title='Whatevs' color='rebeccapurple' />
      <MyTitle title='LOL' color='papayawhip' />
      <MyTitle title='OMGLOLWTFBBQ' color='#f06d06' />
    </div>
)

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
