import  {ItemListContainer, Navbar} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <ItemListContainer greeting="BIENVENIDO"></ItemListContainer>
    </div>
  );
}

export default App;
