import React, { createContext } from 'react'

const Parent = () => {
    const contextValue = createContext('Hello from Parent Context');
    const callBack = (data) => {
        console.log("Data from Child:", data);
    }
  return (
    <>
        <DescribeContext.Provider value={contextValue}>
            <Child fromChild={callBack} />
        </DescribeContext.Provider>
    </>
  )
}

export default Parent