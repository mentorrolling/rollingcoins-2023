import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "./pages/LoginScreen";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import RoutesApp from "./routes/RoutesApp";

function App() {
  const [login, setLogin] = useState(false);

  const cambiarLogin = () => {
    setLogin(!login);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoutes login={login}>
              <RoutesApp cambiarLogin={cambiarLogin} />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/login"
          element={<LoginScreen cambiarLogin={cambiarLogin} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
