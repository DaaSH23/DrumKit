
for (var i=0; i<7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    
    buttonAction(buttonInnerHTML);

    animation(buttonInnerHTML);

    });
}

document.addEventListener("keypress", function(event) {
    buttonAction(event.key);

    animation(event.key);
});


function buttonAction(key) {

    switch (key) {
        case "w": var tom1 = new Audio('sounds/tom-1.mp3');
                    tom1.play();
                    break;
        case 'a': var tom2 = new Audio('sounds/tom-2.mp3');
                  tom2.play();
                  break;

        case 's': var tom3 = new Audio('sounds/tom-3.mp3');
                    tom3.play();
                    break;

        case 'd': var tom4 = new Audio('sounds/tom-4.mp3');
                    tom4.play();
                     break;
        case 'j': var kb = new Audio('sounds/kick-bass.mp3');
                    kb.play();
                    break;
        case 'k': var snare = new Audio('sounds/snare.mp3');
                    snare.play();
                    break;
        case 'l': var crash = new Audio('sounds/crash.mp3');
                    crash.play();
                    break;
        default: console.log(buttonInnerHTML);
        
        }

}

function animation(currentkey) {
    var activeBtn = document.querySelector("." + currentkey);
    activeBtn.classList.add("pressed");

    setTimeout(function() {
        activeBtn.classList.remove("pressed");
    }, 100);
}