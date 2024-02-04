let cvs;// キャンバス
let cvs2;

let player;  //プレイヤー
let player2;
let player3;
let player4;
let player5;

function setup(){

	// Canvas
	const canvas = createCanvas();
	canvas.parent("my-canvas");


	// キャンバスの準備
	//cvs = new Canvas(200, 200);
	//cvs2 = Canvas(100, 400);
	world.gravity.y = 0;// 重力
	frameRate(60);// フレームレート

	//プレイヤーの準備
	player = new Sprite(100, 100);  //x、y座標
	player.width = 200;  //幅
	player.height = 50;  //高さ
	player.color = "black" //色
	player.image = "./images/kintore_1.png"  //画像
	player.collider = "dynamic"  //物理演算有効
	

	//プレイヤー2の準備
	player2 = new Sprite(100, 100);  //x、y座標
	player2.width = 200;  //幅
	player2.height = 50;  //高さ
	player2.color = "black" //色
	player2.image = "./images/kintore_1.png"  //画像
	player2.collider = "dynamic"  //物理演算有効
	player2.vel.x = +2;

	//プレイヤー2の準備
	player3 = new Sprite(100, 100);  //x、y座標
	player3.width = 200;  //幅
	player3.height = 50;  //高さ
	player3.color = "black" //色
	player3.image = "./images/kintore_1.png"  //画像
	player3.collider = "dynamic"  //物理演算有効
	player3.vel.x = -2;

	//プレイヤー4の準備
	player4 = new Sprite(100, 100);  //x、y座標
	player4.width = 200;  //幅
	player4.height = 50;  //高さ
	player4.color = "black" //色
	player4.image = "./images/kintore_1.png"  //画像
	player4.collider = "dynamic"  //物理演算有効
	player4.vel.y = +2;

	//プレイヤー5の準備
	player5 = new Sprite(100, 100);  //x、y座標
	player5.width = 200;  //幅
	player5.height = 50;  //高さ
	player5.color = "black" //色
	player5.image = "./images/kintore_1.png"  //画像
	player5.collider = "dynamic"  //物理演算有効
	player5.vel.y = -2;

}

function draw(){
	background("silver");// 背景色
	

	//const odd = floor(frameCount%255);
	//background(odd);

	if (kb.presses("left")) {  //左キー
		player.vel.x = -5;  //左に移動
	}
	if (kb.presses("right")) {
		player.vel.x = +5;
	}
	if (kb.presses("up")) {
		player.vel.y = -5;
	}
	if (kb.presses("down")) {
		player.vel.y = +5;
	}

	//右から出たら左へ
	if (width < player.x) {
		player.x = 0;
	}

	if (player.x < 0) {
		player.x = width;
	}

	if (height < player.y) {
		player.y = 0;
	}

	if (player.y < 0) {
		player.y = height
	}

	//右から出たら左へ
	if (width < player2.x) {
		player2.vel.x = -5;
	}

	if (player2.x < 0) {
		player2.vel.x = +5;
	}

	if (height < player2.y) {
		player2.vel.y = -5;
	}

	if (player2.y < 0) {
		player2.vel.y = +5;
	}



	if (width < player3.x) {
		player3.vel.x = -5;
	}

	if (player3.x < 0) {
		player3.vel.x = +5;
	}

	if (height < player3.y) {
		player3.vel.y = -5;
	}

	if (player3.y < 0) {
		player3.vel.y = +5;
	}




	if (width < player4.x) {
		player4.vel.x = -5;
	}

	if (player4.x < 0) {
		player4.vel.x = +5;
	}

	if (height < player4.y) {
		player4.vel.y = -5;
	}

	if (player4.y < 0) {
		player4.vel.y = +5;
	}



	if (width < player5.x) {
		player5.vel.x = -5;
	}

	if (player5.x < 0) {
		player5.vel.x = +5;
	}

	if (height < player5.y) {
		player5.vel.y = -5;
	}

	if (player5.y < 0) {
		player5.vel.y = +5;
	}
}