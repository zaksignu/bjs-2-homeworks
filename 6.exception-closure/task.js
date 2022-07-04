
function parseCount(stringForParse){
        let result = Number.parseInt(stringForParse);
        if (isNaN(result)){
            throw new Error("Невалидное значение")
         } ;
        return result;
    }

function validateCount(stringForValidate){
    try{    
    return  parseCount(stringForValidate);
    } catch(err){
     console.log(err);
     return err;
    }
}

class Triangle{
    constructor(a,b,c){
        if (((a+b)<c) || ((a+c)<b) || ((b+c)<a)){
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.aSide = a;
        this.bSide = b;
        this.cSide = c;
    }
    getPerimeter(){
        return this.aSide + this.bSide + this.cSide;
    }
    getArea(){
        let halfPer = this.getPerimeter() / 2;
        return Number(Math.sqrt(halfPer*(halfPer-this.aSide)*(halfPer-this.bSide)*(halfPer-this.cSide)).toFixed(3));
    }

}
class SpoiledTriangle {
    getArea(){
        return `Ошибка! Треугольник не существует`;
    }
    getPerimeter(){
        return "Ошибка! Треугольник не существует";
    }
}

function getTriangle(a,b,c){
    try{
        return new Triangle(a,b,c);
    } catch(err){
        return new SpoiledTriangle;
    } 
}
