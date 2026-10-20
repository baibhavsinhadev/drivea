import { Navigate, Route, Routes } from "react-router-dom";
import { Auth, Drive } from "../pages";
import ProtectedRoute from "../components/auth/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Auth mode="login" />} />
      <Route path="/register" element={<Auth mode="register" />} />

      {/* Private Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Drive />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
