import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemList from "./components/ItemList/ItemList";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Contactenos from "./components/Contactenos/Contactenos";
import Carrito from './components/Carrito/Carrito';
import AcercaDe from "./components/AcercaDe/AcercaDe";
import Home from "./components/Home/Home";
import ProductosList from "./components/ProductosList/ProductosList";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Productos" element={<ProductosList/>} />
          <Route path="/item/:id" element={<ItemDetail/>}/>
          <Route path="/ItemList" element={<ItemList />} />
          <Route path="/products/product:id" element={<ItemDetail />} />
          <Route path="/products/:categoria" element={<ItemList />} />
          <Route path="/Contactenos" element={<Contactenos />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/AcercaDe" element={<AcercaDe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}