import React, { useState } from "react";
import "./Hero.comp.css";

function Hero({
  imgstatus,
  setimgstatus,
  rotatestatus,
  blurstatus,
  brightstatus,
  contstatus,
  satustatus,
  flipstatus,
  invstatus,
  graystatus,
  sepstatus,
  opacitystatus,
  downstatus,
  setdownloadstatus,
}) {
  const [image, setimage] = useState("./add.png");
  const reset = () => {
    setBlurVal(0);
    setBrightVal(100);
    setopacityval(0);
    setcontVal(100);
    setsatuVal(100);
    setrotateval(0);
    setflipvalside(1);
    setflipvalup(1);
    setinvertval(0);
    setgrayval(0);
    setsepval(0);
    setdownloadstatus(false);
  };
  const del = () => {
    setimage("./add.png");
    reset();
    setimgstatus(false);
  };
  const changeimg = (e) => {
    const file = e.target.files[0];
    if (file) {
      setimage(URL.createObjectURL(file));
      reset();
      setimgstatus(true);
    }
  };
  const [blurval, setBlurVal] = useState(0);
  const changeblurval = (e) => {
    setBlurVal(e.target.value);
  };
  const [brightval, setBrightVal] = useState(100);
  const changebrightval = (e) => {
    setBrightVal(e.target.value);
  };
  const [contval, setcontVal] = useState(100);
  const changecontval = (e) => {
    setcontVal(e.target.value);
  };
  const [satuval, setsatuVal] = useState(100);
  const changesatuval = (e) => {
    setsatuVal(e.target.value);
  };
  const [rotateval, setrotateval] = useState(0);
  const changerotateval = (direction) => {
    if (direction === "left") {
      setrotateval((prev) => prev - 90);
    } else {
      setrotateval((prev) => prev + 90);
    }
  };
  const calculateScale = (angle) => {
    const width = 600;
    const height = 350;
    const radians = angle * (Math.PI / 180);
    const sin = Math.abs(Math.sin(radians));
    const cos = Math.abs(Math.cos(radians));

    const newWidth = width * cos + height * sin;
    const newHeight = width * sin + height * cos;

    const scaleWidth = width / newWidth;
    const scaleHeight = height / newHeight;

    return Math.min(scaleWidth, scaleHeight);
  };
  const scaleFactor = calculateScale(rotateval);

  const [flipvalup,setflipvalup]=useState(1);
  const changeflipup =()=>
  {
    setflipvalup((prev)=>prev*-1)
  }
  const [flipvalside,setflipvalside]=useState(1);
  const changeflipside =()=>
  {
    setflipvalside((prev)=>prev*-1)
  }
  const [invertval,setinvertval]=useState(0);
  const changeinvval=(e)=>
  {
    setinvertval(e.target.value)
  }
  const [grayval,setgrayval]=useState(0);
  const changegrayval=(e)=>
  {
    setgrayval(e.target.value);
  }
  const [sepval,setsepval]=useState(0);
  const changesepval=(e)=>
  {
    setsepval(e.target.value);
  }
  const [opacityval,setopacityval]=useState(0);
  const changeopacityval=(e)=>
  {
    setopacityval(e.target.value);
  }
  const testimg =()=>
  {
    setimage("./penguin.jpg");
    setimgstatus(true);
  }

  const downloadImage = () => {
    setdownloadstatus(false);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = document.querySelector(".hero img");

    if (img) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      ctx.filter = `blur(${blurval}px) brightness(${brightval}%) contrast(${contval}%) saturate(${satuval}%) invert(${invertval}%) grayscale(${grayval}%) sepia(${sepval}%) opacity(${100-opacityval}%)`
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotateval * Math.PI) / 180);
      ctx.scale(flipvalside, flipvalup);
      ctx.drawImage(img, -canvas.width / 2, -canvas.height / 2);

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/jpg");
      link.download = "edited-image.jpg";
      link.click();
    }
  };
  if(downstatus)
    downloadImage();
  return (
    <div className="hero">
      <div className="herocomp">
      <div className="img">
        {imgstatus ? (
          image && (
            <img
              src={image}
              alt=""
              style={{
                filter: `blur(${blurval}px) brightness(${brightval}%) contrast(${contval}%) saturate(${satuval}%) invert(${invertval}%) grayscale(${grayval}%) sepia(${sepval}%) opacity(${100-opacityval}%)`,
                transform: `rotate(${rotateval}deg) scale(${scaleFactor}) scaleX(${flipvalside}) scaleY(${flipvalup})`,
              }}
            />
          )
        ) : (
          <button onClick={() => document.getElementById("myFile").click()}>
            <img src={image} alt="" />
          </button>
        )}
      </div>
      <div className="addimg">
        <input type="file" id="myFile" name="myFile" onChange={changeimg} />
        <button
          type="button"
          className="import-img"
          onClick={() => document.getElementById("myFile").click()}
        >
          Upload
        </button>

        <button type="button" className="reset-img" onClick={reset}>
          Reset
        </button>

        <button type="button" className="remove-img" onClick={del}>
          Delete
        </button>
      </div>

      <div className="display">
        {imgstatus ? (
          blurstatus && (
            <div className="displayinput">
              <label htmlFor="blurinp">
                <h5 className="inputtext">Blur</h5>
              </label>
              <input
                type="range"
                id="blurinp"
                min={0}
                max={30}
                value={blurval}
                onChange={changeblurval}
              ></input>
            </div>
          )
        ) : (
          <div></div>
        )}
        {imgstatus ? (
          brightstatus && (
            <div className="displayinput">
              <label htmlFor="brightinp">
                <h5 className="inputtext">Brightness</h5>
              </label>
              <input
                type="range"
                id="brightinp"
                min={0}
                max={200}
                value={brightval}
                onChange={changebrightval}
              ></input>
            </div>
          )
        ) : (
          <div></div>
        )}
        {imgstatus ? (
          contstatus && (
            <div className="displayinput">
              <label htmlFor="continp">
                <h5 className="inputtext">Contrast</h5>
              </label>
              <input
                type="range"
                id="continp"
                min={0}
                max={200}
                value={contval}
                onChange={changecontval}
              ></input>
            </div>
          )
        ) : (
          <div></div>
        )}
        {imgstatus ? (
          satustatus && (
            <div className="displayinput">
              <label htmlFor="satuinp">
                <h5 className="inputtext">Saturation</h5>
              </label>
              <input
                type="range"
                id="satuinp"
                min={0}
                max={200}
                value={satuval}
                onChange={changesatuval}
              ></input>
            </div>
          )
        ) : (
          <div></div>
        )}
        {imgstatus ? (
          rotatestatus && (
            <div className="displayinput">
              <h5 className="inputtext">Rotate</h5>
              <div>
                <button
                  className="rotatebutton leftrotate"
                  onClick={() => changerotateval("left")}
                >
                  Left
                </button>
                <button
                  className="rotatebutton rightrotate"
                  onClick={() => changerotateval("right")}
                >
                  Right
                </button>
              </div>
            </div>
          )
        ) : (
          <div></div>
        )}
        {imgstatus ? (
          flipstatus && (
            <div className="displayinput">
              <h5 className="inputtext">Flip</h5>
              <div>
                <button
                  className="rotatebutton leftrotate"
                  onClick={changeflipup}
                >
                  Up
                </button>
                <button
                  className="rotatebutton rightrotate"
                  onClick={changeflipside}
                >
                  Side
                </button>
              </div>
            </div>
          )
        ) : (
          <div></div>
        )}
        {imgstatus ? (
          invstatus && (
            <div className="displayinput">
              <label htmlFor="invinp">
                <h5 className="inputtext">Invert</h5>
              </label>
              <input
                type="range"
                id="invinp"
                min={0}
                max={100}
                value={invertval}
                onChange={changeinvval}
              ></input>
            </div>
          )
        ) : (
          <div></div>
        )}
        {imgstatus ? (
          graystatus && (
            <div className="displayinput">
              <label htmlFor="grayinp">
                <h5 className="inputtext">Grayscale</h5>
              </label>
              <input
                type="range"
                id="grayinp"
                min={0}
                max={100}
                value={grayval}
                onChange={changegrayval}
              ></input>
            </div>
          )
        ) : (
          <div></div>
        )}
        {imgstatus ? (
          sepstatus && (
            <div className="displayinput">
              <label htmlFor="sepinp">
                <h5 className="inputtext">Sepia</h5>
              </label>
              <input
                type="range"
                id="sepinp"
                min={0}
                max={100}
                value={sepval}
                onChange={changesepval}
              ></input>
            </div>
          )
        ) : (
          <div></div>
        )}
        {imgstatus ? (
          opacitystatus && (
            <div className="displayinput">
              <label htmlFor="opacityinp">
                <h5 className="inputtext">Opacity</h5>
              </label>
              <input
                type="range"
                id="opacitinp"
                min={0}
                max={100}
                value={opacityval}
                onChange={changeopacityval}
              ></input>
            </div>
          )
        ) : (
          <div></div>
        )}
      </div>
    </div>
    <div className="export">
    <div className="def-imgs">
    <div className="default-imgs">
      <div className="img-text">
        <h5 style={{color:'#EEEEEE'}}>Ready-to-use Image</h5>
      </div>
      <div className="default-img">
        <button className="default-img-btn" onClick={testimg}><img src="./penguin.jpg" alt="" className="def-img"/></button>
      </div>
      </div>
    </div>
    {imgstatus && (<button type="button" className="download-img" onClick={downloadImage}>
          Download
        </button>)}
    </div>
    </div>
  );
}

export default Hero;
