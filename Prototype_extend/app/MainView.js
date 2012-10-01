
define(['app/AppModel', 'app/Page', 'app/AbstractPage'] , function(AppModel, Page, AbstractPage){


  function init(){

      $('<p>TEST 42837468 GO GO.</p>').appendTo( $("#placeholder") );


      var page = new Page ("Robby the Robot");
      page.sayName ();
      page.sayGoodbye();


      var pageTwo = new Page ("Dennis the DJ");
      pageTwo.sayName ();
      pageTwo.sayGoodbye();


     // page.sayGoodbye ();
     // page.sayHello ();





    }

    return {
        init:init
    };


});