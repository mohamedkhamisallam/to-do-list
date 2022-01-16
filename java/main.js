

///////////////////all global variables////////////////////////
let inputBox= document.getElementById(`getData`);
let addBtn=document.getElementById(`addBtn`);
let addBtn1=document.getElementById(`addBtn1`);
let todoList=document.getElementById(`todoList`);
let clearBtn=document.getElementById(`clearBtn`);
let pendingTasks=document.getElementById(`pendingTasks`);
let currentindex=0
let show = 1
let listArray=[]
////////////////////////////////////////////////////////////////////



////////////////////////active method////////////////////////////////






inputBox.addEventListener(`keyup`,function(){
   let  userData=inputBox.value;
    console.log(userData)
    if(show==2)
    {



        console.log(show)
        console.log( `helloooooooooooooo`)
        addBtn.classList.remove(`active`)
        addBtn1.classList.add(`active`)
    }

     else if (show==1)
    {
        console.log(show)
           addBtn.classList.add(`active`)
           addBtn1.classList.remove(`active`)
           console.log(`oooof`)
    }
   
})
/////////////////////////////////////////////////////////////////////////////


if(localStorage.getItem(`token`)!= null)
{

    listArray=JSON.parse(localStorage.getItem(`token`))
    display()
   
}
else
{
    pendingTasks.innerHTML=0
}

///////////////////////////add data function////////////////////////////////////

addBtn.addEventListener(`click`,function(){

    let userValue=inputBox.value;
    listArray.push(userValue);
    localStorage.setItem(`token`,JSON.stringify(listArray));
    addBtn.classList.remove(`active`)
    addBtn1.classList.remove(`active`)
    display()
    
})
//////////////////////////////////////////////////////////////////////////////

////////////////////////////////display functio/////////////////////////////

function display ()
{


    pendingTasks.innerHTML=listArray.length;

    if(listArray.length>0)
    {
        clearBtn.classList.add(`active`)
    }
    else{
        clearBtn.classList.remove(`active`);
        pendingTasks.innerHTML=0
    }
  let cartoona=``
  for (let i = 0; i < listArray.length; i++) {

        cartoona+=`<li 
         class="bg-dark text-white text-center"> ${listArray[i]} 
         <span class="icon" onclick="remove(${i})"><i class="fas fa-trash"></i></span>
         </li>
        <div class="w-100 m-auto burger"> <button class=" w-100   my-2  text-center btn btn-info " onclick="update(${i})"">UPDATE</button></div>
         `

     
  }
  document.getElementById(`todoList`).innerHTML =cartoona;
  reset()

}



///////////////////////////////////////////////////////////////////////


///////////////////////////////////////rest function ////////////////

function reset()
{
  inputBox.value=``
}
////////////////////////////////////////////////////////////////

///////////////////////////delete function////////////////////


function remove (index)
{
    listArray.splice(index,1);
    localStorage.setItem(`token`,JSON.stringify(listArray));
    display()
}


/////////////////////////////////////////////////////////////////////

//////////////////////deete ALL  function///////////////////////////////

clearBtn.addEventListener(`click`,function(){



    listArray.splice(0,listArray.length);
    localStorage.setItem(`token`,JSON.stringify(listArray));
    display()
})
//////////////////////////////////////////////////////////////////////////////

/////////////////////////update function//////////////////////////////////////

function update (index)
{

    currentindex=index
    inputBox.value=listArray[index];
    addBtn1.classList.add(`active`);
    addBtn.classList.remove(`active`)
    show=2


}
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////update product////////////////////////
function updatProduct ()
{

   listArray[currentindex]=inputBox.value;
    localStorage.setItem(`token`,JSON.stringify(listArray));
  
    addBtn.classList.add(`active`)
      addBtn1.classList.remove(`active`)
      show=1
   
    display();
    
    reset();


}

addBtn1.addEventListener(`click`,updatProduct)
////////////////////////////////////////////////////////////////////////


