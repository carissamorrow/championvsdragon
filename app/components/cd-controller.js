import cdService from "./cd-service.js"

let _cd = new cdService()

function drawChampions(championArr) {
  let template = ''
  championArr.forEach(champion => {
    let button = `
    <button class="btn btn-success" onclick="app.controllers.cdController.addChampion(${champion.name})">Add</button>
    `
    template += champion.getChampionCard(button)
  });
  document.getElementById("champions").innerHTML = template
}

function drawDragons(dragonArr) {
  let template = ''
  dragonArr.forEach(dragon => {
    let button = `
    <button class="btn btn-success" onclick="app.controllers.cdController.addDragon()${dragon.name})">Add</button>
  `
    template += dragon.getDragonCard(button)
  });
  document.getElementById("dragons").innerHTML = template
}

export default class cdController {
  constructor() {
    console.log("cd controller")
    _cd.getChampions(drawChampions)
    _cd.getDragons(drawDragons)
  }
  addChampion() {

  }

  addDragons() {

  }
}
