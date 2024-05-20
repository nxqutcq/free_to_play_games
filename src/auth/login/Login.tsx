import React, { ChangeEvent, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'

import { Input } from '@/components/ui/input'
import { useAuth } from '@/contexts/authContext'
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from '@/firebase/auth'
import { ROUTES } from '@/routes'

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const auth = useAuth()
  const userLoggedIn = auth ? auth.userLoggedIn : false
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: FieldValues) => {
    try {
      await doSignInWithEmailAndPassword(data.email, data.password)
      navigate(ROUTES.HOME)
    } catch (error) {
      console.error(error)
    }
  }

  const onGoogleSignIn = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      await doSignInWithGoogle()
      navigate(ROUTES.HOME)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="w-[full] min-h-screen bg-slate-900 flex items-center justify-center">
      {userLoggedIn && <Navigate to={ROUTES.HOME} replace={true} />}
      <h2>Welcome back</h2>
      <div className="border p-5 rounded-lg h-[600px] w-[600px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            placeholder="Email"
            autoComplete="email"
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
        Don't have an account?
        <NavLink
          className="hover:text-blue-700 transition-colors"
          to={'/register'}
        >
          <strong>Sign Up</strong>
        </NavLink>
        or
        <div onClick={onGoogleSignIn}>google</div>
      </div>
    </div>
  )
}

export default Login
