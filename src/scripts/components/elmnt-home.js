class ElmntHome extends HTMLElement{
    set data(dataObject){
        this._data = dataObject;
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="container">
                <div class="top">
                    <h1>List Of Foods</h1>
                    <label>
                        Search:
                        <search-bar></search-bar>
                    </label>
                </div>

                <card-box></card-box>

                <div class="top">
                    <h1>List Of Drinks</h1>
                </div>
                
                <card-box></card-box>
            </div>
        `;

        const data      = this._data;
        const cardBox   = this.querySelectorAll('card-box');
        
        cardBox[0].data = data.dataFoods;
        cardBox[1].data = data.dataDrinks;
    }
}

customElements.define('elmnt-home', ElmntHome);