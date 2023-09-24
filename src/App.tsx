import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Demo } from "./Demo";
import { HeaderMegaMenu } from "./Components/Navbar/HeaderMegaMenu";
import BestServices from "./Components/Carasouel/BestServices";

function App() {
  return (
    <>
      <MantineProvider theme={theme}>
        <HeaderMegaMenu />
        <BestServices/>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Demo />
      </MantineProvider>
    </>
  );
}

export default App;
