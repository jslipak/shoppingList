var button = document.getElementById("enter")
var ul = document.getElementsByTagName("ul")[0];
var input = document.getElementById("userinput");

function putList() {
  var lengthInput = input.value.length;
  if (lengthInput > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    deleteButton(li)
    input.value = "";
    forListen("li", change)
  };
};


function deleteButton(li) {
  var buttonDelete = document.createElement("button");  
  var id = "id" + input.value 
  buttonDelete.id = id + li;
  buttonDelete.className = "glyphicon glyphicon-remove";
  li.append(buttonDelete);
  forListen("button", removeItem)
}

function removeItem(){
  if(this.id !== "enter"){
  console.log("no entro al if delete")
  this.parentElement.remove();
  }
}

function change () {
   this.classList.toggle("done");
};
function forListen(objecthtml , callFunc) { // 

  var Item = document.querySelectorAll(objecthtml) // if not put here  , only count once(when www started)
  var numItem = Item.length
  for (var i = 0; i < numItem; i++) {
    Item[i].addEventListener("click", callFunc);
  }
};

function addList(event){
  if(event.keyCode == 13){
    putList()
  }
}

// forListen("li" , change) // --> if not start empty , you need to use
button.addEventListener("click", putList);
input.addEventListener("keypress",addList)