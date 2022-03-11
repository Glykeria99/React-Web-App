import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/NavBar';
import homepage from './components/Homepage';
import Services from './components/Services';
import Blog from './components/Blog';
import About from './components/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyNavbar />
      <Switch>
        <Route exact path='/' component={homepage}></Route>
        <Route path='/about' component={About} />
        <Route path='/services' component={Services}></Route>
        <Route path='/blog' component={Blog}></Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
