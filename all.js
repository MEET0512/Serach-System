const search = document.getElementById('search');
var ul = document.getElementById('list');
const li = ul.getElementsByTagName('li');

function search_item() {
    let txt = search.value.toLowerCase();
    let len = li.length;
    
    for(let i = 0; i < len; i++) {
        let item = li[i].innerHTML.toLowerCase();
        
        if(item.indexOf(txt) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}