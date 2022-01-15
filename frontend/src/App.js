import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="logo" href="/">eshop</a>
        </div>
        <div>
            <a href="/card">Cart</a>
            <a href="/signin">Sign in</a>
        </div>
    </header>
    <main>
      <Routes>
      <Route path="/product/:id" element={<ProductScreen />}></Route>
      <Route path="/" element={<HomeScreen/>} exact></Route>
      </Routes>
    </main>
    <footer className="row center">All rights reserved</footer>
</div>
</BrowserRouter>
  );
}

export default App;
