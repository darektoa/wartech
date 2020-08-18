class ElmntCard extends HTMLElement{
    set data(dataObject){
        const {title, desc, price, icon} = dataObject;

        this._title = title;
        this._desc  = desc;
        this._price = price;
        this._icon  = icon;

        this.render();
    }

    render(){
        this.innerHTML = `
            <figure>
                <img src="${this._icon}" alt="lontong">
            </figure>

            <div class="content">
                <h1>${this._title}</h1>
                <p>${this._desc}</p>
                <div class="bottom">
                    <h2>Rp ${this._price}</h2>
                    <div class="action">
                        <a href="#"><img src="/src/images/add-cart-white.svg"></a>
                        <a href="#"><img src="/src/images/love-white.svg"></a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('elmnt-card', ElmntCard);