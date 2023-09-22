// RANGE INPUT FUNCTION
if (document.querySelector('.cat__nav') !== null) {

  $( function() {
    $( "#price-range" ).slider({
      range: true,
      min: 15,
      max: 145,
      values: [ 15, 145 ],
      slide: function( event, ui ) {
        document.querySelector( ".price-value-left" ).innerHTML = ui.values[ 0 ];
        document.querySelector( ".price-value-right" ).innerHTML = ui.values[ 1 ];
      }
    });
    $( "#amount" ).val( "$" + $( "#price-range" ).slider( "values", 0 ) +
      " - $" + $( "#price-range" ).slider( "values", 1 ) );
  } );

  $( function() {
    $( "#square-range" ).slider({
      range: true,
      min: 49,
      max: 176,
      values: [ 49, 176 ],
      slide: function( event, ui ) {
        document.querySelector( ".square-value-left" ).innerHTML = ui.values[ 0 ];
        document.querySelector( ".square-value-right" ).innerHTML = ui.values[ 1 ];
      }
    });
    $( "#amount" ).val( "$" + $( "#square-range" ).slider( "values", 0 ) +
      " - $" + $( "#square-range" ).slider( "values", 1 ) );
  } );

  $( function() {
    $( "#high-range" ).slider({
      range: true,
      min: 8,
      max: 12,
      values: [ 8, 12 ],
      slide: function( event, ui ) {
        document.querySelector( ".high-value-left" ).innerHTML = ui.values[ 0 ];
        document.querySelector( ".high-value-right" ).innerHTML = ui.values[ 1 ];
      }
    });
    $( "#amount" ).val( "$" + $( "#high-range" ).slider( "values", 0 ) +
      " - $" + $( "#high-range" ).slider( "values", 1 ) );
  } );

}