let userName = prompt("Hiya can I get your Username?");
    document.write(userName)


function rateMrt() {
    let userAnswer = prompt('Betwwen 1-5. Select how many Unicorns MR. T must sacrifice to Cthulu so you can believe in yourself?');
    while (userAnswer < 1 || userAnswer > 5) {
        userAnswer = prompt('Incorrect.  Please select a number 1 - 5');
    }
    for(let i = 0; i < userAnswer; i++){
        document.write('<img src="img/MR_T_Background.jpg" />')
    }
}