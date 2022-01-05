import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login, Register, ResetPassword, Home, NewBet, Account } from "./";
import '../index.css'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/new-bet" element={<NewBet />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App