import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Ourevents from "./Components/Ourevents";
import Ourpartners from "./Components/Ourpartners";
import Ourlinks from "./Components/Ourlinks";
import Currentopnings from "./Components/Currentopnings";
import QuestionsAnswers from "./Components/Questions&Answers";
import Sectors from "./Components/Sectors";
import Posts from "./Components/Blog";
import Contact from "./Components/Contact";
import Solutions from "./Components/Solutions";
import DocusoftManagement from './Components/DocumentManagement';
import PricingQuotation from './Components/PricingQuotation'
import SinglePost from "./Components/Singlepageblog";
import Support from "./Components/Support";
import Footer from "./Components/Footer";


function App() {
  
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourevents" element={<Ourevents />} />
        <Route path="/ourpartners" element={<Ourpartners />} />
        <Route path="/ourlinks" element={<Ourlinks />} />
        <Route path="/current-openings" element={<Currentopnings />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/documentmanagement" element={<DocusoftManagement />} />
        <Route path="/pricing-quotation" element={<PricingQuotation />} />
        <Route path="/questions-answers" element={<QuestionsAnswers />} />
        <Route path="/posts" element={<Posts />} /> 
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
