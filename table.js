// 選択行を<table>タグでテーブル化するマクロ
// 1行目を見出し固定
// 行はタブ区切り

// インデントを指定、タブなら
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
str = "<table>" + lineCode;
for (var i = 0; i < textArray.length; i++) {
	var strs = textArray[i].split(/\t/);
	if (i === 0) {
	str += "<thead>" + lineCode + indent + "<tr>";
	} else if (i === 1) {
	str += "<tbody>" + lineCode + indent + "<tr>";
	} else {
	str += indent + "<tr>";
	}
	for (var j = 0; j < strs.length; j++) {
		if (i === 0) {
			str += "<th>" + strs[j] + "</th>";
		}
		else {
			str += "<td>" + strs[j] + "</td>";
		}
	}
	if (i === 0) {
	str += "</tr>" + lineCode + "</thead>" + lineCode;
	} else {
	str += "</tr>" + lineCode;
	}
}
str += "</tbody>" + lineCode + "</table>";
Editor.InsText(str);