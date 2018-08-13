'use strict';


        /*FUNCTIONS*/
        // Actual move output message.    
        var outputMessageGame = function(wonValue, playerFinal, computerFinal) {               
            output.innerHTML = '<h4>'+'<b>'+ wonValue + '</b>' + ' you played ' + '<b>'+ playerFinal +'</b>'+ ', computer played '+'<b>' + computerFinal +'</b>'+ '<br></h4>';                
        }
        
        // Game basic logic.
        var palyerMove = function(playerFinal){ 
            var won = 'YOU WON!:'; 
            var lost = 'YOU LOST :(';
            var draw = 'IS DEAD-HEAD:'; 
            var computerFinal = computerChoice(); 
            params.roundsPlayed += 1;                     
            if (playerFinal == 'paper' && computerFinal == 'paper' || playerFinal == 'rock' && computerFinal == 'rock' || playerFinal == 'scissors' && computerFinal == 'scissors') {                    
                    outputMessageGame(draw, playerFinal, computerFinal);
            }
            else if (playerFinal == 'paper' && computerFinal == 'rock' || playerFinal == 'rock' && computerFinal == 'scissors' || playerFinal == 'scissors' && computerFinal == 'paper') {                        
                    outputMessageGame(won, playerFinal, computerFinal);
                    params.userWinRate += 1;
                    return params.userWinRate; 
            }
            else if (playerFinal == 'paper' && computerFinal == 'scissors' || playerFinal == 'rock' && computerFinal == 'paper' || playerFinal == 'scissors' && computerFinal == 'rock') {
                    outputMessageGame(lost, playerFinal, computerFinal);
                    params.computerWinRate += 1;
                    return params.computerWinRate;                     
            }   
            
            //return params.roundsPlayed;              
        }  

        var computerChoice = function() {
            var randomNumber = Math.random();
            var computerNumber = parseInt(randomNumber * 3 + 1);
            if (computerNumber == 1) {
               var computerChoice = 'paper';
               return computerChoice;  
            }
            else if (computerNumber == 2) {
               var computerChoice = 'rock';
               return computerChoice;  
            }
            else if (computerNumber == 3) {
               var computerChoice = 'scissors';
               return computerChoice;  
            }                              
        }  
        
        function handleClick(choice) {
            if (params.userWinRate < params.levelCap && params.computerWinRate < params.levelCap ){                                      
                palyerMove(choice);
                //output2.innerHTML = 'Your score: ' + userWinRate + '. Computer score:'+ computerWinRate + ' .<br> ';
                outputPlayer.innerHTML = params.userWinRate;
                outputComputer.innerHTML = params.computerWinRate;
                outputRoundsPlayed.innerHTML = '<h2>'+params.roundsPlayed + '/' + params.levelCap+ '</h2>';
           }      
           else if (params.userWinRate == params.levelCap && params.computerWinRate < params.levelCap) {
               alert('You WON entire GAME!!! Click Start new Game.');
           }
           else if (params.computerWinRate == params.levelCap && params.userWinRate < params.levelCap) {
               alert('You LOST, Computer WON! Click Start new Game.');
           }                   
        }
        /*Functions END*/  

        /*Vars*/         
        var output = document.getElementById('first-output');
        var output2 = document.getElementById('result');            
        var startButton = document.getElementById('start-button');  
        var playableButtons = document.getElementsByClassName('player-move');        
        var outputPlayer = document.getElementById('player-score');
        var outputComputer = document.getElementById('computer-score');
        var outputLevelCap = document.getElementById('level-cap');  
        var outputRoundsPlayed = document.getElementById('rounds-played');
        //var levelCap;   
        var params = {userWinRate: 0, computerWinRate: 0, roundsPlayed: 0, levelCap: 0};
                   
        
        //Rest 
        startButton.addEventListener('click', function() { 
            params.userWinRate = 0;
            params.computerWinRate = 0;
            params.roundsPlayed = 0;
            params.levelCap = window.prompt('Set necessary win rounds to the end of the game.', 0);
            outputLevelCap.innerHTML ='';
            if (params.levelCap < 99999 && params.levelCap > 0) { 
                outputPlayer.innerHTML = '-';
                outputComputer.innerHTML = '-';
                output2.innerHTML = '';
                output.innerHTML = '';                        
                outputLevelCap.innerHTML = 'Hello! You set '+ '<b>' + params.levelCap +'</b>'+' score limit to the end of the game.<br>' ;  

            }
            else {
                outputLevelCap.innerHTML = 'Hello stranger, set correct round number! (1-99999)' + '<br><br>';
            }
            return params.userWinRate; 
            return params.computerWinRate;              
            return params.roundsPlayed;
            return params.levelCap; 
        });       
        
        
        
        
        //paperButton.getAttribute("data-move");
        //document.write(paperButton.getAttribute("data-move"));
        for ( var i = 0; i < playableButtons.length; i++ ) {
            //var buttonAtributes2 = ['paper', 'rock', 'scissors'];            
            //var buttonAtributes = playableButtons[i].getAttribute("data-move");            
            //document.write('to jest atrybut przycisku ze zmiennej: '+ buttonAtributes + ' , ' );                     
            playableButtons[i].addEventListener('click', function(event) {  
               //var targett = event.target || event.srcElement;              
               //var valueButton = targett.getAttribute("data-move");
               var valueButton = this.getAttribute("data-move");
               //console.log('test', valueButton);
               handleClick(valueButton);  
               //event.stopPropagation();             
               /*
                for ( var i = 0; i < playableButtons.length; i++ ) {
                    handleClick(playableButtons[i].getAttribute("data-move"));
                }
                */
            });
        }        
        





