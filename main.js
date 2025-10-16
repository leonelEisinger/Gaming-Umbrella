const cellOriginalValues = {};
//[x, y]
var playerPos = [0 , 0];
const map_size = [200, 200];
var i=0, j=0;
let k = 0; ;
$(document).ready(function(){

    //draw map
    while(j<=map_size[1]){
        $('#map').append(`<div id="row-${j}" class="row row-cols-auto justify-content-md-center"></div>`);
        i=0;
        
        while (i<=map_size[0]){
            $(`#row-${j}`).append(`<div class="col m-1 fs-2 texte-center" id="${i}-${j}">.</div>`)
            i=i+20;
        }
        j=j+20
    }

    //Draw template
    for (let y = 0; y < 12; y++) { 
    for (let x = 0; x < 12; x++) {
        let cellId = `${x * 20}-${y * 20}`;
        let cellValue = ".";
        
        
        $(`#${cellId}`).text(cellValue); 

        k++;
    }
}

    //Draw char
    $(`#${playerPos[0]}-${playerPos[1]}`).text("@");

    $(document).keydown(function(e) {
    let oldX = playerPos[0];
    let oldY = playerPos[1];

    switch (e.which) {
        case 37: // Left
            if (playerPos[0] > 0) playerPos[0] -= 20;
            break;
        case 39: // Right
            if (playerPos[0] < map_size[0]) playerPos[0] += 20;
            break;
        case 38: // Up
            if (playerPos[1] > 0) playerPos[1] -= 20;
            break;
        case 40: // Down
            if (playerPos[1] < map_size[1]) playerPos[1] += 20;
            break;
        default:
            return;
    }

    // Restaurar valor original da posição anterior
    let oldId = `${oldX}-${oldY}`;
    $(`#${oldId}`).text(cellOriginalValues[oldId]);

    // Colocar o jogador na nova posição
    let newId = `${playerPos[0]}-${playerPos[1]}`;
    $(`#${newId}`).text("@");

    e.preventDefault();
});
});

    