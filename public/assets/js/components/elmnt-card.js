class ElmntCard extends HTMLElement{
    set data(dataObject){
        const {title, desc, price, icon, nama} = dataObject;

        this._title = title || nama;
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
                        <a href="#"><img src="assets/img/add-cart-white.svg"></a>
                        <a href="#"><img src="assets/img/love-white.svg"></a>
                    </div>
                </div>
            </div>
        `;

        this.onIconFavHover(this.querySelector('a img[src *= love-white'));
    }

    // MENAMPILKAN PERUBAHAN ICON FAVORITE SAAT MOUSE HOVER
    onIconFavHover(iconFav){
        iconFav.addEventListener('mouseover', ()=>{
            iconFav.src = 'assets/img/love-red.svg'
            iconFav.onmouseout = ()=> iconFav.src = 'assets/img/love-white.svg'
        })
    }
}

customElements.define('elmnt-card', ElmntCard);