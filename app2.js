
function rateMrt() {
    let userAnswer = prompt('Please rate Mr.T from 1-5 unicorns*');
    while (userAnswer < 1 || userAnswer > 3){
        userAnswer = prompt('Incorrect.  Please select a number 1 - 3');
    }
    for(let i = 0; i < userAnswer; i++){
        document.write('<img src="img/MR_T_Background.jpg"/>')
    }
}
