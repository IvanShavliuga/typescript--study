console.log("hello world!");

type testType = {
  value: Number,
  text: String,
  color?: String,
  print: Function,
  list: Function,
  commands: Array<String>
}
let elem : HTMLElement | null;
let dt:testType = {
  value: 200,
  text: "OK",
  color: 'red',
  commands: ['test','print','list','save'],
  print: function() {
    return `${this.value} ${this.text}`
  },
  list: function() {
    /*let s:String = ''
    let n:Number = 1
    for (let c:String of this.commands) {
      s += `<br/>${n}: ${c}`
    } */
    return this.commands.join('<br/>')//`${s}`
  }
}
let fn = function(obj:testType):any {
  return  `${obj.value} ${obj.text}`
}
if (elem=document.getElementById('app')) {
  elem.innerHTML = dt.print() + '<br/>' + dt.list()
  elem.style.color = `${dt.color}`
}
function PrintType<T>(v:T) {
 let val:T = v
 let tv:String= typeof val
 console.log(tv)
}
PrintType<Number>(0)