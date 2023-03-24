import { google_form_links as links } from "./data.js";

// ****************** form ***************

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");

  const forms = document.querySelector(".forms");

  // var URL = new URL(window.location.href);
  // const id = URL.searchParams.get('eventId');
  // const name=URL.searchParams.get('eventName');
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const eventid = urlParams.get("eventid");
  const eventcat = urlParams.get("eventcat");

  // waiting_loader.style.display='none';
  forms.innerHTML += `${links[eventcat][eventid]}`;
  console.log(forms.innerHTML);
  const waiting = document.querySelector(".waiting");
  // height logic
  const iframe = document.querySelector("iframe");
  let height = iframe.height;
  let width = iframe.width;
  let screenwidth = window.innerWidth;

  if (screenwidth < 800) {
    iframe.Width = 300;
    console.log(iframe.height);
  }

  forms.style.height = `${iframe.offsetHeight}px`;
  console.log(waiting.style.display);
  iframe.style.display = "block";
  waiting.style.display = "none";
  console.log(iframe.style.display);
  console.log(forms.innerHTML);
  // width change if screen size less than 800px

  // width changing on resize

  window.addEventListener(
    "resize",
    function (event) {
      let screenwidth = window.innerWidth;
      if (screenwidth < 800) {
        iframe.width = 300;
        console.log(iframe.width);
      }
      if (screenwidth > 800) {
        iframe.width = width;
        console.log(iframe.width);
      }
    },
    true
  );
});
