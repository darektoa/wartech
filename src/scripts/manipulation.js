// FUNCTION UNTUK MEMPERSINGKAT QUERY DOCUMENT
const $ = (query, opsi='')=>{
    if(opsi.match(/all/i))
        return document.querySelectorAll(query);
    else
        return document.querySelector(query);
}

//FUNCTION UNTUK MENGAMBIL LINK CSS
const fetchLinkCSS = async()=>{
    try{
        const head      = $('head');
        const fetchData = await fetch('/src/html/link-css.html');
        const dataText  = await fetchData.text();

        head.innerHTML  += dataText;
    }catch(err){
        console.log(`Error: ${err}`);
    }
}

// FUNCTION UNTUK MENGAMBIL DATA SOURCE
const fetchData = async ()=>{
    try{
        const fetchData     = await fetch('/src/scripts/data-source.json');
        const dataJson      = await fetchData.json();
        const dataSource    = await Promise.all([
            dataJson.dataSlide,
            dataJson.dataFoods,
            dataJson.dataDrinks
        ]);
        
        console.log(dataSource);

        showSlideBox(dataSource[0]);
        showElmntHome({
            dataFoods: dataSource[1],
            dataDrinks: dataSource[2]
        });
        searchFeature({
            dataFoods: dataSource[1],
            dataDrinks: dataSource[2]
        })
    }catch(err){
        console.log(`Error: ${err}`);
    }
}

// FUNCTION UNTUK MENAMPILKAN SLIDE
const showSlideBox = (dataArray)=>{
    const elmnts = $('slide-box', 'all');
    
    for(const elmnt of elmnts){
        elmnt.data = dataArray;
    }
}

// FUNCTION UNTUK MENAMPILKAN CONTENT DARI HOME
const showElmntHome = (dataObject)=>{
    const elmntHome = $('elmnt-home', 'all');
    
    for(const elmnt of elmntHome){
        elmnt.data  = dataObject;
    }
}

// FUNCTION SEARCH
const searchFeature = (dataObject)=>{
    const dataFoods = dataObject.dataFoods;
    const dataDrinks= dataObject.dataDrinks;

    $('search-bar button').addEventListener('click', ()=>{
        const keyword = $('search-bar input').value.toLowerCase();
        const cardBox = $('card-box', 'all');

        cardBox[0].innerHTML = ''
        cardBox[0].data = dataFoods.filter((item)=> (item.title.toLowerCase().includes(keyword)));
        
        cardBox[1].innerHTML = ''
        cardBox[1].data = dataDrinks.filter((item)=> (item.title.toLowerCase().includes(keyword)));
    })
}

fetchData();
fetchLinkCSS();

export default $;