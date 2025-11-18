import logo from './logo.svg';
import github from './assert/images/github.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div> Learn React with GitHub Pages Deployment</div>
        <div className='image-group'>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={github} className="App-logo" alt="logo" />
        </div>

       
      </header>

         
    </div>
  );
}

export default App;
