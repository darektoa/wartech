class CardBox extends HTMLElement{
    set data(dataArray){
        this._data = dataArray;
        this.render();
    }
    
    render(){
        this._data.map((data)=>{
            const elmntCard = document.createElement('elmnt-card');
            elmntCard.data  = data;
            this.appendChild(elmntCard);
        })
    }
}

customElements.define('card-box', CardBox);