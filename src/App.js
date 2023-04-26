
import './App.css';
import RoutesList from './RoutesList';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';

/** App
 * Renders Nav and RoutesList
 *
 *
 * Props:
 * - none
 *
 * States:
 * - none
 *
 * App -> [Nav, RoutesList]
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
