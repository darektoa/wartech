// FUNCTION UNTUK MEMPERSINGKAT QUERY
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
        const dataSource    = await Promise.all(dataJson.dataSlide);
        
        showBoxSlide(dataJson.dataSlide);
    }catch(err){
        console.log(`Error: ${err}`);
    }
}

// FUNCTION UNTUK MENAMPILKAN SLIDE
const showBoxSlide = (dataArray)=>{
    const elmnts = $('box-slide', 'all');
    
    for(const elmnt of elmnts){
        elmnt.data = dataArray;
        console.log(elmnt);
    }
}

fetchData();
fetchLinkCSS();

export default $;