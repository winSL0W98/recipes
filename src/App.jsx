import "./App.scss";
import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ModalStack from "./components/modalStack/ModalStack";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout />
        <ModalStack />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
