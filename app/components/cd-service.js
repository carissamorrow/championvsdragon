import Dragon from "../models/Dragon.js";
import Champion from "../models/champion.js";

// @ts-ignore
let _dragonAPI = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/dragons'
})

// @ts-ignore
let _championAPI = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/champions'
})

let _dragons = []
let _champions = []


export default class cdService {
  constructor() {
    console.log("cd service")
  }

  getDragons(draw) {
    _dragonAPI.get('')
      .then(res => {
        console.log(res.data)
        let dragonArr = []
        res.data.forEach(dragonData => {
          dragonArr.push(new Dragon(dragonData))
        })
        _dragons = dragonArr
        draw(dragonArr)
      })

  }
  getChampions(draw) {
    _championAPI.get('')
      .then(res => {
        let championArr = []
        res.data.forEach(championData => {
          championArr.push(new Champion(championData))
        })
        _champions = championArr
        draw(championArr)
      })
  }

  set Dragon(id) {

  }
}
