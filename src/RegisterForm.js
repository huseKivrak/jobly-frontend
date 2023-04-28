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
  const [alert, setAlert] = useState([]);

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
      registerUser(formData);
    } catch (err) {
      setAlert(err);
    }
  }

  return (
    <form className="RegisterForm" onSubmit={handleSubmit}>
      <label htmlFor="username-input">Username</label>
      <input
        id="username-input"
        name="username"
        value={formData.username}
        onChange={handleChange}
        disabled
      />
      <label htmlFor="password-input">Email</label>
      <input
        id="password-input"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <label htmlFor="first-name-input">First Name</label>
      <input
        id="first-name-input"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <label htmlFor="last-name-input">Last Name</label>
      <input
        id="last-name-input"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <label htmlFor="email-input">Email</label>
      <input
        id="first-name-input"
        name="firstName"
        value={formData.email}
        onChange={handleChange}
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

export default RegisterForm;
