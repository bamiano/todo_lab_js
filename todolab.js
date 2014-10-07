var myForm = document.getElementById("todoForm");
var list = document.getElementById("todoList");

myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    var title = this.title.value;
    var li = document.createElement("li");

    var btnD = document.createElement("button");
    var btnA = document.createElement("button");
    
    btnD.innerText="Delete";
    btnA.innerText="Done";

    list.appendChild(li);
    li.innerText = title;

    li.appendChild(btnD);
    li.appendChild(btnA);


    btnA.addEventListener("click", function() {
        if(this.innerText === "Done"){
            this.innerText = "Undo";
            this.parentElement.className = "out";    
        }
        else {
           this.innerText = "Done"; 
           this.parentElement.className = "";
        }
        
    });

    btnD.addEventListener("click", function() {
        this.parentElement.remove();
    });

    // clears the input form by setting the value of an input with an id of title to an empty string
    this.title.value="";
});
