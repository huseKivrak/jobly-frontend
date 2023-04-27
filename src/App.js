
import './App.css';
import RoutesList from './RoutesList';
import Nav from './Nav';
import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import JoblyApi from "./api";
import LoginForm from './LoginForm';

/** App
 * Renders Nav and RoutesList
 *
 *
 * Props:
 * - none
 *
 * States:
 * - user: {username, first_name, last_name, email}
 * - userToken:
 *
 * App -> [Nav, RoutesList]
 */
function App() {
  const [user, setUser] = useState({});
  const [userToken, setUserToken] = useState("");


  async function loginUser({ username, password }) {
    const token = await JoblyApi.getAuthToken({ username, password });
    setUserToken(token);
    console.log("App token:", token);
    const user = await JoblyApi.getUserData(username);
    console.log("App user:", user);
    setUser(user);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <LoginForm loginUser={loginUser}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
