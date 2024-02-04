console.log("utility.js!!");

// ダイアログを表示する関数(ボタンが1つ)
function showDialog(title="タイトル", body="ボディ", text="OK", onok=null){
	xdialog.open({
		title: title,
		body: body,
		style: "width: 90%; height: auto;",
		modal: false,
		buttons: {
			ok: {
				text: text,
				style: "border-radius: 8px; background: orange;"
			}
		},
		onok: (param)=>{if(onok) onok();},
	});
}