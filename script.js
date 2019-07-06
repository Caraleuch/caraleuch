window.onload = function() {
    showSection("about");
}

function hideAll(){
    var sections = document.getElementById("sections").children;
    for (let i=0; i< sections.length; i++){
            sections[i].classList.add("hidden");
        }
    }

function showSection(id){
    hideAll();
 var section = document.getElementById(id);
 section.classList.remove("hidden");
}