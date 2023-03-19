import React from 'react'
import Contact from './contact'
import ServerComp from '@/components/server/ServerComp'

const Page = () => {
  return (
    <>
      <Contact value={'hello'}>
        <ServerComp />
      </Contact>
    </>
  )
}

export default Page