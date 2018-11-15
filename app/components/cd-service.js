import Dragon from "../models/dragon.js";
import Champion from "../models/champion.js";

// @ts-ignore
let _dragonAPI = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/dragons'
})

// @ts-ignore
let _championAPI = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/champions'
})

let dragons = []
let champion = []

export default class cdService {
  constructor() {
    console.log("cd service")
  }

  get dragons() {
    return _dragonAPI
  }

  get champions() {
    return _championAPI
  }
}