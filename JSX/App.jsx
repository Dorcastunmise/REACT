//jsx is used to write a declarative structure of the UI
//It focuses on what the UI should look like rather than how to build it step by step.
//JSX allows us to write HTML-like syntax directly in our JavaScript code, which React then transforms into React.createElement() calls behind the scenes.
import React from 'react'
import Child from './Child'

const props = [
    { tag: 'h1', content: 'Trial', style: { color: 'red' } },
    { tag: 'p', content: 'Prism', className: 'text-bold' },
]
const App = () => {
  return (
    <>
        <div className='app'>
            <h1>Hello</h1>
            <p>Test</p>
        </div>
        <Child {...props}/>
    </>
  )
}

export default App