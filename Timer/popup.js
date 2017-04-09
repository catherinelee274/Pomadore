var enterRounds = document.getElementById('enterbutton');
var studyMinutes = 3;

function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
		
        display.textContent = minutes + ":" + seconds; 


        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000); //first parameter is thing to be executed, second one is time to wait in milliseconds before it happens again
	

}

window.onload = function () {
	enterRounds.addEventListener("click",function(){
		var input = document.getElementById('exampleInputName2').value
		console.log(input)

		for (var i=0;i<input;i++){
			
			var fiveMinutes = 60 * studyMinutes;
			display = document.querySelector('#time');
			startTimer(fiveMinutes, display);
			
		}
	});
	
	
	
    
};
