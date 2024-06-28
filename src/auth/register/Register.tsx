import { ArrowLeft, Eye, EyeOff, Lock, Mail, User } from 'lucide-react'
import React, { ChangeEvent, useState } from 'react'
import { Helmet } from 'react-helmet'
import { HelmetProvider } from 'react-helmet-async'
import { useForm, FieldValues } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'

import SocialAuth from '@/components/SocialAuth'
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
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="w-[full] text-sm flex-col flex items-center justify-center">
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
        <div className="flex flex-col items-center gap-5 p-5 rounded-lg xs:h-[fit-content] w-[full]">
          <h2 className="text-4xl mb-5">Let's create your account!</h2>
          <form
            className="flex flex-col gap-5 items-start"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex items-center gap-3">
              <User className="w-[1rem]" />
              <Input
                className="w-[190px]"
                {...register('username', { required: true })}
                placeholder="Username"
                autoComplete="username"
              />
            </div>
            {errors.username && <p>This field is required</p>}
            <div className="flex items-center gap-3">
              <Mail className="w-[1rem]" />
              <Input
                className="w-[190px]"
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                placeholder="Email"
                autoComplete="email"
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
                    <Eye className="w-[1.2rem] rounded-full" />
                  ) : (
                    <EyeOff className="w-[1.2rem] rounded-full" />
                  )}
                </Button>
              </div>
            </div>
            {errors.password && <p>This field is required</p>}
            <Input
              className="mt-5 ml-[1.5rem] cursor-pointer w-[fit-content]"
              value="Create account"
              type="submit"
            />
            <div className="mt-10 flex flex-col w-full gap-3 items-center">
              <div className="flex w-full gap-5 flex-row items-center">
                <hr className="w-full" />
                <span className="flex flex-shrink-0">or Sign Up Using</span>
                <hr className="w-full" />
              </div>
              <SocialAuth />
            </div>
          </form>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default Register
