const groceries = []

const groceryList = document.getElementById('groceryList')
const newGroceryInput = document.getElementById('newGrocery')
const addBtn = document.getElementById('addBtn')

const createGroceryElement = grocery => {
    const groceryElement = document.createElement('li')
    groceryElement.innerText = grocery
    groceryElement.classList.add('groceryItem')
    return groceryElement
}

const addGrocrey = newGrocery => {
    groceryList.appendChild(createGroceryElement(newGrocery))
}

addBtn.addEventListener('click', e => {
    e.preventDefault()
    const value = newGroceryInput.value
    if(newGroceryInput){
        addGrocrey(value)
        newGroceryInput.value = null
    }
})

groceries.map(grocery=>addGrocrey(grocery))