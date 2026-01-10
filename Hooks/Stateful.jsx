/*
Stateful components manage and maintain their own internal state using React's state management features (like the useState hook). 
They can update and persist data between renders, allowing for dynamic and interactive user interfaces.
In the example below, the count variable is managed using the useState hook. 
Clicking the button updates the count state, which triggers a re-render to display the updated count.
*/
import React from 'react'
import { useState } from 'react';


const Stateful = () => {
    /*array destructuring it involves breaking array elements then assigning elements of an array into individual variables/elements.
     - first element is the current state value, second element is a function to update that state. 
     - useState(0) initializes the state variable count with a value of 0.
     useState is a React hook that allows functional components to have state variables. 
     And it is called once during the initial render of the component. 
     Then the component re-renders whenever the state is updated using the provided setter function (setCount in this case).
    */
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
        console.log('Count = ' + (count + 1));
    }
  return (
    <>
        <h1>Stateful Component</h1>
        <p>Count = {count}</p>
        <button onClick={increment}>Click</button>
    </>
  )
}

export default Stateful