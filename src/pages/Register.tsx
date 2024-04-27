import React from 'react'
import { useForm, FieldValues } from 'react-hook-form'

import { Input } from '@/components/ui/input'

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: FieldValues) => console.log(data)

  return (
    <div className="w-[full] min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="border p-5 rounded-lg h-[600px] w-[600px]">
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('username', { required: true })}
            placeholder="Username"
          />
          {errors.username && <p>This field is required</p>}

          <Input
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            placeholder="Email"
          />
          {errors.email && <p>This field is required</p>}

          <Input
            {...register('password', { required: true })}
            placeholder="Password"
          />
          {errors.password && <p>This field is required</p>}

          <Input className="cursor-pointer w-[100px]" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Register
