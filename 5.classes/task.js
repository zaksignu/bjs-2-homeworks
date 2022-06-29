
class PrintEditionItem{
    constructor(name,releaseDate,pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this._state = this.state;
        this.type = null;
    }

    fix(){
        this.state = 1.5*this.state;
        };

    set state(health) {
        if (health>=0) {
          if (health>100) {
            this._state = 100;
          } else {
            this._state = health;
          }
        } else {
            this._state = 0;
        }
    } 

    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name,releaseDate,pagesCount){
        super(name,releaseDate,pagesCount);
        this.type = "magazine";
    }

}

class Book extends PrintEditionItem {
    constructor(author,name,releaseDate,pagesCount){
        super(name,releaseDate,pagesCount);
        this.type = "book";
        this.author = author;
    }

}

class NovelBook extends Book {
    constructor(author,name,releaseDate,pagesCount){
        super(author,name,releaseDate,pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author,name,releaseDate,pagesCount){
        super(author,name,releaseDate,pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author,name,releaseDate,pagesCount){
        super(author,name,releaseDate,pagesCount);
        this.type = "detective";
    }
}

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        let searchResult = (this.books.find((book) => book[type] === value));
        return searchResult===undefined?null:searchResult;
    }

    giveBookByName(bookName){
        let searchAttempt = this.books.findIndex((book) => book.name === bookName)
        if (searchAttempt != -1){
            let tempResult = this.books.filter((item,i)=> {
            if (i != searchAttempt) {
                return this.books[i]}
            });
            let requestedBook = this.books[searchAttempt];
            this.books = tempResult.map(i=>i);
            return requestedBook;
        } else {
            return null;
        }
    }
}

class Student{
    constructor(name){
        this.name = name;
        this.marks = [];
        this.refSubj = ["algebra", "geometry","history"];
        this.excluded = false;
        this.excludeReason = "";
    }
    addMark(mark,subject){
        if (this.refSubj.some(subj => subj === subject)){
         if ((mark>0)&&(mark<=5)){
            this.marks.push([mark,subject])
         } else return "Ошибка, оценка должна быть числом от 1 до 5"
        } else return "Несуществующий предмет"
        }

    getAverageBySubject(subject){
        if (this.refSubj.some(subj => subj === subject)){
        let rawResult =  this.marks.filter(mark => mark[1] === subject);
        return rawResult.reduce((acc,item) => { return acc = acc+item[0]/rawResult.length},0);
        } else return "Несуществующий предмет"
    }

    getAverage(){
        let rawResult =  this.marks.map(mark => mark[0]);
        return rawResult.reduce((acc,item) => { return acc = acc+item/rawResult.length},0);
    }

    exclude(reason){
        this.excluded = true;
        this.excludeReason = reason;
    }

}