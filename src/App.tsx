import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { HeaderMegaMenu } from "./Components/Navbar/HeaderMegaMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RoomsPage from "./Pages/RoomsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import { Footer } from "./Components/Navbar/Footer";
import { Demo } from "./Pages/Demo";
import '@mantine/carousel/styles.css';
function App() {
  return (
    <>
      <MantineProvider theme={theme}>
        <Router>
          <HeaderMegaMenu />
          <Demo/>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="rooms" element={<RoomsPage />} />
              <Route path="contact-us" element={<ContactUsPage />} />
            </Route>
          </Routes>
          <Footer/>
        </Router>
      </MantineProvider>
    </>
  );
}

export default App;
