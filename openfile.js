/*
openFile ���Ɖ�����

�����akkun���ɂ��openFile���l�p�ɏ������������̂ł��B
�G���[�_�C�A���O�p�V�F�����g�p���Ă���s���ŁA
SJIS�ŕۑ����Ȃ��ƃG���[�_�C�A���O�̓��{�ꂪ�����������܂��B
�G���[���ɉ������Ȃ��悤�ɂ���̂ł����
UTF-8�ŕۑ����Ă����Ȃ��̂�
18�`21�s�A47�`51�s���R�����g�A�E�g���Ă��������B

�ȉ��u���v�������R�����g�͎��Ehosoboso�ɂ��ǋL
*/

//openFile
//�I�������e�L�X�g���t�@�C�����Ƃ��ĊJ��

// ���G���[�_�C�A���O�p�V�F��
if (typeof(Shell) == "undefined") {
	Shell = new ActiveXObject("WScript.Shell");
}

var dir = Editor.getFilename();
var selected = Editor.GetSelectedString();
var p = 0;	//�e�K�w��

if(/\.(htm|html|shtml|css|js)$/.test(selected)){
// ���t�@�C���Ƃ��ĊJ���g���q�w��
	//�I�𕶎��񂪃t���p�X�Ȃ炻�̂܂܃I�[�v��
	if (selected.search(/^[a-z]:\\/i)>=0){
		Editor.FileOpen(selected);
	}else{
		//�e�K�w�̌���
		while( selected.search(/^\.\.\\/) != -1 ){
			selected = selected.substring(3);
			p++;
		}
		//���݂̃t�@�C���p�X����t�@�C��������菜��
		do{
			if ( (n = dir.lastIndexOf("\\")) != -1){
				var dir = dir.substring(0,n);
			}
			p--;
		}while(p>=0);
		Editor.FileOpen(dir + '\\' + selected);
	}

} else if (selected == 0) {
	Shell.Popup("�e�L�X�g��I�����Ă��������B", 0, "�G���[", 0);

} else {
	Shell.Popup("�I���e�L�X�g�̓t�@�C���Ƃ���\n�J�����Ƃ��ł��܂���B", 0, "�G���[", 0);
	
}
