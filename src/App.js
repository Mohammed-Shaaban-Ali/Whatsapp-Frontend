import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./components/Messenger.jsx";
import "./App.css";

function App() {
  const clientId =
    "738914189423-gujq4c8a9gkaktifcthpqpa7rhoa26hp.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
