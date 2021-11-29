import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SingUp from './pages/SingUp'

import './scss/styles.scss';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
        <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/singup" component={SingUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
