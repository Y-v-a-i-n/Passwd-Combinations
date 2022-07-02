exports.check=function(t){
    if(t){
        var n=0;
        return String(t).match(/([0-9])/g)&(n=10),String(t).match(/([A-Z])/g)&&(n=36),String(t).match(/([a-z])/g)&&(n=62),String(t).match(/\W|_/g)&&(n=103),Math.pow(n,t.length)
    }
    return "The passsword is invalid."
};