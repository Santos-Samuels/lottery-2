import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login, Register, ResetPassword } from "./";
import '../index.css'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<h1>home</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App