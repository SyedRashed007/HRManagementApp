import "./App.css";
import React from "react";
// import Form from "./components/Form";
import Header from "./components/Header";
import MaterialUI from "./components/Material";
import Chakra from "./components/Chakra";
import Theme from "./components/Theme";
import AntDesign from "./components/AntDesign";
import Grommet from "./components/Grommet";
import Practice from './components/Pratice'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactStrap from "./components/ReactStrap";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Practice />}/>
        {/* <Route path="/" element={<Form />} /> */}
        <Route path="/material" element={<MaterialUI />} />
        <Route path="/reactBootstrap" />
        <Route path="/antDesign" element={<AntDesign />} />
        <Route path="/reactStrap" element={<ReactStrap />} />
        <Route path="/semanticReact" />
        <Route path="/chakra" element={<Chakra />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/rebass" />
        <Route path="/blueprint" />
        <Route path="/grommet" element={<Grommet />} />
        <Route path="/fluent" />
      </Routes>
    </Router>
  );
}

export default App;
