import "./App.css";
import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header/>
      <ItemListContainer/>
      <Main saludo="bienvenidos a mi pagina" />
      <Footer/>
    </>
  )
}

export default App;
