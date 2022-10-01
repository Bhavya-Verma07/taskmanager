
import './App.css';
import Dashboard from './Component/Dashboard';
import Navbar from './Component/Navbar';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <div style={{margintop:"0px"}}><Dashboard/></div>
    </div>
  );
}

export default App;
