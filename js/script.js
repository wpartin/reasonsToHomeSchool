"use strict";

const open = document.querySelector(".open");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");

const opener = (e) => {
  e.preventDefault();
  menu.style.display = "flex";
  open.style.display = "none";
  close.style.display = "flex";
};

const closer = (e) => {
  e.preventDefault();
  menu.style.display = "none";
  open.style.display = "flex";
  close.style.display = "none";
};

// CLICK DEVICES
open.addEventListener("click", opener);
close.addEventListener("click", closer);

// TOUCH DEVICES
open.addEventListener("touchstart", opener);
close.addEventListener("touchstart", closer);
