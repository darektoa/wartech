class CardBox extends HTMLElement{
    set data(dataArray){
        console.log();
        this._data = dataArray;
        this.render();
    }
    
    render(){
        for(const data of this._data){
            const elmntCard = document.createElement('elmnt-card');
            elmntCard.data  = data;
            this.appendChild(elmntCard);
        }
    }
}

customElements.define('card-box', CardBox);