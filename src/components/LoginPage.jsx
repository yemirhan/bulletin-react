import React from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { onChangeEmail, onChangePassword } from '../redux/login.reducer'
import { useNavigate } from 'react-router-dom'

const useLogin = () => {
    const navigate = useNavigate()
    return (
        useMutation({
            queryKey: 'login',
            mutationFn: async ({ email, password }) => {
                const { data } = await axios.post('http://localhost:5200/api/v1/auth/login', { email, password },

                    // {
                    //     headers: {
                    //         "Authorization": "Bearer " + localStorage.getItem('token')
                    //     }
                    // }
                )
                localStorage.setItem('token', data.accessToken)
                return data
            },
            onSuccess: () => {
                navigate('/todos')
            },
            onError: (error) => {
                if(error.status == 401) {
                    localStorage.removeItem('token')
                }
                location.reload()
            }
        })
    )
}

const useRegister = () => {
    return (
        useMutation({
            queryKey: 'register',
            mutationFn: async ({ email, password }) => {
                const { data } = await axios.post('http://localhost:5200/api/v1/auth/register', { email, password })
                localStorage.setItem('token', data.accessToken)
                return data
            }
        })
    )
}

export const LoginPage = () => {
    const { mutate, isLoading, isError, isSuccess, error } = useLogin()
    const { mutate: mutateRegister, isLoading: isLoadingRegister, isError: isErrorRegister, isSuccess: isSuccessRegister, error: errorRegister } = useRegister()
    const dispatch = useDispatch()
    const { email, password } = useSelector(state => state.login)

    return (

        <div className='flex flex-col items-center justify-center z-20 '>
            <div className='w-1/2 flex flex-col shadow-xl rounded-xl'>
                <input onChange={(e) => dispatch(onChangeEmail(e.target.value))} type="email" className='w-full' value={email} />
                <input onChange={(e) => dispatch(onChangePassword(e.target.value))} type="password" className='w-full' value={password} />
                <button onClick={() => mutate({ email, password })} className='w-full'>Login</button>
                <button onClick={() => mutateRegister({ email, password })} className='w-full'>Register</button>
            </div>

        </div>

    )
}
