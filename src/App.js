import React from "react";
import Header from "./components/header";
import Responsive from "./components/responsive";
import Columns from "./components/columns";
import Hardpart from "./components/hardpart";
import Footer from "./components/footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Responsive />
      <Columns />
      <Hardpart />
      <Footer />
    </div>
  );
};

export default App;
