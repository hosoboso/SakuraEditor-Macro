# サクラエディタマクロ置き場
[サクラエディタ](https://github.com/sakura-editor/sakura)をHTMLエディタとして活用する時用マクロ置き場です。
HTML手打ちの人向け。

他の方が作ったマクロをちょっと手入れしただけのものもあります。

マクロの登録方法はヘルプ参照。
共通設定→マクロでファイルを登録、適当なショートカットに登録したり、カスタムメニュー→右クリックメニューに入れるなどしてください。

### p.js及びp.mac

    <p>hogehoge</p>
のようにテキストを挟むタグ変換。
pをdivやH1など他のタグに変更して他のタグのマクロも作成できる。

### img.mac

image.jpgを
    <img src="image.jpg" alt="">
と変換。

### brreplace.mac

選択テキストの末尾に<br>追加。

### commentout.mac

選択テキストをコメントアウト。

### list.js

選択テキストをリストタグに変換。

### table.js

選択テキストをテーブルタグに変換。

### href.js

    hogehoge
    ↓
    <a href="hogehoge" target="_blank">hogehoge</a>
に変換。

### hexadecimal.js

何の文字でも16進数の数値文字参照に変換。

### htmlentity.js

HTML頻出の文字参照置換。選択文字列中の&,<,>,",'のみ置換する。

## 他の方が作ったおすすめマクロ

[直前の閉じていない HTML/XML タグを閉じる](https://sakura-editor.sourceforge.net/cgi-bin/cyclamen/cyclamen.cgi?log=macro&tree=c546)

[選択したテキストをファイル名として開く](https://sakura-editor.github.io/bbslog/sf/macro/134.html)

[VSライクなhtml終タグ自動補完](https://sakura-editor.github.io/bbslog/sf/macro/341.html)
