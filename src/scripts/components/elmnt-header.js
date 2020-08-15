import $ from '/src/scripts/manipulation.js';

let prevScrollY = 0;
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
            <a href="/">
                <img src="src/images/wartech/72x72.png" alt="Wartech">
                Wartech
            </a>
                
            <ul>
                <li>Home</li>
                <li>Menu</li>
            </ul>
        `

        window.addEventListener('scroll', this.onScroll);
    }

    // METHODE ANIMATION ON SCROLL
    onScroll(){
        const elmnt     = $('elmnt-header');
        const width     = window.innerWidth;
        const scrollY   = window.pageYOffset;

        if((width >= 1000 && scrollY >= 700 && prevScrollY < scrollY) || (width < 1000 && scrollY >= 500 && prevScrollY < scrollY)){
            elmnt.style = `
                position: fixed;
                top: 0;
            `;
        }else if(scrollY >= 10){
            elmnt.style = `
                top: -100px;
                position: fixed;
            `;
        }else{
           elmnt.removeAttribute('style');
        }

        prevScrollY = scrollY;
    }
}

customElements.define('elmnt-header', ElmntHeader);