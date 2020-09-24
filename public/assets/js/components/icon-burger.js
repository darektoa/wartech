class IconBurger extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <svg>
                <line x1="6" x2="30" y1="6" y2="6" />
                <line x1="6" x2="30" y1="13" y2="13" />
                <line x1="6" x2="30" y1="20" y2="20" />
            </svg>
        `;
    }
}

customElements.define('icon-burger', IconBurger);