import { authOptions } from '../../api/auth/[...nextauth]/route'
import GoogleButton from '../../components/login-components/googlebutton'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const Loginpage = async () => {
  const session = await getServerSession(authOptions)
  if (session) {
    return redirect('/dash')
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <GoogleButton />
    </div>
  )
}

export default Loginpage;
