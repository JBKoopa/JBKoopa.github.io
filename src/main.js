
// All Boxes (8 of them)

// Missions text and styling
function Missions() {
  document.getElementById("mission").innerHTML = "For completing all Missions listed in Fate Atlas you receive";
  document.getElementById("mission2").innerHTML = "7,440 Jades";
  document.getElementById("box").style.width = "280px";
  document.getElementById("box").style.height = "210px";
  document.getElementById("box").style.boxShadow = "none";
  document.getElementById("button1").style.display = "inline-block";
}

// Interastral text and styling
function Interastral() {
  document.getElementById("Interastral").innerHTML = "For completing interastral guides you receive";
  document.getElementById("Interastral2").innerHTML = "940 Jades";
  document.getElementById("box2").style.width = "280px";
  document.getElementById("box2").style.height = "210px";
  document.getElementById("box2").style.boxShadow = "none";
  document.getElementById("button2").style.display = "inline-block";
}

// Navigation text and styling
function Navigation() {
  document.getElementById("Navigation").innerHTML = "For collecting all collectibles on the map you receive";
  document.getElementById("Navigation2").innerHTML = "8,920 Jades";
  document.getElementById("box3").style.width = "280px";
  document.getElementById("box3").style.height = "210px";
  document.getElementById("box3").style.boxShadow = "none";
  document.getElementById("button3").style.display = "inline-block";
}

// Simulated Universe text and styling
function SimulatedUniverse() {
  document.getElementById("SimulatedUniverse").innerHTML = "For completing all of Simulated Universe and Expansion Module you receive";
  document.getElementById("SimulatedUniverse2").innerHTML = "15,095 Jades";
  document.getElementById("box4").style.width = "280px";
  document.getElementById("box4").style.height = "210px";
  document.getElementById("box4").style.boxShadow = "none";
  document.getElementById("button4").style.display = "inline-block";
}

// Forgotten Hall/Pure Fiction text and styling
function ForgottenHall() {
  document.getElementById("ForgottenHall").innerHTML = "For completing all Game Systems you receive";
  document.getElementById("ForgottenHall2").innerHTML = "10,326 Jades";
  document.getElementById("box5").style.width = "280px";
  document.getElementById("box5").style.height = "210px";
  document.getElementById("box5").style.boxShadow = "none";
  document.getElementById("button5").style.display = "inline-block";
}

// Pom Pom text and styling
function PomPom() {
  document.getElementById("PomPom").innerHTML = "For hitting lvl 70 you receive";
  document.getElementById("PomPom2").innerHTML = "1200 Jades";
  document.getElementById("box6").style.width = "280px";
  document.getElementById("box6").style.height = "210px";
  document.getElementById("box6").style.boxShadow = "none";
  document.getElementById("button6").style.display = "inline-block";
}

// Travel Log text and styling
function TravelLog() {
  document.getElementById("TravelLog").innerHTML = "For completing all Permanent events you receive";
  document.getElementById("TravelLog2").innerHTML = "4,780 Jades";
  document.getElementById("box7").style.width = "280px";
  document.getElementById("box7").style.height = "210px";
  document.getElementById("box7").style.boxShadow = "none";
  document.getElementById("button7").style.display = "inline-block";
}

// Achievements text and styling
function Achievements() {
  document.getElementById("Achievements").innerHTML = "For completing all 689 Achievements you receive";
  document.getElementById("Achievements2").innerHTML = "4,405 Jades";
  document.getElementById("box8").style.width = "280px";
  document.getElementById("box8").style.height = "210px";
  document.getElementById("box8").style.boxShadow = "none";
  document.getElementById("button8").style.display = "inline-block";

}




// ! shopping cart element if you have more time

// let a = document.getElementById('a');

// console.log('a');


// let b = JSON.parse(localStorage.getItem('data')) || [];

// let generateEvent =()=> {
//   return (a.innerHTML = buttonData
//       .map((x)=>{
//           let {id,title,context,jades,link,button} = x;
//           let search = b.find((x) => x.id === id) || []
//       return `
//       <div id=button-id-${id} onclick="Missions()" class="box">
//         <p id=${context}>${title}</p>
//         <p id=${jades}></p>
//         <a href=${link}>
//             <button id=${button}>Detailed Breakdown</button>
//         </a>
//       </div>
//       `;
//   }).join(''));
// };

// generateEvent();