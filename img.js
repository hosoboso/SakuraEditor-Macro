/*
<img src="" alt="">を入力
1行目に画像ファイルのアドレス、2行目にalt属性を記述して選択して実行すると入力します

例：

map.jpg
公園の地図

というテキストを2行選択して実行すると
<img src="map.jpg" alt="公園の地図">
と変換します
3行以上選択しても3行目以降は無視するので注意
1行のみ選択の場合は画像ファイルのアドレスのみ入力
*/

var Selecttext = Editor.GetSelectedString(0);

if(Selecttext.length == 0) {
	Editor.InsText("<img src=\"\" alt=\"\">");
	for (var i = 0; i < 9; i++) {
		Left(0);
	}
} else {
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
	var textArray = [];
	textArray = Selecttext.split(lineCode);
	
	// 選択テキストが1行のみの場合2行目を空欄にする
	if (textArray.length == 1){
		textArray[1] = "";
	}
	
	var SelectTag = "<img src=\"" + textArray[0] + "\" alt=\"" + textArray[1] + "\">";
	Editor.InsText(SelectTag);
	
	// 3行以上選択していた場合は以降にそのまま追加
	if (textArray.length > 1){
		for (var i = 2; i < textArray.length; i++) {
			Editor.InsText(lineCode + textArray[i]);
		}
	}
}