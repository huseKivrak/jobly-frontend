import { useState } from "react";

/** RegisterForm
 *
 * Props:
 * - registerUser
 *
 *
 *
 */
function RegisterForm({ registerUser }) {
  const [formData, setFormData] = useState({});
  const [alerts, setAlerts] = useState([]);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fd) => ({
      ...fd,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    try {
      console.log("formData:", formData);
      registerUser(formData);
    } catch (err) {
      console.log("err:", err);
      setAlerts((a) => [...a, err]);
      console.log("alerts", alerts);
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
      {alerts.length > 0 &&
        alerts.map((a, idx) => (
          <div key={idx} className="alert alert-danger" role="alert">
            {a}
          </div>
        ))}

      <button>Submit</button>
    </form>
  );
}

export default RegisterForm;
