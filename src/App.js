
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Add from './pages/Add/Add';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route path={'/'} exact>
        <Home />
      </Route>
      <Route path={'/Login'}>
        <Login />
      </Route>
      <Route path={'/Register'}>
        <Register />
      </Route>
      <Route path={'/Add'}>
        <Add />
      </Route>
    </div>
  );
}

export default App;
