import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import SignUp from "./pages/SingUp"
import Login from "./pages/Login";
import Account from "./pages/Account"
import ProtectedRoute from "./components/ProtectedRoute";


const App=()=> {
  return (
    <>
     <AuthContextProvider>
       <Navbar/> 
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/account" element={ <ProtectedRoute>  <Account/> </ProtectedRoute>  } />
          
        
         </Routes>
         </AuthContextProvider> 
    
    </>
  );
}

export default App;
