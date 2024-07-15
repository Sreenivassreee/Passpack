
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import viteLogo from '/vite.svg'


export type TUser = {
    user?: string,
    password?: string,
    confirmPassword?: string
}

export const SignUp = ({onSignUp}:any) => {
    const [user, setUser] = useState<TUser | undefined>()
    const [error, setError] = useState<string | undefined>()
    const SignUp=()=>{
        if(user?.password ===user?.confirmPassword){
            onSignUp(user)
            setError("")
        }else{
            setError("Password should be same!")
        }
    }
    const setUserDetails = (e: any) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    
console.log(user)

    return <div className='flex flex-col justify-center mx-4 '>
        <div className='flex items-center justify-center'>
            <img className='mb-10 w-28' src={viteLogo} alt="Vite logo" />
        </div>
        <h1 className='m-4'>Create User Name</h1>
        <Input className='my-1 rounded-lg ' name='user' value={user?.user || ''} onChange={setUserDetails} type="text" placeholder="User Name" />
        <Input className='my-1 rounded-lg ' name='password' onChange={setUserDetails} type="Password" placeholder="Passsword" />
        <Input className='my-1 rounded-lg ' name='confirmPassword' onChange={setUserDetails} type="Password" placeholder="confirm Passsword" />
        <span className='text-sm bg-red-500 '>{error}</span>
        <Button className='my-1' onClick={(e)=>SignUp()}>Signup</Button>

    </div>
}