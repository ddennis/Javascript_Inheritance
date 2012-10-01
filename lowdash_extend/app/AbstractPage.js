define(function(){


  function AbstractPage(name){
  }


    _.extend(AbstractPage.prototype , {

          name: "Abstract",

          sayFive: function () {
            console.log (" im 5 = " );

          },

          sayGoodbye: function () {
            console.log (" goodbye = " );
            this.callFuncOnChild ();

          },

         callFuncOnChild : function () {
              console.log (" callFuncOnChild ABSTRAC = " );
          }



    });




    return AbstractPage;


});
