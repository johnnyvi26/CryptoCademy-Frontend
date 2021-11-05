import { useState } from "react"
import { Link } from "react-router-dom"


const LoginForm = (props) => {

  const [ newLogin, setNewLogin ] = useState({
    username: "",
    password: ""
  });

  const handleChange = (event) => {
    setNewLogin({...newLogin, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createLogin(newLogin);
    setNewLogin({
      username: "",
      password: ""
    })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newLogin.username}
          name="username"
          placeholder="login username"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newLogin.password}
          name="password"
          placeholder="login password"
          onChange={handleChange}
        />
        <input type="submit" value="Login"/>
      </form>
      <Link to={`/CreateAccount`}>Create Account</Link>
    </div>
  )
}

export default LoginForm;