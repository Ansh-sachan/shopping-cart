import Cart from './components/cart';
import Main from './components/main';
import Sizes from './components/sizes';
function App() {
  return (
    <>
      <div className="container flex wrap">
        <Sizes />
        <Main />
        <Cart />
      </div>
    </>
  );
}

export default App;
