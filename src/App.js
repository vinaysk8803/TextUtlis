import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar tittle="TextUtils" About="About US" />
      <div className="container my-3">
        <TextForm heading="Enter your Text here" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
