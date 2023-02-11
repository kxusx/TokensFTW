import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import './App.css';

import Navbar from './components/js/navbar';
import Login from './components/js/login';
import InitializeNFT from './components/js/initializeNFT';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="initialize-nft" element={<InitializeNFT />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
