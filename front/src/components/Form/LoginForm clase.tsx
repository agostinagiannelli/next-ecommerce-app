"use client"

import { useState, useEffect } from 'react'

const LoginForm = () => {
  const [user, setUser] = useState(
    {
      email: '',
      password: ''
    }
  )
  const [error, setError] = useState()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Successful login:", user)
  }

  useEffect(() => {
    const errors: any = []
    setError(errors)
  }, [user])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email"></label>
          <input
            id="email"
            name="email"
            type="email"
            value={user.email}
            required
            onChange={handleChange}
            placeholder="example@mail.com"
          />
          <input
            id="password"
            name="password"
            type="password"
            value={user.password}
            required
            onChange={handleChange}
            placeholder="********"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm