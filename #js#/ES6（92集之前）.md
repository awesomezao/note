## 面向过程编程
- 面向过程就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候再一个一个的依次调用就可以了。
- 面向过程，就是按照我们分析好了的步骤，按照步骤解决问题。



## 面向对象编程
- 面向对象是把事物分解成一个个对象，然后由对象之间分工与合作。
- 面向对象是以对象功能来划分问题，而不是步骤。
- 在面向对象程序开发思想中，每一个对象都是功能中心，具有明确分工。
- 面向对象编程具有灵活、代码可复用、容易维护和开发的优点，更适合多人合作的大型软件项目。

### 面向对象的特性
- 封装性 
- 继承性
- 多态性

### 面向过程与面向对象的优缺点
#### 面向过程
- 优点：性能比面向对象高，适合跟硬件联系很紧密的东西，例如单片机就采用的面向过程编程。
- 缺点：没有面向对象易维护、易复用、易扩展。

#### 面向对象
- 优点：易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统更加灵活、更加易于维护。
- 缺点：性能比面向过程低。

## ES6中的类和对象
### 面向对象
    面向对象更贴近我们的实际生活,可以使用面向对象描述现实世界事物。
    但是事物分为具体的事物和抽象的事物

#### 面向对象的思维特点
- 抽取（抽象）对象共用的属性和行为组织（封装）一个类（模板）。
- 对类进行实例化, 获取类的对象。

    面向对象编程我们考虑的是有哪些对象，按照面向对象的思维特点，不断的创建对象，使用对象，指挥对象做事情。

### 对象
    现实生活中：万物皆对象，对象是一个具体的事物，看得见摸
    得着的实物。例如，一本书、一辆汽车、一个人可以是“对象”，
    一个数据库、一张网页、一个与远程服务器的连接也可以是
    “对象”。

    在 JavaScript中，对象是一组无序的相关属性和方法的集合，
    所有的事物都是对象，例如字符串、数值、数组、函数等。

#### 对象是由属性和方法组成的：
- 属性：事物的特征，在对象中用属性来表示（常用名词）
- 方法：事物的行为，在对象中用方法来表示（常用动词）

### 类class
在 ES6 中新增加了类的概念，可以使用class关键字声明一个类，之后以这个类来实例化对象。                              
**注意**： 类必须使用 new 实例化对象

### 类 constructor 构造函数
    constructor()方法是类的构造函数(默认方法)，用于传递参
    数，返回实例对象，通过new命令生成对象实例时，自动调用
    该方法。
    如果没有显示定义，类内部会自动给我们创建一个constructor() 

#### 创建类

```
<!-- 1. 创建一个class，创建一个“明星”类-->
class Star{
    constructor(uname){
        this.uame //指向创建的实例
    }
}
 2.利用类创建对象 new
 new Star()  //只要加了new，自动调用constructor
 ```
1. 通过class关键字创建类，类名习惯性定义首字母大写
2. 类里面有个constructor()函数，可以接受传过来的参数，同时返回实例对象。
3. constructor函数只要new生成实例时，就会自动调用这个函数；如果我们不写这个函数，类也会自动生成这个函数。
4. 生成实例new不能省略。
5. 最后注意语法规范，创建类时，类名后面不要加小括号；生成实例，类名后面加小括号，构造函数不需要加function。 

### 类添加方法

```
    <script>
        // 1. 创建类 class  创建一个 明星类
        class Star {
            // 类的共有属性放到 constructor 里面
            constructor(uname, age) {
                this.uname = uname;
                this.age = age;
            }
            sing(song) {
                // console.log('我唱歌');
                console.log(this.uname + song);
            }
        }

        // 2. 利用类创建对象 new
        var ldh = new Star('刘德华', 18);
        var zxy = new Star('张学友', 20);
        console.log(ldh);
        console.log(zxy);
        // (1) 我们类里面所有的函数不需要写function 
        // (2) 多个函数方法之间不需要添加逗号分隔
        ldh.sing('冰雨');
        zxy.sing('李香兰');
    </script>
```
## 类的继承
子类通过==extends==可以继承父类的一些属性和方法。  

**注意**    

    继承中属性或者方法的查找原则：就近原则。        
    继承中，如果实例化子类输出一个方法，先看子类有没有这
    个方法，如果有就先执行子类的；如果子类中没，就去父类
    中查找，如果有，就执行父类中的这个方法（就近原则）。
```
class Father{   // 父类
    conostrctor(){
        
    }
    money(){
        console.log(100)
    }
} 
class  Son extends Father {  // 子类继承父类
    
}
var son=new Son();
son.money()
```
### super关键字
super 关键字用于访问和调用对象父类上的函数。可以调用父类的构造函数，也可以调用父类的普通函数。

**注意**                          
子类在构造函数中使用super, 必须放到 this 前面(必须先调用父类的构造方法,在使用子类构造方法)

```
class Father {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    sum() {
        console.log(this.x + this.y);
    }
}
class Son extends Father {
    constructor(x, y) {
        super(x, y); //调用了父类中的构造函数
    }
}
var son = new Son(1, 2);
var son1 = new Son(11, 22);
son.sum();
son1.sum();
```
super必须放到this前面
```
 <script>
        // 父类有加法方法
        class Father {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }
            sum() {
                console.log(this.x + this.y);
            }
        }
        // 子类继承父类加法方法 同时 扩展减法方法
        class Son extends Father {
            constructor(x, y) {
                // 利用super 调用父类的构造函数
                // super 必须在子类this之前调用
                super(x, y);
                this.x = x;
                this.y = y;

            }
            subtract() {
                console.log(this.x - this.y);

            }
        }
        var son = new Son(5, 3);
        son.subtract();
        son.sum();
    </script>

```

### 使用类的注意事项
- 在 ES6 中类没有变量提升，所以必须先定义类，才能通过类实例化对象。
- 类里面的共有属性和方法一定要加this使用。
- 类里面的this指向问题：
    - constructor 里面的this指向实例对象，方法里面的this 指向这个方法的调用者。
```
var that;
    var _that;
    class Star {
        constructor(uname, age) {
            // constructor 里面的this 指向的是 创建的实例对象
            that = this;
            console.log(this);

            this.uname = uname;
            this.age = age;
            // this.sing();
            this.btn = document.querySelector('button');
            this.btn.onclick = this.sing;
        }
        sing() {
            // 这个sing方法里面的this 指向的是 btn 
            这个按钮,因为这个按钮调用了这个函数
            console.log(this);

            console.log(that.uname); 
            // that里面存储的是constructor里面的this
        }
        dance() {
            // 这个dance里面的this 指向的是实例对象 
            ldh 因为ldh 调用了这个函数
            _that = this;
            console.log(this);

        }
    }

    var ldh = new Star('刘德华');
    console.log(that === ldh);
    ldh.dance();
    console.log(_that === ldh);

// 1. 在ES6中类没有变量提升，所以必须先定义类，
才能通过类实例化对象

// 2. 类里面的共有的属性和方法一定要加this使用.

```

## 构造函数
    构造函数是一种特殊的函数，主要用来初始化对象，即为对
    象成员变量赋初始值，它总与new一起使用。我们可以把对象
    中一些公共的属性和方法抽取出来，然后封装到这个函数里面。

在 JS 中，使用构造函数时要注意以下两点：
- 构造函数用于创建某一类对象，其首字母要大写
- 构造函数要和 new 一起使用才有意义

### new 在执行时会做四件事情

- 在内存中创建一个新的空对象。
- 让 this 指向这个新的对象。
- 执行构造函数里面的代码，给这个新对象添加属性和方法。
- 返回这个新对象（所以构造函数里面不需要 return ）。

### 成员
JavaScript的构造函数中可以添加一些成员，可以在构造函数本身上添加，也可以在构造函数内部的this上添加。通过这两种方式添加的成员，就分别称为==静态成员==和==实例成员==。

- 静态成员：在构造函数本上添加的成员称为静态成员，只能由构造函数本身来访问 。
- 实例成员：在构造函数内部创建的对象成员称为实例成员，只能由实例化的对象来访问。
```
    function Star(){
        this.name=name
        this.age=age
        this.sing=function(){
            console.log(SSS)
        }
    }
    var XXX=new Star("XX","YY")
    //1.实例成员就是构造函数内部通过this添加的成员
    name age sing 就是实例成员
    // 实例成员只能通过实例化的对象来访问
    console.log(XXX.name);
    XXX.sing();
    // console.log(Star.uname);  
    //不可以通过构造函数来访问实例成员
    // 2. 静态成员 在构造函数本身上添加的成员  sex 就是静态成员
    Star.sex = '男';
    // 静态成员只能通过构造函数来访问
    console.log(Star.sex);
    console.log(ldh.sex); // 不能通过对象来访问

```
### 构造函数的问题
存在浪费内存的问题
``` 
function Star(uname, age) {
    this.uname = uname;
    this.age = age;
    this.sing = function() {
        console.log('我会唱歌');
    }
}
var ldh = new Star('刘德华', 18);
var zxy = new Star('张学友', 19);
```
![image](https://github.com/BXsweetheart/youdaoNotes/blob/master/%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%9A%84%E9%97%AE%E9%A2%98.png?raw=true)

### 构造函数原型 prototype
    构造函数通过原型分配的函数是所有对象所共享的。
    
1. JavaScript 规定，每一个构造函数==都有一个 prototype== 
属性，指向另一个对象。注意这个prototype就是一个对
象，这个对象的所有属性和方法，都会被构造函数所拥有。

2. 我们可以把那些不变的方法，直接定义在 prototype 
对象上，这样所有对象的实例就可以共享这些方法。

3. 一般情况下，我们把公共属性定义到构造函数里面，公共的方法我们放到原型对象身上。

#### 问答

1. 原型是什么 ？  
一个对象，我们也称为 prototype 为原型对象。
2. 原型的作用是什么 ？  
共享方法。

### 对象原型  __ proto __


对象都会有一个属性 __ proto __ 指向构造函数的 prototype 原型对象，之所以我们对象可以使用构造函数 prototype 原型对象的属性和方法，就是因为对象有 __ proto __ 原型的存在。

```
<script>
        function Star(uname, age) {
            this.uname = uname;
            this.age = age;
        }
        
        Star.prototype.sing = function() {
            console.log('我会唱歌');
        }
        
        var ldh = new Star('刘德华', 18);
        var zxy = new Star('张学友', 19);
        ldh.sing();
        
        console.log(ldh); // 对象身上系统自己添加一个 
        __proto__ 指向我们构造函数的原型对象 prototype
        
        console.log(ldh.__proto__ === Star.prototype);
        // 方法的查找规则: 首先先看ldh 对象身上是否有 
        sing 方法,如果有就执行这个对象上的sing
        // 如果没有sing这个方法,因为有__proto__的存在,就
        去构造函数原型对象prototype身上去查找sing这个方法
    </script>
```
![image](https://github.com/BXsweetheart/youdaoNotes/blob/master/proto.png?raw=true)

- __proto__对象原型和原型对象 prototype 是等价的
- __proto__对象原型的意义就在于为对象的查找机制提供一个方向，或者说一条路线，但是它是一个非标准属性，因此实际开发中，不可以使用这个属性，它只是内部指向原型对象 prototype

### constructor  构造函数
1. 对象原型（ __ proto __）和构造函数（prototype）原型对象里面都有一个属性 constructor 属性 ，constructor 我们称为构造函数，因为它指回构造函数本身。
2. constructor 主要用于记录该对象引用于哪个构造函数，它可以让原型对象重新指向原来的构造函数。

3. 一般情况下，对象的方法都在构造函数的原型对象中设置。如果有多个对象的方法，我们可以给原型对象采取对象形式赋值，但是这样就会覆盖构造函数原型对象原来的内容，这样修改后的原型对象 constructor就不再指向当前构造函数了。此时，我们可以在修改后的原型对象中，添加一个constructor指向原来的构造函数。

### 构造函数、实例、原型对象三者之间的关系

![image](https://github.com/BXsweetheart/youdaoNotes/blob/master/relationship.png?raw=true)

```
 <script>
        function Star(uname, age) {
            this.uname = uname;
            this.age = age;
        }
        // 很多情况下,我们需要手动的利用constructor 
        这个属性指回原来的构造函数
        // Star.prototype.sing = function() {
        //     console.log('我会唱歌');
        // };
        // Star.prototype.movie = function() {
        //     console.log('我会演电影');
        // }
        Star.prototype = {
            // 如果我们修改了原来的原型对象,给原型对象赋
            值的是一个对象,则必须手动的利用constructor指
            回原来的构造函数
            constructor: Star,
            sing: function() {
                console.log('我会唱歌');
            },
            movie: function() {
                console.log('我会演电影');
            }
        }
        var ldh = new Star('刘德华', 18);
        var zxy = new Star('张学友', 19);
        console.log(Star.prototype);
        console.log(ldh.__proto__);
        console.log(Star.prototype.constructor);
        console.log(ldh.__proto__.constructor);
    </script>
```
### 原型链
![image](https://github.com/BXsweetheart/youdaoNotes/blob/master/%E5%8E%9F%E5%9E%8B%E9%93%BE.png?raw=true)

1. 只要是对象就有__proto__ 原型, 指向原型对象
 
2. 我们Star原型对象里面的__proto__原型指向的是 Object.prototype

3. 我们Object.prototype原型对象里面的__proto__原型  指向为 null

### JavaScript 的成员查找机制(规则)
- 当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性。
- 如果没有就查找它的原型（也就是 __proto__指向的 prototype 原型对象）。
- 如果还没有就查找原型对象的原型（Object的原型对象）。
- 依此类推一直找到 Object 为止（null）。
- __proto__对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线。

### 原型对象this指向
- 构造函数中的this指向我们实例对象。
- 原型对象里面放的是方法，这个方法里面的this 指向的是 这个方法的调用者，也就是这个实例对象。

## 扩展内置对象
可以通过原型对象，对原来的内置对象进行扩展自定义的方法。比如给数组增加自定义求偶数和的功能。（原型对象的应用）

```
Array.prototype.sum=function(){
        var sum=0
        for(i=0;i<this.length;i++){
            sum += this[i]
        }
        return sum
    }
    var arr=[1,2,3]
    console.log(arr.sum())
```
**注意**        
数组和字符串==内置对象==不能以对象的形式追加，因为会覆盖原本的内置方法——Array.prototype = {} ，只能使用Array.prototype.xxx = function(){} 的方式。

## 继承
ES6之前并没有给我们提供extends继承。我们可以通过构造函数+原型对象模拟实现继承，被称为组合继承。

### call()
调用这个函数, 并且修改函数运行时的 this 指向
```
fun.call(thisArg, arg1, arg2, ...)
```
- thisArg：当前调用函数 this 的指向对象。
- arg1，arg2：传递的其他参数。
```
<script>
    function fn(x,y,z){
        console.log("deadly sleepy")
        console.log(this)
        console.log(x+y+z)
    }
    var o={
        think:"want to sleep"
    }

    var postgraduate="postgraduate";
    var is="is";
    var important="important"
    fn.call()
    fn.call(o)
    fn.call(o,postgraduate,is,important)
</script>
```
### 借用构造函数继承父类型属性
核心原理：         
通过 call() 把父类型的 this 指向子类型的 this ，这样就可以实现子类型继承父类型的属性。
    
    extends属于类的继承，写法是class Son extends Father。
    这里是函数
    super()是访问和调用父构造函数的方法
    call()是继承父构造函数的类和方法
```
// 父类
function Father(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
// 子类
function Son(name, age, sex, score) {
  Father.call(this, name, age, sex);  // 此时父类的 this 
  指向子类的 this，同时调用这个函数
  this.score = score;
}
var s1 = new Son('zs', 18, '男', 100);
console.dir(s1);
```
子类构造函数中通过call将父类构造函数this指向自身，达到继承父类属性目的
```
 <script>
        // 借用父构造函数继承属性
        // 1. 父构造函数
        function Father(uname, age) {
            // this 指向父构造函数的对象实例
            this.uname = uname;
            this.age = age;
        }
        Father.prototype.money = function() {
            console.log(100000);

        };
        // 2 .子构造函数 
        function Son(uname, age, score) {
            // this 指向子构造函数的对象实例
            Father.call(this, uname, age);
            this.score = score;
        }
        // Son.prototype = Father.prototype;  
       //这样直接赋值会有问题,如果修改了子原型对象,父原型
       //对象也会跟着一起变化
        Son.prototype = new Father();
        // 如果利用对象的形式修改了原型对象,别忘了利用
        //constructor 指回原来的构造函数
        Son.prototype.constructor = Son;
        // 这个是子构造函数专门的方法,原型链查找
        Son.prototype.exam = function() {
            console.log('孩子要考试');

        }
        var son = new Son('刘德华', 18, 100);
        console.log(son);
        console.log(Father.prototype);
        console.log(Son.prototype.constructor);
    </script>
```
一般情况下，对象的方法都在构造函数的原型对象中设置，通过构造函数无法继承父类方法。  
核心原理： 
- 将子类所共享的方法提取出来，让子类的 prototype 原型对象 = new 父类()  
- 本质：子类原型对象等于是实例化父类，因为父类实例化之后另外开辟空间，就不会影响原来父类原型对象
- 将子类的 constructor 从新指向子类的构造函数

### 类的本质
1. class本质还是function（简单认为，构造函数的另外一种写法）；
2. 类的所有方法都定义在类的prototype属性上；
3. 类创建的实例,里面也有__proto__指向类的prototype原型对象；
4. 所以ES6的类它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已；
5. 所以ES6的类其实就是语法糖；
6. 语法糖:语法糖就是一种便捷写法。简单理解,有两种方法可以实现同样的功能,但是一种写法更加清晰、方便,那么这个方法就是语法糖。


**ES6之前通过 ==构造函数+ 原型实现面向对象== 编程**
- 构造函数有原型对象prototype；
- 构造函数原型对象prototype 里面有constructor 指向构造函数本身；
- 构造函数可以通过原型对象添加方法；
- 构造函数创建的实例对象有__proto__原型指向构造函数的原型对象。

**ES6通过 ==类== 实现面向对象编程**

```
<script>
    class Star {
    
            }
    console.log(typeof Star);
    // 1. 类的本质其实还是一个函数我们也可以简单的认为
    //类就是构造函数的另外一种写法
    // (1) 类有原型对象prototype 
    console.log(Star.prototype);
    // (2) 类原型对象prototype 里面有constructor 指向类本身
    console.log(Star.prototype.constructor);
    // (3)类可以通过原型对象添加方法
    Star.prototype.sing = function() {
        console.log('冰雨');

    }
    var ldh = new Star();
    console.dir(ldh);
    // (4) 类创建的实例对象有__proto__ 原型指向 类的原型对象
    console.log(ldh.__proto__ === Star.prototype);
    i = i + 1;
    i++
</script>
```

## ES5新增方法
### 数组方法
迭代(遍历)方法：      forEach()、map()、filter()、some()、every()；

#### forEach()
    array.forEach(function(value, index, array))
    1. value每一个数组元素
    2. index每一个数组元素的索引号
    3. array数组本身
```
    var arr = [1, 2, 3]
    arr.forEach(function (value, index, array) {
        console.log('每个数组元素' + value);
        console.log('每个数组元素的索引号' + index);
        console.log('数组本身' + array);
    })
```

#### filter() 
    array.filter(function(value, index, array))
    1. value每一个数组元素
    2. index每一个数组元素的索引号
    3. array数组本身

- filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素，主要用于==筛选数组==。
- **注意它直接返回一个==新==数组**

```
    var arr = [12, 66, 4, 88, 3, 7];
    //newAArr接收返回的数组
    var newArr = arr.filter(function (value, index) {
        // return value >= 20;
        return value % 2 === 0;
    });
    console.log(newArr);
```

#### some()
    array.some(function(value, index, array))
    1. value每一个数组元素
    2. index每一个数组元素的索引号
    3. array数组本身

1. some() 方法用于检测数组中的元素是否满足指定条件。即查找数组中是否有满足条件的元素。
2. 注意它==返回值是布尔值==， 如果查找到这个元素， 就返回true，  如果查找不到就返回false。
3. 如果找到第一个满足条件的元素，则终止循环，不在继续查找。


    1. filter()查找到满足条件的元素后，返回的是一个数组， 
    而且是把所有满足条件的元素返回回来。
    2. some()查找满足条件的元素是否存在，返回的是一个布尔
    值，查找到第一个满足条件的元素就终止循环。



#### some()和forEach的区别

1. 在forEach() 和filter() 里面 return 不会终止迭代。
2. 在some()里面遇到 return true 就是终止遍历，迭代效率更高。

```
    var arr = ['red', 'green', 'blue', 'pink'];
    // 1. forEach迭代 遍历
    arr.forEach(function(value) {
        if (value == 'green') {
            console.log('找到了该元素');
    //         return true; // 在forEach 里面 return 不会终止迭代
        }
        console.log(11);

    })
```
```
    // 如果查询数组中唯一的元素, 用some方法更合适,
    arr.some(function (value) {
        if (value == 'green') {
            console.log('找到了该元素');
            return true; //  在some 里面 遇到 return true 
            //就是终止遍历 迭代效率更高
        }
        console.log(11);

    });
```
```
    arr.filter(function (value) {
        if (value == 'green') {
            console.log('找到了该元素');
            return true; // filter 里面 return 不会终止迭代
        }
        console.log(11);

    });
```
### 字符串方法
#### trim()
- trim() 方法会从一个字符串的两端删除空白字符。       
- trim() 方法并不影响原字符串本身，它返回的是一个新的字符串。
- 解决表单提交用户输入空格的问题。

### 对象方法
#### Object.keys() 
用于获取对象自身所有的属性

    Object.keys(对象参数名)

- 效果类似 for…in
- 返回一个由==属性名==组成的==数组==

### Object.defineProperty() 
定义对象中新属性或修改原有的属性。(了解)

    Object.defineProperty(obj, prop, descriptor)

- obj：必需。目标对象 。
- prop：必需。需要定义或修改的属性的名字。
- descriptor：必需。目标属性所拥有的特性。




####  第三个参数 descriptor 说明： 
**以对象形式 { } 书写**
- value: 设置属性的值。默认为undefined；
- writable: 值是否可以重写。true | false  ，默认为false；
- enumerable: 目标属性是否可以被枚举（能不能被遍历）。true | false  ，默认为 false；
- configurable: 目标属性是否可以被删除或是否可以再次修改特性， true | false  ，默认为false。

```
 // Object.defineProperty() 定义新属性或修改原有的属性
    var obj = {
        id: 1,
        pname: '小米',
        price: 1999
    };
    Object.defineProperty(obj, 'num', {
        value: 1000,
        enumerable: true
    });
    console.log(obj);
    Object.defineProperty(obj, 'price', {
        value: 9.9
    });
    console.log(obj);
    Object.defineProperty(obj, 'id', {
        // 如果值为false 不允许修改这个属性值 默认值也是false
        writable: false,
    });
    obj.id = 2;
    console.log(obj);
    Object.defineProperty(obj, 'address', {
        value: '中国山东蓝翔技校xx单元',
        writable: false,
        // enumerable 如果值为false 则不允许遍历, 默认的值是 false
        enumerable: false,
        // configurable 如果为false 则不允许删除这个属性 
        //不允许再修改第三个参数里面的特性 默认为false
        configurable: false
    });
    console.log(obj);
    console.log(Object.keys(obj));
    delete obj.address;
    console.log(obj);
    delete obj.pname;
    console.log(obj);
    Object.defineProperty(obj, 'address', {
        value: '中国山东蓝翔技校xx单元',
        // 如果值为false 不允许修改这个属性值 默认值也是false
        writable: true,
        // enumerable 如果值为false 则不允许遍历, 默认的值是 false
        enumerable: true,
        // configurable 如果为false 则不允许删除以及这个属性 
        不允许再修改第三个参数里面的特性默认为false
        configurable: true
    });
    console.log(obj.address);//不允许再修改第三个参数里面的特性
```

## 函数进阶
### 函数的定义和调用
#### 函数的定义方式
1. 函数声明方式 function 关键字 (命名函数)
    

    function fn(){};


2. 函数表达式 (匿名函数)


    var fun =function(){};


3. new Function()   
    
    
    var fn = new Function('参数1','参数2'..., '函数体')
- Function 里面参数都必须是字符串格式
- 第三种方式执行效率低，也不方便书写，因此较少使用
- 所有函数都是 Function 的实例(对象)  
- 函数也属于对象

![image](https://github.com/BXsweetheart/youdaoNotes/blob/master/functionRelationship.png?raw=true)

#### 函数的调用方式
1. 普通函数


    function fn() {
        console.log('人生的巅峰');
    }


2. 对象的方法


    var o = {
        sayHi: function() {
            console.log('人生的巅峰');

        }
    }
    o.sayHi();



3. 构造函数


    function Star() {};
    new Star();



4. 绑定事件函数


    btn.onclick = function() {};   // 点击了按钮就可以调用这个函数


5. 定时器函数


    setInterval(function() {}, 1000);  
    //这个函数是定时器自动1秒钟调用一次


6. 立即执行函数


    (function() {
            console.log('人生的巅峰');
        })();
        // 立即执行函数是自动调用
    两种写法
    ( function () {} ) ()
    ( function () {} () )
 
### this  
#### 函数内 this 的指向
调用方式的不同决定了this 的指向不同，一般指向调用者。
调用方式 | this指向
---|---
普通函数调用 | window
对象方法调用 | 对象
构造函数调用 | 实例对象；原型对象里的this也指向实例对象
绑定事件调用 | 绑定事件的对象
定时器函数调用 | window
立即执行函数调用 | window

#### 改变函数内部 this 指向
常用的有 bind()、call()、apply() 三种方法。

##### call 方法
call() 方法调用一个对象。简单理解为调用函数的方式，但是它可以改变函数的 this 指向。

    fun.call(thisArg, arg1, arg2, ...)
    
-  thisArg：在 fun 函数运行时指定的 this 值
-  arg1，arg2：传递的其他参数
-  返回值就是函数的返回值，因为它就是调用函数
-  因此当我们想改变this指向，同时想调用这个函数的时候，可以使用 call，比如继承。

##### apply 方法
apply() 方法调用一个函数。简单理解为调用函数的方式，但是它可以改变函数的 this 指向。

    fun.apply(thisArg, [argsArray])

- thisArg：在fun函数运行时指定的 this 值
- argsArray：传递的值，必须包含在数组里面
- 返回值就是函数的返回值，因为它就是调用函数
- 因此 apply 主要跟数组有关系，比如使用 Math.max() 求数组的最大值
-不用指向对象时，可以写null

```
var arr = [1, 66, 3, 99, 4];
var arr1 = ['red', 'pink'];
<!--var max = Math.max.apply(null, arr);-->
<!--写null可能会出现问题，详见严格模式章节-->
var max = Math.max.apply(Math, arr);
var min = Math.min.apply(Math, arr);
console.log(max, min);
```

##### bind()方法
bind() 方法不会调用函数。但是能改变函数内部this指向。

    fun.bind(thisArg, arg1, arg2, ...) 

- thisArg：在 fun 函数运行时指定的 this 值；
- arg1，arg2：传递的其他参数；
- 返回由指定的this值和初始化参数改造的原函数拷贝。当我们只是想改变this指向，并且不想调用这个函数的时候，可以使用 bind。

1. 不会调用原来的函数，可以改变原来函数内部的this 指向
2. 返回的是原函数改变this之后产生的新函数；
3. 如果有的函数我们不需要立即调用，但是又想改变这个函数内部的this指向此时用bind；
4. 我们有一个按钮,当我们点击了之后，就禁用这个按钮，3秒钟之后开启这个按钮。
```

       3. bind()  绑定 捆绑的意思
        var o = {
            name: 'andy'
        };

        function fn(a, b) {
            console.log(this);
            console.log(a + b);


        };
        var f = fn.bind(o, 1, 2);
        f();
```
```
        // 1. 不会调用原来的函数   
        可以改变原来函数内部的this 指向
        // 2. 返回的是原函数改变this之后产生的新函数
        // 3. 如果有的函数我们不需要立即调用,但是又想改变这个函数内部的this指向此时用bind
        // 4. 我们有一个按钮,当我们点击了之后,就禁用这个按钮,3秒钟之后开启这个按钮
    <button>点击</button>
    <button>点击</button>
    <button>点击</button>
    <script>
        // var btn1 = document.querySelector('button');
        // btn1.onclick = function() {
        //     this.disabled = true; // 这个this 指向的是 btn 这个按钮
        //     // var that = this;
        //     setTimeout(function() {
        //         // that.disabled = false; // 定时器函数里面的this 指向的是window
        //         this.disabled = false; // 此时定时器函数里面的this 指向的是btn
        //     }.bind(this), 3000); // 这个this 指向的是btn 这个对象
        // }
        
        
        var btns = document.querySelectorAll('button');
        for (var i = 0; i < btns.length; i++) {
            btns[i].onclick = function() {
                this.disabled = true;
                setTimeout(function() {
                    this.disabled = false;
                }.bind(this), 2000);
            }
        }
    </script>
```
#### call()    apply()     bind() 总结
##### 相同点
都可以改变this指向

##### 区别点
1. call和apply会调用函数，并且改变函数内部this指向；
2. call 和 apply 传递的参数不一样，call 传递参数 aru1, aru2...形式 。 apply 必须数组形式[arg]
3. bind  不会调用函数, 可以改变函数内部this指向.

##### 主要应用场景
1. call 经常做继承. 
2. apply 经常跟数组有关系.  比如借助于数学对象实现数组最大值最小值
3. bind  不调用函数,但是还想改变this指向. 比如改变定时器内部的this指向. 

### 严格模式
#### 什么是严格模式
JavaScript 除了提供正常模式外，还提供了严格模式（strict mode）。ES5 的严格模式是采用具有限制性 JavaScript 变体的一种方式，即在严格的条件下运行 JS 代码。

严格模式在 IE10以上版本的浏览器中才会被支持，旧版本浏览器中会被忽略。

严格模式对正常的 JavaScript 语义做了一些更改： 
1. 消除了 Javascript 语法的一些不合理、不严谨之处，减少了一些怪异行为。
1. 消除代码运行的一些不安全之处，保证代码运行的安全。
1. 提高编译器效率，增加运行速度。
1. 禁用了在 ECMAScript的未来版本中可能会定义的一些语法，为未来新版本的Javascript做好铺垫。比如一些保留字如：class, enum, export, extends, import,super不能做变量名


#### 开启严格模式
严格模式可以应用到整个脚本或个别函数中。因此在使用时，我们可以将严格模式分为为脚本开启严格模式和为函数开启严格模式两种情况。

##### 为脚本开启严格模式
为整个脚本文件开启严格模式，需要在==所有语句之前放一个特定语句“use strict”;（或‘use strict’;）。==

    <!--为整个脚本文件开启严格模式-->
    <script>
    　　"use strict";
    　　console.log("这是严格模式。");
    </script>

因为"use strict"加了引号，所以老版本的浏览器会把它当作一行普通字符串而忽略。

==有的 script 基本是严格模式，有的script脚本是正常模式，这样不利于文件合并，所以可以将整个脚本文件放在一个立即执行的匿名函数之中。这样独立创建一个作用域而不影响其他 script 脚本文件。==

    <script>
      (function (){
    　　　　"use strict";
    　　　　function fn() {}
    　  })();
    </script>

##### 为函数开启严格模式
要给某个函数开启严格模式，需要把“use strict”;  (或 'use strict'; ) 声明放在函数体所有语句之前。
 
    
    function fn(){
    <!--将 "usestrict"放在函数体的第一行，则整个函数以 "严格模式" 运行。-->
    　　"use strict";
    　　这里面的代码按照严格模式执行
    }
    function fun(){
        这里面还是按照普通模式执行
    }

#### 严格模式中的变化
##### 变量规定
- 在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，变量都必须先用var 命令声明，然后再使用。
- 严禁删除已经声明变量。例如，delete x; 语法是错误的。

#####  严格模式下 this 指向问题
1. 严格模式下全局作用域中的函数this指向的是undefined；
2. 未开启严格模式构造函数时不加new也可以调用，当普通函数，this指向全局对象；    
严格模式下，必须加new。如果不加new，会报错undefined。
给它赋值，会报错；
3. new 实例化的构造函数指向创建的对象实例；
4. 定时器 this 还是指向 window ；
5. 事件、对象还是指向调用者。

##### 函数变化
1. 函数不能有重名的参数。
2. 函数必须声明在顶层。新版本的 JavaScript 会引入“块级作用域”（ES6中已引入）。为了与新版本接轨，不允许在非函数的代码块内声明函数。

更多严格模式要求参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode

### 高阶函数
高阶函数是对其他函数进行操作的函数，它==接收函数作为参数==或==将函数作为返回值输出。==

    <!--接收函数作为参数-->
    <script>
        function fn(callback){
          callback&&callback();
        }
        fn(function(){alert('hi')}
    </script>

    <!--将函数作为返回值输出-->
    <script>
        function fn(){
            return function() {}
        }
         fn();
    </script>

### 闭包
#### 变量作用域
变量根据作用域的不同分为两种：全局变量和局部变量。
1. 函数内部可以使用全局变量。
2. 函数外部不可以使用局部变量。
3. 当函数执行完毕，本作用域内的局部变量会销毁。

#### 什么是闭包
> 闭包（closure）指有权访问另一个函数作用域中变量的函数。                                                
-----  《JavaScript 高级程序设计》

简单理解就是，一个作用域可以访问另外一个函数内部的局部变量。 

#### 闭包的作用

**提问：我们怎么能在fn()函数外面访问fn()中的局部变量 num 呢**
```
<script>
 function fn() {　　　　
    var num = 10;　　　　
    return function {　　　　　　
         console.log(num); // 10         　　　　
     }
  }
  var f = fn();
  f()
</script>

```


    闭包作用：延伸变量的作用范围。

内存泄漏：是指程序中己动态分配的堆内存由于某种原因程序未释放或无法释放，造成系统内存的浪费，导致程序运行速度减慢甚至系统崩溃等严重后果。

### 递归
#### 什么是递归？
- 如果==一个函数在内部可以调用其本身==，那么这个函数就是递归函数；
- 简单理解:函数内部自己调用自己, 这个函数就是递归函数；
- 递归函数的作用和循环效果一样；
- ==由于递归很容易发生“栈溢出”错误（stack overflow），所以必须要加退出条件 return。==


### 浅拷贝和深拷贝
- 浅拷贝只是拷贝一层, 更深层次对象级别的只拷贝引用。
只是把地址拷贝了，被拷贝的数据修改，浅拷贝得到的也会被修改。
- 深拷贝拷贝多层, 每一级别的数据都会拷贝.

#### 浅拷贝
    Object.assign(target, ...sources)     
    属于es6 新增方法，可以浅拷贝。
    
#### 深拷贝
这块的代码建议配合视频理解。
```
     <script>
        // 深拷贝拷贝多层, 每一级别的数据都会拷贝.
        var obj = {
            id: 1,
            name: 'andy',
            msg: {
                age: 18
            },
            color: ['pink', 'red']
        };
        var o = {};
        // 封装函数 
        function deepCopy(newobj, oldobj) {
            for (var k in oldobj) {
                // 判断我们的属性值属于那种数据类型
                // 1. 获取属性值  oldobj[k]
                var item = oldobj[k];
                // 2. 判断这个值是否是数组
                if (item instanceof Array) {
                    newobj[k] = [];
                    deepCopy(newobj[k], item)
                } else if (item instanceof Object) {
                    // 3. 判断这个值是否是对象
                    newobj[k] = {};
                    deepCopy(newobj[k], item)
                } else {
                    // 4. 属于简单数据类型
                    newobj[k] = item;
                }

            }
        }
        deepCopy(o, obj);
        console.log(o);

        var arr = [];
        console.log(arr instanceof Object);
        o.msg.age = 20;
        console.log(obj);
    </script>

```
其余深拷贝操作可以参照以下链接的内容及其评论。
> https://www.cnblogs.com/renbo/p/9563050.html

## 正则表达式

因之前接触过正则表达式，个人觉得用时百度就可以了，视频讲的内容理解就够了。

### 特点
    1. 灵活性、逻辑性和功能性非常的强。
    2. 可以迅速地用极简单的方式达到字符串的复杂控制。
    3. 对于刚接触的人来说，比较晦涩难懂。比如验证邮箱：
    ^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
    4. 实际开发,一般都是直接复制写好的正则表达式。 
    但是要求会使用正则表达式并且根据实际情况修改正则
    表达式。比如用户名:  /^[a-z0-9_-]{3,16}$/ 

### 创建正则表达式
在 JavaScript 中，可以通过两种方式创建一个正则表达式。

**1. 通过调用 RegExp 对象的构造函数创建**

    var 变量名 = new RegExp(/表达式/); 

**2. 通过字面量创建**

    var 变量名 = /表达式/; 

以上    // 注释中间放表达式就是正则字面量，更推荐使用第二种

### 测试正则表达式 test
test() 正则对象方法，用于检测字符串是否符合该规则，该对象会返回 true 或 false，其参数是测试字符串。

    regexObj.test(str) 

    regexObj 是写的正则表达式
    str 我们要测试的文本
    就是检测str文本是否符合我们写的正则表达式规范.

### 正则表达式的组成
一个正则表达式可以由简单的字符构成，比如 /abc/，也可以是简单和特殊字符的组合，比如 /ab*c/ 。其中特殊字符也被称为元字符，在正则表达式中是具有特殊意义的专用符号，如 ^ 、$ 、+ 等。

特殊字符非常多，可以参考：      
- MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
- jQuery 手册：正则表达式部分
- 正则测试工具: http://tool.oschina.net/regex

#### 边界符
正则表达式中的边界符（位置符）用来提示字符所处的位置，主要有两个字符。

边界符 | 说明
---|---
^ | 表示匹配行首的文本（以谁开始）
$ | 表示匹配行尾的文本（以谁结束）

**如果 ^ 和 $ 在一起，表示必须是精确匹配。**

#### 字符类
字符类表示有一系列字符可供选择，只要匹配其中一个就可以了。所有可供选择的字符都放在方括号内。

##### 1. []  方括号

    多选一

    /[abc]/.test('andy')     // true

    字符串只要包含 abc 中任意一个字符都会返回 true 。


    /^[abc]$/.test('andy')     // true

    三选一 只有是a 或者是 b  或者是c 这三个字母才返回 true

##### 2. [-]  方括号内部 范围符 - 

    var reg = /^[a-z]$/; //

    26个英文字母任何一个字母返回 true  - 表示的是a 到z 的范围  

    方括号内部加上 - 表示范围，这里表示 a 到 z 26个英文字母都可以。

#### 3. 字符组合


    var reg = /^[a-zA-Z0-9_-]$/; 

    26个英文字母(大写和小写都可以)任何一个字母返回 true  


#### 4. [^]  方括号内部 取反符^ 

    如果中括号里面有^ 表示取反的意思 不要与 边界符 ^ 混淆

    var reg = /^[^a-zA-Z0-9_-]$/;

### 量词符
量词符用来设定某个模式出现的次数。

header 1 | header 2
---|---
* | 重复 0 次 或者 更多次
+ | 重复一次 或者 更多次
? | 重复 0 次 或 一次
{n} | 重复 n 次 
{n,} | 重复 n 次 或者 更多次
{n,m} | 重复 n 次 到 m 次

### 括号总结

符号 | 属性 |意义
---|---|---
大括号 | 量词符。| 里面表示重复次数
中括号 | 字符集合。|匹配方括号中的任意字符. 
小括号 | | 表示优先级。

    中括号：字符集合。匹配方括号中的任意字符。

    var reg = /^[abc]$/;
    <!--a 也可以 b 也可以 c 可以  a ||b || c-->



    大括号：量词符。里面表示重复次数。

    var reg = /^abc{3}$/; 
    <!--它只是让c重复三次   abccc-->


    小括号：表示优先级。

    var reg = /^(abc){3}$/; 
    <!--它是让abcc重复三次-->
### replace替换

    str.replace(regexp|substr, newSubStr|function)


参数 | 定义
---|---
regexp (pattern)|一个RegExp对象或者其字面量。该正则所匹配的内容会被第二个参数的返回值替换掉。
substr (pattern)| 一个将被 newSubStr替换的 字符串。其被视为一整个字符串，而不是一个正则表达式。仅第一个匹配项会被替换。
newSubStr (replacement) |用于替换掉第一个参数在原字符串中的匹配部分的字符串。该字符串中可以内插一些特殊的变量名。参考下面的使用字符串作为参数。
function (replacement) | 一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果。


### 正则表达式参数

    /表达式/[switch]

switch（也称修饰符）：按照什么样的模式来匹配，有三种值：        
- g：全局匹配
- i：忽略大小写
- gi：全局匹配+忽略大小写


    用多个敏感词使用 “ | ”  
    例如：/第一个|第二个/
```
<body>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <button>submit</button>
    <div></div>
</body>
<script>
    //替换 replace
    // var str="andy和red"
    // var newStr=str.replace("andy","baby")
    // console.log(newStr)
    var text = document.querySelector("textarea")
    var btn = document.querySelector("button")
    var div = document.querySelector('div')
    btn.onclick = function () {
        div.innerHTML = text.value.replace(/激情|嗯哼/g, '**')
    }
  
</script>
```