import Home from "./routes/home/home.component";
import {Route, Routes} from "react-router-dom";
import NavBar from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
