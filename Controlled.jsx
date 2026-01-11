import React from 'react'

const Controlled = () => {
    const [inputValue, setInputValue] = React.useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    
    const Clear = (e) => {
        e.preventDefault();
        setInputValue('');
    }
  return (
    <>
        
        <input type='text' value={inputValue} 
            onChange={handleInputChange} 
            placeholder='Type ...'/>
        <span>{inputValue}</span>

        <br></br>
        <button type='submit' onClick={Clear}>Submit</button>
    
    </>
  )
}

export default Controlled