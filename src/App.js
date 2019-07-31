import React from 'react';
import TopNav from "../src/components/TopNav";
import Section1 from "../src/components/Section1";
import Section2 from "../src/components/Section2";
import Section3 from "../src/components/Section3";
import Footer from "../src/components/Footer";
import FooterCards from "../src/components/FooterCards"; 




function App() {
  return (
    <div className="App">
      <TopNav />
      <Section1 />
      <Section2/>
      <Section3/>
      <Footer/>
      {/* <FooterCards /> */}
    </div>
  );
}

export default App;
