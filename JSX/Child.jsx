import React from 'react'

const Child = (props) => {
  return (
    <>
      
      {props.map((item, index) => {// Iterating over the props array using map
        const Tag = item.tag;
        const { tag, ...rest } = item; // Destructure to separate 'tag' from other properties
        return <Tag key={index} {...rest}>{item.content}</Tag>;
      })}
    </>
  )
}

export default Child