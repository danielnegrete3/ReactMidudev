export const checkWinner = (boardToCheck, index) =>
    {
      var winner = Array(4).fill(0);
      var sign = boardToCheck[index];
      var i = Math.floor(index /3);
      var j = index%3;
  
      const matriz = [];
  
      // Dividimos el array en filas de 3 elementos
      for (let i = 0; i < boardToCheck.length; i += 3) {
          matriz.push(boardToCheck.slice(i, i + 3));
      }
  
      for(var x =0 ; x< 3;x++)
      {
        // Gana en horizontal
        if(matriz[i][x]== sign){
          winner[0]++;
        }
        // Gana en Vertical
        if( matriz[x][j] == sign){
          winner[1]++;
        }
        // Gana en digonal principal
        if( matriz[x][x] == sign){
          winner[2]++;
        }
        // Gana en digonal secundaria
        if(matriz[x][2-x] == sign){
          winner[3]++;
        }
      }
  
      for(var x =0 ; x < winner.length; x++ ){
        if(winner[x] == 3){
          return sign
        }
      }
  
      if( boardToCheck.includes(null) ){
        return null;
      }else{
        return false;
      }
  
    }