const ul = document.querySelector('ul');
const form = document.querySelector('form')
let template = ''
let list = []


ul.innerHTML = ''

form.addEventListener("submit", function(e){
    e.preventDefault();
    let  myInput = document.querySelector("#myInput").value;
    list.push({task: myInput})
    add()
    ul.innerHTML = template   


 
})

function add(){
    template = ''
    for(let i of list){
        template += `<li> ${i.task}   <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
        <label for="vehicle1"></label>
         <i onclick="editFn()" class="fa fa-pencil" style="font-size:24px"></i>
         <i onclick="deleteFn(${i.task})" class="fa fa-trash"></i></li>`
    }
}

function deleteFn(task){

    for(let i = 0; i < list.length ; i++){
        if(list[i].task == task){
            const index = i
            console.log('index: ', index);

        if (index > -1) {
        
            list.splice(index, 1);
            template = ''
            add()
            ul.innerHTML = template   


          }
        }
    }
    console.log(list);
    
   
}
function editFn(){
}

// const array = [2, 5, 9];

// console.log(array);

// const index = array.indexOf(5);
// if (index > -1) {
//   array.splice(index, 1);
// }

// // array = [2, 9]
// console.log(array); 
