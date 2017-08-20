var h = location.host;
var _baseUrl =  "/js/requirejs-build/";//非开发时使用这个路径，对js/css进行合并
if(
    h.indexOf("admin.grouplus.com")>=0 ||
    h.indexOf("ope.grouplus.com")>=0 ||
    h.indexOf("user.grouplus.com")>=0 ||
    h.indexOf("office.grouplus.com")>=0 ||
    h.indexOf("www.grouplus.cn")>=0 ||
    h.indexOf("test")>=0
){
    _baseUrl =  "/js/requirejs-modules/";//开发环境使用这个，不对js/css进行合并
    // _baseUrl =  "/js/requirejs-build/";//开发环境上线测试使用这个
}
else if(h.indexOf("m.grouplus.com")>=0){
    _baseUrl =  "https://static.grouplus.com/js/requirejs-build/";//非开发时使用这个路径，对js/css进行合并
}
requirejs._baseUrl = _baseUrl;
requirejs.config({
    baseUrl:requirejs._baseUrl,
    urlArgs:"v=2017630152759",
    waitSeconds:0,
    shim:{
        "jquery-form":["jquery"],
        "mousewheel":["jquery"],
        "artDialog":["jquery","css!dialog/skins/custom"],
        "jquery-ui":["jquery"],
        "jquery-lazyload":["jquery"],
        "_webuploader":["css!webuploader/0.1.5/webuploader"],
        "_layer":["css!layer/need/layer"],
        "jcrop":["css!Jcrop/css/jquery.Jcrop"],
        'jquery.scrollToTop':["jquery"],
        'jquery.flexslider': ["jquery"],
        'jquery.cookie': ["jquery"],
        "jquery.stellar":["jquery"]
    },
    paths: {
        "gri-table": "table/gri.dataTable",//表格控件
        "gri-validate": "validate/gri.validator",//验证控件
        "artDialog":"dialog/artDialog",//弹窗插件
        "jquery": "jquery/jquery/1.10.1/jquery",//jquery
        "jquery_dom_resize": "jquery_dom_resize/jquery_dom_resize",//jquery_dom_resize
        "jquery-form": "form/jquery.form",
        "jquery-ui": "jqueryui/jquery-ui",
        "jq-fileupload":"jquery-fileupload/jquery.fileupload",
        "jq-transport":"jquery-fileupload/jquery.iframe-transport",
        "jq-fileupload-process":"jquery-fileupload/jquery.fileupload-process",
        "jq-fileupload-validate":"jquery-fileupload/jquery.fileupload-validate",
        "zeroClipboard":"zeroclipboard2.0.2/ZeroClipboard",
        "alert2":"custom_alert",
        "jsapi":"grouplus-user/jsapi",
        "user_detail":"grouplus-admin/user_detail",
        "create_login":"grouplus-user/create_login",
        "groupDataOption":"grouplus-admin/editMemDataOption",//用户资料项
        "groupDataClassfiy":"grouplus-admin/editActivityClassfiy",//活动分类项
        "jweixin":"jweixin-1.0.0",
        "_layer":"layer/layer.m",
        "scrollbar":"perfect-scrollbar",
        "mousewheel":"jquery.mousewheel",
        "_uploadify":"uploadify/jquery.uploadify.min",
        "jquery-lazyload":"lazyload/jquery.lazyload",
        "jquery.stellar":"jquery.stellar.min",
        "_webuploader":"webuploader/0.1.5/webuploader",
        "jcrop":"Jcrop/js/jquery.Jcrop",
        "react":"react/react",
        "react_dom":"react/react_dom",
        "react-dom":"react/react_dom",
        "react-redux":"react/react-redux",
        "redux":"react/redux",
        "babel":"react/browser.min",
        "classnames":"react/classnames",
        "redux-thunk":"react/redux-thunk",
        "html5canvas":"html5canvas/html5canvas",
        "canvas2image":"html5canvas/canvas2image",
        "clamp":"clamp",
        "jquery_dotdotdot": "jquery.dotdotdot",
        "jquery.flexslider": "grouplus-office/lib/jquery.flexslider-min",//官网首页引用
        "jquery.scrollToTop": "grouplus-office/lib/jquery.scrollToTop.min",//官网首页引用
        "jquery.cookie": "grouplus-office/lib/jquery.cookie",//官网帮助引用
        "vue": "grouplus-admin/mobile/vue/vue.min",//签到引用
        "moment": "grouplus-admin/mobile/vue/moment.min"//签到引用
    },
    map: {
        '*': {
            'css': '../tool/require-css/css'
        }
    }
});
