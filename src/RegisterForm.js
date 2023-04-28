import { useState } from "react";
import { useNavigate } from "react-router-dom";


/** RegisterForm
 *
 * Props:
 * - registerUser() (App -> RoutesList -> RegisterForm)
 *
 * State:
 * - formData: {username, firstName, lastName, email, password}
 * - alerts: [alert1, alert2, ...]
 *
 * RoutesList -> RegisterForm
 */

function RegisterForm({ registerUser }) {
  //TODO: make global const for empty state
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  //TODO: can initialize alerts to null and then assign alerts to err
  const [alerts, setAlerts] = useState([]);
  const navigate = useNavigate();

  console.log("alert state", alerts);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fd) => ({
      ...fd,
      [name]: value,
    }));
  }

  // navigate to homepage after successful registration
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await registerUser(formData);
      navigate("/");
    } catch (err) {
      setAlerts((a) => [...a, err]);
    }
  }

  return (
    <form className="RegisterForm form" onSubmit={handleSubmit}>
      <label htmlFor="username-input">Username</label>
      <input
        className="form-control"
        id="username-input"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor="password-input">Password</label>
      <input
        className="form-control"
        id="password-input"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <label htmlFor="first-name-input">First Name</label>
      <input
        className="form-control"
        id="first-name-input"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <label htmlFor="last-name-input">Last Name</label>
      <input
        className="form-control"
        id="last-name-input"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <label htmlFor="email-input">Email</label>
      <input
        className="form-control"
        id="email-input"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      {alerts.length > 0 && (
        <div className="form-control">
          {alerts[0].map((a, idx) => (
            <div className="alert alert-danger" role="alert" key={idx}>
              {a}
            </div>
          ))}
        </div>
      )}
      <button>Submit</button>
    </form>
  );
}

export default RegisterForm;
