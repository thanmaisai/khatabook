import React from 'react'
import {Card, PasswordInput, Stack, TextInput, Button} from "@mantine/core";
import { Link } from 'react-router-dom';
import {useForm} from "@mantine/form";
const Register = () => {

  const registerForm = useForm({
    initialValues: {
      name:"",
      email:"",
      password:""
    }
  })

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(registerForm.values);
  }

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
          <h2>Register</h2>
        </Stack>
         <form onSubmit={onSubmit}>
           <Stack mb={20}>
              <TextInput 
              label="Name"
              required
              placeholder='Enter your name'
              name='name'
              {...registerForm.getInputProps("name")}
              />
           </Stack>
           <Stack mb={20}>
              <TextInput 
              label="Email"
              required
              placeholder='Enter your email'
              type="email"
              name='email'
              {...registerForm.getInputProps("email")}
              />
           </Stack>
           <Stack mb={20}>
              <PasswordInput 
              label="Password"
              required
              placeholder='Enter your Password'
              minLength={6}
              name='password'
              {...registerForm.getInputProps("password")}
              />
           </Stack>

           <Button my={20} fullWidth type='submit'>Submit</Button>

           <Link to="/login">Already have an Acc? Login</Link>
         </form>
       </Card>
    </div>
  )
}

export default Register