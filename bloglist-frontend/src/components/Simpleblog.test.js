import React from 'react'
import 'jest-dom/extend-expect'
import SimpleBlog from './Simpleblog.js'
import {cleanup } from 'react-testing-library'
import { prettyDOM } from 'dom-testing-library'
import {render,fireEvent } from 'react-testing-library'

afterEach(cleanup)

describe('<SimpleBlog />', () => {

  it('renders title, author and likes', () => {
    const blog = {
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5
    }

  
  })

  it('clicking the like button twice calls the event handler twice', () => {
    const blog = {
      title: 'Kissan elämää',
      author: 'Rufus Rufus',
      likes: 1937402974
  }

    const mockHandler = jest.fn()
    const { getByText } = render(
      <SimpleBlog blog={blog} toggleImportance={mockHandler} />
    )

    const button = getByText('like')
    fireEvent.click(button)
    fireEvent.click(button)

    expect(mockHandler.mock.calls.length).toBe(2)
    
   
  })
})

