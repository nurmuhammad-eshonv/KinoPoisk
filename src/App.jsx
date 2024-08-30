import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookMarkMovies from "./pages/BookMarkMovies";
import { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext();

function App() {
  const [data, setData] = useState([]);
  return (
    <DataContext.Provider value={{data, setData}}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<BookMarkMovies data={data}/>} />
        </Routes>
      </div>
    </DataContext.Provider>
  );
}

export default App;
