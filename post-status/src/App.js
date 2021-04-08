import './App.css';
import CardTask from './components/CardTask';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <div className="container w-50">
        <div className="row mt-5">
          <h1>02-1</h1>
          <Post />
        </div>
        <div className="row mt-5">
        <h1>02-2</h1>
          <CardTask />
        </div>
        <div className="row mt-5">
          {/* <PostHooks /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
