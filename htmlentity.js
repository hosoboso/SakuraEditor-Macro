//HTML頻出の文字参照置換　選択文字列中の&,<,>,",'のみ置換する

var str = Editor.GetSelectedString(0);
str = str.replace(/&/g, "&amp;");
str = str.replace(/\</g, "&lt;");
str = str.replace(/\>/g, "&gt;");
str = str.replace(/"/g, "&quot;");
str = str.replace(/'/g, "&apos;");
Editor.InsText(str);