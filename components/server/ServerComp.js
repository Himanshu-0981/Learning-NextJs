// WE should avoid using server side component in client component
// instead of using SSC in CSC we can make a separate file and take that data as children
// Shown in contact page

import React from 'react'

const ServerComp = () => {
  return (
    <div>ServerComp</div>
  )
}

export default ServerComp