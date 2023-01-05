import * as React from 'react';

import Layout from './components/Layout';
import CocktailRandom from './pages/CocktailRandom';
 function App() {
  return (
    <>
    <Layout>
    <CocktailRandom />
      <div className='z-10 w-full h-full bg-[#000000a1] absolute'></div>
      <img src={"https://raw.githubusercontent.com/DPG-Code/cocktails-app/main/src/background.webp"} alt="background" className="w-full h-full object-cover absolute" />
      </Layout>
    </>
  );
}

export default App;
