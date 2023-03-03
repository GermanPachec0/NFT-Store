import  {  CartContainer, ItemDetailContainer, Navbar} from './components';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import { ItemProvider } from './providers';
import { Home , ItemListContainer, ItemDetail } from './components';
import "./utils/firebaseConfig";

function App() {
  return (
    <BrowserRouter>
    <ItemProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path="/category/:idCategory"  element={<ItemListContainer/>}/>
          <Route path="/item/:itemId"  element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartContainer/>}/>

        </Routes>
        </ItemProvider>
    </BrowserRouter>
  );
}

export default App;
