/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const { shallow, mount } = require('enzyme')
const { shows } = require('../public/data')

describe('<Search /> ', () => {
  // shallow checks if your elements exist
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    // console.log('this is debugger from test ==> ', wrapper.debug())
    expect(wrapper.contains(<h1 className='brand'>V1d305</h1>)).to.be.true
  })

  it('should render as many shows as there are data for', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })

  // mount lets your simulate events
  it('should filter correctly given new state', () => {
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    // simulate onChange in react
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house')
    // checking if the filter search is working
    expect(wrapper.find('.show-card').length).to.equal(2)
  })
})
