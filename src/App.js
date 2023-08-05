import Header from "./layouts/Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Notes from "./pages/notes/Notes";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/notes" element={<Notes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
