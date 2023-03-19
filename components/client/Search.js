'use client'

import React,{useState} from 'react'

const Search = () => {
  const [query,setQuery] = useState("")
  return (
    <>
      <input 
      placeholder='search'
      value={query}
      onChange={(e)=>setQuery(e.target.value)}
      />
    </>
  )
}

export default Search