
import './App.css'
import { Login } from './components/login'

import { useEffect, useState } from 'react';
import { SignUp, TUser } from './components/SignUp';
import { createFirebaseDetails, getFirebaseDetails } from './lib/utils';

function App() {


  const [user, setUser] = useState<undefined | string | null>(localStorage.getItem('user'))
  const [passsword, setPassword] = useState<string | undefined>()
  const [serverUser, setServerUser] = useState<any>()

  useEffect(() => {
    if (user) {
      getDetails({ user })
    }
  }, [])
  const getDetails = async ({ user }: { user: string }) => {
    if (!user) {
      setUser(undefined)
    }
    const newData = await getFirebaseDetails({ user })
    if (newData) {
      setServerUser(newData)
      alert("NEW PAGE")
    } else {
      setUser(undefined)
    }

  }
  const onSignUp = async (user: TUser) => {
    console.log("user", user)
    if (!user.user) {
      return
    }
    const newData = await createFirebaseDetails({ user: user.user })
    if (newData) {
      setUser(user.user)
      const newWindow = window.open(`http://localhost:5173/${user.user}`, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
  }
  if (!user) {
    return <SignUp onSignUp={onSignUp} />
  }
  return <Login userName={user} getPassword={(e: any) => {
    setPassword(e)
    getDetails({ user })
  }} />

}

export default App
