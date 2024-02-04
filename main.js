console.log("main.js!!");

let counter = 0;  //カウンター(大域変数)
let intervalID = null;  //インターバルID
let intervalID2 = null;
let counter2 = 0;

$(document).ready(()=>{
	console.log("Ready");

	$("#btn").click (() => {

		const strA = $("#input_a").val();
		console.log("strA:", strA);

		if (strA === "") {
			console.log("strAは空文字です");
			$("#msg_info").text("トレーニングタイムを入力してください");
			return;  //ここで停止
		}

		const strB = $("#input_b").val();
		console.log("strB:", strB);

		if (strB === "") {
			console.log("strBは空文字です");
			$("#msg_info").text("インターバルを入力してください");
			return;
		}

		const strC = $("#input_c").val();
		console.log("strC:", strC);

		if (strC === "") {
			console.log("strCは空文字です");
			$("#msg_info").text("繰り返し回数を入力してください")
		}

		//文字から数値に変換
		const numA = parseInt(strA);

		//数値かどうか、確認
		if(Number.isInteger(numA) === false) {  //numAは数字じゃない
			console.log("numAは数値ではありません");
			$("#msg_info").text("トレーニングタイムに数値を入力してください");
			return;
		}

		//文字から数値に変換
		const numB = parseInt(strB);

		//数値かどうか、確認
		if(Number.isInteger(numB) === false) {  //numBは数字じゃない
			console.log("numBは数値ではありません");
			$("#msg_info").text("インターバルに数値を入力してください");
			return;
		}

		//文字から数値に変換
		const numC = parseInt(strC);

		//数値かどうか、確認
		if(Number.isInteger(numC) === false) {  //numCは数字じゃない
			console.log("numCは数値ではありません");
			$("#msg_info").text("繰り返し回数に数値を入力してください");
			return;
		}


		if(Number.isInteger(numA) === true){
			if(Number.isInteger(numB) === true){
				if(Number.isInteger(numC) === true){

					console.log("データが正しく入力されています");
					$("#msg_info").text("トレーニング");
					$("#btn").text("スタート")
					$("#my_count").text(numA);
					counter = numA;
					counter2 = numB;
					
					//ボタンのクリックイベント
					$("#btn").click(() => {
						
						if (counter >= 0) {
						//インターバルを開始してIDを格納
						intervalID = setInterval(() =>{
							console.log("やっほー");
							counter--;  //カウンターを-1
							$("#my_count").text(counter);  //カウンターを表示
							//わけわかめ
						}, 1000);
						
						}else if (counter < 0) {
							clearInterval(intervalID);
							intervalID2 = setInterval(() =>{
								console.log("インターバル");
								counter2--;  //カウンターを-1
								$("#my_count").text(counter2);  //カウンターを表示
							}, 1000);


						}

					});

					//return;
				}
			}
		}

	});
	
});