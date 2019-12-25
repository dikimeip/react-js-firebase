import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Dasboard from '../Dasboard';
import Login from '../Login';
import Register from '../Register';
import { Provider } from 'react-redux';
import {store} from '../../../config/redux';


function App() { 
  return (
    <Provider store={store} >
      <BrowserRouter>
        <div className="navbar navbar-inverse">
          <div className="container">
            <ul className="nav navbar-nav">
              <li> <Link to="/" > Dasboard </Link>  </li>
              <li> <Link to="/login" > Login </Link>  </li>
              <li> <Link to="/register" > Register </Link>  </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <Route path="/" exact component={Dasboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </BrowserRouter>
     </Provider>


  );
}

export default App;
