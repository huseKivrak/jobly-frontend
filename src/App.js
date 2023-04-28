import "./App.css";
import RoutesList from "./RoutesList";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import JoblyApi from "./api";
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

  const blankUser = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
  };

  const [user, setUser] = useState(blankUser);
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
          // if token present, load user data into user state
          if (userToken) {
            let currUser = await JoblyApi.getUserData(user.username);
            console.log("App user:", currUser);
            setUser(currUser);

            // if no token in state, clear user state
          } else {
            setUser(blankUser);
          }

          // if getUserData fails (e.g. username not in db)
        } catch (err) {
          setUser(blankUser);
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
   * Called by RegisterForm
   *
   * Call API to register user with formData, set token in state and JoblyApi,
   * then set username in state
   */
  async function registerUser(formData) {
    let token = await JoblyApi.registerAndGetToken(formData);
    setUserToken(token);
    JoblyApi.token = token;
    setUser((u) => ({
      ...u,
      username: formData.username,
    }));
  }

  /**logoutUser
   * Delete token
   */
  function logoutUser() {
    setUserToken("");
    JoblyApi.token = "";
  }

  return (
    <div className="App">
      <userContext.Provider
        value={{
          username: user.username,
          firstName: user.firstName,
        }}
      >
        <BrowserRouter>
          <Nav logoutUser={logoutUser} />
          <RoutesList
            user={user}
            loginUser={loginUser}
            registerUser={registerUser}
            editProfile={editProfile}
          />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
