import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog } from './components/Blog';
import { BlogDetail } from './components/BlogDetail';
import { BlogEditPage } from './components/BlogEditPage';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App-header">Bài tập tuần</div>
      <Routes>
          <Route path='/' element={<Blog />} />
          <Route path='/:id' element={<BlogDetail />} />
          <Route path='/put/:id' element={<BlogEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;