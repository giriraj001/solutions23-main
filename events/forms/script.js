import { google_form_links as links } from "./data.js";

// ****************** form ***************


window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    
    const waiting_loader=document.querySelector(".waiting")

    const forms=document.querySelector(".forms")
   
    
    // var URL = new URL(window.location.href);
    // const id = URL.searchParams.get('eventId');
    // const name=URL.searchParams.get('eventName');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const eventid =urlParams.get('eventid');
    const eventcat =urlParams.get('eventcat');

    // waiting_loader.style.display='none';
    forms.innerHTML=`${links[eventcat][eventid]}`;
    // height logic
    const iframe =document.querySelector("iframe");
    let height=iframe.height;
    let width=iframe.width;
    let screenwidth=window.innerWidth;

    forms.style.height=`${iframe.offsetHeight}px`;

    console.log("iframe height before submiting:",iframe.offsetHeight)
    

    // height rechange
    setInterval(function(){
        let newheight= iframe.offsetHeight;
        console.log("newheigth",newheight)
        if(height!=newheight){
            // forms.style.height=`${newheight}px`;
            forms.style.height=`100vh`;
            console.log(forms.style.height)
            console.log(iframe.height)

        }
    },500)

    // width change if screen size less than 800px
    
    if(screenwidth<800){
        iframe.Width=300;
        console.log(iframe.height)
    }
    if(screenwidth>800){
        iframe.width=width;
        console.log(iframe.width)
    }
    // width changing on resize
    window.addEventListener('resize', function(event) {
        let screenwidth=window.innerWidth;
        if(screenwidth<800){
            iframe.width=300;
            console.log(iframe.width)
        }
        if(screenwidth>800){
            iframe.width=width;
            console.log(iframe.width)
        }
        }, true);
});