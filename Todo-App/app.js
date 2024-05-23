var todo_input =document.getElementById('todo_input')
var add_btn =document.getElementById('add_btn')
var delete_todo =document.getElementById('delete_todo')
var todo_list =document.getElementById('todo_list')

add_btn.addEventListener('click',function () {
    if(todo_input.value.trim()) return('Todo mein kuch daaldo')
    var list_item =
        `<li>
        <span>${todo_input.value}</span>
        <button class='edit_btn' onclick="edit(this)edit"></button>
        <button class='del_btn' onclick="deleteFun(this)">del</button>
        </li>`
    todo_list.innerHTML += list_item
    todo_input.value = ''
})
function edit(element) {
    console.log('Edit=>', element.previousElementSibling.innerText);

    var previousValue = element.previousElementSibling.innerText

    var updatedValue = prompt('Edit Value', previousValue)

    element.previousElementSibling.innerText = updatedValue

}
function deleteFun(element) {
    element.parentElement.remove()
}
