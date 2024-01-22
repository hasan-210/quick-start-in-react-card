import React, { createContext, useEffect, useRef, useState } from "react";
import Card from "./components/card";
import Alert from "./components/alert";
import Page from "./components/input"
import "./App.css"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import img1 from "./images/1.jpg"
import img_alert from "./images/alert.jpg"

import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./components/Home";

// export const Vendor = createContext()

function App() {
// const [value ,setvalue] = useState(0)
// const [x ,setx] = useState(0)

// useEffect(()=>{
//   r.current.click()
// },[x])

// const r = useRef(null)
// const puls = () => {
//   setx(x +1);
// }
// const pulsv = () => {
//   setvalue(value +1);
// }

// const mines = () => {
//   setx(x -1);
// }
const con = (a)=> {
 window.location.href = "https://www.facebook.com/profile.php?id=100009786425806"
}
const array = [ 
  {title:"fastandfurios",img:img1},
  {title:"xman",img:img1},
  {title:"spider man",img:img1},
  {title:"bat man",img:img1},
  {title:"super man",img:img1},
  {title:"life of adaline",img:img1},
  {title:"avatar",img:img1},
  {title:"tom and gery",img:img1},
  {title:"last kingdom",img:img1},
];

  return (
    <div className="App">
        {/* <BrowserRouter> */}
          {/* <Main/> */}

        {/* <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/header" element={<Header/>} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="*" element={<Alert img= {img_alert} />} />
        </Routes>
        </BrowserRouter> */}
            {array.length > 0 ( 
            array.map((e,i)=>{
            return (
                  <Card key={i} title={e.title} img={e.img} con={con}/>
            )
          })
            ) 
        //  : <Alert img={img_alert}/>
        }
     </div>
   );
}

export default App;
