console.log('js');
$(document).ready(onReady);

function onReady() {
  console.log('jq');
  $('#generate-button').on('click', newRow)

}

let timesClicked = 0;

function newRow() {
  timesClicked++;
  $('#newGenerationArea').append(`
    <div id="newRow">
      <p class="times-clicked">` + timesClicked + `</p>
      <button>Swap</button>
      <button>Delete</button>
    </div>
    
  `);
}
