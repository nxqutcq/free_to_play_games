import React, { ChangeEvent, useState } from 'react'
import { useForm, FieldValues } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'

import { Input } from '@/components/ui/input'
import { useAuth } from '@/contexts/authContext'
import {
  doCreateUserWithEmailAndPassword,
  doSendEmailVerification,
} from '@/firebase/auth'
import { ROUTES } from '@/routes'

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')

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
      console.error(error)
    }
  }

  return (
    <div className="w-[full] min-h-screen bg-slate-900 flex items-center justify-center">
      {userLoggedIn && <Navigate to={ROUTES.HOME} replace={true} />}
      <div className="border p-5 rounded-lg h-[600px] w-[600px]">
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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

          <Input
            {...register('password', { required: true })}
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handleChangePassword}
            placeholder="Password"
            autoComplete="current-password"
          />
          <button onClick={handleTogglePassword}>
            {showPassword ? 'Hide Password' : 'Show Password'}
          </button>
          {errors.password && <p>This field is required</p>}
          <Input className="cursor-pointer w-[100px]" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Register
