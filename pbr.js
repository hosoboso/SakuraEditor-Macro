/*******************************************
<p></p>で挟み込み＋内部の改行には<br>を追加

明日の
天気は、
晴れ。

を

<p>明日の<br>
天気は、<br>
晴れ。</p>

に変換

改行なしなら<p></p>挟み込みのみ
*******************************************/

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

// 選択テキスト
var Selecttext = Editor.GetSelectedString(0);

// テキストが未選択の場合
if(Selecttext.length == 0) {
	Editor.InsText("<p></p>");
	for (var i = 0; i < 4; i++) {
		Left(0);
	}
} else {
	// 選択テキストを改行で分割
	var textArray = Selecttext.split(lineCode);
	var resultText = "<p>";
	for (var i = 0; i < textArray.length; i++) {
		if (i < textArray.length - 1) {
			resultText += textArray[i] + "<br>" + lineCode;
		} else {
			resultText += textArray[i] + "</p>";
		}
	}
	Editor.InsText(resultText);
}