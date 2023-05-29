import './App.css';
import { Footer } from "./components/Footer";
import Main from "./components/Main";
import { Steps } from './components/Steps';

function App() {

  return (
    <>
    <div className="container ">
      <Main/>
      <Steps/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
