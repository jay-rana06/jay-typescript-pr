const form = document.getElementById('form');
const inputText = document.getElementById('text');
let list = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();


    let obj = {
        id: Date.now(),
        text: inputText.value,
        isComplete: false
    }

    list.push(obj);
    inputText.value = '';
    inputText.focus();
    displayData();
})

const table = document.querySelector('table tbody');

const displayData = () => {
    table.innerHTML = '';
    list.forEach((value, index) => { // value means object ni values 
        let row = document.createElement('tr')
        row.innerHTML = `
        <td>${index + 1}</td>
        <td class="${value.isComplete ? 'completed' : ''}">
        ${value.text}
        </td>
        
        <td>
       <button class="btn btn-success" onClick="handleComplete(${value.id})">
        ${value.isComplete ? "Completed" : "Complete"} </button>

        <button class = "btn btn-danger" onClick = "handleDelete(${value.id})">Delete</button> 
        </td>     
        `
        table.appendChild(row);
    })
}

function handleDelete(id) {
    let newList = list.filter(value => value.id != id);
    list = newList;
    displayData();
}

function handleComplete(id) {

    list = list.map(value => {

        if (value.id === id) {
            return {
                ...value,
                isComplete: true
            };
        }

        return value;
    });

    displayData();
}