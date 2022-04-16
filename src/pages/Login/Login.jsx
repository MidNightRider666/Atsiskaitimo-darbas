import React from 'react'
import Button from '../../components/UI/Button/Button'
import Container from '../../components/UI/Container'

function Login() {
  return (
  <Container>
  <h2>Login</h2>
  <form >
      <input type="email" placeholder='email' />
      <input type="password" placeholder='Password' />
      <Button>Login</Button>
  </form>
</Container>
)
}

export default Login