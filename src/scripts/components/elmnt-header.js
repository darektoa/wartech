class ElmntHeader extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set data(dataObject){
        this._data = dataObject;

        this.render();
    }

    render(){
        this.innerHTML = `
            <img src="src/images/wartech/transparent.png" alt="">
                
            <ul>
                <li>Home</li>
                <li>Menu</li>
            </ul>
        `
    }
}

customElements.define('elmnt-header', ElmntHeader);