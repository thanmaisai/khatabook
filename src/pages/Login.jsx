import React from 'react'
import {Card, PasswordInput, Stack, TextInput, Button} from "@mantine/core";
import { Link } from 'react-router-dom';
import {useForm} from "@mantine/form";
const Login = () => {

  const registerForm = useForm({
    initialValues: {
      email:"",
      password:""
    }
  })
  return (
    <div style={{display:"flex", 
    justifyContent:"center", 
    alignItems:"center", 
    height:"80vh"}}>
       <Card
       shadow={'lg'}
       mt={'lg'}
       sx={{
        width:400
       }}
       withBorder>
        <Stack>
          <h2>Login</h2>
        </Stack>
         <form>
           <Stack mb={20}>
              <TextInput 
              label="Email"
              required
              placeholder='Enter your email'
              type="email"
              name='email'
              />
           </Stack>
           <Stack mb={20}>
              <PasswordInput 
              label="Password"
              required
              placeholder='Enter your Password'
              minLength={6}
              name='password'
              />
           </Stack>

           <Button my={20} fullWidth type='submit'>Submit</Button>

           <Link to="/register">Dont have an Acc? Register</Link>
         </form>
       </Card>
    </div>
  )
}

export default Login