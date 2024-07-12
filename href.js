// アドレスを<a href="hogehoge" target="_blank">hogehoge</a>に変換

// target="_blank"を入れる場合
var Targetblank = " target=\"_blank\"";
// target="_blank"がいらない場合
// var Targetblank = "";

// テキストが未選択の場合クリップボードのテキストでリンクを作る
// テキストが選択されていれば選択されたテキストでリンクを作る
if(Editor.GetSelectedString(0).length == 0) {
	var ClipboardText = Editor.GetClipboard(0);
	var ClipboardHref = "<a href=\"" + ClipboardText + "\"" + Targetblank + "></a>";
	Editor.InsText(ClipboardHref);
} else {
	var Selecttext = Editor.GetSelectedString(0);
	var SelectHref = "<a href=\"" + Selecttext + "\"" + Targetblank + ">" + Selecttext + "</a>";
	Editor.InsText(SelectHref);
}