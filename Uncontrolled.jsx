import React, { useRef } from 'react'

const Uncontrolled = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        const value = inputRef.current.value;
        alert(value);
    }
  return (
    <>
        <input type="text" ref={inputRef} placeholder='Type...'/>
        <button onClick={handleClick}>Submit</button>
    </>
  )
}

export default Uncontrolled