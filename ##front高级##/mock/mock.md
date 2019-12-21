个人的理解是mock是用来模拟数据的。

Mock测试的目的两个：（1）验证方法调用；（2）指定某个方法的返回值，或者是执行特定的动作

下载安装
npm install mockjs
//使用mock
var Mock = require('mockjs');
var mcok = Mock.mock({
    ...
})
mock的语法
mock的语法规范包含两层规范

数据模板 （DTD）

数据占位符 （DPD）

数据模板DTD
末班规则：‘name|rule’:value

name：属性名

rule：属性规则

value：属性值

属性名和规则之间用|隔开，规则是可以选的。 
一共七个rule

‘name|mix-max’:value

'name|count':value

'name|mix-max.dmix-dmax':value

'name|min-max.dcount':value

'name|count.dmin-dmax':value

'name|count.dcount':value

'name|+step':value

生成规则需要根据属性值的类型才能确定 
属性值可以含有@占位符 
属性值还可以指定最终值的初始值和类型

属性值是String
var data = Mock.mock({
    'name1|1-3':'a',       //重复生成1到3个a
    'name2|2':'b'            //生成bb
})
属性值是Number
var data = Mock.mock({
    'name1|+1':4,         //生成4，如果循环每次加1
    ‘name2|1-7':2,        //生成一个数字，1到7之间
    'name3|1-4.5-8':1     
    //生成一个小数，整数部分1到4，小数部分5到8位
})
注意第三个是小数点之后的数位范围，另外其实属性值是Number的时候，value没什么用。

属性值是Boolean
var data = Mock.mock({
    'name|1':true,          //生成一个布尔值，各一半
    'name1|1-3':true        //1/4是true，3/4是false
})
属性值是Object
var obj = {
    a:1,
    b:2,
    c:3,
    d:4
}
var data = Mock.mock({
    'name|1-3':obj,      //随机从obj中寻找1到3个属性，新对象
    'name|2':obj         //随机从onj中找到两个属性，新对象
})
属性值是Array
var arr = [1,2,3];
var data = Mock.mock({
    'name1|1':arr,          //从数组里随机取出1个值
    'name2|2':arr,          //数组重复count次，这里count为2
    'name3|1-3':arr,        //数组重复1到3次
})
属性值是Function
var fun = function(x){
    return x+10;
}
var data = Mock.mock({
    'name':fun(10)         //返回函数的返回值20
})
属性值为RegExp
根据正则表达式反向生成对应的字符串，用于生成自定义格式的字符串

var data = Mock.mock({
    ‘name1':/[a-z][A-Z]/,
    'name2':/\d{1,3}/
})
会根据各自的正则表达式进行适配，并且随机返回

数据占位符DPD
关于占位符，占位符只是在属性值是字符串的时候，在字符串里占个位置，并不会出现在最终的属性值中。 
占位符的格式为：

@占位符
关于占位符需要知道以下几点

用@标识符标识后面的字符串是占位符

占位符的值是从Mock.Random方法中引用的

可以通过Mock.Random.extend()来扩展自定义占位符

占位符可以引用数据模板中的属性

占位符优先引用数据模板中的属性

占位符支持相对路径和决定路径

var data = Mock.mock({
    name:{
        name1:'@FIRST',
        name2:'@LAST'
    }    
})
语法大概是这样，random会重点分析的。

Mock.mock()
这是mock的核心方法，用于生成模拟数据，前边的例子中我们都已经见识过了。 
Mock.mock(rurl?,rtype?,template|function(opt))

rurl:ajax请求的地址

rtype:ajax请求的类型，如’GET','POST'

template:数据模板，就是之前那些个例子

function:生成相应数据的函数

具体的应用情况在下边：

Mock.mock(template)

Mock.mock(rurl,template)，模拟ajax,匹配接收到url的ajax请求，把template对应的数据返回返回

Mock.mock(rurl,function(opt)),模拟ajax,会把函数执行的结果作为ajax回调返回

Mock.mock(rurl,rtype,template) 同上，只是对ajax的类型有要求

Mock.mock(rurl,rtype,function) 同上

Mock.setup(setting)
配置拦截ajax请求的行为，支持的配置项有timeout。

Mock.setup({
    timeout:200
})
Mock.setup({
    timeout:'200-500
})
这个现在仅用于配置ajax请求，以后可能会扩展

Mock.valid(template,data)
这个函数用来判断，数据模板和数据是否一样，

Mock.toJSONShema(template)
var template = Mock.mock({
    'name|1-3':5
})
var tjs = Mock.toJSONSchema(tempalte);
把template风格的模板转成JSON Schema。具体的结果，自己看吧，不贴了。

接下来是最后一个方法

Mock.Random
这是一个工具类，用于生成各种类型的数据。 
Mock.Random的方法在模板数据中被称为占位符，之前说过的

用法示例：

var Random = Mock.Random;
var em1 = Mock.email();
var em2 = Mock.mock('@email');
var em3 = Mock.mock({
    email:'@email'
})
Mock.Random提供的完成方法

Type	Method
Basic	boolean natural integer float character string date datename now
Date	date datetime time now
Image	image dataImage
Color	color hex rgb rgba hsl
Text	paragraph sentence word title cparagraph csentence cword ctitle
Name	first last name cfirst clast cname
Web	url domain email ip tld
Address	area region city county zip
Helper	capitalize upper lower pick shuffle
Miscellaneous	guid id
Basic
Random.boolean(min?max?current?)

随机生成布尔值

var bool1 = Random.boolean();      //true false各一半
var bool2 = Random.boolean(1,2，false)    //1/3的可能性是false 2/3是true
Random.natural(min?,max?)

随机生成一个自然数，什么叫自然数，就是大于等于0的

var natural1 = Random.natural();       //默认值最大为 9007199254740992
var natural2 = Random.natural(4);         //随机出来的最小值是4
var natural3 = Random.natural(6,9);
Random.Integer(min?,max?)

生成一个随机的整数，可以是负数。

var integer1 = Random.integer();
var integer2 = Random.integer(-10);        //随机最小值是-10
var integer3 = Random.integer(-10,20);
Random.float(min?,max?,dmin?,dmax?)

随机生成一个小数浮点数,四个参数分别为，整数部分最小值最大值，小数部分最小值最大值。

var float1 = Random.float();
var float2 = Random.float(3,8);
var float3 = Random.float(1,3,5,7)
Random.character(pool?)

随机生成一个字符,pool的值可以是：

upper: 26个大写字母

lower: 26个小写字母

number: 0到9十个数字

sympol: "!@#$%^&*()[]"

var character1 = Random.character();
var character2 = Random.character('lower');
var character3 = Random.character('upper');
var character4 = Random.character('symbol');
Random.string(pool?,min?,max?)

随机生成一个字符串，pool的值同上边四个。

var str1 = Random.string();                //长度3到7位
var str2 = Random.string(5);               //长度5位
var str3 = Random.string('lower',7);       //长度7位，小写
var str4 = Random.string(4,6);             //长度4到
var str5 = Random.string('新的字符串会从这里选择4到5位',4,6);   //从第一个参数里选择4到5位
Random.range(start?,stop,step?)

返回一个整型数组

start,可选，数组起始值，闭区间

stop,必选，数据结束值，开区间

step,可选，数据每一项间隔值

var range1 = Random.range(10);     //[0,1,2,3,4,5,6,7,8,9]
var range2 = Random.range(14,20);  //[14,15,16,17,18,19]
var range3 = Random.range(3,13,2); //[3,5,7,9,11]
Date
Random.date(format?)

返回一个随机日期的字符串 
format的格式是‘yyyy-MM-dd’,可以随机组合

var date1 = Random.date();
var date2 = Random.date('yyyy-MM-dd');
var date3 = Random.date('y-M-d');
var date4 = Random.date('yy-MM-dd');
Random.time(format?)

返回时间字符串
format的格式是‘HH-mm-ss’

var time1 = Random.time();
var time2 = Random.time('HH-mm-ss');
var time3 = Random.time('J-m-s');
Random.datetime(format?)

上边两个的结合版

var dt1 = Random.datetime();
var dt2 = Random.datetime('yyyy-MM-dd HH-mm-ss');
Random.now(unit?,format?)

返回当前时间的字符串

Image
一般情况下，使用dataImage更好,因为更简单，但是如果要生成高度自定义的图片，则最好用image。另外，dataImage生成的是base64编码

Random.image(size?,background?,foreground?,format?text?)

size 图片宽高，格式是'宽x高'

background:图片的背景色，默认值#000000

foreground：图片的文字前景色，默认#FFFFFF

format：图片的格式，默认'.png'

text:图片上的默认文字，默认值为参数size

其中size的取值范围是

[
'300x250', '250x250', '240x400', '336x280', 
'180x150', '720x300', '468x60', '234x60', 
'88x31', '120x90', '120x60', '120x240', 
'125x125', '728x90', '160x600', '120x600', 
'300x600'
]
图片的格式可以选择.png .gif .jpg

var image1 = Random.image();
var image2 = Random.image('128x90');
var image3 = Random.image('120x660','#ccc');    //前景色#ccc
var image4 = Random.image('226x280','#eee','第三个参数是文字不是前景色');
var image5 = Random.image('66x31','#ddd','#123456','四个参数的时候第三个参数是前景色');
var image6 = Random.image('240x400','#333','#1483dc','.gif','全部参数的情况下'); 
Random.dataImage(size?,text?)

返回一段base64编码，两个参数同上。

var di1 = Random.dataImage();
var di2 = Random.datImage('300x600');
var di3 = Random.dataImage('180x150','hahahaha');
Color
Random.color()

有好几个相关的方法

var color = Random.color(); 格式'#rrggbb'
var hex = Random.hex();   //好像和color没什么不同
var rgb = Random.rgb();   //生成格式如rgb(133,233,244)
var rgba = Random.rgba(); //生成个事如rgba(111,222,233,0.5)
var hsl = Random.hsl();   //生成格式(345,82,71)
Text
Random.paragraph(in?,max?,len?)

随机生成一段文本，

var para1 = Random.paragraph();    //随机生成一短文本，范围3到7
var para2 = Random.paragraph(10);  //随机生成长度是10的文本
var para3 = Random.paragraph(9,12); //随机生成9到11位长度的文本
Random.sentence(min?,max?,len?)

随机生成一个句子，第一个单词的首字母大写

var sen1 = Random.sentence();        //默认长度12到18
var sen2 = Random.sentence(10);      //随机生成一个单词个数为10的句子
var sen3 = Random.sentence(5,10);    //随机生成一个5到9单词个数的句子
Random.word(min?,max?,len?)

随机生成一个单词

var word1 = Random.word();          //默认长度3到10
var word2 = Random.word(7);         //随机生成长度是7的单词
var word3 = Random.word(2,12);      //随机生成2到11位长度的单词
Random.title(min?,max?,len?)

随机生成一段标题，每个单词的首字母大写

var title1 = Random.title();        //title中的单词个数
var title2 = Random.title(6);       //title六个单词
var title3 = Random.title(7,12);    //title7到11个单词
另外还有四个方法，四个方法前边加一个

c,Random.cparagraph, 返回中文文本

Random.csentence, 返回中文句子

Random.cword, 返回中文文字

Random.ctitle. 返回中文标题

Name
var first = Random.first()         随机生成常见英文名
var last = Random.last()           随机生成常见英文姓
var name = Random.name()           随机生成常见英文姓名
var cfirst = Random.cfirst()       随机生成常见中文姓
var clast = Random.clast()         随机生成常见中文名
var cname = Random.cname()         随机生成一个常见中文姓名
Web
Random.url(protocol?,host?)

随机生成一个url 
protocol可选参数，表示网络协议，如http。 
host表示域名和端口号

var url1 = Random.url();
var url2 = Random.url('http');
var url3 = Random.url('http','58.com');
Random.protocol()

随机生成一个域名

var protocol = Random.protocol()
protocol可以选的值，'http'、'ftp'、'gopher'、'mailto'、'mid'、'cid'、'news'、'nntp'、'prospero'、'telnet'、'rlogin'、'tn3270'、'wais'。

Random.domin()

随机生成一个域名

Random.tld()

随机生成一个顶级域名

var domain = Random.domain()
var tld = Random.tld()
Random.email(domain?)

随机生成一个email地址，domain表示域名

var email1 = Random.email();
var email2 = Random.email('58.com')     //生成xxxx@58.com
Random.ip()

随机生成一个ip地址

var ip = Random.ip()
Address
Random.region()

随机生成一个中国的大区，如华北，西南

var region = Random.region();
Random.province()

随机生成一个中国省直辖市自治区特别行政区

var province = Random.province()
Random.city(prefix?)

随机生成一个中国城市，prefix布尔值，表示是否标注所在省

var city1 = Random.city();
var city2 = Random.city(ture);
Random.country(prefix?)

随机生成一个中国县，prefix布尔值，表示是否显示所属的省市

var county1 = Random.county();
var county2 = Random.county(ture);
Random.zip()

随机生成一个六位数邮政编码

var zip = Random.zip();
Helper
Random.capitlize(word)

把第一个字母转成大写

var capitalize = Random.capitalize('hello')
Random.upper(str)

转成大写

var upper = Random.upper('zhang');
Random.lower(str)

转成小写

var lower = Random.lower('JINGWEI');
Random.pick(arr)

从数组中随机选取一个元素

var arr = [1,4,5,6,7,8];
var pick = Random.pick(arr);
Random.shuffle(arr);

打乱数组的顺序并返回

var arr  = [1,2,3,4,6];
var shuffle = Random.shuffle(arr);
Miscellaneous
Random.guid()

随机生成一个GUID

Random.id()

随机生成一个18位身份证id

var guid = Random.guid();
var id = Random.id();

