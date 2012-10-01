
define(['app/AppModel', 'app/Page', 'app/AbstractPage'] , function(AppModel, Page, AbstractPage){


  function init(){

      $('<p>TEST 42837468 GO GO.</p>').appendTo( $("#placeholder") );


      var page = new Page ();
     // var page = _.extend(Page.prototype , null );
      console.log ("page.name = " + page.name );
      page.sayHello();
      page.sayGoodbye();




/*
      page.sayHello();

      var pageTwo = _.extend(Page, null );
      pageTwo.name = "Chuck Norris ";
      console.log ("page.name = " + pageTwo.name );
      pageTwo.sayHello();

      page.sayHello();

/*
      page.sayName ();
      page.sayGoodbye();


      var pageTwo = new Page ("Dennis the DJ");
      pageTwo.sayName ();
      pageTwo.sayGoodbye();

 */
     // page.sayGoodbye ();
     // page.sayHello ();





    }

    return {
        init:init
    };


});