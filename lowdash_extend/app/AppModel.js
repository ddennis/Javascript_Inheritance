
define(function( ){


	AppModel = Object.create(null);

	AppModel.MODEL_UPDATE = "modelUpdate";

	AppModel.prevIndex = undefined;
	AppModel.currentIndex = 0;

	AppModel.index = 0;


	AppModel.setCurrentIndex = function (value) {

        this.currentIndex = this.controlCurrentIndex(value);

        if( this.currentIndex !== this.prevIndex ){
			this.prevIndex = this.currentIndex;
            this.update ();
        }

		//console.log ("APPMODEL currentIndex "+this.currentIndex );
        //console.log ("APPMODEL prevIndex "+this.prevIndex );
    };



	AppModel.controlCurrentIndex = function (value) {

        if (value < 0)	{
            return	this._totalItems;
        }
        if(value > this._totalItems){
            return 0;
        }

        return value;
     };



    AppModel.forceUpdate = function (index) {

        if(index === undefined ){
            this.update();
        }else {
            this.currentIndex = index;
            this.update();
        }
    };




	AppModel.update = function (index) {

		console.log ("APPMODEL update = " );
		$(this).trigger(this.MODEL_UPDATE);

	};

	return AppModel;

});