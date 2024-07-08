// 選択行を<ul><li>タグでリスト化するマクロ

// <li>タグの前に入れたいインデントを指定、タブなら
var indent = "\t";
// 半角スペース2個なら
// var indent = "  ";
// インデントなしなら
// var indent = "";

// 選択されている文字列を取得
var text = Editor.GetSelectedString(0);

// 改行で分割
var lines = [];
var lineCodes = [];
var str = "";
for (var i = 0; i < text.length; i++) {
	var ch = text.substr(i, 1);
	if (ch === "\r") {
		var tmpstr = "\r";
		if (i + 1 < text.length && text.substr(i + 1, 1) == "\n") {
			i++;
			tmpstr += "\n";
		}
		lines.push(str);
		str = "";
		lineCodes.push(tmpstr);
	}
	else if (ch === "\n") {
		lines.push(str);
		str = "";
		lineCodes.push("\n");
	}
	else {
		str += ch;
	}
}
if (str != "") {
	lines.push(str);
	lineCodes.push("");
}

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

str = "<ul>" + lineCode;
for (var i = 0; i < lines.length; i++) {
	str += indent + "<li>" + lines[i] + "</li>" + lineCode;
	}
str += "</ul>";

Editor.InsText(str);
