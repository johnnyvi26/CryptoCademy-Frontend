import { useState } from "react"

function CreateAccount(props) {

  const [ newForm, setNewForm ] = useState({
    username: "",
    password: ""
  });

  const handleChange = (event) => {
    setNewForm({...newForm, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createAccount(newForm);
    setNewForm({
      username: "",
      password: ""
    })
  }


  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.username}
          name="username"
          placeholder="create username"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.password}
          name="password"
          placeholder="create password"
          onChange={handleChange}
        />
        <input type="submit" value="Create User"/>
      </form>
    </section>
  )
}

export default CreateAccount;