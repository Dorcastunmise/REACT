import React from 'react'

export const HocSample = (HocUse) => {
  return DisplayContent = () => {
    console.log("This is HOC Sample Component")
    return (
      <div>
        <h2>This is HOC Sample Component</h2>
        <HocUse />
      </div>
    )
  }
}
