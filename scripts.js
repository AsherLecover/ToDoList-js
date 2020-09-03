const ul = document.querySelector(".task-area");
const form = document.querySelector("form");
const formInp = document.querySelector("#form-inp")
const editInp = document.querySelector("#edit-inp")

let template = "";
let list = [];
let chackd = ''
let chackdCount = 0
ul.innerHTML = "";
let indexEdit = -1

formInp.addEventListener("submit", function(e) {
    e.preventDefault();
    let editInp =  document.querySelector("#edit-inp").value;
})


form.addEventListener("submit", function(e) {
  e.preventDefault();
  let myInput = document.querySelector("#myInput").value;
  list.push({complated: ['', '_'], task: myInput });
  add();
  ul.innerHTML = template;
});

function add() {
  template = "";
  for (let i = 0; i < list.length; i++) {
    template += `
    <div 
    style="margin-left: 15%; margin-right: 15%;   background: #d9d9d9; padding: 10px; border-radius: 10px;
            border: solid black 2px; margin-bottom: 10px;   display: flex;  justify-content: space-between">
    <div>


    
    <span style=" border: solid black 1px;  border-radius: 2px;  margin-right: 15px;" onclick="taskComplite(${i})" > ${list[i].complated[1]} </span>
    <span style="${list[i].complated[0]}"> ${list[i].task}</span>
    </div>
    
    <div>
     <i onclick="openEdit(${i})" class="fa fa-pencil" style="font-size:24px"></i>
     <i onclick="deleteFn(${i})" class="fa fa-trash"></i>
     </div>


    </div>
    `;
    
    
    
    
    
  }
  
}

function taskComplite(index){
    console.log("ininin: ", index);
    chackdCount ++
    if(chackdCount % 2 != 0){
        list[index].complated[0] = 'text-decoration: line-through;'
        list[index].complated[1] = '&#9989; '  
       add()
        ul.innerHTML = template;
    }
    else{
        list[index].complated[0] = ''
        list[index].complated[1] = '_'
        add()
        ul.innerHTML = template;
    }
}

function deleteFn(index) {
  console.log("index: ", index);
  list.splice(index, 1);
  template = "";
  add();
  ul.innerHTML = template;
}

function editFn() {
    list[indexEdit].task = editInp.value;
    list[indexEdit].complated[0] = '';
    list[indexEdit].complated[1] = '_';
    modal.style.display = "none";
    add();
    ul.innerHTML = template;
}
    
    


// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
 function openEdit(index) {
    indexEdit = index
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

