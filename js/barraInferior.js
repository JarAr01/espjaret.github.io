class NavegadorInferior extends HTMLElement{
    connectedCallback(){
        //this.innerHTML="<tr><th scope='col'>Simulador</th><th scope='col'>ESP8266</th></tr>"
        this.innerHTML = /* html */
      `<ul>
        <li>
          <a href="index.html">
          <i class="bi bi-controller material-icons"></i><br>
            Simulador
          </a>
        </li>
        <li>
          <a href="esp.html">
          <i class="bi bi-calculator material-icons"></i><br>
            ESP8266
          </a>
        </li>
      </ul>`;
    }
}
customElements.define("nav-inf",NavegadorInferior)
