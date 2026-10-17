import { Navigate, Route, Routes } from "react-router-dom";
import { Auth, Drive } from "../pages";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Auth mode="login" />} />
      <Route path="/register" element={<Auth mode="register" />} />

      <Route path="/" element={<Drive />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
