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

//インデント（indent）や改行位置（lineCode）は好みで変更してください
str = "<table>" + lineCode;
for (var i = 0; i < lines.length; i++) {
	var strs = lines[i].split(/\t/);
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