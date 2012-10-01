
define(["app/AbstractPage"] , function( AbstractPage){

  function Page(name) {
     this.name = name;
  }

  // extends AbstrctPage ------------------------------------------------------
  Page.prototype = new AbstractPage();
//---------------------------------------------------------------------------


  Page.prototype.sayName = function () {
      console.log ("this = "+ this.name );

      // call function on parent.
      this.calledFromChild();

      // call local function
      callLocalFunc();

  };

  // overrides sayItBaby() in abstract page
  Page.prototype.sayItBaby = function(first_argument) {
      console.log ("PAGE : say it baby = " + first_argument );
   };

//---------------------------------------------------------------------------

  function callLocalFunc() {
         console.log ( " callLocalFunc " );
        // Works - but not pretty
        Page.call(this, Page.prototype.fromLocal(Page.name));
    }



  Page.prototype.fromLocal = function(first_argument) {
      console.log ("PAGE : fromLocal = " + first_argument );
   };

//---------------------------------------------------------------------------

 return Page;

});
