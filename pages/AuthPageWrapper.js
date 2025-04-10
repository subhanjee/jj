 import AuthPage from '@/src/components/Register'
import React from 'react'

function AuthPageWrapper({onAuthSuccess}) {
  return (
    <div>
      <AuthPage onAuthSuccess={onAuthSuccess}/>
    </div>
  )
}

export default AuthPageWrapper
