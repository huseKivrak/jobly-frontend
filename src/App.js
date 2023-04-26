
import './App.css';
import RoutesList from './RoutesList';
import Nav from './Nav';
import JobCard from "./JobCard";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter> */}
      <JobCard title="teacher" company="school" salary="100000" equity="0.5"/>
    </div>
  );
}

export default App;
