var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"],
btnHome:["homebtnHelp"]
}
;
	var bookConfig = {
	appName:'yunzhan365',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"yunzhan365",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"ShOW",
	ZoomButton:"",
	ZoomButtonVisible:"yES",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by yunzhan365',
	homePage : 'http://www.yunzhan365.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	shareObj = [{"name":"QQ空间","url":"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&title=${title}","logo":"../files/share_img/qzone.ico","title":"QQ空间"},{"name":"新浪微博","url":"http://v.t.sina.com.cn/share/share.php?url=${url}&title=${title}","logo":"../files/share_img/sina_weibo.ico","title":"新浪微博"},{"name":"腾讯微博","url":"http://service.weibo.com/share/share.php?title=${title}&url=${url}","logo":"../files/share_img/tencent_weibo.ico","title":"腾讯微博"},{"name":"人人网","url":"http://share.renren.com/share/buttonshare.do?link=${url}&title=${title}","logo":"../files/share_img/renren.ico","title":"人人网"}];
	
	bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingPicture="";bookConfig.loadingBackground="#110e0f";bookConfig.appLogoIcon="";bookConfig.appLogoLinkURL="";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.HomeURL="http://www.yunzhan365.com";bookConfig.appLogoOpenWindow="Blank";bookConfig.toolbarColor="#110e0f";bookConfig.iconColor="#e5e5e5";bookConfig.pageNumColor="#333333";bookConfig.iconFontColor="#FFFFFF";bookConfig.FlipSound="Disable";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.ShareButtonVisible="Show";bookConfig.socialShareSetting="<r><i><t>QQ空间</t><u>http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}</u><c>//book.yunzhan365.com/resourceFiles/share_img/qzone.ico</c></i><i><t>新浪微博</t><u>http://service.weibo.com/share/share.php?url=${url}</u><c>//book.yunzhan365.com/resourceFiles/share_img/sina_weibo.ico</c></i><i><t>腾讯微博</t><u>http://share.v.t.qq.com/index.php?c=share&amp;a=index&amp;url=${url}</u><c>//book.yunzhan365.com/resourceFiles/share_img/tencent_weibo.ico</c></i><i><t>人人网</t><u>http://widget.renren.com/dialog/share?resourceUrl=${url}</u><c>//book.yunzhan365.com/resourceFiles/share_img/renren.ico</c></i></r>";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ZoomButtonVisible="Enable";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.PrintButtonVisible="Yes";bookConfig.printWatermarkFile="";bookConfig.BackgroundSoundButtonVisible="Disable";bookConfig.BackgroundSoundURL="";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Yes";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.minZoomWidth="700";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.DownloadURL="";bookConfig.downloadConfig="";bookConfig.bgBeginColor="#6b5e53";bookConfig.bgEndColor="#6b5e53";bookConfig.bgMRotation="-90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.3";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.3";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="12";bookConfig.borderColor="#191919";bookConfig.outerCoverBorder="No";bookConfig.cornerRound="4";bookConfig.pageBackgroundColor="#e8e8e8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.3";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.showDoublePage="Yes";bookConfig.totalPagesCaption="";bookConfig.pageNumberCaption="";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.googleAnalyticsID="";bookConfig.languageSetting="Chinese";bookConfig.totalPageCount="16";bookConfig.largePageWidth="603";bookConfig.largePageHeight="825";bookConfig.bookTitle="Kyligence企业宣传册";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.productName="yunzhan365";
var language = [{"language":"Chinese","btnFirstPage":"\u7b2c\u4e00\u9875","btnNextPage":"\u4e0b\u4e00\u9875","btnLastPage":"\u6700\u540e\u4e00\u9875","btnPrePage":"\u524d\u4e00\u9875","btnDownload":"\u4e0b\u8f7d","btnPrint":"\u6253\u5370","btnSearch":"\u641c\u7d22","btnClearSearch":"\u6e05\u9664","frmSearchPrompt":"Clear","btnBookMark":"\u76ee\u5f55","btnHelp":"\u5e2e\u52a9","btnHome":"\u4e3b\u9875","btnFullScreen":"\u5168\u5c4f","btnDisableFullScreen":"\u666e\u5c4f","btnSoundOn":"\u6253\u5f00\u58f0\u97f3","btnSoundOff":"\u5173\u95ed\u58f0\u97f3","btnShareEmail":"\u5206\u4eab","btnSocialShare":"\u670b\u53cb\u5206\u4eab","btnZoomIn":"\u653e\u5927","btnZoomOut":"\u7f29\u5c0f","btnDragToMove":"\u62d6\u52a8\/\u79fb\u52a8","btnAutoFlip":"\u81ea\u52a8\u7ffb\u9875","btnStopAutoFlip":"\u505c\u6b62\u7ffb\u9875","btnGoToHome":"\u8fd4\u56de\u4e3b\u9875","frmHelpCaption":"\u5e2e\u52a9","frmHelpTip1":"\u53ef\u4ee5\u53cc\u51fb\u8fdb\u884c\u653e\u5927\u6216\u7f29\u5c0f","frmHelpTip2":"\u62d6\u52a8\u9875\u9762\u7684\u4e2a\u89d2\u53ef\u4ee5\u8fdb\u884c\u7ffb\u9875","frmPrintCaption":"\u6253\u5370\u7a97\u53e3","frmPrintBtnCaption":"\u6253\u5370","frmPrintPrintAll":"\u6253\u5370\u6240\u6709\u9875\u9762","frmPrintPrintCurrentPage":"\u6253\u5370\u5f53\u524d\u9875","frmPrintPrintRange":"\u6253\u5370\u8303\u56f4\uff1a","frmPrintExampleCaption":"\u4f8b\u5982\uff1a2,5,8-26","frmPrintPreparePage":"\u6b63\u5728\u51c6\u5907\u9875\uff1a","frmPrintPrintFailed":"\u6253\u5370\u5931\u8d25\uff1a","pnlSearchInputInvalid":"\uff08\u6700\u5c11\u9700\u8981\u8f93\u51653\u4e2a\u5b57\u7b26\uff09","loginCaption":"\u767b\u5f55","loginInvalidPassword":"\u4f60\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u6b63\u786e\uff01","loginPasswordLabel":"\u5bc6\u7801\uff1a","loginBtnLogin":"\u767b\u5f55","loginBtnCancel":"\u53d6\u6d88","btnThumb":"\u7f29\u7565\u56fe","lblPages":"\u9875\u6570\uff1a","lblPagesFound":"\u627e\u5230\u9875\u6570\uff1a","lblPageIndex":"\u9875","btnAbout":"\u5173\u4e8e","frnAboutCaption":"\u5173\u4e8e\u6211\u4eec","btnSinglePage":"\u5355\u9875","btnDoublePage":"\u53cc\u9875","btnSwicthLanguage":"\u5207\u6362\u8bed\u8a00","tipChangeLanguage":"\u8bf7\u5728\u4e0b\u9762\u9009\u62e9\u4e00\u79cd\u8bed\u8a00","btnMoreOptionsLeft":"\u66f4\u591a\u9009\u62e9","btnMoreOptionsRight":"\u66f4\u591a\u9009\u62e9","btnFit":"\u81ea\u52a8\u9002\u5e94","smallModeCaption":"\u70b9\u51fb\u5168\u5c4f","btnAddAnnotation":"\u52a0\u6ce8\u91ca","btnAnnotation":"\u6ce8\u91ca\u5217\u8868","FlipPageEditor_SaveAndExit":"\u4fdd\u5b58\u5e76\u9000\u51fa","FlipPageEditor_Exit":"\u9000\u51fa","DrawToolWindow_Redo":"\u91cd\u505a","DrawToolWindow_Undo":"\u64a4\u9500","DrawToolWindow_Clear":"\u6e05\u9664","DrawToolWindow_Brush":"\u7b14\u5237","DrawToolWindow_Width":"\u7b14\u5237\u5bbd\u5ea6","DrawToolWindow_Alpha":"\u7b14\u5237\u900f\u660e\u5ea6","DrawToolWindow_Color":"\u7b14\u5237\u9854\u8272","DrawToolWindow_Eraser":"\u64e6\u9664","DrawToolWindow_Rectangular":"\u77e9\u5f62","DrawToolWindow_Ellipse":"\u692d\u5706","TStuff_BorderWidth":"\u8fb9\u6846\u5bbd\u5e26","TStuff_BorderAlph":"\u8fb9\u6846\u900f\u660e\u5ea6","TStuff_BorderColor":"\u5b57\u4f53\u9854\u8272","DrawToolWindow_TextNote":"\u6587\u672c\u9644\u6ce8","AnnotMark":"\u4e66\u7b7e","lastpagebtnHelp":"\u6700\u540e\u4e00\u9875","firstpagebtnHelp":"\u7b2c\u4e00\u9875","homebtnHelp":"\u8fd4\u56de\u9996\u9875","aboubtnHelp":"\u5173\u4e8e","screenbtnHelp":"\u5728\u4e00\u4e2a\u5b8c\u6574\u7684\u7a97\u53e3\u4e2d\u6253\u5f00\u8be5\u5e94\u7528\u7a0b\u5e8f","helpbtnHelp":"\u6253\u5f00\u5e2e\u52a9\u7a97\u53e3","searchbtnHelp":"\u4ece\u4e66\u9875\u4e2d\u641c\u7d22","pagesbtnHelp":"\u9884\u89c8\u5c0f\u518c\u5b50\u7684\u7f29\u7565\u56fe","bookmarkbtnHelp":"\u6253\u5f00\u4e66\u7b7e","AnnotmarkbtnHelp":"\u6253\u5f00\u76ee\u5f55","printbtnHelp":"\u6253\u5370\u5c0f\u518c\u5b50","soundbtnHelp":"\u5f00\u542f\u6216\u5173\u95ed\u7684\u58f0\u97f3","sharebtnHelp":"\u53d1\u9001\u6d88\u606f","socialSharebtnHelp":"\u793e\u4ea4\u5206\u4eab","zoominbtnHelp":"\u653e\u5927","downloadbtnHelp":"\u4e0b\u8f7d\u5ba3\u4f20\u518c","pagemodlebtnHelp":"\u5355\u9875\u548c\u53cc\u9875","languagebtnHelp":"\u5207\u6362\u8bed\u8a00","annotationbtnHelp":"\u6dfb\u52a0\u6279\u6ce8","addbookmarkbtnHelp":"\u81ea\u5b9a\u4e49\u4e66\u7b7e","removebookmarkbtnHelp":"\u79fb\u9664\u4e66\u7b7e","updatebookmarkbtnHelp":"\u66f4\u65b0\u4e66\u7b7e","btnShoppingCart":"\u8d2d\u7269\u8f66\u6309\u94ae","Help_ShoppingCartbtn":"\u8d2d\u7269\u8f66","Help_btnNextPage":"\u4e0b\u9875","Help_btnPrePage":"\u4e0a\u9875","Help_btnAutoFlip":"\u81ea\u52a8\u7ffb\u9875","Help_StopAutoFlip":"\u505c\u6b62\u81ea\u52a8\u7ffb\u9875","btnaddbookmark":"\u6dfb\u52a0","btndeletebookmark":"\u5220\u9664","btnupdatebookmark":"\u66f4\u65b0","frmyourbookmarks":"\u4f60\u7684\u4e66\u7b7e","frmitems":"\u9879\u76ee","DownloadFullPublication":"\u6574\u4efd\u51fa\u7248\u7269","DownloadCurrentPage":"\u5f53\u524d\u9875","DownloadAttachedFiles":"\u9644\u4ef6","lblLink":"\u5206\u4eab\u94fe\u63a5","btnCopy":"\u590d\u5236\u6309\u94ae","infCopyToClipboard":"Your browser does not support clipboard.","restorePage":"\u662f\u5426\u4ece\u4e0a\u6b21\u7684\u4f4d\u7f6e\u5f00\u59cb","tmpl_Backgoundsoundon":"\u80cc\u666f\u97f3\u4e50\u5f00","tmpl_Backgoundsoundoff":"\u80cc\u666f\u97f3\u4e50\u5173","tmpl_Flipsoundon":"\u7ffb\u9875\u58f0\u5f00","tmpl_Flipsoundoff":"\u7ffb\u9875\u58f0\u5173","Help_PageIndex":"\u5f53\u524d\u9875\u7801","tmpl_PrintPageRanges":"\u9875\u8303\u56f4","tmpl_PrintPreview":"\u9884\u89c8","btnSelection":"\u9009\u62e9\u6587\u5b57","loginNameLabel":"\u60a8\u7684\u540d\u5b57:","btnGotoPage":"\u8df3\u81f3","btnSettings":"\u8bbe\u7f6e","soundSettingTitle":"\u79fb\u52a8\u7248\u58f0\u97f3\u6807\u9898","closeFlipSound":"\u7ffb\u9875\u58f0\u5f00\u5173","closeBackgroundSound":"\u80cc\u666f\u58f0\u5f00\u5173","frmShareCaption":"\u5206\u4eab","frmShareLinkLabel":"\u94fe\u63a5:","frmShareBtnCopy":"\u590d\u5236","frmShareItemsGroupCaption":"\u670b\u53cb\u5206\u4eab","TAnnoActionPropertyStuff_GotoPage":"\u8f6c\u5230\u9875","btnPageBack":"\u540e\u9000","btnPageForward":"\u524d\u8fdb","SelectTextCopy":"\u6587\u672c\u590d\u5236","selectCopyButton":"\u590d\u5236","TStuffCart_TypeCart":"\u8d2d\u7269\u8f66","TStuffCart_DetailedQuantity":"\u6570\u91cf","TStuffCart_DetailedPrice":"\u4ef7\u683c","ShappingCart_Close":"\u5173\u95ed","ShappingCart_CheckOut":"\u4ed8\u6b3e","ShappingCart_Item":"\u9879\u76ee","ShappingCart_Total":"\u603b\u8ba1","ShappingCart_AddCart":"\u6dfb\u52a0\u5230\u8d2d\u7269\u8f66","ShappingCart_InStock":"\u6709\u8d27","TStuffCart_DetailedCost":"\u8fd0\u8d39","TStuffCart_DetailedTime":"\u4ea4\u8d27\u65f6\u95f4","TStuffCart_DetailedDay":"\u5929\u6570(s)","ShappingCart_NotStock":"\u65e0\u8d27","btnCrop":"\u622a\u56fe","btnDragButton":"\u62d6\u52a8","btnFlipBook":"\u7ffb\u9875\u4e66","btnSlideMode":"\u6c34\u5e73\u6ed1\u52a8\u7ffb\u9875","btnSinglePageMode":"\u5355\u9875\u6a21\u5f0f","btnVertical":"\u4e0a\u4e0b\u7ffb\u9875\u6d4f\u89c8","btnHotizontal":"\u5de6\u53f3\u7ffb\u9875\u6d4f\u89c8","btnClose":"\u5173\u95ed","btnBookStatus":"\u89c6\u56fe","checkBoxInsert":"\u52a0\u5165\u5f53\u524d\u7f51\u9875","lblLast":"\u8fd9\u662f\u6700\u540e\u4e00\u9875\u3002","lblFirst":"\u8fd9\u662f\u7b2c\u4e00\u9875\u3002","lblFullscreen":"\u70b9\u51fb\u67e5\u770b\u5168\u5c4f","lblName":"\u540d\u79f0","lblPassword":"\u5bc6\u7801","lblLogin":"\u767b\u5f55","lblCancel":"\u53d6\u6d88","lblNoName":"\u7528\u6237\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\u3002","lblNoPassword":"\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a\u3002","lblNoCorrectLogin":"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002","btnVideo":"\u89c6\u9891\u753b\u5eca","btnSlideShow":"\u5e7b\u706f\u7247\u653e\u6620","btnPositionToMove":"\u9f20\u6807\u79fb\u52a8","lblHelp1":"\u62d6\u52a8\u9875\u9762\u89d2\u67e5\u770b","lblHelp2":"\u53cc\u70b9\u51fb\u653e\u5927\uff0c\u5728","lblCopy":"\u590d\u5236","lblAddToPage":"\u6dfb\u52a0\u5230\u9875\u9762","lblPage":"\u9875","lblTitle":"\u6807\u9898","lblEdit":"\u7f16\u8f91","lblDelete":"\u5220\u9664","lblRemoveAll":"\u5220\u9664\u6240\u6709","tltCursor":"\u5149\u6807","tltAddHighlight":"\u6dfb\u52a0\u9ad8\u4eae","tltAddTexts":"\u6dfb\u52a0\u6587\u672c","tltAddShapes":"\u6dfb\u52a0\u5f62\u72b6","tltAddNotes":"\u6dfb\u52a0\u6ce8\u91ca","tltAddImageFile":"\u6dfb\u52a0\u56fe\u50cf\u6587\u4ef6","tltAddSignature":"\u6dfb\u52a0\u7b7e\u540d","tltAddLine":"\u6dfb\u52a0\u76f4\u7ebf","tltAddArrow":"\u6dfb\u52a0\u7bad\u5934","tltAddRect":"\u6dfb\u52a0\u77e9\u5f62","tltAddEllipse":"\u6dfb\u52a0\u692d\u5706","lblDoubleClickToZoomIn":"\u53cc\u51fb\u8fdb\u884c\u653e\u5927\u3002","frmShareLabel":"\u5206\u4eab","frmShareInfo":"\u60a8\u53ef\u4ee5\u8f7b\u677e\u5730\u5206\u4eab\u672c\u51fa\u7248\u7269\u4e2d\u5bf9\u793e\u4ea4\u7f51\u7edc\u3002\u53ea\u9700\u70b9\u51fb\u4e0b\u9762\u7684\u76f8\u5e94\u6309\u94ae\u3002","frminsertLabel":"\u63d2\u5165\u5230\u7f51\u7ad9","frminsertInfo":"\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u672c\u51fa\u7248\u7269\u4e2d\u5d4c\u5165\u5230\u4f60\u7684\u7f51\u7ad9\u3002","btnQRCode":"\u626b\u63cf\u4e8c\u7ef4\u7801","btnRotateLeft":"\u5de6\u8f6c","btnRotateRight":"\u53f3\u8f6c"}];
function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};

var pageEditor = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	
	if(bookConfig.languageSetting&&bookConfig.languageSetting!=""){
		bookConfig.language=bookConfig.languageSetting.split(";")[0];
	}

	
	if(window.location.search && window.location.search!="") {
		var bookConfigImgKey = ["loadingPicture", "appLogoIcon", "printWatermarkFile", "BackgroundSoundURL", "backGroundImgURL"];
		for(var i = 0; i < bookConfigImgKey.length; i++) {
			var keyVal = bookConfig[bookConfigImgKey[i]];
			if(keyVal && keyVal!="") {
				bookConfig[bookConfigImgKey[i]] = keyVal + window.location.search;
			}
		} 
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}