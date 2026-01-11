import React, { useContext } from 'react'

const Child = (fromChild) => {
  const dataContext = useContext(DescribeContext);

  const sendDataToParent = () => {
     
    fromChild(document.getElementById("inputField").value);
      
  }


  return (
    <>
      <p>{dataContext}</p>
      <input type="text" id='inputField' />
      <button onClick={sendDataToParent}>Send</button>
    </>
    
  );
  /*
    or:
    <DescribeContext.Consumer>
      (contextValue) => (
        <p>{contextValue}</p>
      )
    </DescribeContext.Consumer>
    <
  */
  /*
    PROPS STRUCTURE:
    return (
    <>
      
      {props.map((item, index) => {// Iterating over the props array using map
        const Tag = item.tag;
        const { tag, ...rest } = item; // Destructure to separate 'tag' from other properties
        return <Tag key={index} {...rest}>{item.content}</Tag>;
      })}
    </>
  )*/
}

export default Child