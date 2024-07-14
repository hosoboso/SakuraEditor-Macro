// 数値文字参照（文字参照）置換
// 選択した文字列なら何の文字でも16進数の数値文字参照に変換

var result = "";
var inputStrings = Editor.GetSelectedString(0);

// charCodeAt : 0スタートで、*番目の文字のUnicode("12371"や"12398")を返す。
// "&#x" ";"と連結して、数値文字参照を作成。
for (var i = 0; i < inputStrings.length; i++) {
	result += "&#x" + inputStrings.charCodeAt(i).toString(16) + ";";
}
// 結果表示
Editor.InsText(result);