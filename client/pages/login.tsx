import Head from 'next/head'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import InputGroup from '../components/InputGroup'
import Axios from "axios";
import { useAuthDispatch, useAuthState } from '../context/auth'


export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<any>({})
    const [email, setEmail] = useState("")

    const dispatch = useAuthDispatch()
    const { authenticated } = useAuthState()

    const router = useRouter()
    if (authenticated) router.push('/')
    const submitForm = async (event: FormEvent) => {
        event.preventDefault()

        try {
            const res = await Axios.post('/auth/login', {
                username,
                password,
            })

            dispatch('LOGIN', res.data)

            router.push('/')
        } catch (err) {
            setErrors(err.response.data)
        }
    }

    return (
        <div className="flex">
            <Head>
                <title>Register</title>
            </Head>

            <div
                className="h-screen bg-center bg-cover w-36"
                style={{ backgroundImage: "url('/assets/bricks.jpg')" }}
            ></div>
            <div className="flex flex-col justify-center pl-6">
                <div className="w-70">
                    <h1 className="mb-2 text-lg font-medium">Sign Up</h1>
                    <p className="mb-10 text-xs">
                        By continuing, you agree to our User Agreement and Privacy Policy
                    </p>
                    <form onSubmit={submitForm}>

                        <InputGroup
                            className="mb-2"
                            type="email"
                            value={email}
                            setValue={setEmail}
                            placeholder="EMAIL"
                            error={errors.email}
                        />
                        <InputGroup
                            className="mb-4"
                            type="password"
                            value={password}
                            setValue={setPassword}
                            placeholder="PASSWORD"
                            error={errors.password}
                        />

                        <button className="w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 border border-blue-500 rounded">
                            Log In
                        </button>
                    </form>
                    <small>
                        Not a deeder?
                        <Link href="/signup">
                            <span className="ml-1 text-blue-500 uppercase">Sign Up</span>
                        </Link>
                    </small>
                </div>
            </div>
        </div>
    )
}