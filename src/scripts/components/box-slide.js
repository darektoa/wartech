class BoxSlide extends HTMLElement{
    set data(dataArray){
        this._data = dataArray;

        this.render();
    }

    render(){
        this.innerHTML = `<ul class="list-indicator"></ul>`;
        
        let i = 1;
        const listIndicator = document.querySelector('.list-indicator');

        for(const data of this._data){
            const elmntSlide    = document.createElement('elmnt-slide');
            elmntSlide.data     = data;
            this.appendChild(elmntSlide);
            
            listIndicator.innerHTML += `
                <li class="but-slide-${i}"></li>
            `;

            i++;
        }

        if(i === 2)
            listIndicator.remove();
        
    }
}

customElements.define('box-slide', BoxSlide);