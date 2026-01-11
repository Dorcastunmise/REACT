//jsx is used to write a declarative structure of the UI
//It focuses on what the UI should look like rather than how to build it step by step.
//JSX allows us to write HTML-like syntax directly in our JavaScript code, which React then transforms into React.createElement() calls behind the scenes.
import React, { Suspense } from 'react';
import Child from './Child';
import { lazy } from 'react';
const CodeSplitTest = lazy(() => import('./CodeSplit'));

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

        <Suspense fallback={<div>Loading...</div>}>
          <CodeSplitTest/>
        </Suspense>

        {/*rofiler*/}
        <React.Profiler id="App" onRender={callback}>
          <div>
            <h2>Profiler Example</h2>
            <p>This component is being profiled.</p>
          </div>
        </React.Profiler>

    </>
  )
}

export default App