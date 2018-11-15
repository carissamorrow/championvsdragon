export default class champion {
  constructor(data) {
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.maxHP = data.maxHP
    this.currentHP = data.currentHP
  }

  get championCard(button) {
    return `
     <div class="col">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${this.imgUrl}" />
          <div class="card-body">
            <h4 class="card-title">${this.name}</h4>
            <p class="card-text">${this.maxHP} - ${this.currentHP}</p>
            ${button}
          </div>
        </div>
      </div>
    `

  }
}