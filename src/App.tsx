import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { HeaderMegaMenu } from "./Components/Navbar/HeaderMegaMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RoomsPage from "./Pages/RoomsPage";

function App() {
  return (
    <>
      <MantineProvider theme={theme}>
        <Router>
          <HeaderMegaMenu />
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="rooms" element={<RoomsPage />} />
            </Route>
          </Routes>
        </Router>
      </MantineProvider>
    </>
  );
}

export default App;
