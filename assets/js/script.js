var nextBtn= document.querySelector(".next")
var prevBtn= document.querySelector(".prev")
var project_img= document.getElementsByClassName("project-img")

project_img[0].style.display="block"


nextBtn.addEventListener("click", next_function);

function next_function() {
    for(var i=0; i<project_img.length-1; i++){
       if(project_img[project_img.length-1].style.display!=="block" && project_img[i].style.display=="block"){
            project_img[i].style.display="none"
            project_img[i+1].style.display="block"
           return;
        }if(project_img[project_img.length-1].style.display=="block"){
            project_img[project_img.length-1].style.display="none"
            project_img[0].style.display="block"
            i=0
            return;
        }    
    }
}


prevBtn.addEventListener("click", prev_function);

function prev_function() {
    for(var i=project_img.length-1; i>0; i--){
       if(project_img[0].style.display!=="block"&&project_img[i].style.display=="block"){
            project_img[i].style.display="none"
            project_img[i-1].style.display="block"
            return;
        }
        if(project_img[0].style.display=="block"){
            project_img[0].style.display="none"
            project_img[project_img.length-1].style.display="block"
            i=project_img.length-1
            console.log(i)
            return;
        }    
    }
}
