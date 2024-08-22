import React, { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Sidebar from "./Component/Sidebar/Sidebar";
import Hero from "./Component/Hero/Hero";

function App() {
  const [showblurbutton, setBlurbutton] = useState(false);
  const [showbrightnessbutton, setBrightnessbutton] = useState(false);
  const [showcontrastbutton, setcontrastbutton] = useState(false);
  const [showsaturationbutton, setsaturationbutton] = useState(false);
  const [imgadded, setimgadded] = useState(false);
  const [rotate, setrotate] = useState(false);
  const [flip,setflip]=useState(false);
  const [invert,setinvert]=useState(false);
  const [gray,setgray]=useState(false);
  const [sepia,setsepia]=useState(false);
  const [opacity,setopacity]=useState(false);
  const [downstatus,setdownloadstatus]=useState(false);
  return (
    <div>
      <Navbar imgstatus={imgadded} setdownloadstatus={setdownloadstatus}/>
      <div className="content">
        <Sidebar
          imgstatus={imgadded}
          rotatestatus={rotate}
          setrotate={setrotate}
          flipstatus={flip}
          setflip={setflip}
          invstatus={invert}
          setinv={setinvert}
          opacitystatus={opacity}
          setopacity={setopacity}
          sepstatus={sepia}
          setsep={setsepia}
          graystatus={gray}
          setgray={setgray}
          blurstatus={showblurbutton}
          setblur={setBlurbutton}
          brightstatus={showbrightnessbutton}
          setbright={setBrightnessbutton}
          contraststatus={showcontrastbutton}
          setcontrast={setcontrastbutton}
          satustatus={showsaturationbutton}
          setsatu={setsaturationbutton}
        />
        <Hero
          imgstatus={imgadded}
          setimgstatus={setimgadded}
          rotatestatus={rotate}
          flipstatus={flip}
          graystatus={gray}
          sepstatus={sepia}
          invstatus={invert}
          opacitystatus={opacity}
          blurstatus={showblurbutton}
          brightstatus={showbrightnessbutton}
          contstatus={showcontrastbutton}
          satustatus={showsaturationbutton}
          downstatus={downstatus}
          setdownloadstatus={setdownloadstatus}
        />
      </div>
    </div>
  );
}

export default App;
