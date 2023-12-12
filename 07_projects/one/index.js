const box = document.querySelectorAll('.box');
const body = document.querySelector('body');

box.forEach(function(box){
    box.addEventListener("click", function(e){
        switch (e.target.id) {
            case "violet":
                document.body.style.backgroundColor = e.target.id;
                break;
            case "indigo":
                document.body.style.backgroundColor = e.target.id;
                break;
            case "blue":
                document.body.style.backgroundColor = e.target.id;
                break;
            case "green":
                document.body.style.backgroundColor = e.target.id;
                break;    
            case "yellow":
                document.body.style.backgroundColor = e.target.id;
                break;    
            case "orange":
                document.body.style.backgroundColor = e.target.id;
                break;    
            case "red":
                document.body.style.backgroundColor = e.target.id;
                break;        
            default:
                break;
        }
    })
})