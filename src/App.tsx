import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import { CreateRoom } from "./pages/room/CreateRoom";
import { JoinRoom } from "./pages/room/JoinRoom";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/room/create" element={<CreateRoom/>}/>
    <Route path="/room/join" element={<JoinRoom/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
