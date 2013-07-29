xively.setKey("5cmcVIB7FafDCBtTOkx4uQnoBoj4nCe9pDdxxBaOpu6XMS5H");

xively.datastream.get("469696721", "air", function(data) {
    document.getElementById('airValue').innerHTML = data.current_value+"&deg;C";
});

xively.datastream.get("469696721", "water", function(data) {
    document.getElementById('waterValue').innerHTML = data.current_value+"&deg;C";
});


xively.datastream.subscribe( "469696721", "air", function( event, data ) {
	document.getElementById('airValue').innerHTML = data.current_value+"&deg;C";
});

xively.datastream.subscribe( "469696721", "water", function( event, data ) {
	document.getElementById('waterValue').innerHTML = data.current_value+"&deg;C";
});

$(window).load(function() {
	var parentHeight = $('.topdiv').height();
	var childHeight = $('.content').height();
	$('.content').css('margin-top', (parentHeight - childHeight) / 2);
});