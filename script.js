import {LocalDB} from 'https://cdn.skypack.dev/peadb';
import shortid from 'https://cdn.skypack.dev/shortid';

const db = new LocalDB('grocery-list-db')
const groceries = db.getAll() || []

const groceryList = document.getElementById('groceryList')
const newGroceryInput = document.getElementById('newGrocery')
const addBtn = document.getElementById('addBtn')

const createGroceryElement = grocery => {
    const groceryElement = document.createElement('li')
    groceryElement.innerText = grocery.value
    groceryElement.classList.add('groceryItem')
    return groceryElement
}

const addGrocrey = newGrocery => {
    groceryList.appendChild(createGroceryElement(newGrocery))
}

addBtn.addEventListener('click', e => {
    e.preventDefault()
    const value = newGroceryInput.value
    if (value){
        const key = shortid.generate()
        addGrocrey({key, value})
        db.set(key, value)
        newGroceryInput.value = null
    }
})

groceries.map(grocery=>addGrocrey(grocery))