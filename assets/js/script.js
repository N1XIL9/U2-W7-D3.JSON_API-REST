// CONVERTIRE IL DATABASE JSON IN OGGETTO JS
function btn() {
  let requestURL = "../assets/json/StudentiEpicode.json";
  let request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();

  request.onload = function () {
    let StudentiEpicode = request.response;
    console.log(StudentiEpicode);
    let display = document.querySelector("#display");
    for (let i = 0; i < StudentiEpicode.Alunni.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = StudentiEpicode.Alunni[i].nome;
      display.appendChild(li);
    }
  };
}

//   let list = document.querySelector("#studentList");
//   let listStudent = document.createElement("ul");
//   listStudent.innerHTML =
