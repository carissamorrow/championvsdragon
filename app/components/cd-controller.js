import cdService from "./cd-service.js"

let _cdService = new cdService()

function drawChampions(championArr) {
  let template = ''
  console.log(championArr)
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

function drawSelectedDragon() { }
//finish to get the single active dragon to show up when add is clicked

export default class cdController {
  constructor() {
    console.log("cd controller")
    _cdService.getChampions(drawChampions)
    _cdService.getDragons(drawDragons)
  }
  setDragon(id) {
    _cdService.setDragon(id);
  }
  setChampion(id) {
    _cdService.setChampion(id)
  }
  addChampion(id) {
    _cdService.getChampionById(id)
  }
}
