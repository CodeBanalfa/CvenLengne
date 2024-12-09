export default class SuperDiv extends HTMLDivElement
{
    constructor()
    {
        super();
        this.#setStyle();
        this.addEventListener("click", this.hide);
    }

    #setStyle() {
        // Exemple de style personnalisé, tu peux le modifier
        this.style.padding = "10px";
        this.style.border = "2px solid #000";
        this.style.backgroundColor = "#f0f0f0";
        this.style.cursor = "pointer";
    }

    hide() {
        this.style.display = "none";
    }
}
// Enregistrement de SuperDiv comme élément HTML personnalisé
customElements.define('super-div', SuperDiv, { extends: 'div' });