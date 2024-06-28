import { ArrowLeft, Eye, EyeOff, Lock, Mail, Rocket } from 'lucide-react'
import React, { ChangeEvent, useState } from 'react'
import { Helmet } from 'react-helmet'
import { HelmetProvider } from 'react-helmet-async'
import { FieldValues, useForm } from 'react-hook-form'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'

import SocialAuth from '@/components/SocialAuth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { useAuth } from '@/contexts/authContext'
import { doSignInWithEmailAndPassword } from '@/firebase/auth'
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
        description: '✔️ You have successfully logged in!',
      })
    } catch (error) {
      toast({
        description: `❌ ${String(error)}`,
        variant: 'destructive',
      })
    }
  }

  return (
    <HelmetProvider>
      <div className="w-[full] text-sm flex-col flex items-center justify-center">
        <Helmet>
          <title>Login</title>
        </Helmet>
        {userLoggedIn && <Navigate to={ROUTES.HOME} replace={true} />}
        <div className="w-full mt-5">
          <div
            onClick={() => navigate(ROUTES.HOME)}
            className="border h-[2.7rem] w-[fit-content] rounded-lg cursor-pointer flex p-2 gap-2 items-center"
          >
            <ArrowLeft className="xs:h-[1.3rem]" strokeWidth={1.7} />
            <span className="pr-[0.8rem]">Home</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 p-5 xs1:w-[375px]  rounded-lg xs:h-[fit-content]">
          <h2 className="text-4xl my-5">Welcome back!</h2>
          <form
            className="gap-5 items-start flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex items-center gap-3">
              <Mail className="w-[1rem]" />
              <Input
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                placeholder="Email"
                autoComplete="email"
                className="w-[190px]"
              />
            </div>
            {errors.email && <p>This field is required</p>}
            <div className="flex gap-3">
              <div className="flex items-center gap-3">
                <Lock className="w-[1.5rem]" />
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
                  {showPassword ? (
                    <Eye className="w-[1.2rem]" />
                  ) : (
                    <EyeOff className="w-[1.2rem]" />
                  )}
                </Button>
              </div>
            </div>
            {errors.password && <p>This field is required</p>}
            <div className="border flex mt-5 ml-[1.5rem] items-center w-[fit-content] rounded-lg px-4">
              <Rocket className="w-[1rem]" />
              <Input
                className="border-none cursor-pointer w-[fit-content]"
                value="Login"
                type="submit"
              ></Input>
            </div>
          </form>

          <div className="mt-10 flex flex-col w-full gap-3 items-center">
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
              <span className="flex flex-shrink-0">or Sign In Using</span>
              <hr className="w-full" />
            </div>
            <SocialAuth />
          </div>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default Login
