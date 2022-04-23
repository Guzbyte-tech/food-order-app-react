import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <React.Fragment>
      <Header onShowCart={showCartHandler} />
      <main>
          <Meals />
      </main>

      {cartIsShown && <Cart onClose={hideCartHandler} />}
    </React.Fragment>
  );
}

export default App;