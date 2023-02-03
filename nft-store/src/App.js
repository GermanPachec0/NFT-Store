import  {  CartContainer, ItemDetailContainer, Navbar} from './components';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';

import { Home , ItemListContainer, ItemDetail } from './components';


function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path="/category/:idCategory"  element={<ItemListContainer/>}/>
          <Route path="/item/:itemId"  element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
