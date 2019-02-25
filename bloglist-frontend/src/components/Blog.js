import React from 'react'
import Togglable from './Togglable'


const Blog = ({ blog }) => (
  <div>
    {blog.title} {blog.author}
  </div>
)

export default Blog