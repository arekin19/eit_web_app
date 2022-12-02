import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Scanner");
    }

    async getHtml() {
        return `
            <section class="center"> 
            <section class="title">
                <h2> Barcode scanner </h2>
            </section>
            
            <section class="selections"> 
                <a href="#" class="btn Introduce">Introduce Barcode</a>
                <a href="/" class="btn Introduce" data-link>Confirm</a>
            </section>
        `;
    }
}

