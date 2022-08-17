const dayObj = prompt("Write a date Ex.(1 Jan 2023)");

function updateTime(){
		const destTime = new Date(dayObj);
		const actTime = new Date();
		const secondsLeft = Math.floor((destTime - actTime) / 1000);

		let days = addZeros(Math.floor(secondsLeft / (3600*24)));
		let hours = addZeros(Math.floor(secondsLeft % (3600*24) / 3600));
		let minutes = addZeros(Math.floor((secondsLeft % 3600 / 60)));
		let seconds = addZeros(Math.floor(secondsLeft % 60));

		if(secondsLeft < 0) {
			alert("You have entered a date that has already passed, please, try again");
			document.querySelector("body").style.visibility = "hidden";
			location.reload();
		}
		else{
			if(isNaN(days) || isNaN(hours) || isNaN(minutes) || isNaN(seconds)){
				alert("Incorrect date format!");
				document.querySelector("body").style.visibility = "hidden";
				location.reload();
			}
		}

		document.querySelector(".time-h1").textContent = "Time left for: " + dayObj.toUpperCase();
		document.querySelector(".days").textContent = days;
		document.querySelector(".hours").textContent = hours;
		document.querySelector(".minutes").textContent = minutes;
		document.querySelector(".seconds").textContent = seconds;
}

function addZeros(time){
	return time < 10 ? `0${time}` : time;
}

function reloadPage(){
	location.reload();
}

updateTime();
setInterval(updateTime, 1000);