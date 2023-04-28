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
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: ""
  });
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
          if(userToken) {
          let currUser = await JoblyApi.getUserData(user.username);
          console.log("App user:", currUser);
          setUser(currUser);
          }
          else {
            setUser({});
          }
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
   * Delete token
   */
  function logoutUser() {
    setUserToken("");
   }

  return (
    <div className="App">
      <userContext.Provider value={{
        username: user.username,
        firstName: user.firstName
      }}>
        <BrowserRouter>
          <Nav logoutUser={logoutUser}/>
          <RoutesList user={user} loginUser={loginUser}/>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
