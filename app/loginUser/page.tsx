import React from 'react'
import { z } from 'zod';


const schema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(5, 'Password must be at least 5 characters long'),
});

const LoginUserPage = () => {
  return (
    <h1>Welcome to the LoginPage</h1>
  )
}

export default LoginUserPage