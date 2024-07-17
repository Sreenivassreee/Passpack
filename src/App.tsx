
import './App.css'
import { Login } from './components/login'

import { useContext, useEffect, useState } from 'react';
import { SignUp, TUser } from './components/SignUp';
import { createFirebaseDetails, getFirebaseDetails } from './lib/firebase';
import { decription } from './lib/web3';
import { useNavigate } from 'react-router-dom';
import { MyContext } from './lib/context/MyContext';


function App() {
  const [user, setUser] = useState<undefined | string | null>(localStorage.getItem('user'))
  const [password, setPassword] = useState<string | undefined>()
  const [serverUser, setServerUser] = useState<any>()
  const navigate = useNavigate();
  const { setText } = useContext(MyContext)

  console.log(password, serverUser)
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
    } else {
      setUser(undefined)
    }

  }
  const decriptText = async ({ user }: { user: string }) => {
    console.log(user)
    console.log(serverUser)
    const res = decription()
    console.log(res)
    setText(JSON.stringify(res))
    navigate(`/${user}`);

    // const newWindow:any = window.open(`http://localhost:5173/${user}`, '_blank', 'noopener,noreferrer')

    // if (newWindow) newWindow.opener = null

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
      localStorage.setItem('user', user.user)

      setUser(null)
    }
  }
  if (!user) {
    return <SignUp onSignUp={onSignUp} />
  }
  return <Login userName={user} getPassword={(e: string) => {
    setPassword(e)
    decriptText({ user })
  }} />

}

export default App

