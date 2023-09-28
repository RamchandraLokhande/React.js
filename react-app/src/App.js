import logo from './logo.svg';
import './App.css';


import HelloComponent from './Component/classComp';
import FunctionalComp from './Component/componentDetails/functionComp'

function App() {
  return (
    <div className="App">
      {/* <HelloComponent/> */}
      <FunctionalComp/>
    </div>
  );
}

export default App;
