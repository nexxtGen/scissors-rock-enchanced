'use strict';


        /*FUNCTIONS*/
        // Actual move output message.    
        var outputMessageGame = function(wonValue, playerFinal, computerFinal) {               
            output.innerHTML = '<h4>'+'<b>'+ wonValue + '</b>' + ' you played ' + '<b>'+ playerFinal +'</b>'+ ', computer played '+'<b>' + computerFinal +'</b>'+ '<br></h4>';                
        }
        
        // Game basic logic.        

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
        
        
        var table1 = function() {
            for (var i = 0; i < params.progress.length; i++) {
                var rou = params.progress[i].round;
                var pla = params.progress[i].player;
               var com = params.progress[i].computer;
               var win = params.progress[i].winnerIs;
                var statu = params.progress[i].roundStatus;                
                outputModalContent.innerHTML += '<span style="margin: 0 auto">'+'<table style="border: 1px solid black;">' + '<tr>' + '<td>' + rou + '</td>' + '<td>' + pla + '</td>' + '<td>' + com + '</td>'+ '<td>' + win + '</td>'+ '<td>' + statu + '</td>' + '</tr>' + '</table>'+'</span>';
               //outputModalContent.innerHTML += ('round: '+rou+'/'+pla+'/'+com+'/'+win+'/'+statu+'/'+'<br>');                               
           }  
           document.querySelector('#modal-overlay').classList.add('show');
           document.querySelector('#modal-one').classList.add('show');
           document.querySelector('#modal-two').classList.remove('show');           
           
        } 
        var table2 = function() {
            for (var i = 0; i < params.progress.length; i++) {
                var rou = params.progress[i].round;
                var pla = params.progress[i].player;
                var com = params.progress[i].computer;
                var win = params.progress[i].winnerIs;
                var statu = params.progress[i].roundStatus;
                outputModalContent2.innerHTML += '<span style="margin: 0 auto">'+'<table style="border: 1px solid black;">' + '<tr>' + '<td>' + rou + '</td>' + '<td>' + pla + '</td>' + '<td>' + com + '</td>'+ '<td>' + win + '</td>'+ '<td>' + statu + '</td>' + '</tr>' + '</table>'+'</span>';
            }  
            document.querySelector('#modal-overlay').classList.add('show');
            document.querySelector('#modal-two').classList.add('show');
            document.querySelector('#modal-one').classList.remove('show');
        }       

        function handleClick(choice) {
            if (params.userWinRate < params.levelCap && params.computerWinRate < params.levelCap ){                                      
                palyerMove(choice);                
                outputPlayer.innerHTML = params.userWinRate;
                outputComputer.innerHTML = params.computerWinRate;
                outputRoundsPlayed.innerHTML = '<h2> Move count: '+params.roundsPlayed+'</h2>';
           }      
           else if (params.userWinRate == params.levelCap && params.computerWinRate < params.levelCap) { 
                    outputModalContent.innerHTML += '<span style="margin: 0 auto; font-weight: bold;">'+'<table style="border: 1px solid black;">' + '<tr>' + '<td>' + 'round' + '</td>' + '<td>' + 'player move' + '</td>' + '<td>' + 'computer move' + '</td>'+ '<td>' + 'win/lost' + '</td>'+ '<td>' + 'game status' + '</td>' + '</tr>' + '</table>'+'</span>';                       
                    table1();
                    //stopPropagation;
           }
           else if (params.computerWinRate == params.levelCap && params.userWinRate < params.levelCap) { 
                    outputModalContent2.innerHTML += '<span style="margin: 0 auto; font-weight: bold;">'+'<table style="border: 1px solid black;">' + '<tr>' + '<td>' + 'round' + '</td>' + '<td>' + 'player move' + '</td>' + '<td>' + 'computer move' + '</td>'+ '<td>' + 'win/lost' + '</td>'+ '<td>' + 'game status' + '</td>' + '</tr>' + '</table>'+'</span>';
                    table2();
                    //stopPropagation;
            }                                  
        }        

        var palyerMove = function(playerFinal){ 
            var won = 'YOU WON!:'; 
            var lost = 'YOU LOST :(';
            var draw = 'IS DEAD-HEAD:'; 
            var computerFinal = computerChoice();            
            var roundStatus;
            params.roundsPlayed += 1;   
            if (playerFinal == 'paper' && computerFinal == 'paper' || playerFinal == 'rock' && computerFinal == 'rock' || playerFinal == 'scissors' && computerFinal == 'scissors') {                    
                    outputMessageGame(draw, playerFinal, computerFinal);
                    roundStatus = ' player ' + params.userWinRate + '/'+params.computerWinRate+ ' computer';                    
                    params.progress.push({round: params.roundsPlayed, player: playerFinal, computer: computerFinal, winnerIs: draw , roundStatus: roundStatus
                    });            
            }
            else if (playerFinal == 'paper' && computerFinal == 'rock' || playerFinal == 'rock' && computerFinal == 'scissors' || playerFinal == 'scissors' && computerFinal == 'paper') {                        
                    outputMessageGame(won, playerFinal, computerFinal);
                    params.userWinRate += 1;
                    
                    roundStatus = ' player ' + params.userWinRate + '/'+params.computerWinRate+ ' computer';
                    params.progress.push({round: params.roundsPlayed, player: playerFinal, computer: computerFinal, winnerIs: won, roundStatus: roundStatus
                    });
                    return params.userWinRate; 
                                    
            }
            else if (playerFinal == 'paper' && computerFinal == 'scissors' || playerFinal == 'rock' && computerFinal == 'paper' || playerFinal == 'scissors' && computerFinal == 'rock') {
                    outputMessageGame(lost, playerFinal, computerFinal);
                    params.computerWinRate += 1; 
                     
                    var roundStatus = ' player ' + params.userWinRate + '/'+params.computerWinRate+ ' computer';
                    params.progress.push({round: params.roundsPlayed, player: playerFinal, computer: computerFinal, winnerIs: lost, roundStatus: roundStatus
                    });
                    return params.computerWinRate;  
            }               
        }      
        /*Functions END*/ 
        //test


        /*Vars*/         
        var output = document.getElementById('first-output');
        var output2 = document.getElementById('result');            
        var startButton = document.getElementById('start-button');  
        var playableButtons = document.getElementsByClassName('player-move');        
        var outputPlayer = document.getElementById('player-score');
        var outputComputer = document.getElementById('computer-score');
        var outputLevelCap = document.getElementById('level-cap');  
        var outputRoundsPlayed = document.getElementById('rounds-played'); 
        var outputModalContent = document.getElementById('for-table');
        var outputModalContent2 = document.getElementById('for-table2');
        var endGame = false;
        var winner;
        ///
        //var progress = [];
        //var progressObject = {round: 0};

        var params = {userWinRate: 0, 
                        computerWinRate: 0, 
                        roundsPlayed: 0, 
                        levelCap: 0,
                        progress:[]
                    };
        
        //Rest 
        startButton.addEventListener('click', function() {  
            params.progress = [];
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
                outputModalContent.innerHTML = 'Game table';
                outputModalContent2.innerHTML = 'Game table';                          
                outputLevelCap.innerHTML = 'Hello! You set '+ '<b>' + params.levelCap +'</b>'+' score limit to the end of the game.<br>' ;  
            }
            else {
                outputLevelCap.innerHTML = 'Hello stranger, set correct round number! (1-99999)' + '<br><br>';
            }
            return params.userWinRate, params.computerWinRate, params.roundsPlayed, params.levelCap; 
        });             
        
        for ( var i = 0; i < playableButtons.length; i++ ) {                           
            playableButtons[i].addEventListener('click', function(event) { 
               var valueButton = this.getAttribute("data-move");
               handleClick(valueButton); 
            });
        }
        
        // MODALS Scripts      
        
        
        // Close modal
    
        var hideModal = function(event){
            event.preventDefault();
            document.querySelector('#modal-overlay').classList.remove('show');
            outputModalContent.innerHTML = '';
            outputModalContent2.innerHTML = '';
        };
        
        var closeButtons = document.querySelectorAll('.modal .close');
        
        for(var i = 0; i < closeButtons.length; i++){
            closeButtons[i].addEventListener('click', hideModal);
        }
        
        // Overlay click close
        
        document.querySelector('#modal-overlay').addEventListener('click', hideModal);
        
        // Overlay stop propagination 
        
        var modals = document.querySelectorAll('.modal');
        
        for(var i = 0; i < modals.length; i++){
            modals[i].addEventListener('click', function(event){
                event.stopPropagation();
            });
        }	
    





