export default class Dragon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.class = data.class
    this.attacks = data.attacks
  }

  get dragonCard() {
    return `
     <div class="col">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${this.imgUrl}" />
          <div class="card-body">
            <h4 class="card-title">${this.name} - ${this.id}</h4>
            <button class="btn btn-success" onclick="app.controllers.cdController.addDragon()${this.name})">Add</button>
          </div>
        </div>
      </div>
    `

  }
}