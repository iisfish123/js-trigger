(function(window){
    var Trigger = function(obj){
        this.name = obj.name;
        this.fre = obj.fre;
        this.interval = obj.interval;
        this.firstTrigger = obj.firstTrigger;
        this.callback = obj.callback;
        if(!this.firstTrigger){
            var currentTime = Date.parse(new Date());
            this.startTime = currentTime;
            this.endTime = currentTime+interval*1000;
            return this;
        }
        this.triggerHandle();
    }
    Trigger.prototype.triggerHandle = function(){
        var currentTime = Date.parse(new Date());
        if(currentTime<this.endTime){
            return this;
        }
        this.startTime = currentTime;
        this.endTime = currentTime+this.interval*1000;
        if(typeof this.callback === 'function'){
            this.callback();
        }
    }
    Trigger.create = function(obj){
        return new Trigger(obj);
    }
    window.Trigger = Trigger;
})(window);

function loanclick(){
    if(!this.loanClickTrigger){
        this.loanClickTrigger = Trigger.create({
            name:'loan_click',
            interval:3,//点击超过3s触发，3s内不触发
            firstTrigger:true,
            callback:function(){
                //ajax操作
                console.info('ajax触发了');
            }
        });
        return;
    }

    this.loanClickTrigger.triggerHandle();
}


