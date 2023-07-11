import Header from './components/Header';
import Travel from './components/Travel';
import data from './data';
import './App.css';

function App() {
  const dataElements = data.map(
      dest => <Travel {...dest} />
  );
  return (
    <div>
      <Header />
      <main>
        {dataElements}
      </main>
    </div>

  );
}

export default App;
