import React from "react";
import "./Sidebar.comp.css";

function Sidebar({
  rotatestatus,
  setrotate,
  imgstatus,
  blurstatus,
  setblur,
  brightstatus,
  setbright,
  contraststatus,
  setcontrast,
  satustatus,
  setsatu,
  flipstatus,
  setflip,
  invstatus,
  setinv,
  graystatus,
  setgray,
  sepstatus,
  setsep,
  opacitystatus,
  setopacity,
}) {
  return (
    <div className="sidebar">
      <div className="options">
        <ul>
          <li>
            <button
              onClick={() => {
                if (imgstatus) {
                  setblur(!blurstatus);
                  setbright(false);
                  setcontrast(false);
                  setsatu(false);
                  setrotate(false);
                  setflip(false);
                  setinv(false);
                  setsep(false);
                  setgray(false);
                } else alert("Please add an Image");
              }}
            >
              Blur
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                if (imgstatus) {
                  setbright(!brightstatus);
                  setblur(false);
                  setopacity(false);
                  setopacity(false);
                  setcontrast(false);
                  setsatu(false);
                  setrotate(false);
                  setflip(false);
                  setinv(false);
                  setsep(false);
                  setgray(false);
                } else alert("Please add an Image");
              }}
            >
              Brightness
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                if (imgstatus) {
                  setinv(!invstatus);
                  setbright(false);
                  setopacity(false);
                  setcontrast(false);
                  setsatu(false);
                  setrotate(false);
                  setflip(false);
                  setblur(false);
                  setgray(false);
                  setsep(false);
                } else alert("Please add an Image");
              }}
            >
              Invert
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                if (imgstatus) {
                  setgray(!graystatus);
                  setbright(false);
                  setcontrast(false);
                  setopacity(false);
                  setsatu(false);
                  setrotate(false);
                  setflip(false);
                  setinv(false);
                  setblur(false);
                  setsep(false);
                } else alert("Please add an Image");
              }}
            >
              Grayscale
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                if (imgstatus) {
                  setopacity(!opacitystatus);
                  setbright(false);
                  setcontrast(false);
                  setsatu(false);
                  setrotate(false);
                  setflip(false);
                  setinv(false);
                  setsep(false);
                  setgray(false);
                  setblur(false);
                } else alert("Please add an Image");
              }}
            >
              Opacity
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                if (imgstatus) {
                  setsep(!sepstatus);
                  setbright(false);
                  setcontrast(false);
                  setopacity(false);
                  setsatu(false);
                  setrotate(false);
                  setflip(false);
                  setinv(false);
                  setblur(false);
                  setgray(false);
                } else alert("Please add an Image");
              }}
            >
              Sepia
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                if (imgstatus) {
                  setcontrast(!contraststatus);
                  setbright(false);
                  setblur(false);
                  setopacity(false);
                  setsatu(false);
                  setrotate(false);
                  setflip(false);
                  setinv(false);
                  setgray(false);
                  setsep(false);
                } else alert("Please add an Image");
              }}
            >
              Contrast
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                if (imgstatus) {
                  setsatu(!satustatus);
                  setblur(false);
                  setopacity(false);
                  setbright(false);
                  setcontrast(false);
                  setrotate(false);
                  setflip(false);
                  setinv(false);
                  setgray(false);
                  setsep(false);
                } else alert("Please add an Image");
              }}
            >
              Saturation
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                if (imgstatus) {
                  setrotate(!rotatestatus);
                  setbright(false);
                  setopacity(false);
                  setcontrast(false);
                  setsatu(false);
                  setblur(false);
                  setflip(false);
                  setinv(false);
                  setgray(false);
                  setsep(false);
                } else alert("Please add an Image");
              }}
            >
              Rotate
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                if (imgstatus) {
                  setflip(!flipstatus);
                  setbright(false);
                  setcontrast(false);
                  setsatu(false);
                  setrotate(false);
                  setblur(false);
                  setinv(false);
                  setgray(false);
                  setsep(false);
                  setopacity(false);
                } else alert("Please add an Image");
              }}
            >
              Flip
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
