import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Error} />
      </Switch>

    </div>
  );
}

export default App;
