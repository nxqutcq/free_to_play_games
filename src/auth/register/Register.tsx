import React, { ChangeEvent, useState } from 'react'
import { useForm, FieldValues } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'

import EyeCloseIcon from '@/components/icons/EyeCloseIcon'
import EyeOpenIcon from '@/components/icons/EyeOpenIcon'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { useAuth } from '@/contexts/authContext'
import {
  doCreateUserWithEmailAndPassword,
  doSendEmailVerification,
} from '@/firebase/auth'
import { ROUTES } from '@/routes'

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const { toast } = useToast()

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const navigate = useNavigate()
  const auth = useAuth()
  const userLoggedIn = auth?.userLoggedIn || false

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: FieldValues) => {
    try {
      await doCreateUserWithEmailAndPassword(data.email, data.password)
      await doSendEmailVerification()
      navigate(ROUTES.HOME)
    } catch (error) {
      toast({
        description: String(error),
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="w-[full] min-h-screen flex items-center justify-center">
      {userLoggedIn && <Navigate to={ROUTES.HOME} replace={true} />}
      <div className="flex flex-col items-center gap-5 p-5 rounded-lg h-[600px] w-[600px]">
        <h2 className="text-4xl">Let's create your account!</h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('username', { required: true })}
            placeholder="Username"
            autoComplete="username"
          />
          {errors.username && <p>This field is required</p>}

          <Input
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            placeholder="Email"
          />
          {errors.email && <p>This field is required</p>}
          <div className="flex gap-3">
            <Input
              {...register('password', { required: true })}
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handleChangePassword}
              placeholder="Password"
              autoComplete="current-password"
            />
            <Button
              type="button"
              className="rounded-full"
              onClick={handleTogglePassword}
            >
              {showPassword ? <EyeCloseIcon /> : <EyeOpenIcon />}
            </Button>
          </div>
          {errors.password && <p>This field is required</p>}
          <Input
            className="cursor-pointer w-[fit-content]"
            value="Create account"
            type="submit"
          />
        </form>
      </div>
    </div>
  )
}

export default Register
