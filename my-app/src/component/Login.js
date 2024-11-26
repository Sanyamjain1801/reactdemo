import React, { useState } from 'react'

const Login = () => {
    
        const [credentials,setCredentials] = useState({email: "",password: ""})
        const handleSubmit = async (e)=>{
            e.preventDefault();
            const response = await fetch("https://localhost:3000/api/auth/login",{
                method:'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({email:credentials.email,password:credentials.password})
                
            });
            const json = await response.json()
            console.log(json);
        }
        const onChange=(e)=>{
            setCredentials({...credentials, [e.target.name]:e.target.value})
        }
        

    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label htmlFor="email" class="form-label">Email address</label>
                <input type="email" class="form-control" value={credentials.email} onChange={onChange} name="email"  id="email" aria-describedby="emailHelp"/>
    
            </div>
            <div class="mb-3">
                <label htmlFor="password" class="form-label">Password</label>
                <input type="password" class="form-control" value={credentials.password} onChange={onChange} name="password" id="password"/>
            </div>
  
            <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
    </div>
  )
}

export default Login
