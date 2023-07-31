var input = document.getElementById("input");
var output= document.getElementById("output");
var tasks = document.getElementById("tasks");

var doing =document.querySelector(".doing");
var done =document.querySelector(".done");
var tasklist =document.querySelector(".Tasklist");
var addtask= document.getElementById("Addtsk");

function inplen(input){
    return input.value.length;
}
function detectEnter(event){
    let key = event.key;
    // console.log(key);
    if(key === "Enter")
    {
        return true;
    }
    else{
        return false;
    }
}

function outputDisp(event){
    if(detectEnter(event))
    {
        if(inplen(input)>0)
        {
            input.style.display='none';
            output.style.display='inline-block'
            output.innerText=input.value;            
        }
    }
}

function editOnClick(){
    if(input.style.display === 'none')
    {
        input.style.display="inline-block";
        output.style.display="none";
    }
}
function addList() {
    if(inplen(tasks)>0)
        {
            const li = document.createElement("li");
            const inp =document.createElement("input");
            const label = document.createElement("label");
            const span = document.createElement("span");
            const remove =document.createElement('button');
            remove.className='remove';
            const div = document.createElement('div');
            div.className='buttons';
            const icon2 = document.createElement('img');
            icon2.src='trash.png';
            remove.appendChild(icon2);
            div.appendChild(remove);
            inp.type = "checkbox";
            li.className ="tasks";
            span.className = "checkmark";
            label.innerText=tasks.value;
            label.appendChild(inp);
            label.appendChild(span);
            li.appendChild(label);
            li.appendChild(div);
            doing.appendChild(li);
            tasks.value='';
            setTimeout(() => {
            li.style.opacity = "1";
            }, 200);
        }  
}

function addByEnter(event) {
    if(detectEnter(event))
    {
        addtask.classList.add('show-hover');
        setTimeout(function(){
            addtask.classList.remove('show-hover');
        },400);
        addList();
    }
}

function checking(event) {
    var target = event.target;
    if((target.tagName === 'INPUT') && (target.type === 'checkbox'))
    {
        var taskelement = target.closest('li');
        if(target.checked)
        {
            taskelement.classList.add('fade-out');
            setTimeout(function(){
                taskelement.classList.remove('fade-out');
                done.appendChild(taskelement);
            },400);
            
        }
        else{
            taskelement.classList.add('fade-out')
            setTimeout(function(){
                taskelement.classList.remove('fade-out');
                doing.appendChild(taskelement);
            },400);
        }

    }
}

function remove(event){
    var target = event.target;
    
    if ((target.closest('button')).className === 'remove')
    {
        console.log('hi');
        var listelement = target.closest('li');
        listelement.classList.add('fade-out');
        var parent = target.closest('ul');
        setTimeout(function(){
            parent.removeChild(listelement);
            listelement.classList.remove('fade-out');
         },400);
    }
}

tasks.addEventListener("keydown",addByEnter);
addtask.addEventListener("click",addList);
input.addEventListener("keydown",outputDisp);
output.addEventListener("click",editOnClick);
tasklist.addEventListener("change",checking);
tasklist.addEventListener('click',remove);
