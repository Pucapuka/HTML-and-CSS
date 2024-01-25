var vez = "X"
function change(){
    let button = document.getElementById('a1-button');
  	if (vez==="O"){
  	    button.innerHTML="O";
  	    button.style.color = "red";
  	    vez = "X";
  	    button.disabled="true";
  	}else{
  	    button.innerHTML="X";
  	    button.style.color = "green";
  	    vez="O";
  	    button.disabled="true";
  	}
  	
}
