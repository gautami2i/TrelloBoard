import { FC } from "react";
import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Trello from "./TrelloComponent";




const Routers =()=>{
    return(
        <>
          <BrowserRouter>
          <Routes>
            <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="About" element={<About/> }/>
                <Route path="Trello" element={<Trello/>}/>

            </Route>
          </Routes>
          </BrowserRouter>
        </>
    )
}
export default Routers;