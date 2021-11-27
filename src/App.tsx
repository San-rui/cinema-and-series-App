import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
