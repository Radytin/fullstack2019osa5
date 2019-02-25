import React from 'react'
import 'jest-dom/extend-expect'
import { render, cleanup } from 'react-testing-library'
import Simpleblog from './Simpleblog'

afterEach(cleanup)

test('renders content', () => {
  const  Simpleblog= {
    
  }

  const component = render(
    <Simpleblog simpleblog={simpleblog} />
  )

  expect(component.container).toHaveTextContent(
    'Komponenttitestaus tapahtuu react-testing-library:llä'
  )
})