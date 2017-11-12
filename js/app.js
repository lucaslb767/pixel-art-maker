

$(function makeGrid(){
  //Select the Submit button
  $('.inputBtn').on('click', function(e){
    e.preventDefault();

    //selects the color according to the input
    const color = $('#colorPicker').val()
    const colorBorder = $('#colorBorder').val()
    //selects the number of rows and columns by input
    const rows = $('#input_height').val();
    const columns = $('#input_width').val();

    //the first loop serves for creating the rows of the grid
    for (let x = 1; x<=rows; ++x){
      $('#pixel_canvas').append('<tr class="rowStructure"></tr>');


      //this second loop to create the column in each row. That is why is used the pseudo-class 'last-of-type', other wise it would keep adding to all previous rows.
      for (let y = 1; y<=columns; ++y){
        $('.rowStructure:last-of-type').append('<td></td>');
        $('td').css('background-color',color);
        $('td').css('border-color',colorBorder);
      }
    }

    $('table').on('click', 'td', function(e){
      e.preventDefault();

      const cellCollor = $('#colorTD').val();

      $(e.target).css('background-color',cellCollor);

    });
  })
});

// $(function changeColor(){
//   $('td').on('click', function(e){
//     e.preventDefault();
//
//     const cellCollor = $('#colorTD').val();
//
//     $(e.target).css('background-color',cellCollor);
//
//   })
// });