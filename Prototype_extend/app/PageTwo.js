

define(function(){
 

  function init(){
    	
        console.log (" init page 2 " )	
		
		//this.prototype = Object.create (AbstractPage)

		//console.log ("ss = " + this.prototype )
    }
	

 	

function activate () {
	return "activate pageTWO"
}


    return {
        init:init, 
        activate:activate
    };
});
