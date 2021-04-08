
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Character from './components/Character';
import SearchField from "react-search-field";
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchField
          placeholder="Search..."
          onChange={onChange}
          searchText="Search character"
          classNames="test-class"
        />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={Character} />
          <Route component={Error} />
        </Switch>

      </div>
    </div>
  );
}

export default App;
