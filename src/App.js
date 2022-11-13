// import { useState, useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./HomePage";
import Info from "./info";
import Login from "./login";
import Albums from "./pages/albums";
import Lagout from "./pages/lagout";
import Posts from "./pages/posts";
import Todus from "./pages/todus";
import SinglePost from './pages/singlePost'
import Commnent from "./pages/comments";
import SinglAlbum from "./pages/singlAlbum";

function App() {

  return <BrowserRouter>
    <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} >
        <Route path="/info" element={<Info />} />
        <Route path="/todus" element={<Todus />} />
        <Route path="/posts" element={<Posts />} >
          <Route path=":userId" element={<SinglePost />} >
            <Route path="comments" element={<Commnent />} />
          </Route>
        </Route>
        <Route path="/albums" element={<Albums />} >
          <Route path="/albums/:albumId" element={<SinglAlbum />} />
        </Route>
        <Route path="/lagout" element={<Lagout />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
