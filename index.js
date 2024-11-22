const rating = document.getElementById('rating');
const container = document.getElementById('container');
const container2 = document.getElementById('container2');
const button = document.getElementsByTagName('button')
console.log(button)

let myPick = 0



function selection(yourPick){
myPick=parseInt(yourPick.id);

if (yourPick.classList.contains('bg-buttons', 'text-lightGrey')){
  yourPick.classList.remove('bg-buttons', 'text-lightGrey');
  yourPick.classList.add('bg-white', 'text-darkBlue')
}
else{yourPick.classList.add('bg-buttons', 'text-lightGrey')}

}


function displaySelectedValue(){
rating.innerHTML = 'You selected ' + myPick + ' ' + ' out of 5'
}


function result(){     
  displaySelectedValue(myPick)
  if(myPick === 0){
  return
  }
  container.classList.remove('block');
  container.classList.add('hidden');
  container2.classList.remove('hidden');
  container2.classList.add('block')
  
}

function reloadPage(){
   location.reload()
}