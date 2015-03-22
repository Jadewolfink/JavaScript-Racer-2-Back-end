// $(document).ready(function() {
//     var Stopwatch = function(elem, options) {

//       var timer       = createTimer(),
//           startButton = createButton("start", start),
//           stopButton  = createButton("stop", stop),
//           resetButton = createButton("reset", reset),
//           offset,
//           clock,
//           interval;

//       // default options
//       options = options || {};
//       options.delay = options.delay || 1;

//       // append elements     
//       elem.appendChild(timer);

//       // initialize
//       reset();

//       // private functions
//       function createTimer() {
//         return document.createElement("span");
//       }

//       function createButton(action, handler) {
//         var a = document.createElement("a");
//         a.href = "#" + action;
//         a.innerHTML = action;
//         a.addEventListener("click", function(event) {
//           handler();
//           event.preventDefault();
//         });
//         return a;
//       }

//       function start() {
//         if (!interval) {
//           offset   = Date.now();
//           interval = setInterval(update, options.delay);
//         }
//       }

//       function stop() {
//         if (interval) {
//           clearInterval(interval);
//           interval = null;
//         }
//       }

//       function reset() {
//         clock = 0;
//         render();
//       }

//       function update() {
//         clock += delta();
//         render();
//       }

//       function render() {
//         timer.innerHTML = clock/1000; 
//       }

//       function delta() {
//         var now = Date.now(),
//             d   = now - offset;

//         offset = now;
//         return d;
//       }

//       function time() {
//         return clock;
//       }

//       // public API
//       this.time = time;
//       this.start  = start;
//       this.stop   = stop;
//       this.reset  = reset;
//    };

//     var Player = function(name){
//       this.name = name;
//       this.location = 0;

//       function moveCar(player) {
//         game.timer.start();
//         var active_ele = "tr#player" + this.playerNum + "_strip td";
//         $(active_ele).eq(this.location).replaceWith("<td>-</td>");
//         this.location += 1;
//         $(active_ele).eq(this.location).replaceWith( "<td class= 'active'><img src=" + this.carPath + " alt='car' class='image'></td>" );
//       }

//       this.moveCar = moveCar;

//     };

//     var Game = function(player1, player2){
//       var self = this;
//       this.player1 =  player1;
//       this.player2 = player2;
//       this.timer = createTimer();

//       this.player1.playerNum = "1"
//       this.player1.carPath = 'images/car.jpeg'
//       this.player2.playerNum = "2"
//       this.player2.carPath = 'images/car2.jpeg'

//       function checkWin() {
//         if (player1.location == 19) {
//           this.timer.stop();
//           alert("player1".charAt(0).toUpperCase() + "player1".slice(1) + "Won!");
//           fillAndSubmitHiddenForm(this.player1)
//         }
//         if (player2.location == 19){
//           this.timer.stop();
//           alert("player2".charAt(0).toUpperCase() + "player2".slice(1) + "Won!");
//           fillAndSubmitHiddenForm(this.player2)
//         }
//       };

//       function fillAndSubmitHiddenForm(player) {
//         theForm = document.getElementById( 'realForm' );
//         theForm.won.value = player.playerNum;
//         theForm.player1.value = self.player1.location;
//         theForm.player2.value = self.player2.location;
//         theForm.time.value = self.timer.time();
//         theForm.submit();
//       }

//       function createTimer() {
//         var elems = document.getElementsByClassName("basic");
//         aTimer = new Stopwatch(elems[0], {delay: 10});
//         return aTimer;
//       };

//       this.checkWin = checkWin;
//     }

//     var game = new Game(new Player("hi"), new Player("who"));

//     $(document).on("keyup", function(e) {
//         if(e.which == 81){
//           game.player1.moveCar();
//         } 
//         if(e.which == 80){
//           game.player2.moveCar();
//         } 
//         game.checkWin();
//     });

//     $(document).on("click", function(event){
//       console.log(game.timer.time())
//     });
//   });