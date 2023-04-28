import "./App.css";
import RoutesList from "./RoutesList";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import JoblyApi from "./api";
import LoginForm from "./LoginForm";
import userContext from "./userContext";


/** App
 * Renders Nav and RoutesList
 *
 *
 * Props:
 * - none
 *
 * States:
 * - user: {username, firstName, lastName, email}
 * - userToken: string from JoblyApi
 *
 * App -> [Nav, RoutesList]
 */
function App() {
  const [user, setUser] = useState({});
  const [userToken, setUserToken] = useState("");

  console.log("APP", user, userToken);

  /** loginUser
   *
   * Authenticate username/password and set token and username in state
   */
  async function loginUser({ username, password }) {
    let token = await JoblyApi.getAuthToken({ username, password });
    console.log("token:", token);
    setUserToken(token);
    JoblyApi.token = token;
    setUser({ username });
  }

  /**initializeUserOnTokenChange
   *
   * On mount, get user data from API and set in user state
   */
  useEffect(
    function initializeUserOnTokenChange() {
      async function getAndSetUser() {
        try {
          let currUser = await JoblyApi.getUserData(user.username);
          console.log("App user:", currUser);
          setUser(currUser);
        } catch (err) {
          setUser({});
        }
      }
      getAndSetUser();
    },
    [userToken]
  );

  /** editProfile
   *
   *
   */
  async function editProfile({ editFormData }) { }

  /** registerUser
   *
   */
  async function registerUser({ registerFormData }) { }

  /**logoutUser
   *
   */
  function logoutUser() { }

  return (
    <div className="App">
      <userContext.Provider value={{
        username: user.username,
        firstName: user.firstName
      }}>
        <BrowserRouter>
          <Nav />
          <RoutesList user={user} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
