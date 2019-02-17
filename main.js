var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form Submit event

form.addEventListener('submit', addItem);

// Delete event

itemList.addEventListener('click', removeItem);

//Filter Event

filter.addEventListener('keyup', filterItems);

function addItem(e) {
 e.preventDefault();
 
 //Get Input Value

 var newItem = document.getElementById('item').value;

 //Create new li element

 var li = document.createElement('li');
 //Add Class
 li.className = 'list-group-item';
 // Add text node with input value
 li.appendChild(document.createTextNode(newItem));

 //Create delete button element

 var deleteBtn = document.createElement('button');

 //Add Classes to delete button

 deleteBtn.className = '"btn btn-danger btn-sm float-right delete';

 //Append the text node

 deleteBtn.appendChild(document.createTextNode('X'));

 li.appendChild(deleteBtn);


 itemList.appendChild(li);
}

function removeItem(e) {
   
    if(e.target.classList.contains('delete')) {
    if(confirm('Are You Sure')) {
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
    }
}

//Filter Items

function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    //Get List
    var items = itemList.getElementsByTagName('li');
    //Covert to an array the item list
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        //Check the match
        if(itemName.toLowerCase().indexOf(text) != -1) {
           item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}