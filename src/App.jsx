import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contador from "./components/Contador";
import Rutas from "./components/Rutas";

const App = () => {
  return (
    <>
      <BaseHeader />
      <Container>
        <Header />
        <Rutas />
        <WhiteLimite />
        <Footer />
        <WhiteLimite />
        <Contador />
        <WhiteLimite />
      </Container>
    </>
  );
};

export const WhiteLimite = styled.nav`
  border: 0.2px solid rgb(220, 219, 219);
  width: 390px;
  margin: auto;

  @media screen and (min-width: 750px) {
    width: 750px;
  }
`;
const BaseHeader = styled.div`
  background-color: white;
  width: 390px;
  height: 102px;
  margin: auto;

  @media screen and (min-width: 750px) {
    width: 750px;
    height: 102px;
  }
`;
const Container = styled.div`
  background-color: rgb(227, 202, 174);
  font-family: "Oswald", sans-serif;
  width: 390px;
  height: auto;
  margin: auto;
  padding-top: 10px;

  @media screen and (min-width: 750px) {
    width: 750px;
  }
`;
export default App;
