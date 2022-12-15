 const listeInvites = document.querySelector("#listeInvites");
 const invite = document.querySelector("#invite");


function ajouterInvite(){
 let li = document.createElement("li");
 li.textContent = invite.value;
 listeInvites.append(li);
 invite.value = "";
}

function supprimerInvite(){
  listeInvites.lastChild.remove();
}




