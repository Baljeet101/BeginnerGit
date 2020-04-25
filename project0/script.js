const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
    alert('New TODO button clicked!')
    try {
        let val = parseInt(itemCountSpan.textContent)
        itemCountSpan.textContent = val + 1
        val = itemCountSpan.textContent
        uncheckedCountSpan.textContent = val
        console.log('itemCountSpan.value ' + itemCountSpan.textContent)
        const node = document.createElement('LI')
        node.classList.add(classNames.TODO_ITEM)
        node.setAttribute('id', classNames.TODO_TEXT + val)
        const delButton = document.createElement('button')
        delButton.classList.add("button")
        delButton.classList.add(classNames.TODO_DELETE)
        delButton.setAttribute('onClick', 'deleteTodo(this)')
        const checkBox = document.createElement('INPUT')
        checkBox.classList.add(classNames.TODO_CHECKBOX)
        checkBox.setAttribute('type','checkbox')
        checkBox.setAttribute('onClick','countUnchecked(this)')
        let textnode = document.createTextNode(classNames.TODO_TEXT + val)
        // Create a text node
        node.appendChild(textnode)
        // Append the text to <li>
        node.appendChild(delButton)
        node.appendChild(checkBox)
        textnode = document.createTextNode(classNames.TODO_DELETE + val)
        delButton.appendChild(textnode)
        list.appendChild(node)
        // This method is necessary after checking some checkboxes , then deleting then addinng new TODO
        countUncheckedAgain()
    } catch (Err) {
        console.warn(Err)
    }
}

function deleteTodo(element) {
    console.log('deleteTodo button clicked!')
    try {
        const delParent = element.parentElement
        delParent.remove()
        let val = parseInt(itemCountSpan.textContent)
        itemCountSpan.textContent = val - 1
        let checkedBox = 0
        const size = document.getElementsByClassName(classNames.TODO_DELETE).length
        for(let i = 0 ; i < size; i++){
        	if(document.getElementsByClassName(classNames.TODO_DELETE)[i].nextElementSibling.checked === true){
        		checkedBox = checkedBox + 1
        	}

        }
        // val = parseInt(uncheckedCountSpan.textContent)
         uncheckedCountSpan.textContent = val - checkedBox -1 
    } catch (Err) {
        console.warn(Err)
    }
}


function countUnchecked(element) {
    console.log('countUnchecked button clicked!')
    try {
    	let val = parseInt(uncheckedCountSpan.textContent)
    	if(element.checked === true){
    		
        	uncheckedCountSpan.textContent = val - 1
    	}
    	else{
    		uncheckedCountSpan.textContent = val + 1
    	}
        
    } catch (Err) {
        console.warn(Err)
    }
}	

function countUncheckedAgain() {
 
    try {
    	let val = parseInt(itemCountSpan.textContent)
    	let checkedBox = 0
        const size = document.getElementsByClassName(classNames.TODO_DELETE).length
        for(let i = 0 ; i < size; i++){
        	if(document.getElementsByClassName(classNames.TODO_DELETE)[i].nextElementSibling.checked === true){
        		checkedBox = checkedBox + 1
        	}

        }
        // val = parseInt(uncheckedCountSpan.textContent)
         uncheckedCountSpan.textContent = val - checkedBox
        
    } catch (Err) {
        console.warn(Err)
    }
}