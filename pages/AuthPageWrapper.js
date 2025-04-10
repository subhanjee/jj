 import AuthPage from '@/src/components/register'
import React from 'react'

function AuthPageWrapper({onAuthSuccess}) {
  return (
    <div>
      <AuthPage onAuthSuccess={onAuthSuccess}/>
    </div>
  )
}

export default AuthPageWrapper
