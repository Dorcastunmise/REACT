//Stateless components do not manage or maintain any internal state(i.e current data). 
// They simply receive data through props and render the UI based on that data. 
// Because they don't have state, they are often easier to understand, test, and maintain.
// So in the below example, the count variable does not persist between renders, and clicking the button will not update the displayed count.

import React from 'react'

const Stateless = () => {
    let count = 0;
    function increment() {
        count++;
        console.log('Count = '+count);
    }
  return (
    <div>
        <h1>Stateless Component</h1>
        <p>Count = {count}</p>
        <button onClick={increment}>Click</button>
    
    </div>
  )
}

export default Stateless