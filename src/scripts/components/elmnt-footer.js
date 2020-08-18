class ElmntFooter extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="container">
                <figure>
                    <img src="/src/images/wartech/transparent.svg" alt"Icon">
                </figure>
                
                <div class="text-box">
                    <h1>WARTECH</h1>
                    <p> 
                        Email : 
                        <a href="https://gmail.com">
                            kerektoa@gmail.com
                        </a>
                    </p>
                    <p>
                        Github : 
                        <a href="https://github.com/darektoa">
                            github.com/darektoa
                        </a>
                    </p>
                    <p>
                        Instagram : 
                        <a href="https://instagram.com/abdul_fattah_h">
                            @abdul_fattah_h
                        </a>
                    </p>
                    <p class="last">Made With Love. Developed by Abdul Fattah</p>
                </div>
            </div>
        `;
    }
}

customElements.define('elmnt-footer', ElmntFooter);