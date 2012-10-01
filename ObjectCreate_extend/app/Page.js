





/*
define(function(){


    var page = Object.create(null);
    page.name = "MyPage";
    page.sayHello = function() {

      this.funcTwo ();
      return "sayHello from Page " + this.name;

    };


  page.funcTwo = function () {
    console.log ("test  funcTwo= "  );
  };



  return page;

});
 */





define(['app/AbstractPage'] , function(AbstractPage){

   var page = Object.create(AbstractPage);

    page.name = "MyPage";
    page.sayHello = function() {
        console.log ("sayHallo PAGE = " );
      this.funcTwo ();


    };


 page.sayYesBaby = function() {

    console.log ("YES YES Baby PAGE = " );


    };

  page.funcTwo = function () {
    //console.log ("test  funcTwo= "  );
  };



  return page;

});

