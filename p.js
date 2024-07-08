// タグ入力

// 入力したいタグ　他タグのマクロはここを変更して作ればOK
var Tag = "p";

// <div class=""></div>のようにグローバル属性も入れたいならここに入力
// var str = "class";
// var attribute = " " + str + "=\"\"";

//グローバル属性なしの場合
var attribute = "";

// テキストが未選択の場合はタグだけ入力
// テキストが選択されていれば選択されたテキストをタグで挟む
if(Editor.GetSelectedString(0).length == 0) {
	var ClipboardText = Editor.GetClipboard(0);
	var ClipboardTag = "<" + Tag + attribute + ">" + "</" + Tag + ">";
	Editor.InsText(ClipboardTag);
} else {
	var Selecttext = Editor.GetSelectedString(0);
	var SelectTag = "<" + Tag  + attribute + ">" + Selecttext + "</" + Tag + ">";
	Editor.InsText(SelectTag);
}

//サクラエディタの場合、この手のタグ入力はmacファイルの方が簡単
