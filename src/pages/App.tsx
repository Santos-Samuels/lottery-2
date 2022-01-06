import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login, Register, ResetPassword, Home, NewBet, Account, NotFound } from "./index";
import '../index.css'
import PrivateRoute from '@src/routes/PrivateRoute';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        
        <Route element={<PrivateRoute />}>
          <Route path="/account" element={<Account />} />
          <Route path="/new-bet" element={<NewBet />} />
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App