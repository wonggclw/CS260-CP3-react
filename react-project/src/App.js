import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Colors from "./pages/Colors";
import Home from "./pages/Home";
//note - Layouts is the page with the layout stuff on it. NavbarLayout is the layout file for the pages.
import Layouts from "./pages/Layouts";
import NavBarLayout from "./pages/Nav-Bar-Layout";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter 
    basename="CP3Builded"
    //<Route path="*" element={<NoPage />}/>
    >
      <Routes>
        <Route path="/" element={<NavBarLayout />}>
          <Route index element={<Home />} />
          <Route path="colors" element={<Colors />}/>
          <Route path="layouts" element={<Layouts />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}