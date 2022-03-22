import React from "react";
import Navbar from "./pages/homepage/components/Navbar/Navbar";
import HomepageContainer from "./pages/homepage/HomepageContainer";
import { Provider } from "react-redux";
import {store} from "./store"

function App() {
  return (
    <Provider store={store}>
      <main data-testid="App">
        <Navbar />
        <HomepageContainer />
      </main>
    </Provider>
  );
}

export default App;
