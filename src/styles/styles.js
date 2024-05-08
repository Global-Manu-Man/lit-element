import { css } from 'lit-element';


export default css`
:host {
    display: block;
  }
  .container{
      text-align: center;
  }
  get-data{
      display: none;
  }

  .card {
      background: #fff;
      display: inline-block; /* Aquí corregí 'online-block' a 'inline-block' */
      border-radius: 8px;
      border: 1px solid #ccc;
      margin: 1rem;
      position: relative;
      text-align: center; /* Corregí 'text-aligh' a 'text-align' */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0,0,0,0.24); /* Corregí la coma entre los valores rgba */
      padding: 10px;
      position: relative;
      width: 300px; /* Ajusta el ancho según tus necesidades */
      transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  }

  .card-content {
      //display: flex;
      flex-direction: row; /* Cambié 'column' a 'row' para que los elementos se muestren horizontalmente */
  }

  .card-content h2 {
      font-size: 18px;
      margin: 5px 0;
  }

  .card-content img {
      max-width: 100%;
      height: auto;
      border-radius: 4px;
      margin-bottom: 10px;
  }

  .card-content p {
      font-size: 14px;
      margin: 5px 0;
  }
`;