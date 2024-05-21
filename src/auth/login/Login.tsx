import React, { ChangeEvent, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'

import { GithubIcon } from '@/components/icons'
import AppleIcon from '@/components/icons/AppleIcon'
import EyeCloseIcon from '@/components/icons/EyeCloseIcon'
import EyeOpenIcon from '@/components/icons/EyeOpenIcon'
import GoogleIcon from '@/components/icons/GoogleIcon'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { useAuth } from '@/contexts/authContext'
import {
  doSignInWithApple,
  doSignInWithEmailAndPassword,
  doSignInWithGitHub,
  doSignInWithGoogle,
} from '@/firebase/auth'
import { ROUTES } from '@/routes'

const Login: React.FC = () => {
  const { toast } = useToast()
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
      toast({
        description: 'You have successfully logged in!',
      })
    } catch (error) {
      toast({
        description: String(error),
        variant: 'destructive',
      })
    }
  }

  const onGoogleSignIn = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      await doSignInWithGoogle()
      navigate(ROUTES.HOME)
      toast({
        description: 'You have successfully logged in!',
      })
    } catch (error) {
      toast({
        description: String(error),
        variant: 'destructive',
      })
    }
  }

  const onAppleSignIn = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      await doSignInWithApple()
      navigate(ROUTES.HOME)
      toast({
        description: 'You have successfully logged in!',
      })
    } catch (error) {
      toast({
        description: String(error),
        variant: 'destructive',
      })
    }
  }
  const onGitHubSignIn = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      await doSignInWithGitHub()
      navigate(ROUTES.HOME)
      toast({
        description: 'You have successfully logged in!',
      })
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
      <div className="flex flex-col items-center gap-5 rounded-lg h-[600px] w-[600px]">
        <h2 className="text-4xl">Welcome back!</h2>
        <form className="gap-5 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            placeholder="Email"
            autoComplete="email"
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
            value="Login"
            type="submit"
          />
        </form>

        <div className="flex flex-col w-full gap-3 items-center">
          <div>
            Don't have an account?
            <NavLink
              className="text-gray-700 hover:text-gray-300 transition-colors"
              to={'/register'}
            >
              <strong> Sign Up</strong>
            </NavLink>
          </div>
          <div className="flex w-full gap-5 flex-row items-center">
            <hr className="w-full" />
            <span className="flex flex-shrink-0">or Sign Up Using</span>
            <hr className="w-full" />
          </div>
          <div className="flex gap-3 flex-row">
            <div
              className="w-10 h-10 cursor-pointer hover:bg-accent transition-colors rounded-full p-2"
              onClick={onGoogleSignIn}
            >
              <GoogleIcon />
            </div>
            <div
              onClick={onAppleSignIn}
              className="w-10 h-10 cursor-pointer hover:bg-accent transition-colors rounded-full p-2"
            >
              <AppleIcon className="apple-icon" />
            </div>
            <div
              onClick={onGitHubSignIn}
              className="w-10 h-10 cursor-pointer hover:bg-accent transition-colors rounded-full p-2"
            >
              <GithubIcon className={'github'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
