var wars = 'xiaozhang', age = 18, list = [1, 555, 8, 999];
list.forEach(function (item, index) {
    console.log(index + '：' + item);
});
var Site = /** @class */ (function () {
    function Site() {
        this.obj = '123';
    }
    Site.prototype.name = function () {
        console.log("Runoob");
    };
    Site.prototype.kk = function () {
        return {
            obj: this.obj
        };
    };
    return Site;
}());
var obj = new Site();
obj.name();
var str = '1';
var str2 = str; //str、str2 是 string 类型
console.log(typeof (str2));
var val = true || '123';
console.log(val);
var onePage = {
    start: 1,
    count: 12,
    title: '主页文档分页',
    stop: this.start++,
    getPage: function () {
        console.log(this.title + ',当前为 ' + this.start + '一共' + this.count);
        console.log(this.stop);
    }
};
onePage.getPage();
var PageMoudel = /** @class */ (function () {
    function PageMoudel() {
        this.start = 1;
        this.count = 1;
        this.title = 'dqdwqd';
        this.stop = 1;
    }
    PageMoudel.prototype.getPage = function () {
        console.log(this.title + ',当前为 ' + this.start + '一共' + this.count);
    };
    return PageMoudel;
}());
var opage = new PageMoudel();
opage.getPage();
function getUser(data) {
    fetch(data.url, {
        method: data.method,
        body: JSON.stringify(data.body),
        headers: data.headers
    }).then(function (res) {
        res.json();
    })["catch"](function (error) { return console.error('Error:', error); })
        .then(function (response) { return console.log('Success:', response); });
}
