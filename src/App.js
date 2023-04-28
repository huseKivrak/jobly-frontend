import "./App.css";
import RoutesList from "./RoutesList";
import Nav from "./Nav";
import { useState } from "react";
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

  /** loginUser
   *
   *
   */
  async function loginUser({ username, password }) {
    let token = await JoblyApi.getAuthToken({ username, password });
    console.log("token:", token);
    setUserToken(token);

    JoblyApi.token = userToken;
    let user = await JoblyApi.getUserData(username);
    console.log("App user:", user);
    setUser(user);
  }

  /**initializeUserOnTokenChange
   *
   */
  useEffect(
    function initializeUserOnTokenChange() {
      async function getAndSetUser() {
        realToken = await getToken;
      }
      getAndSetUser();
    },
    [userToken]
  );

  /** editProfile
   *
   *
   */
  async function editProfile({ editFormData }) {}

  /** registerUser
   *
   */
  async function registerUser({ registerFormData }) {}

  /**logoutUser
   *
   */
  function logoutUser() {}

  return (
    <div className="App">
      <userContext.Provider value={{ user }}>
        <BrowserRouter>
          <Nav />
          <RoutesList user={user} />
          <LoginForm loginUser={loginUser} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
