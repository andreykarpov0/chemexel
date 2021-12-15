window.onload = function () {
    
    let objects = document.querySelectorAll(".object");
    console.log(objects);
    for(let i = 0; i < objects.length; i++) {
        objects[i].onclick = function () {
            let params = this.querySelector(".objparams");
            if(params.style.display == "none")
            {
                params.style.display = "inline-block";
            }
            else
            {
                params.style.display = "none";
            }
        }
    }
}