import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/login/component/LoginPage";
import RegisterPage from "./pages/register/component/RegisterPage";
import AuthenticationPage from "./pages/Authentication/AuthenticationPage";
import AcceptChat from "./pages/acceptChat/component/AcceptChat";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path= '/login' element={<LoginPage/>}/>
          <Route path= '/register' element={<RegisterPage/>}/>
          <Route path= '/authentication' element={<AuthenticationPage/>}/>
          <Route path= '/authentication' element={<AuthenticationPage/>}/>
          <Route path= '/acceptchat' element={<AcceptChat/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
