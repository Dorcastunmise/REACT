import React from 'react'
import { HocSample } from './HocSample'

const HocUse = () => {
  return (
    <div>HocUse</div>
  )
}

//If we export like this, then we can use the HocSample component with the functionality of HocUse component wrapped inside it.
export default HocSample(HocUse) 