define(function(){


  function AbstractPage(name){

      this.name = name;

    }


    AbstractPage.prototype.sayGoodbye = function() {

        this.makeGoodbyeText (this.name);

      };

      AbstractPage.prototype.makeGoodbyeText = function (v) {

          this.sayItBaby(v)

      };

      AbstractPage.prototype.sayItBaby = function (v) {

          console.log ("ABSTRACT : say it baby = " + v );

      };


      AbstractPage.prototype.activate = function() {
        // body...
        return "AbstractPage activate";
      };

      AbstractPage.prototype.calledFromChild = function(first_argument) {

          console.log (" -- AbstractPage: called from child = " );

      };


    return AbstractPage;


});
