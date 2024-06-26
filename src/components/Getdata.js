import {LitElement, html, css } from 'lit-element'


export class Getdata extends LitElement{
    static get properties() {
        return {
         url:   { type: String },
         metho: { type: String }
     
        }
       }

    firstUpdated(){
        this.getData();
    }

    _sendData(data){
        this.dispatchEvent(
            new CustomEvent('ApiData', {
            detail: { data },
            bubbles: true,
            composed: true
        })
       );
    }

    getData(){
        //console.log(this.url)
        fetch(this.url, { method: this.method })
           .then((response) => {
             if(response.ok) return response.json();
             return Promise.reject(response);
           })
           .then((data) => {
            this._sendData(data); 
           })
           .catch((error) => { 
            console.warn('shomething went wrong', error); 
        });
    }

}

customElements.define('get-data', Getdata)
