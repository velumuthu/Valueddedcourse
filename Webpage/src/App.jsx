import "./App.css"
import favicon from "./assets/favicon.svg";
import Header from './assets/components/Header'
import Home from './assets/components/Home'
import Movingtext from "./assets/components/Movingtext";
function App() {
  const link = document.querySelector("link[rel='icon']") || document.createElement("link");
    link.rel = "icon";
    link.href = favicon;
    document.head.appendChild(link);
  return (
    <>
    <Movingtext />
    <Header />
    <Home />
    </>
  )
}

export default App;
