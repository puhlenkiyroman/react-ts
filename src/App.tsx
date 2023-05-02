import React /*{useContext, useEffect, useState}*/, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom"
import Navigation from "./components/Navigation";
import MainPage from "./pages/MainPage";
import CategoriesPage from "./pages/CategoriesPage";
import QuoteDetailPage from "./pages/QuoteDetailPage";
import {useAppDispatch} from "./hooks/redux";
import {fetchFilterQuotes} from "./Store/actions/filterActions";

function App() {
  return (
      <>
          <Navigation/>
          <Routes>
              <Route path ="/" element={ <MainPage /> } />
              <Route path = "/categories" element={ <CategoriesPage/> } />
              <Route path ="/quote/:id" element={ <QuoteDetailPage/> } />
          </Routes>
      </>
  );
}

export default App;
