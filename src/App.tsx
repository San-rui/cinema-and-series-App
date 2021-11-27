import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

import './scss/styles.scss';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
