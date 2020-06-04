import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './Redux/CakeStore'
import CakeContainer from "./components/cakeContainer"
import HooksCakeContainer from "./components/HooksCakeContainer"
import IceContainer from './components/iceCreamContainer'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <CakeContainer/>
     <IceContainer/>
     <h1 style={{color:"red"}}> Using react Hooks</h1>
     <HooksCakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
