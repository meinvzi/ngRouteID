app.factory('mainservice',['baseconfig',function(baseconfig){
    return {
        getmain:function(){
            return baseconfig.ajax('http://localhost:8090/data')
        } 
    }
}])