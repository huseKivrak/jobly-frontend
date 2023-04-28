import { useState } from "react";
import { useNavigate } from "react-router-dom";

/** LoginForm
 *
 * Form for user to enter username and password
 *
 * Props:
 * - loginUser() (App -> RoutesList -> LoginForm)
 *
 * State:
 * - formData: {username, password}
 * - alert: "alert message"
 *
 * RoutesList -> LoginForm
 */

function LoginForm({ loginUser }) {
  const [formData, setFormData] = useState({
    username: "testuser",
    password: "password",
  });
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();
  console.log("LoginForm ran");

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fd) => ({
      ...fd,
      [name]: value,
    }));
  }

  // navigate to HomePage on successful login
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await loginUser(formData);
      navigate("/");
    } catch (err) {
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
        type="password"
        required
      />
      {alert && (
        <div className="alert alert-danger" role="alert">
          {alert}
        </div>
      )}
      <button>Submit</button>
    </form>
  );
}

export default LoginForm;
