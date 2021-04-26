import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>

      <main>
        <ul>
          {task('Jantar')}
        </ul>
      </main>
    </div>
  );
}

export default App;
