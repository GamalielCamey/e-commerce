import Home from "./routes/home/home.component";
import {Route, Routes} from "react-router-dom";
import NavBar from "./routes/navigation/navigation.component";
import SignIn from "./routes/signin/signin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
