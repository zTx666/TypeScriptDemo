let wars: String = 'xiaozhang',
    age: number = 18,
    list: Array<number> = [1, 555, 8, 999];
list.forEach((item: number, index: number) => {
    console.log(index + '：' + item);
})
class Site {
    obj = '123';
    name(): void {
        console.log("Runoob")
    }
    kk(): object {
        return {
            obj: this.obj
        }
    }
}
var obj = new Site();
obj.name();
var str = '1'
var str2: number = <number><any>str   //str、str2 是 string 类型
console.log(typeof (str2));

var val: string | Array<number | string> | boolean = true || '123';
console.log(val);

interface PageInterface {
    start: Number,
    count: Number,
    title: String,
    stop: Number,
    getPage: (() => void)
}
var onePage: PageInterface = {
    start: 1,
    count: 12,
    title: '主页文档分页',
    stop: this.start++,
    getPage: function () {
        console.log(this.title + ',当前为 ' + this.start + '一共' + this.count);
        console.log(this.stop);
    }
}
onePage.getPage();

class PageMoudel implements PageInterface {
    start: Number = 1;
    count: Number = 1;
    title: string = 'dqdwqd';
    stop: Number = 1;
    public getPage(): void {
        console.log(this.title + ',当前为 ' + this.start + '一共' + this.count)
    }
}
var opage = new PageMoudel();
opage.getPage()
interface FetchDataInterface {
    url: string,
    headers: Headers,
    method: string,
    body: Object | Array<string | number>
}
function getUser(data: FetchDataInterface) {
    fetch(data.url, {
        method: data.method,
        body: JSON.stringify(data.body),
        headers: data.headers,
    }).then((res) => {
        res.json()
    }).catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}
