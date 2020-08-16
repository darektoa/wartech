class SearchBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set data(dataObject){
        const {placeholder, textButton} = dataObject;

        this._placeholder   = placeholder;
        this._textButton    = textButton;

        this.render();
    }

    get value(){
        return this.querySelector('input').value;
    }

    render(){
        this.innerHTML = `
            <div class="container">
                <input type="text" spellcheck="false" autocomplete placeholder="${this._placeholder || 'Search Here'}">
                <button>${this._textButton || 'Search'}</button>
            </div>
        `;
    }
}

customElements.define('search-bar', SearchBar);