let prevScrollY = 0;
let sideMenu    = false;

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
            <div class="container">
                <a href="/">
                    <img src="assets/img/wartech/72x72.png" alt="Wartech">
                    Wartech
                </a>
                
                <icon-burger></icon-burger>

                <div class="menu-box">
                    <ul>
                        <li> <a href="/">Home</a> </li>
                        <li> <a href="/admin">Admin</a> </li>
                    </ul>
                </div>
            </div>
        `;
        
        const elmntHeader   = this;
        const menuList      = this.querySelector('.menu-box');
        const iconBurger    = this.querySelector('icon-burger');
        
        window.addEventListener('scroll', ()=> this.onScroll(elmntHeader, menuList) );
        iconBurger.addEventListener('click', ()=> this.onIconBurgerClick(menuList) );
    }

    // METHODE ANIMATION ON SCROLL
    onScroll(elmntHeader, menuList){
        const elmnt     = elmntHeader;
        const width     = window.innerWidth;
        const scrollY   = window.pageYOffset;

        if(sideMenu){
            menuList.removeAttribute('style');
            sideMenu = false;
        }

        if((width >= 1000 && scrollY >= 700 && prevScrollY < scrollY) || (width < 1000 && scrollY >= 500 && prevScrollY < scrollY)){
            elmnt.style = `
                position: fixed;
                top: 0;
            `;
        }else if(scrollY >= 10){
            elmnt.style = `
                top: -100vh;
                position: fixed;
            `;
        }else{
           elmnt.removeAttribute('style');
        }

        prevScrollY = scrollY;
    }

    // METHODE MENAMPILKAN DAFTAR MENU KETIKA ICON BURGER DI CLICK
    onIconBurgerClick(menuList){
        if(sideMenu){
            menuList.removeAttribute('style');
            sideMenu = false;
            
        }else{
            menuList.style = `right: 0`;
            sideMenu = true;
        }
    }
}

customElements.define('elmnt-header', ElmntHeader);