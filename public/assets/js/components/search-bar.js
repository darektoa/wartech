class SearchBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set data(dataObject){
        const {placeholder, onClick} = dataObject;

        this._placeholder   = placeholder;
        this._onClick       = onClick;

        this.render();
    }

    get value(){
        return this.querySelector('input').value;
    }

    render(){
        this.innerHTML = `
            <input type="text" spellcheck="false" autocomplete placeholder="${this._placeholder || 'Search Here'}">
            <button>
                <img src="assets/img/search-white.svg">
            </button>
        `;

        this.querySelector('input').addEventListener('input', this._onClick);
    }
}

customElements.define('search-bar', SearchBar);