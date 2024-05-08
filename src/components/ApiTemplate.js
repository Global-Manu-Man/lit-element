import { LitElement, html, css } from 'lit-element';
import style from '../styles/styles-title';


export class ApiTemplate extends LitElement{
    
    static get styles(){
        return [style]
      }
    
    render(){
       return html`
       <div class="container">
            <h1>The <trong class="title"> Rick and Morty </trong> API </h1>
            <h2> LitElement </h2>
       </div>
       
       `;
    }
}

customElements.define('api-template', ApiTemplate);