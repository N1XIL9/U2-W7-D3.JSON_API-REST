// CONVERTIRE IL DATABASE JSON IN OGGETTO JS
// function btn() {
//   let requestURL = "../assets/json/StudentiEpicode.json";
//   let request = new XMLHttpRequest();
//   request.open("GET", requestURL);
//   request.responseType = "json";
//   request.send();

//   request.onload = function () {
//     let StudentiEpicode = request.response;
//     let display = document.querySelector("#display");

//     for (let i = 0; i < StudentiEpicode.Alunni.length; i++) {
//       let li = document.createElement("li");
//       li.innerHTML = StudentiEpicode.Alunni[i].nome;
//       display.appendChild(li);
//     }
//   };
// }

let arrayOggetti = `{
  "Istituto": "Epicode",
  "Classe": "FS 05-22",
  "Corso": "Full Stack Developer",

  "insegnanti":[
      {
          "Ruolo": "Docente",
          "Nome": "Eric Camilleri"
      },
      {
          "Ruolo":"Docente ",
          "Nome": "Stefano Miceli"
      }
  ],

  "Tutor": [
      {
          "Ruolo": "Tutor",
          "Nome": "Marina Gennari"
      },
      {
          "Ruolo": "Tutor",
          "Nome": "Chiara Presaghi"
      }
  ],

  "Alunni": [
      {
          "nome": "Nicola Lerra"
      },
      {
          "nome": "Daniela Di Filippo"
      },
      {
          "nome": "Bruno Stano"
      },
      {
          "nome": "Mattia Landolfo"
      },
      {
          "nome": "Simone Ponzani"
      },
      {
          "nome": "Giovanni Urso"
      },
      {
          "nome": "Antonino Chindemi"
      },
      {
          "nome": "Luca Senatore"
      },
      {
          "nome": "Dimitri Lazuka"
      },
      {
          "nome": "Andrea Savignano"
      },
      {
          "nome": "Luigi Crisci"
      },
      {
          "nome": "Aras Pourbijan"
      },
      {
          "nome": "Gaia Filippi"
      },
      {
          "nome": "Roberto Daabbicco"
      },
      {
          "nome": "Ilde Stramandinoli"
      },
      {
          "nome": "Crisiano Maria Aliotta"
      },
      {
          "nome": "Luigi Indaco"
      },
      {
          "nome": "Lamberto Martini"
      },
      {
          "nome": "Stefano Laguda"
      },
      {
          "nome": "Giuseppe Di Pisa"
      }
  ]
}`;

console.log(JSON.parse(arrayOggetti));
//   let list = document.querySelector("#studentList");
//   let listStudent = document.createElement("ul");
//   listStudent.innerHTML =
