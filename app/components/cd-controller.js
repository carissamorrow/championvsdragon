import cdService from "./cd-service.js"

let _cd = new cdService()

function drawChampions(championArr) {
  let template = ''
  championArr.forEach(champion => {
    template += champion.championCard
  });
  document.getElementById("champions").innerHTML = template
}

function drawDragons(dragonArr) {
  let template = ''
  dragonArr.forEach(dragon => {
    template += dragon.dragonCard
  });
  document.getElementById("dragons").innerHTML = template
}

export default class cdController {
  constructor() {
    console.log("cd controller")
    _cd.getChampions(drawChampions)
    _cd.getDragons(drawDragons)
  }
}
