console.log('js');
$(document).ready(onReady);

function onReady() {
  console.log('jq');
  $('#generate-button').on('click', newRow);
  $('#newGenerationArea').on('click','.swap-button', changeColor);
  $('#newGenerationArea').on('click', '.delete-button', deleteRow)
}

let timesClicked = 0;

function newRow() {
  timesClicked++;
  $('#newGenerationArea').append(`
    <div class="new-row">
      <p class="times-clicked">` + timesClicked + `</p>
      <button class="swap-button">Swap</button>
      <button class="delete-button">Delete</button>
    </div>
  `);
}

function changeColor() {
  $(this).parent('.new-row').toggleClass('toggle-color');
}

function deleteRow() {
  $(this).parent('.new-row').remove();
}