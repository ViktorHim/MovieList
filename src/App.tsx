import "./App.css";
import { AppRouter } from "./components/AppRouter/AppRouter";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
