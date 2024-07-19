/*
openFile SakuraEditor用 私家改造版

これはakkun氏によるサクラエディタ用マクロopenFileを個人用に書き換えたものです。
選択したテキストをファイルとしてサクラエディタ（別タブ）で開きます。
64行目～69行目はおまけとして
指定した拡張子を関連付けられたアプリケーションで開く処理を入れています
（画像ファイルなどを登録すると、開いて確認できます）

相対パス・絶対パス対応。
ScriptControlを使用している都合で、
SJISで保存しないとダイアログの日本語が文字化けします。

以下「＊」がついたコメントは私・hosobosoによる追記
*/

//openFile
//選択したテキストをファイル名として開く

// ＊エラーダイアログ用シェル
if (typeof(Shell) == "undefined") {
	Shell = new ActiveXObject("WScript.Shell");
}
// ＊ファイル及びフォルダが存在するか確認するための「FileSystemObject」オブジェクト生成
var fso = new ActiveXObject( "Scripting.FileSystemObject" );

var dir = Editor.getFilename();
var selected = Editor.GetSelectedString();
var p = 0;	//親階層数

//選択文字列がフルパスかどうかの判定
var textfile;
if (selected.search(/^[a-z]:\\/i)>=0){
	var textfile = selected;
} else {
	//選択文字列がフルパスではない場合
	//親階層の検索
	while( selected.search(/^\.\.\\/) != -1 ){
		selected = selected.substring(3);
		p++;
	}
	//現在のファイルパスからファイル名を取り除く
	do {
		if ( (n = dir.lastIndexOf("\\")) != -1){
			var dir = dir.substring(0,n);
		}
		p--;
	} while(p>=0);
	var textfile = dir + '\\' + selected;
}

if(selected.length == 0) {
	Shell.Popup("テキストを選択してください。", 0, "エラー", 0);
//＊FileExists メソッドで、選択テキストtextfileというファイルが存在しているかどうかの判定
} else if (fso.FileExists(textfile)) {
	if (/\.(htm|html|shtml|css|js|xml)$/i.test(selected)) {
//＊ファイルとして開く拡張子指定 好みで追加・削除してください
	if ((Shell.Popup("実行しますか？", 0, "確認", 4)) == 6) {
			Editor.FileOpen(textfile);
	}
	//＊ 58行目のShell.Popupで、実行するか確認ダイアログを出すようにしています。
	//＊ 必要ないなら58、60行目をコメントアウトしてください。

// ＊ここからおまけ、指定した拡張子を関連付けられたアプリケーションで開きます
	} else if (/\.(jpg|jpeg|png|gif|svg|avif|webp)$/i.test(selected)) {
		if ((Shell.Popup("関連付けられたアプリケーションで開きます。\n実行しますか？", 0, "確認", 4)) == 6){
			Shell.Run(textfile);
		}
// ＊おまけここまで、必要ないなら削除かコメントアウトしてください

	} else {
	Shell.Popup("選択した文字列は\nファイルとして開く拡張子に指定されていません。", 0, "エラー", 0);
	}
} else {
	Shell.Popup("選択した文字列は\nファイルとして開くことができません。", 0, "エラー", 0);
}

/*
＊個人メモ
Popupメソッド
http://sakura.qp.land.to/SakuraMacro/usage/popup.html
http://sakura.qp.land.to/SakuraMacro/usage/MessageBox.html

FileExists メソッド
https://learn.microsoft.com/ja-jp/office/vba/language/reference/user-interface-help/fileexists-method
*/