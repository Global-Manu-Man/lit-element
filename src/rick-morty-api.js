import { LitElement, html, css } from 'lit';
import './components/Getdata';
import './components/ApiTemplate';
import style from './styles/styles';


class RickMortyApi extends LitElement {
  
  static get properties(){
   return {
    wiki: {type: Array}
   };
  }


  static get styles(){
    return [style]
  }
  

  constructor() {
    super();
    this.wiki =  []
    this.addEventListener('ApiData', (e) => {
      this._dataFormat(e.detail.data);
    });
  }

  _dataFormat(data){
    let characters =[]

    data["results"].forEach((character) => {
      characters.push({
        img:  character.image,
        name: character.name,
        specie: character.species,
        status: character.status
      })
    });
    this.wiki = characters
  }


  render() {
    return html`
    <get-data url="https://rickandmortyapi.com/api/character" method="GET"></get-data>
    <api-template></api-template>
    ${this.dateTemplate}
    `;
  }
  get dateTemplate() {
    return html`
        ${this.wiki.map(character => html`
            <div class="card">
                <div class="card-content">
                    <h2>${ character.name }</h2>
                    <img src="${ character.img }">
                    <p>${character.species} | ${character.status}</p>
                </div>
            </div>
        `)}
    `;
  }

}

customElements.define('rick-morty-api', RickMortyApi);