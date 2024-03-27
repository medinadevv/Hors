import "./App.scss";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import Hors from "./Pages/Hors/Hors";
import { Route, Routes } from "react-router-dom";
import Sing from "./Pages/Sing/Sing";
import LogIn from "./Pages/Login/Login";
import Profile from "./Pages/Profil/Profile";
import Information from "./Pages/Information/Information";
import Admin from "./Pages/Admin/Admin";
import { DetailPage } from "./Pages/DetailPage/DetailPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/sing" element={<LogIn />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile/admin" element={<Admin />} />
          <Route path="/profile/block1" element={<Information />} />
        </Route>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Hors />
              <Footer />
            </>
          }
        />
        <Route
          path="/detail_page/:getHorsesByUserId"
          element={<DetailPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
