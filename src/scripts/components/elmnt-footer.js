class ElmntFooter extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML += `
            <p>Made With &hearts;. Developed by Abdul Fattah</p>
        `;
    }
}

customElements.define('elmnt-footer', ElmntFooter);