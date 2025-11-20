import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { schema } from '../../utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { Schema } from 'yup'
import { useMutation } from '@tanstack/react-query'
import { isAxiosUnprocessableEntityError } from '../../utils/utils'
import { ResponseApi } from '../../types/utils.type'
import Input from '../../components/Input'
import { login } from '../../apis/auth.api'

type FormData = Schema
const loginSchema = schema.omit(['confirm_password'])

export const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => login(body)
  })

  const onSubmit = handleSubmit(
    (data) => {
      loginMutation.mutate(data, {
        onSuccess(data) {
          console.log(data)
        },
        onError: (error) => {
          if (isAxiosUnprocessableEntityError<ResponseApi<FormData>>(error)) {
            const formError = error.response?.data.data
            if (formError) {
              Object.keys(formError).forEach((key) => {
                setError(key as keyof FormData, {
                  message: formError[key as keyof FormData],
                  type: 'Server'
                })
              })
            }
          }
        }
      })
    },
    (data) => {
      // const password = getValues('password')
      console.log(data)
    }
  )

  return (
    <div className='bg-[#47bdf0]'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng nhập</div>
              <Input
                name='email'
                register={register}
                type='email'
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email'
              />
              <Input
                name='password'
                register={register}
                type='password'
                className='mt-2'
                errorMessage={errors.password?.message}
                placeholder='Password'
                autoComplete='on'
              />
              <div className='mt-3'>
                <button
                  type='submit'
                  className='w-full text-center py-4 px-2 rounded-md uppercase bg-cyan-500 text-white text-sm hover:bg-cyan-600'
                >
                  Đăng nhập
                </button>
              </div>
              <div className='flex items-center justify-center mt-8'>
                <span className='text-gray-400'>Bạn đã chưa tài khoản?</span>
                <Link to='/register' className='ml-1 text-cyan-600'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
