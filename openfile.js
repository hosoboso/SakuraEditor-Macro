/*
openFile 私家改造版

これはakkun氏によるopenFileを個人用に書き換えたものです。
エラーダイアログ用シェルを使用している都合で、
SJISで保存しないとエラーダイアログの日本語が文字化けします。
エラー時に何もしないようにするのであれば
UTF-8で保存しても問題ないので
18～21行、47～51行をコメントアウトしてください。

以下「＊」がついたコメントは私・hosobosoによる追記
*/

//openFile
//選択したテキストをファイル名として開く

// ＊エラーダイアログ用シェル
if (typeof(Shell) == "undefined") {
	Shell = new ActiveXObject("WScript.Shell");
}

var dir = Editor.getFilename();
var selected = Editor.GetSelectedString();
var p = 0;	//親階層数

if(/\.(htm|html|shtml|css|js)$/.test(selected)){
// ＊ファイルとして開く拡張子指定
	//選択文字列がフルパスならそのままオープン
	if (selected.search(/^[a-z]:\\/i)>=0){
		Editor.FileOpen(selected);
	}else{
		//親階層の検索
		while( selected.search(/^\.\.\\/) != -1 ){
			selected = selected.substring(3);
			p++;
		}
		//現在のファイルパスからファイル名を取り除く
		do{
			if ( (n = dir.lastIndexOf("\\")) != -1){
				var dir = dir.substring(0,n);
			}
			p--;
		}while(p>=0);
		Editor.FileOpen(dir + '\\' + selected);
	}

} else if (selected.length == 0) {
	Shell.Popup("テキストを選択してください。", 0, "エラー", 0);

} else {
	Shell.Popup("選択テキストはファイルとして\n開くことができません。", 0, "エラー", 0);
	
}
