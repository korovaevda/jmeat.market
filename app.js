let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";

tg.MainButton.color="#2cab37";

let item = "";

let btn1 = $("#btn1");
let btn2 = $("#btn2");
let btn3 = $("#btn3");
let btn4 = $("#btn4");
let btn5 = $("#btn5");
let btn6 = $("#btn6");

btn1.on("click", function(){
	if (tg.MainButton.isVisible){
		tg.MainButton.hide();
	} else{
		tg.MainButton.setText("Вы выбрали товар 1");
		item= "1";
		tg.MainButton.show();
	}

});

tg.MainButton.onClick(function(){
	tg.sendData(item);
});



$("#usercard").add("p").text(’${tg.initDataUnsafe.user.first_name}’)