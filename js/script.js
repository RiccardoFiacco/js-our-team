function createCard(nameSurname, role, email, img){
  // let add= document.getElementById("add");
  add.innerHTML+=
  `<div class="col-4">
    <div class="card mb-3 bg-black text-white" id="card">
      <div class="row g-0">
        <div class="col-md-4">
          <img id="image5" src = ${img} class="img-fluid rounded-start max h-100" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" id="nameSurname5">${nameSurname}</h5>
            <p class="card-text" id="mansion5">${role}</p>
            <p><small class="text-body-secondary"><a class="link-opacity-100-hover" id="link5" href="#">${email}</a></small></p>
          </div>
        </div>
      </div>
    </div>
  </div>`
}

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

for(let i = 0; i<teamMembers.length ; i++){
  document.getElementById("image"+i).src = teamMembers[i].img;
  document.getElementById("nameSurname"+i).innerText = teamMembers[i].name;
  document.getElementById("mansion"+i).innerText = teamMembers[i].role;
  document.getElementById("link"+i).innerText = teamMembers[i].email;
}

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let nameSurname = document.getElementById("nameSurname").value;
  let role = document.getElementById("role").value;
  let email = document.getElementById("email").value; 
  let img = document.getElementById("img").value; 

  console.log(nameSurname, role, email, img)
  let objApp = {
    name: nameSurname,
    role: role,
    email: email,
    img: img
  }
  createCard(nameSurname, role, email, img);
  teamMembers.push(objApp)
  console.log(teamMembers)
})
