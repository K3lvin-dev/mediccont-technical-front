import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from "@/pages/login";
import { ProtectedRoute } from "@/utils/ProtectedRoute";
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota de login não protegida */}
        <Route path="/login" element={<Login />} />

        {/* Rotas protegidas */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
