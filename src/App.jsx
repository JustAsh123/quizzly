import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import CreateQuiz from "./pages/CreateQuiz"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
    <BrowserRouter>
      <Toaster />
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/create-quiz" element={<CreateQuiz />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
