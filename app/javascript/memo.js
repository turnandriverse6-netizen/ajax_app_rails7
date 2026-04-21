

function post (){
 const form = document.getElementById("form");
 form.addEventListener("submit", (e) => {
  e.preventDefault();
   const formData = new FormData(form);
   const XHR = new XMLHttpRequest();
   XHR.open("POST", "/posts", true);
   XHR.responseType = "json";
   XHR.send(formData);
   XHR.onload = () => {
    if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
     const list = document.getElementById("list");
     const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", html);
      formText.value = "";
    };
  });
};

window.addEventListener('turbo:load', post);