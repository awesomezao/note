var person = {
  name:'zao'
}
var arr = []
var reg=/^a$/
var zao=function (name) {
  this.name=name
}

var a=new zao()
console.time()
console.log(Object.prototype.toString.call(zao))
console.timeEnd()

