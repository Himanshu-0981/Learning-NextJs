'use client'

import React from 'react'

const contact = ({children,value}) => {
  return (
    <div>
        <h1>Contact</h1>
        {value}
        {children}
    </div>
  )
}

export default contact