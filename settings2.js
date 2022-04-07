$(document).ready(function(){
	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    
	var percent 	= [8,10,12,15];
	var minMoney 	= [0.0025,0.25,2.5,10];
	var maxMoney	= [0.24999999,2.49999999,9.99999999,100];
	$("#amount").val(minMoney[0]);
	
	//Calculator
	function calc(){
		amount = parseFloat($("#amount").val());
		id = -1;
		var length = percent.length;
		var i = 0;
		do {
			if(minMoney[i] <= amount && amount <= maxMoney[i]){
				id = i;
				i = i + length;
			}
			i++
		}
		while(i < length)
		
		if(id != -1){

			profitDaily = amount / 100 * percent[id];
			profitDaily = profitDaily.toFixed(6);
			profitWeekly = profitDaily * 7;
			profitWeekly = profitWeekly.toFixed(6);
			profitMonthly = profitDaily * 30;
			profitMonthly = profitMonthly.toFixed(6);
			profitTotal = profitDaily * 100;
			profitTotal = profitTotal.toFixed(6);


			if(amount < minMoney[id] || isNaN(amount) == true){
				$("#profitDaily").text("Error!");
				$("#profitWeekly").text("Error!");
				$("#profitMonthly").text("Error!");
				$("#profitTotal").text("Error!");
			} else {
				$("#profitDaily").text(profitDaily);
				$("#profitWeekly").text(profitWeekly);
				$("#profitMonthly").text(profitMonthly);
				$("#profitTotal").text(profitTotal);
			}
		} else {
			$("#profitDaily").text("Error!");
			$("#profitWeekly").text("Error!");
			$("#profitMonthly").text("Error!");
			$("#profitTotal").text("Error!");
		}
	}
	if($("#amount").length){
		calc();
	}
	$("#amount").keyup(function(){
		calc();
	});
});