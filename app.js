let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";

tg.MainButton.color="#2cab37";

let item = "";

$("[id^=btn]").on("click", function(e){
	alert(e.target.id);
	if (tg.MainButton.isVisible){
		tg.MainButton.hide();
	} else{
		item= e.target.id.substr(-1);
		tg.MainButton.setText("Вы выбрали товар "+item);
		
		tg.MainButton.show();
	}

});

tg.MainButton.onClick(function(){
	tg.sendData(item);
});


$("#usercard").add("p").text(`${tg.initDataUnsafe.user.first_name}`);
