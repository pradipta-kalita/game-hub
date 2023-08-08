import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import "./App.css";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          ASIDE
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        MAIN
      </GridItem>
    </Grid>
  );
}

export default App;
