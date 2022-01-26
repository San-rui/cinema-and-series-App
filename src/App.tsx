import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './redux/store';

import Home from './pages/Home';
import Login from './pages/Login';
import SingUp from './pages/SingUp';
import UsersPage from './pages/UsersPage';
import Admin from './pages/Admin';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Details from './pages/Details';

import './scss/styles.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/details/:id" component={Details} />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/login" component={Login} />
          <Route path="/singup" component={SingUp} />
          <Route path="/users" component={UsersPage} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
