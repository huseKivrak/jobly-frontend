
import './App.css';
import RoutesList from './RoutesList';
import Nav from './Nav';

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
