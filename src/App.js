//import logo from './logo.svg';
import './App.css';
import CreateBRS from './ui-components/CreateBRS';


//import '@aws-Amplify/ui-react/styles.css'


import NavBar from './ui-components/NavBar';
//import CreateBRS from './ui-components/CreateBRS';


function App() {

  return (
      <div>
          <NavBar width='100%'/>
          <CreateBRS/>
      </div>
     
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
