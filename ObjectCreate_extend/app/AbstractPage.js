

// Jeg er lidt i tvilv om AbstractPage skal være et modul eller et object


define(function(){


  var AbstractPage = {

    name: "abstract",

    sayGoodbye: function() {

        this.sayYesBaby ();

      },

      sayYesBaby: function() {

            console.log ("YES YES Baby ABSTRACT PAGE= " );
      }


};


    return AbstractPage;


});



/*
define(function(){

	var name = "min tetset"

   function init(){

     //$('<p>APP  running.</p>').appendTo( $("#placeholder") );
		    console.log ("AbstractPage init " )

    }

    function getName () {
    	return "yes yes "
    }


  function activate () {
      return "AbstractPage activate"
    }



    return {
        init:init,
        getName:getName,
        activate:activate
    };


});

*/


/*
define(function(){


  function AbstractPage(name){

  		this.name = name
     console.log ("AbstractPage " + name )

    };


    AbstractPage.prototype.myName = function() {

        console.log ("AbstractPage init "  )


      };



  		AbstractPage.prototype.activate = function() {
  			// body...
  			return "AbstractPage activate"
  		};


    return AbstractPage


});
*/