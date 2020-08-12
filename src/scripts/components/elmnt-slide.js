class ElmntSlide extends HTMLElement{
    set data(dataObject){
        const {title, desc, icon} = dataObject;

        this._title = title;
        this._desc  = desc;
        this._icon  = icon;

        this.render();
    }

    render(){
        this.innerHTML += `
            <div class="container">
                <div class="content-slider">
                    <div class="text">
                        <h1>${this._title}</h1>
                        <p>${this._desc}</p>
                    </div>
                </div>

                <figure>
                    <img src="${this._icon}" alt="Icon">
                </figure>
            </div>
        `;
    }
}

customElements.define('elmnt-slide', ElmntSlide);