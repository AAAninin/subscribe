#include "stdafx.h"
#include "createmenu.h"
extern   Global s;

createmenu::createmenu()
{
	s.hRoot = CreateMenu();
	HMENU pop1 = CreatePopupMenu();
	AppendMenu(s.hRoot,
		MF_POPUP,
		(UINT_PTR)pop1,
		"����");
	// һ�ַ�����ʹ��AppendMenu����  
	AppendMenu(pop1,
		MF_STRING,
		IDM_OPT1,
		"��������");
	AppendMenu(pop1,
		MF_STRING,
		IDM_OPT2,
		"��������");
}


createmenu::~createmenu()
{
}
