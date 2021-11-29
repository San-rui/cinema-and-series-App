import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './redux/store';

import Home from './pages/Home';
import Login from './pages/Login';
import SingUp from './pages/SingUp';


import './scss/styles.scss';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/singup" component={SingUp} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
