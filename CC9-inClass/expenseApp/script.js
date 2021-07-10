const addBtn = document.getElementById('addBtn');
const taskContainer = document.getElementById('task-container');
const taskList = document.getElementById('task-list');
const taskInput = document.querySelector('input#task-name');
const amountInput = document.querySelector('input#amount');
const dateInput = document.querySelector('input#date-input');
const totalText = document.querySelector('p#total');

let totalAmount = 0;
let idTask = 0;
let idEdit = 0;
let idDel = 0;

let doDel
let doEdit

// function updateQueryBtn() {
//   doDel = document.querySelectorAll('[id*="del"]');
//   doEdit = document.querySelectorAll('[id*="edit"]');
//   // console.log(doDel);
//   // console.log(doEdit);
// }

function clearInput() {
  taskInput.value = ''
  amountInput.value = ''
  dateInput.value = ''
}

function createTask() {
  // check null input
  let taskValue = taskInput.value;
  let amountValue = amountInput.value;
  let dateValue = dateInput.value;

  if (taskValue.trim() === '' || amountValue.trim() === ''
    || dateValue.trim() === '') {
    alert('Please Input data');
    return;
  }

  // query element 
  const li = document.createElement('li');
  const divText = document.createElement('div');
  const divBtn = document.createElement('div');
  const spanDate = document.createElement('span');
  const spanName = document.createElement('span');
  const spanAmount = document.createElement('span');
  const editBtn = document.createElement('button');
  const delBtn = document.createElement('button');

  // set id to element
  li.setAttribute("id", `task-${idTask}`);
  idTask++;

  divText.setAttribute("id", "text-container");
  divBtn.setAttribute("id", "btn-container");
  spanDate.setAttribute("id", "date");
  spanName.setAttribute("id", "taskName");
  spanAmount.setAttribute("id", "amount");
  editBtn.setAttribute("id", `edit-${idEdit}`);
  idEdit++
  delBtn.setAttribute("id", `del-${idDel}`);
  idDel++
  // console.log(
  //   divText,divBtn,spanDate,spanName,spanAmount,editBtn,delBtn
  // )

  spanDate.innerText = dateValue;
  spanName.innerText = taskValue;
  spanAmount.innerText = amountValue;

  editBtn.innerText = 'Edit';
  delBtn.innerText = 'Del';

  // create tasklist
  divText.appendChild(spanDate);
  divText.appendChild(spanName);
  // console.log(divText)

  divBtn.appendChild(spanAmount);
  divBtn.appendChild(editBtn);
  divBtn.appendChild(delBtn);
  // console.log(divBtn)

  li.appendChild(divText);
  li.appendChild(divBtn);

  totalText.innerText = `Total: ${totalAmount += +amountInput.value}`

  taskList.appendChild(li);
  
  delBtn.addEventListener('click', () => {
    totalText.innerText = `Total: ${totalAmount -= +amountValue}`
    delBtn.parentElement.parentElement.remove()
  })

  editBtn.addEventListener('click', () => {
    let editTxt = prompt('input edit task');
    if (editTxt && editTxt.trim() !== '') {
      spanName.innerText = editTxt;
    } return
  })

  clearInput()
  // updateQueryBtn()
}

addBtn.addEventListener('click', createTask);

// function updateQueryBtn() {
//   doDel = document.querySelectorAll('[id*="del"]');
//   doEdit = document.querySelectorAll('[id*="edit"]');
//   delTask()
//   // console.log(doDel);
//   // console.log(doEdit);
// }



// function delTask() {
//  doDel.addEventListener('click', () => {
//    console.log(this.parentElement)
//  })
// }



// doDel.forEach(item => {
//   item.addEventListener('click', () => {
//     let currentTask = item.parentElement
//     let getAmount = currentTask.querySelector('#amount')
//     console.log(getAmount.innerText)
//     totalText.innerText = totalAmount -= +getAmount.innerText
//     item.parentElement.parentElement.remove();
//   })

// function delTask() {
//   doDel.forEach((item, index) => {
//     item.addEventListener('click', () => {
//       return console.log(item, index)
//     })
//   })
// }


// doDel.forEach(item => {
//   item.addEventListener('click', () => {
//     let currentTask = item.parentElement
//     let getAmount = currentTask.querySelector('#amount')
//     console.log(getAmount.innerText)
//     totalText.innerText = totalAmount -= +getAmount.innerText
//     item.parentElement.parentElement.remove();
//   })
// });

// function delTask() {
//   doDel.forEach(item => {
//     item.addEventListener('click', () => {
//       let currentTask = item.parentElement
//       let getAmount = currentTask.querySelector('#amount')
//       // console.log(getAmount.innerText)
//       totalText.innerText = totalAmount -= +getAmount.innerText
//     })
//   })
// }


  // let doEdit = taskList.querySelector('#edit');
  // let doDel = taskList.querySelector('#del');

  // doDel.addEventListener('click', () => {
  //   doDel.parentElement.parentElement.remove();
  //   totalAmount = totalAmount - amountValue;
  // }
  // );

  // doEdit.addEventListener('click', () => {
  //   let editName = prompt('input edit task');
  //   if (editName && editName.trim() !== '') {
  //     spanName.innerText = editName;
  //   }
  // });
