

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from './components/ui/homepage'
import About from './components/ui/AboutUs/About'
import Navbar from './components/ui/Navbar'
import Contact from './components/ui/ContactUs/Contact';
import { ThemeProvider } from "@/components/theme-provider"
import Servicepage from './components/ui/Services/Servicepage';
import AccountingServices from './components/ui/Services/AccountingServices';
import Cursor from './components/ui/Cursor'


function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Cursor />
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/itservices" element={<Servicepage />} />
          <Route path="/accountingservices" element={<AccountingServices />} />


        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

