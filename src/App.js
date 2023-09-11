import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";

function App() {
  const ProtectedRoute = ({ children }) => {
    const user = true; //localStorage.getItem("chatAppUser")!==null;

    if (user === false) {
      return <Navigate to={"/user/sign-in"} />;
    } else if (
      user &&
      ["/user/sign-in", "/user/sign-up"].includes(window.location.pathname)
    ) {
      return <Navigate to={"/"} />;
    }
    return children;
  };
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="user/sign-in" element={<Form isSignIn={true} />} />
        <Route path="/user/sign-up" element={<Form isSignIn={false} />} />
      </Route>
    </Routes>
  );
}
export default App;
