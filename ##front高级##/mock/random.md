## 模拟Web数据：

### 1.生成随机域名(每次运行结果不同)：

var Random = Mock.Random
Random.domain()  //   "nhou.org.cn"  

### 2.生成随机IP(每次运行结果不同)

var Random = Mock.Random
Random.ip()   //  "74.97.41.159"

### 3.生成随机URL(每次运行结果不同)

Random.url()  //   "news://wrmt.na/rbcgbws"

## 模拟地理位置数据： 

### 1.生成随机省份：

var Random = Mock.Random
Random.province()  //"海南省"

### 2.生成随机城市：

var Random = Mock.Random
Random.city()   // "澳门半岛"

### 3.生成在某个省份的某个城市：

var Random = Mock.Random
Random.city(true) // "广东省 广州市"

## 模拟文本数据：

### 1.生成一条随机的中文句子：

var Random = Mock.Random
Random.csentence()   //  "会候权以解包党心要按总场火义国而片精。"
【注意】

1. 默认一条句子里的汉字个数在12和18之间

2. 通过Random.csentence( length )指定句子的汉字个数：

Random.csentence(5)  // "文斗领拉米。"
3. 通过Random.csentence( min?, max? )指定句子汉字个数的范围：

Random.csentence(3, 5)  // "住验住"


### 4.生成随机的中文段落：

var Random = Mock.Random
Random.cparagraph()  
// "电力速率离老五准东其引是外适只王。体区先手天里己车发很指一照委争本。
   究利天易里根干铁多而提造干下志维。级素一门件一压路低表且太马。"


【注意】

cparagraph可以看作是多条csentence以逗号连接后的字符串，默认条数为 3 到 7条csentence
通过Random.cparagraph(length )指定句子的个数
Random.cparagraph(2) 
// "而易除应精基还主局按选际复格从导。天第们国分比积造业王该回过白亲。"
4. 通过Random.cparagraph(min?, max?）指定句子的个数的范围：

Random.cparagraph(1, 3)
//  "作养装军头确应当号天革来人车号把文。证细专物转民相解状律极或经较把马。
     其省级支际标业强龙算建物况。"
## 模拟颜色数据：

var Random = Mock.Random
Random.rgba()  // "rgba(122, 121, 242, 0.13)"

## 模拟日期/时间数据：

### 1.日期：

Random.date('yyyy-MM-dd')  // "1975-04-27"
Random.date('yy-MM-dd')    //   "00-01-08"

### 2.时间：

Random.time()   // "05:06:06"

## 模拟图片：

Random.image('200x100', '#4A7BF7', 'Hello')
不指定参数则取随机的宽高并显示对应的宽高数据：

## 模拟姓名数据：

### 1.模拟全名：
Random.cname()   // "黄秀英"

### 2.模拟姓氏：
Random.cfirst()   // "龙"

### 3.模拟名字

Random.clast()  // "秀英"
