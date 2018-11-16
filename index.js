var total = 0; //total count
var clickers = 0; //How many added to total per second, not including clicks

function increment(num){ //function which increases total by an amount, num
  total += num;
  $("#display").text(total);
}

function buyClicker(){ //buy a new clicker
  var clickerCost = Math.floor(10 * Math.pow(1.1, clickers)); //cost of cursor
  if(total >= clickerCost){
    clickers += 1;
    total -= clickerCost;
    $("#auto-clicker").text(clickers);
    $("#display").text(total);
  };
  var nextCost = Math.floor(10 * Math.pow(1.1,clickers)); //works out the cost of the next cursor
  $("#auto-clicker-cost").text(nextCost);
}
$(document).ready(function(){  $("#auto-clicker-card").click(function(){
    buyClicker();
  });
});

window.setInterval(function(){ //run this every second

  increment(clickers);

  if(total == 10){ //Check whether total is enough to show new item
    $("#auto-clicker-card").show();
  }
}, 1000);
