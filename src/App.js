
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Add from './pages/Add/Add';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route path={'/'} exact>
      <Register />
      </Route>
      <Route path={'/Login'}>
        <Login />
      </Route>
      <Route path={'/Home'}>
      <Home />
      </Route>
      <Route path={'/Add'}>
        <Add />
      </Route>
      <Route path={'*'}>
        <NotFound />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
