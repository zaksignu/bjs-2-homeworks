function Student(name, gender, age) {
  this.name=name;
  this.gender=gender;
  this.age=age;
}

function marksTouch(objct){
  if(objct.marks === undefined){ 
    objct.marks=[];
  }
    return 1
}

Student.prototype.setSubject = function (subjectName) {
  this.subject=subjectName
}

Student.prototype.addMark = function (mark) {
  marksTouch(this);
  this.marks.push(mark);
}

Student.prototype.addMarks = function (...mark) {
  marksTouch(this);
  this.marks.push(...mark)
}

Student.prototype.getAverage = function (){
  return this.marks.reduce((acc,item,index,arr)=>{
    acc +=item;
    if (index === arr.length - 1) {
      return  acc/arr.length;
    }
    return acc;
  },0);
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}