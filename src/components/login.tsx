
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import viteLogo from '/vite.svg'

export const Login = ({ userName, getPassword }: any) => {
    const [passsword, setPassword] = useState<string | undefined>()
    return <div className='flex flex-col justify-center '>
        <div className='flex items-center justify-center'>
            <img className='mb-10 w-28' src={viteLogo} alt="Vite logo" />
        </div>
        <h1 className='m-4'>{userName}</h1>
        <Input value={passsword} onChange={(e) => setPassword(e.target.value)} className='m-4 rounded-lg' type="Password" placeholder="Passsword" />
        <Button className='m-4' onClick={()=>getPassword(passsword)}>Unlock</Button>
    </div>
}