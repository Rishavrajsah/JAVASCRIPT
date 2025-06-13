document.getElementById('title')
document.getElementById('title').id  // op- title
document.getElementById('title').class // op- undefine
document.getElementById('title').className // op - "heading"
// or 
document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class')
// set attribute   overwrite 
document.getElementById('title').setAttribute('class','test')

// store vale in a variable 
const title = document.getElementById('title');
// manipulation
title.style.backgroundColor = 'green'

// get content 
title.textContent    // op- dom learning on chai or code         //  give hidden content     "DOM learning on Chai aur code test text"
title.innerHTML    // op- dom learning on chai or code   // give all values including html  "DOM learning on Chai aur code <span style="display: none;">test text</span>"
title.innerText    // op- dom learning on chai or code    // didn't give hidden content      "DOM learning on Chai aur code"


// querySlector
document.querySelector('h2') // give first h2 heading
document.querySelector('#title')  // for id search
document.querySelector('.heading') // for class search

// querySelectorAll
// shortcut ul>li*3
/*<ul>
            <li class="list-item">one</li>
            <li class="list-item">two</li>
            <li class="list-item">three</li>
            <li class="list-item">four</li>
</ul> 
*/
const tempLiList = document.querySelectorAll('li')  // select all iteam in list not only first element
console.log(tempLiList); // prove Nodelist not an array
tempLiList[1].style.color='green'
//forEach loop
tempLiList.forEach(function (l) {
    l.style.backgroundColor='green'
})


document.getElementsByClassName('list-item')  // give HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
// this HTMLCollection does not support forEach loop  need to convert into array by Array.from()
const tempClassList = document.getElementsByClassName('list-item')
Array.from(tempClassList) // converted to array