

document.getElementById("change-text").addEventListener('click', function () {
    document.getElementById("main-heading").innerText='Stay as long as you like';
});

// Add a new list item when the "Add List Item" button is clicked.

// Hint: Use createElement() to create a new li element and appendChild() to add it to the list.

// The problem was that we attempted to assign innerText directly after createElement(), but createElement() gives us an element, not a string.
// const newItem = document.createElement('li').innerText = 'Item 4'; // Incorrect
document.getElementById('add-item').addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.innerText='Item 4';
    document.getElementById('item-list').appendChild(newItem);
    
});


// Change the color of all list items to blue when you hover over the "Change Heading Text" button.
// Hint: Use querySelectorAll() to select all li elements and change the style property inside an event listener.
// document.getElementById("change-text").addEventListener('mouseover', function () {
//     document.querySelectorAll('li').style.color='blue';
// });

// document.getElementById("change-text").addEventListener('mouseover', function () {
//     const listItems = document.querySelectorAll('li');
//     listItems.forEach(item => {
//         item.style.color = 'blue';
//     });
// });
// document.getElementById("change-text").addEventListener('mouseout', function () {
//     const listItems = document.querySelectorAll('li');
//     listItems.forEach(item => {
//         item.style.color = ''; // Reset to default color
//     });
// });

document.getElementById("change-text").addEventListener('mouseover', function () {
    document.querySelector('ul').style.setProperty('color', 'blue');
});

document.getElementById("change-text").addEventListener('mouseout', function () {
    document.querySelector('ul').style.setProperty('color', '');
});



// this one works
//  document.querySelector('body').addEventListener('dblclick', function() {
//     alert('This is an alert message!');
//     const itemList = document.getElementById('item-list');
//     if (itemList && itemList.lastElementChild) {
//         itemList.removeChild(itemList.lastElementChild);
//     }
// });
document.querySelector('body').addEventListener('dblclick', function() {
    const itemList = document.getElementById('item-list');
    if (itemList.lastElementChild) {
        itemList.removeChild(itemList.lastElementChild);
    } 
});



// Update the paragraph text when the mouse moves over the heading.

// Hint: Use an event listener for the mouseover 
//event and change the innerText of the paragraph.

//"Now THAT is a paragraph!!"
document.getElementById('main-heading').addEventListener('mouseover', function() {
    document.querySelector('.description').innerText='Now THAT is a paragraph!!';
});

document.getElementById("main-heading").addEventListener('mouseout', function () {
    document.querySelector('.description').innerText.setProperty('This is a simple paragraph of text.');
});