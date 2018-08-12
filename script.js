'use strict';
/*FUNCTIONS*/
            /*
            var palyerMove = function(player){ 
                var won = 'YOU WON!'; 
                var lost = 'YOU LOST :(';
                var draw = 'IS DEAD-HEAD';                        
                if (player == 'paper') {                    
                    var playerFinal = 'paper';
                    var computerFinal = computerChoice();
                    if (computerFinal == 'paper') {                                           
                        outputMessageGame(draw, playerFinal, computerFinal);
                    }
                    else if (computerFinal == 'rock') {                        
                        outputMessageGame(won, playerFinal, computerFinal);
                        userWinRate += 1;
                        return userWinRate;
                    }
                    else if (computerFinal == 'scissors') {
                        outputMessageGame(lost, playerFinal, computerFinal);
                        computerWinRate += 1;
                        return computerWinRate;
                    } 
                }            
                else if (player === 'rock') {
                    var playerFinal = 'rock';
                    var computerFinal = computerChoice();
                    if (computerFinal == 'paper') {                                           
                        outputMessageGame(lost, playerFinal, computerFinal);                        
                        computerWinRate += 1;
                        return computerWinRate;
                    }
                    else if (computerFinal == 'rock') {                        
                        outputMessageGame(draw, playerFinal, computerFinal);                       
                    }
                    else if (computerFinal == 'scissors') {
                        outputMessageGame(won, playerFinal, computerFinal);
                        userWinRate += 1;
                        return userWinRate;
                    }
                }
                else if (player === 'scissors') {
                    var playerFinal = 'scissors';
                    var computerFinal = computerChoice();
                    if (computerFinal == 'paper') {                                           
                        outputMessageGame(won, playerFinal, computerFinal);                        
                        userWinRate += 1;
                        return userWinRate;
                    }
                    else if (computerFinal == 'rock') {                        
                        outputMessageGame(lost, playerFinal, computerFinal);
                        computerWinRate += 1;
                        return computerWinRate;
                    }
                    else if (computerFinal == 'scissors') {
                        outputMessageGame(draw, playerFinal, computerFinal);                       
                    }
                }                
            } 
            */
           var outputMessageGame = function(wonValue, playerFinal, computerFinal) {               
            output.innerHTML = '<h4>'+'<b>'+ wonValue + '</b>' + ' you played ' + '<b>'+ playerFinal +'</b>'+ ', computer played '+'<b>' + computerFinal +'</b>'+ '<br></h4>';                
        }
        
        var palyerMove = function(playerFinal){ 
            var won = 'YOU WON!:'; 
            var lost = 'YOU LOST :(';
            var draw = 'IS DEAD-HEAD:'; 
            var computerFinal = computerChoice(); 
            //var playerFinal = player;                      
            if (playerFinal == 'paper' && computerFinal == 'paper' || playerFinal == 'rock' && computerFinal == 'rock' || playerFinal == 'scissors' && computerFinal == 'scissors') {                    
                    outputMessageGame(draw, playerFinal, computerFinal);
            }
            else if (playerFinal == 'paper' && computerFinal == 'rock' || playerFinal == 'rock' && computerFinal == 'scissors' || playerFinal == 'scissors' && computerFinal == 'paper') {                        
                    outputMessageGame(won, playerFinal, computerFinal);
                    userWinRate += 1;
                    return userWinRate;
            }
            else if (playerFinal == 'paper' && computerFinal == 'scissors' || playerFinal == 'rock' && computerFinal == 'paper' || playerFinal == 'scissors' && computerFinal == 'rock') {
                    outputMessageGame(lost, playerFinal, computerFinal);
                    computerWinRate += 1;
                    return computerWinRate;
            }                 
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
            if (userWinRate < levelCap && computerWinRate < levelCap ){                                      
                palyerMove(choice);
                //output2.innerHTML = 'Your score: ' + userWinRate + '. Computer score:'+ computerWinRate + ' .<br> ';
                outputPlayer.innerHTML = userWinRate;
                outputComputer.innerHTML = computerWinRate;
           }      
           else if (userWinRate == levelCap && computerWinRate < levelCap) {
               alert('You WON entire GAME!!! Click Start new Game.');
           }
           else if (computerWinRate == levelCap && userWinRate < levelCap) {
               alert('You LOST, Computer WON! Click Start new Game.');
           }                   
        }
        /*Functions END*/  
        /*Vars*/         
        var output = document.getElementById('first-output');
        var output2 = document.getElementById('result');            
        var startButton = document.getElementById('start-button');
        var paperButton = document.getElementById('paper-button');
        var rockButton = document.getElementById('rock-button');
        var scissorsButton = document.getElementById('scissors-button');
        var outputPlayer = document.getElementById('player-score');
        var outputComputer = document.getElementById('computer-score');
        var outputLevelCap = document.getElementById('level-cap');
        var countMessages = 0;
        var userWinRate;
        var computerWinRate;
        var levelCap;            
        //vars isFinish;            
                    
        startButton.addEventListener('click', function() { 
            userWinRate = 0;
            computerWinRate = 0;
            levelCap = window.prompt('Set necessary win rounds to the end of the game.', 0);
            outputLevelCap.innerHTML ='';
            if (levelCap < 99999 && levelCap > 0) { 
                outputPlayer.innerHTML = '-';
                outputComputer.innerHTML = '-';
                output2.innerHTML = '';
                output.innerHTML = '';                        
                outputLevelCap.innerHTML = 'Hello! You set '+ '<b>' + levelCap +'</b>'+' score limit to the end of the game.<br>' ;                                     
            }
            else {
                outputLevelCap.innerHTML = 'Hello stranger, set correct round number! (1-99999)' + '<br><br>';
            }
            return userWinRate; 
            return computerWinRate;  
            return levelCap; 
        });
        
        

        paperButton.addEventListener('click', function(){
            handleClick('paper');
        }); 
        rockButton.addEventListener('click', function(){
            handleClick('rock');
        }); 
        scissorsButton.addEventListener('click', function(){
            handleClick('scissors');
        }); 