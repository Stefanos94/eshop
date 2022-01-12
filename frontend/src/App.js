import Product from './components/Product';
import data from './data';

function App() {
  return (
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
        <div className="row center">
          {
            data.products.map(product => (
              <Product key={product.id} product={product}></Product>
            ))
          }
            
        </div>
    </main>
    <footer className="row center">All rights reserved</footer>
</div>
  );
}

export default App;
