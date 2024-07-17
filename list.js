// 選択行を<ul><li>タグでリスト化するマクロ

// <li>タグの前に入れたいインデントを指定、タブなら
var indent = "\t";
// 半角スペース2個なら
// var indent = "  ";
// インデントなしなら
// var indent = "";

// 選択されている文字列を取得
var Selecttext = Editor.GetSelectedString(0);

// 改行コードで分岐
var lineCode;
switch (Editor.GetLineCode()) {
	case 0:
		lineCode = "\r\n";
		break;
	case 1:
		lineCode = "\r";
		break;
	case 2:
		lineCode = "\n";
		break;
}

// 選択テキストを改行で分割
var textArray = Selecttext.split(lineCode);

//インデント（indent）や改行位置（lineCode）は好みで変更してください
str = "<ul>" + lineCode;
for (var i = 0; i < textArray.length; i++) {
	str += indent + "<li>" + textArray[i] + "</li>" + lineCode;
	}
str += "</ul>";

Editor.InsText(str);
