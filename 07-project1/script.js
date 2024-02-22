const buttons = document.querySelector('.button')
const body = document.querySelector('body')
buttons.array.forEach(function(button)  {
    button.addEventListener('click' , function(e){
        if (e.target.id === "one") {
           body.style.backgroundColor =  e.target.id
        }

        if (e.target.id === "two") {
            body.style.backgroundColor =  e.target.id
         }

         if (e.target.id === "three") {
            body.style.backgroundColor =  e.target.id
         }

         if (e.target.id === "four") {
            body.style.backgroundColor =  e.target.id
         }

         if (e.target.id === "five") {
            body.style.backgroundColor =  e.target.id
         }
    })
    
});