#pragma once
class Global
{
public:
	Global();
	~Global();
public:
	DWORD dwTimerId = 0;
	int a[22][22] = { 0 };//������״����
	int next[3][3] = { 0 };//��һ������
	int map[22][22] = { 0 };
	int other[22][22] = { 0 };
	int x;//�������״
	int c;
	int soce = 0;//����
	int f = 17;
	TCHAR szTextBuf[20]; //static �ؼ��ı�����������
	int n = 5;
	int y = 0;
	int state;//�ж��������������Ǹ���
	int qwe = 0;//��ʼ��Ϸ���ĺ�ʹ�Ͳ���ʹ
	int nextone = 0;
	int rev1[22][22];
	int fin[22][22];
	HMENU hRoot;
	int connectstate;
	int rev[22][22];
	RECT rect;
	int test = 0;
};

