import { CurrencyProvider } from "./context/contextProvider";

import Converter from "./components/Converter";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <CurrencyProvider>
        <Header />
        <Converter />
        <Footer />
      </CurrencyProvider>
    </div>
  );
}

export default App;
