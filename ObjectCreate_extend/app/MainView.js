
define(['app/AppModel', 'app/Page', 'app/SubPage'] , function(AppModel, Page, SubPage){


  function init(){

      $('<p>TEST 42837468 GO GO.</p>').appendTo( $("#placeholder") );


      //var page = Object.create(Page);
      //page.sayGoodbye();
      //console.log ("page = " + page.sayHello () );
      //console.log ("page = " + page.sayGoodbye () );

      var mySubPage = Object.create(SubPage);
      mySubPage.sayHowdy ();
      mySubPage.sayHello ();
      mySubPage.sayGoodbye ();


      var model = Object.create(AppModel);
      var testModel = Object.create(AppModel);




      var forward = $('#myheader li').eq(0);
      var back = $('#myheader li').eq(1);


      forward.on('click', function () {
          model.setCurrentIndex(888);
      });


/*
      page.sayGoodbye = function() {
        return "goodbye from " + this.name;
      };
 */




    }


    return {
        init:init
    };


});