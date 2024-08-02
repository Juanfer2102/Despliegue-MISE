import { Navigation } from "../pruebaComponentes/navigation";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/modulos/modulos.astro'
import Login from "./login";
import Logout from "../pages/sueños/sueños.astro";

const App = () => {
    return (
        <Router>
            <Navigation />
            
            <Routes>
                <Route exact path="/" element={< Home />} />
                <Route path="/user/login/" element={<Login />} />
                <Route path="/user/logout/" element={< Logout />} />
            </Routes>
        </Router >
    )
}
export default App;