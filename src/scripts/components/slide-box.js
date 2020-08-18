class SlideBox extends HTMLElement{
    set data(dataArray){
        this._data = dataArray;

        this.render();
    }

    // RENDER BOX-SLIDE
    render(){
        this.innerHTML = `
        <div class="container">
            <ul></ul>
            <elmnt-slide></elmnt-slide>
        </div>
        `;

        this.renderIndicators();
        this.renderSlide();
    }
    
    // REMOVE STYLE OF ELEMENT
    removeStyle(dataElmnt){
        for(const elmnt of dataElmnt){
            elmnt.style = '';
        }
    }

    // RENDER INDICATORS OF SLIDE
    renderIndicators(){
        const ul = this.querySelector('ul');
        
        for(const item of this._data){
            const indicator = document.createElement('li');
            ul.appendChild(indicator);
        }
    }

    //RENDER ALL SLIDE ONE BY oNE
    renderSlide(){
        let i = 0;
        let pause           = false;
        const dataArray     = this._data;
        const indicators    = this.querySelectorAll('ul li');
        const elmntSlide    = this.querySelector('elmnt-slide');
        const elmntStyle    = 'background-color: #00F4B2';

        indicators[i].style = elmntStyle;
        elmntSlide.data = dataArray[i++];
        
        setInterval(()=>{
            if(pause) return;
            if(i >= dataArray.length) i = 0;
            this.removeStyle(indicators);

            indicators[i].style = elmntStyle;
            elmntSlide.data  = dataArray[i++];
        }, 3000);

        indicators.forEach((elmnt, index)=>{
            elmnt.addEventListener('click', ()=>{
                i = index;

                pause = true;
                this.removeStyle(indicators);
                indicators[i].style = elmntStyle;
                elmntSlide.data = dataArray[i++];
                setTimeout(()=> pause = false, 3000);
            });
        });
    }
}

customElements.define('slide-box', SlideBox);
