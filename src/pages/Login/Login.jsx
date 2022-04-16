import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Button from '../../components/UI/Button/Button'
import Container from '../../components/UI/Container'
import { postFecth } from '../../helper/postFecth';
import css from './Login.module.scss'

const initErrors = {
  password: '',
  email: '',
}

function Login() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [isError, setisError] = useState(false)
  const [errorObj, seterrorObj] = useState(initErrors)
   
useEffect(() => {
  const isErrorsEmpty = Object.values(errorObj).every((el) => el === '');
  console.log('isErrorsEmpty===', isErrorsEmpty);
  if(!isErrorsEmpty) {
    setisError(true);
  }
}, [userEmail, userPassword, errorObj])

  async function submitHandler(e) {
    setisError(false);
    seterrorObj(initErrors)
    e.preventDefault();

    if(userEmail.trim() === '') {
      seterrorObj(prevState => ({...prevState, userEmail: "Email can't be blank"}))
    }
    if(userPassword.trim() === '') {
      seterrorObj(prevState => ({...prevState, userPassword: "Password can't be blank"}))
    }
    const newLoginUser ={
      email: userEmail,
      password: userPassword,
    };
   const sendResult = await postFecth ('auth/login', newLoginUser)
   console.log('sendResult===', sendResult);
   if(sendResult.err) {
     setisError(true)
   }
   else {
     history.push('/Home')
   }
  }

        return (
  <Container>
  <h2>Login</h2>
  <form onSubmit={submitHandler} className={css.form}>
          {isError && <h3 className={css.err}>Check The Form</h3>}
      <input onChange={(e) => setUserEmail(e.target.value)} value={userEmail} className={`${css.input} ${errorObj.userEmail ? css.errBg: ''}`} type="email" placeholder='email' />
      {errorObj.userEmail && <p>{errorObj.userEmail}</p>}
      <input onChange={(e) => setUserPassword(e.target.value)} value={userPassword} className={`${css.input} ${errorObj.userPassword ? css.errBg: ''}`} type="password" placeholder='password' />
      {errorObj.userPassword && <p>{errorObj.userPassword}</p>}
      <Button>Login</Button>
  </form>
</Container>

  )
}

export default Login