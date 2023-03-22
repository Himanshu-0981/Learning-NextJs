import React from 'react'
import Link from 'next/link'
import './styles/globals.css'
import { getAllUsersData } from './utils/features'

const page = async () => {
  const users = await getAllUsersData()
  return (
    <>
      {
        users.map((user, index) => {
          return (
            <>
              <Link key={index} href={`/users/${user.id}`} className='link'>
                {user.name}
              </Link>
            </>
          )
        })
      }
    </>
  )
}

export default page