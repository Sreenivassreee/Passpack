
import { Button } from './ui/button'
import { Input } from './ui/input'
import viteLogo from '/vite.svg'

export const Login = () => {
    return <div className='flex flex-col justify-center '>
        <div className='flex items-center justify-center'>
            <img className='w-28 mb-10' src={viteLogo} alt="Vite logo" />
        </div>
        <h1 className='m-4'>sreenivascse@gmail.com</h1>
        <Input className='rounded-lg m-4'  type="Password" placeholder="Passsword" />
        <Button className='m-4'>Click me</Button>

    </div>
}