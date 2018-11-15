export default class dragon {
  constructor(data) {
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.class = data.class
    this.attacks = data.attacks
  }

  get dragonCard(button) {
    return `
     <div class="col">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${this.imgUrl}" />
          <div class="card-body">
            <h4 class="card-title">${this.name}</h4>
            <p class="card-text">${this.class} - ${this.attacks}</p>
            ${button}
          </div>
        </div>
      </div>
    `

  }
}