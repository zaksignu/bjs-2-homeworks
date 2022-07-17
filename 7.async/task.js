class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.id = 0;  
        this.timerId = null;
        this.tickPeriod = 10000;
        this.firstClock = 0;
        this.secondClock = 1;
        this.thirdClock = 2;
    }

    addClock(date, funct, id) {
        if (id == null){
            throw new Error('ID не передан');
        }
        if (!this.alarmCollection.some((item)=>item[2] === id)) {
            this.alarmCollection.push([date, funct,id]);
        } else {
            console.error("ID уже существует!");
        }
    }

    getCurrentFormattedTime(){
        let dt = new Date();
        return dt.toLocaleTimeString('ru-Ru',{hour: "2-digit",timeZone:"Europe/Moscow"})+":"+dt.toLocaleTimeString('ru-Ru',{minute: "2-digit",timeZone:"Europe/Moscow"});
    }

    removeClock(id){

        this.alarmCollection = this.alarmCollection.filter((item) => item[2] !==id).slice();
        return this.alarmCollection.some((item) => item[2] !==id);
    }

    start(){
          if (this.timerId === null){
            this.timerId = setInterval(checkclock, this.tickPeriod,this);
        }
    }

    stop(){
        if (this.timerId !==null){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    getCurrentFormattedTimePlus(numb){
        let dt = new Date();
        let newMin =cleanTime( dt.getMinutes()+numb);
        return cleanTime(dt.getHours())+":"+newMin;
    }

      clearAlarms(){
        if (this.timerId !== null){
        clearInterval(this.timerId);
        }
        this.alarmCollection = [];
        console.log("Alarms cleared")
    }

    printAlarms(){
        console.log("Active alarms");
        console.log("-------------");
        this.alarmCollection.forEach((item)=> console.log(item[0]+" "+item[2]))
        console.log("_____________");
    }

}


function cleanTime(time){
    if (time<9){
        return "0"+time;
    }else {
        return time;
    }
}

function checkclock(ob){
       let formattedDate = ob.getCurrentFormattedTime()
       let alarms = ob.alarmCollection.filter((item) => item[0] === formattedDate);
       alarms.forEach((item) => item[1](ob));
}

let tick = new AlarmClock;
let firstTime = tick.getCurrentFormattedTime(tick.firstClock);
let secondTime = tick.getCurrentFormattedTimePlus(tick.secondClock);
let thirdTime = tick.getCurrentFormattedTimePlus(tick.thirdClock);

tick.addClock(firstTime,function() {
    console.log("timer_callback_1");},1);

tick.addClock(secondTime,function(ob) {
        console.log("timer_callback_2");
        ob.removeClock(2);   
    },2);

tick.addClock(thirdTime,function(ob) {
            console.log("timer_callback_3");
            clearInterval(ob.timerId);
            ob.clearAlarms();
            ob.printAlarms();
        },3);
tick.printAlarms();
tick.start();
