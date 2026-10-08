import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./pages/Admin/AdminLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Protected Admin CRM Dashboard */}
        <Route path="/admin/*" element={<AdminLayout />} />

        {/* Default Redirect: Send any unmatched route or '/' directly to '/admin' */}
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </Router>
  );
}