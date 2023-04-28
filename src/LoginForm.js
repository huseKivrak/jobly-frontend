import { useState } from "react";

/** LoginForm
 *
 * Form for user to enter username and password
 *
 * Props:
 * - loginUser()
 *
 * State:
 * - formData: {username, password}
 * - alert: "alert message"
 *
 * RoutesList -> LoginForm
 */


function LoginForm({ loginUser }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [alert, setAlert] = useState("");

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({
      ...fd,
      [name]: value
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try{
      await loginUser(formData);
    }catch(err){
      setAlert(err);
    }

  }


  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <label htmlFor="username-input">Username</label>
      <input
        id="username-input"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <label htmlFor="password-input">Password</label>
      <input
        id="password-input"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      {alert && <div class="alert alert-danger" role="alert">
        {alert}
      </div>}
      <button>Submit</button>
    </form>
  );
}


export default LoginForm;