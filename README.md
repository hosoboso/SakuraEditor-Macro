# サクラエディタマクロ置き場
[サクラエディタ](https://github.com/sakura-editor/sakura)をHTMLエディタとして活用する時用マクロ置き場です。  
HTML手打ちの人向け。

サクラエディタ32bit Ver. 2.4.2.6048で動作確認済みです。  
他の方が作ったマクロをちょっと手入れしただけのものもあります。  
マクロの登録方法はヘルプ参照。  
共通設定→マクロでファイルを登録、適当なショートカットに登録したり、カスタムメニュー→右クリックメニューに入れるなどしてください。

## [p.js](p.js)及び[p.mac](p.mac)

```HTML
<p>hogehoge</p>
```
のようにテキストを挟むタグ変換。  
pをdivやH1など他のタグに変更して他のタグのマクロも作成可能。  
  
選択テキストなしで実行で雛形入力、それ以外は選択テキストをタグで挟みますが、キーマクロ(.mac)版は、処理上、選択テキストなしで実行すると、その時点でクリップボードに入っていたテキストをタグで挟むことになります。  

## [pbr.js](pbr.js)

選択したテキスト段落を<p></p>で挟み込み＋内部の改行には<br>を追加します。  
具体的には

```HTML
明日の
天気は、
晴れ。
```
を
```HTML
<p>明日の<br>
天気は、<br>
晴れ。</p>
```
にタグ変換。  

## [img.js](img.js)及び[img.mac](img.mac)

```HTML
<img src="" alt="">
```
を入力します。  
  
JScript版は、選択テキストなしなら上の雛形だけ入力。    
1行目に画像ファイルのアドレス、2行目にalt属性を記述して選択して実行すると入力します。  
  
例：
```HTML
map.jpg
公園の地図
```
というテキストを2行選択して実行すると
```HTML
<img src="map.jpg" alt="公園の地図">
```
と変換します。  
3行以上選択しても3行目以降は無視するので注意（3行目以降はそのままで変換なし）。  
1行のみ選択の場合は画像ファイルのアドレスのみ入力。  

## [brreplace.mac](brreplace.mac)

選択テキストの末尾に
```HTML
<br>
```
を追加。

## [commentout.mac](commentout.mac)

選択テキストをコメントアウト。

## [list.js](list.js)

選択テキストをリストタグに変換。

```HTML
aaa
bbb
ccc

↓

<ul>
	<li>aaa</li>
	<li>bbb</li>
	<li>ccc</li>
</ul>
```

## [table.js](table.js)

選択テキストをテーブルタグに変換。

```HTML
aaa	111
bbb	222
ccc	333

↓

<table>
<thead>
	<tr><th>aaa</th><th>111</th></tr>
</thead>
<tbody>
	<tr><td>bbb</td><td>222</td></tr>
	<tr><td>ccc</td><td>333</td></tr>
</tbody>
</table>
```

## [href.js](href.js)

選択テキストhogehogeを、
```HTML
<a href="hogehoge" target="_blank">hogehoge</a>
```
に変換。

## [hexadecimal.js](hexadecimal.js)

何の文字でも16進数の数値文字参照に変換。
```HTML
♥ → &#x2665;
♪ → &#x266a;
```
## [htmlentity.js](htmlentity.js)

HTML頻出の文字参照置換。選択文字列中の
```HTML
&
<
>
"
'
```
のみ
```HTML
&amp;
&lt;
&gt;
&quot;
&apos;
```
に置換する。

## 他の方が作ったおすすめマクロ

### [直前の閉じていない HTML/XML タグを閉じる](https://sakura-editor.sourceforge.net/cgi-bin/cyclamen/cyclamen.cgi?log=macro&tree=c546)

> [!TIP]
> 上マクロの「閉じタグを省略可能な要素名」はHTML5に対応していないので、[Void element （空要素）](https://developer.mozilla.org/ja/docs/Glossary/Void_element)を参考に書き直すと良いです。

### [VSライクなhtml終タグ自動補完](https://sakura-editor.github.io/bbslog/sf/macro/341.html)

> [!TIP]
> こちらも、「HTMLの場合は、タグの種類によっては終タグがいらない」部分がHTML5に対応していないので必要なら修正。

### [選択したテキストをファイル名として開く](https://sakura-editor.github.io/bbslog/sf/macro/134.html)

上マクロに以下の処理をした私家改造版[openfile.js](openfile.js)もUPしてあります。  
・サクラエディタで開く拡張子を指定  
・その他に、指定した拡張子を関連付けられたアプリケーションで開く処理（画像ファイルなどを登録すると、開いて確認できます）