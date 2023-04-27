import React /*{useContext, useEffect, useState}*/ from 'react';
import {Route, Routes} from "react-router-dom"
import Navigation from "./components/Navigation";
import MainPage from "./pages/MainPage";

function App() {
  return (
      <>
          <Navigation/>
          <Routes>
              <Route path ="/" element={ <MainPage/> } />
          </Routes>
      </>
  );
}

export default App;
