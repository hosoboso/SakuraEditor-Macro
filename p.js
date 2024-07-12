// タグ入力

// 入力したいタグ　他タグのマクロはここを変更して作ればOK
var Tag = "p";

// <div class=""></div>のようにグローバル属性も入れたいならここに入力
// var str = "class";
// var attribute = " " + str + "=\"\"";

//グローバル属性なしの場合
var attribute = "";

// テキストが未選択の場合はタグだけ入力 Left(0)でカーソル位置を戻す
if(Editor.GetSelectedString(0).length == 0) {
	Editor.InsText("<" + Tag + attribute + ">" + "</" + Tag + ">");
	for (var i = 0; i < (Tag.length + 3); i++) {
		Left(0);
	}
// テキストが選択されていれば選択されたテキストをタグで挟む
} else {
	var Selecttext = Editor.GetSelectedString(0);
	var SelectTag = "<" + Tag  + attribute + ">" + Selecttext + "</" + Tag + ">";
	Editor.InsText(SelectTag);
}

//サクラエディタの場合、この手のタグ入力はmacファイルの方が簡単
