/*
openFile SakuraEditor�p ���Ɖ�����

�����akkun���ɂ��T�N���G�f�B�^�p�}�N��openFile���l�p�ɏ������������̂ł��B
�I�������e�L�X�g���t�@�C���Ƃ��ăT�N���G�f�B�^�i�ʃ^�u�j�ŊJ���܂��B
64�s�ځ`69�s�ڂ͂��܂��Ƃ���
�w�肵���g���q���֘A�t����ꂽ�A�v���P�[�V�����ŊJ�����������Ă��܂�
�i�摜�t�@�C���Ȃǂ�o�^����ƁA�J���Ċm�F�ł��܂��j

���΃p�X�E��΃p�X�Ή��B
ScriptControl���g�p���Ă���s���ŁA
SJIS�ŕۑ����Ȃ��ƃ_�C�A���O�̓��{�ꂪ�����������܂��B

�ȉ��u���v�������R�����g�͎��Ehosoboso�ɂ��ǋL
*/

//openFile
//�I�������e�L�X�g���t�@�C�����Ƃ��ĊJ��

// ���G���[�_�C�A���O�p�V�F��
if (typeof(Shell) == "undefined") {
	Shell = new ActiveXObject("WScript.Shell");
}
// ���t�@�C���y�уt�H���_�����݂��邩�m�F���邽�߂́uFileSystemObject�v�I�u�W�F�N�g����
var fso = new ActiveXObject( "Scripting.FileSystemObject" );

var dir = Editor.getFilename();
var selected = Editor.GetSelectedString();
var p = 0;	//�e�K�w��

//�I�𕶎��񂪃t���p�X���ǂ����̔���
var textfile;
if (selected.search(/^[a-z]:\\/i)>=0){
	var textfile = selected;
} else {
	//�I�𕶎��񂪃t���p�X�ł͂Ȃ��ꍇ
	//�e�K�w�̌���
	while( selected.search(/^\.\.\\/) != -1 ){
		selected = selected.substring(3);
		p++;
	}
	//���݂̃t�@�C���p�X����t�@�C��������菜��
	do {
		if ( (n = dir.lastIndexOf("\\")) != -1){
			var dir = dir.substring(0,n);
		}
		p--;
	} while(p>=0);
	var textfile = dir + '\\' + selected;
}

if(selected.length == 0) {
	Shell.Popup("�e�L�X�g��I�����Ă��������B", 0, "�G���[", 0);
//��FileExists ���\�b�h�ŁA�I���e�L�X�gtextfile�Ƃ����t�@�C�������݂��Ă��邩�ǂ����̔���
} else if (fso.FileExists(textfile)) {
	if (/\.(htm|html|shtml|css|js|xml)$/i.test(selected)) {
//���t�@�C���Ƃ��ĊJ���g���q�w�� �D�݂Œǉ��E�폜���Ă�������
	if ((Shell.Popup("���s���܂����H", 0, "�m�F", 4)) == 6) {
			Editor.FileOpen(textfile);
	}
	//�� 58�s�ڂ�Shell.Popup�ŁA���s���邩�m�F�_�C�A���O���o���悤�ɂ��Ă��܂��B
	//�� �K�v�Ȃ��Ȃ�58�A60�s�ڂ��R�����g�A�E�g���Ă��������B

// ���������炨�܂��A�w�肵���g���q���֘A�t����ꂽ�A�v���P�[�V�����ŊJ���܂�
	} else if (/\.(jpg|jpeg|png|gif|svg|avif|webp)$/i.test(selected)) {
		if ((Shell.Popup("�֘A�t����ꂽ�A�v���P�[�V�����ŊJ���܂��B\n���s���܂����H", 0, "�m�F", 4)) == 6){
			Shell.Run(textfile);
		}
// �����܂������܂ŁA�K�v�Ȃ��Ȃ�폜���R�����g�A�E�g���Ă�������

	} else {
	Shell.Popup("�I�������������\n�t�@�C���Ƃ��ĊJ���g���q�Ɏw�肳��Ă��܂���B", 0, "�G���[", 0);
	}
} else {
	Shell.Popup("�I�������������\n�t�@�C���Ƃ��ĊJ�����Ƃ��ł��܂���B", 0, "�G���[", 0);
}

/*
���l����
Popup���\�b�h
http://sakura.qp.land.to/SakuraMacro/usage/popup.html
http://sakura.qp.land.to/SakuraMacro/usage/MessageBox.html

FileExists ���\�b�h
https://learn.microsoft.com/ja-jp/office/vba/language/reference/user-interface-help/fileexists-method
*/