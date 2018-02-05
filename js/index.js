
const url = 'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*';

const getSuggestList = (keyword) => fetch(url + '&search=' + keyword, { method: 'GET', mode: 'cors' })
                                    .then(res => res.json())

window.onload = function(){
    getSuggestList('a')
    .then(result =>{
        console.log(result)
    });
}

function search() {
    // 聲明變量
    var input, filter, ul, li, a, i;
    input = document.getElementById('input_search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("ul_search");
    li = ul.getElementsByTagName('li');
    

    getSuggestList(input.value)
    .then(result=>{
        var fuzzyResult = result[1];
        var fuzzyResultDetail = result[3];
        ul.innerHTML = "";
        for (i = 0; i < fuzzyResult.length; i++) {
            var newLi = document.createElement("li");
            newLi.innerHTML = "<a href='"+ fuzzyResultDetail[i]+"'>" +fuzzyResult[i] + "</a>";
            ul.appendChild(newLi);
        }
    });
}






