import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginForm } from "@/components/login-form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;