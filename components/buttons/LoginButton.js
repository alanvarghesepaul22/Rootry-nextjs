import Link from 'next/link'
import React from 'react'

const LoginButton = () => {
  return (
    <>
        <Link href='/login' className='text-primary font-medium text-lg px-3 py-1 mx-3 text-center'>
           <p>LOGIN</p>
        </Link>
    </>
  )
}

export default LoginButton