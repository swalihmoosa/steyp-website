import './App.css';
import { BrowserRouter as Router , Route ,Switch } from "react-router-dom"
import Home from './components/screens/Home';
import Signup from './components/screens/Signup';
import Login from './components/screens/Login';

function App() {
  return (
    <Router>
      <>
      <Switch>
      <Route path="http://swalihmoosa.github.io/steyp-website/" exact component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      </Switch>
      </>
    </Router>
  );
}

export default App;
