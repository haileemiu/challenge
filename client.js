console.log('js');
$(document).ready(onReady);

function onReady() {
  console.log('jq');
  $('#generate-button').on('click', newRow)

}

let timesClicked = 0;

function newRow() {
  timesClicked++;
  $('#newGenerationArea').append(
    '<div><p class="times-clicked">' + timesClicked + '</p></div>'
  );
}

// $('.times-clicked').click(function() {
//   $('#generate-button').html(timesClicked++);
// })