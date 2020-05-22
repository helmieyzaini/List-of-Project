var temp = document.querySelector('.time');
 	var button = document.querySelector("button");
 	var words = document.querySelector(".words");
 	var timerDiv = document.querySelector(".time");
 	var scoreDiv = document.querySelector(".score");
 	var points = 0;
 	var spans;
 	var typed;
 	var seconds = 20;
  var spark = new Audio("audio/source.mp3");

 	function countdown() {
 		points = 0;
 		var timer = setInterval(function(){
 			button.disabled = true;
    		seconds--;
    		temp.innerHTML = seconds;
    		if (seconds === 0) {
    			alert("Game over! Your score is " + points);
    			scoreDiv.innerHTML = "0";
    			words.innerHTML = "";
    			button.disabled = false;
    			clearInterval(timer);
    			seconds = 20;
    			timerDiv.innerHTML = "20";
    			button.disabled = false;	
    		}
 		}, 1000);
  	}

  	function random() {
  		words.innerHTML = "";
  		var random = Math.floor(Math.random() * (616 - 0 + 1)) + 0;
  		var wordArray = list[random].split("");
  		for (var i = 0; i < wordArray.length; i++) { //building the words with spans around the letters
  			var span = document.createElement("span");
  			span.classList.add("span");
  			span.innerHTML = wordArray[i];
  			words.appendChild(span);
  		}
  		spans = document.querySelectorAll(".span");
  	}


  	const list = ['ACCOUNT','ACCURATE','ACRES','ACROSS','ACT','ACTION','ACTIVE','ACTIVITY',
  'ACTUAL','ACTUALLY','ADD','ADDITION','ADDITIONAL','ADJECTIVE','ADULT','ADVENTURE',
  'ADVICE','AFFECT','AFRAID','AFTER','AFTERNOON','AGAIN','AGAINST','AGE',
  'AGO','AGREE','AHEAD','AID','AIR','AIRPLANE','ALIKE','ALIVE',
  'AWAY','BABY','BACK','BAD','BADLY','BAG','BALANCE','BALL',
  'BALLOON','BAND','BANK','BAR','BARE','BARK','BARN','BASE',
  'BASEBALL','BASIC','BASIS','BASKET','BAT','BATTLE','BE','BEAN',
  'BEAR','BEAT','BEAUTIFUL','BEAUTY','BECAME','BECAUSE','BECOME','BECOMING',
  'BEE','BEEN','BEFORE','BEGAN','BEGINNING','BEGUN','BEHAVIOR','BEHIND',
  'BEING','BELIEVED','BELL','BELONG','BELOW','BELT','BEND','BENEATH',
  'BENT','BESIDE','BEST','BET','BETTER','BETWEEN','BEYOND','BICYCLE',
  'BIGGER','BIGGEST','BILL','BIRDS','BIRTH','BIRTHDAY','BIT','BITE',
  'BLACK','BLANK','BLANKET','BLEW','BLIND','BLOCK','BLOOD','BLOW',
  'BLUE','BOARD','BOAT','BODY','BONE','BOOK','BORDER','BORN',
  'BOTH','BOTTLE','BOTTOM','BOUND','BOW','BOWL','BOX','BOY',
  'BRAIN','BRANCH','BRASS','BRAVE','BREAD','BREAK','BREAKFAST','BREATH',
  'COMPASS','COMPLETE','COMPLETELY','COMPLEX','COMPOSED','COMPOSITION','COMPOUND','CONCERNED',
  'DARK','DARKNESS','DATE','DAUGHTER','DAWN','DAY','DEAD','DEAL',
  'DEAR','DEATH','DECIDE','DECLARED','DEEP','DEEPLY','DEER','DEFINITION',
  'DEGREE','DEPEND','DEPTH','DESCRIBE','DESERT','DESIGN','DESK','DETAIL',
  'DETERMINE','DEVELOP','DEVELOPMENT','DIAGRAM','DIAMETER','DID','DIE','DIFFER',
  'DIFFERENCE','DIFFERENT','DIFFICULT','DIFFICULTY','DIG','DINNER','DIRECT','DIRECTION',
  'DIRECTLY','DIRT','DIRTY','DISAPPEAR','DISCOVER','DISCOVERY','DISCUSS','DISCUSSION',
  'DISEASE','DISH','DISTANCE','DISTANT','DIVIDE','DIVISION','DO','DOCTOR',
  'DOES','DOG','DOING','DOLL','DOLLAR','DONE','DONKEY','DOOR',
  'DOT','DOUBLE','DOUBT','DOWN','DOZEN','DRAW','DRAWN','DREAM',
  'DRESS','DREW','DRIED','DRINK','DRIVE','DRIVEN','DRIVER','DRIVING',
  'DROP','DROPPED','DROVE','DRY','DUCK','DUE','DUG','DULL',
  'DURING','DUST','DUTY','EACH','EAGER','EAR','EARLIER','EARLY',
  'EARN','EARTH','EASIER','EASILY','EAST','EASY','EAT','EATEN',
  'EDGE','EDUCATION','EFFECT','EFFORT','EGG','EIGHT','EITHER','ELECTRIC',
  'ELECTRICITY','ELEMENT','ELEPHANT','ELEVEN','ELSE','EMPTY','END','ENEMY',
  'ENERGY','ENGINE','ENGINEER','ENJOY','ENOUGH','ENTER','ENTIRE','ENTIRELY',
  'FIRE','FIREPLACE','FIRM','FIRST','FISH','FIVE','FIX','FLAG',
  'FLAME','FLAT','FLEW','FLIES','FLIGHT','FLOATING','FLOOR','FLOW',
  'FLOWER','FLY','FOG','FOLKS','FOLLOW','FOOD','FOOT','FOOTBALL',
  'FOR','FORCE','FOREIGN','FOREST','FORGET','FORGOT','FORGOTTEN','FORM',
  'FORMER','FORT','FORTH','FORTY','FORWARD','FOUGHT','FOUND','FOUR',
  'FOURTH','FOX','FRAME','FREE','FREEDOM','FREQUENTLY','FRESH','FRIEND',
  'FRIENDLY','FRIGHTEN','FROG','FROM','FRONT','FROZEN','FRUIT','FUEL',
  'FULL','FULLY','FUN','FUNCTION','FUNNY','FUR','FURNITURE','FURTHER',
  'FUTURE','GAIN','GAME','GARAGE','GARDEN','GAS','GASOLINE','GATE',
  'GATHER','GAVE','GENERAL','GENERALLY','GENTLE','GENTLY','GET','GETTING',
  'GIANT','GIFT','GIRL','GIVE','GIVEN','GIVING','GLAD','GLASS',
  'GLOBE','GO','GOES','GOLD','GOLDEN','GONE','GOOD','GOOSE',
  'GOT','GOVERNMENT','GRABBED','GRADE','GRADUALLY','GRAIN','GRANDFATHER','GRANDMOTHER',
  'GRAPH','GRASS','GRAVITY','GRAY','GREAT','GREATER','GREATEST','GREATLY',
  'HIT','HOLD','HOLE','HOLLOW','HOME','HONOR','HOPE','HORN',
  'HORSE','HOSPITAL','HOT','HOUR','HOUSE','HOW','HOWEVER','HUGE',
  'MEMBER','MEMORY','MEN','MENTAL','MERELY','MET','METAL','METHOD',
  'MICE','MIDDLE','MIGHT','MIGHTY','MILE','MILITARY','MILK','MILL',
  'MIND','MINE','MINERALS','MINUTE','MIRROR','MISSING','MISSION','MISTAKE',
  'MIX','MIXTURE','MODEL','MODERN','MOLECULAR','MOMENT','MONEY','MONKEY',
  'MONTH','MOOD','MOON','MORE','MORNING','MOST','MOSTLY','MOTHER',
  'PRINTED','PRIVATE','PRIZE','PROBABLY','PROBLEM','PROCESS','PRODUCE','PRODUCT',
  'PRODUCTION','PROGRAM','PROGRESS','PROMISED','PROPER','PROPERLY','PROPERTY','PROTECTION',
  'SPELL','SPEND','SPENT','SPIDER','SPIN','SPIRIT','SPITE','SPLIT',
  'SPOKEN','SPORT','SPREAD','SPRING','SQUARE','STAGE','STAIRS','STAND',
  'STANDARD','STAR','STARED','START','STATE','STATEMENT','STATION','STAY',
  'STEADY','STEAM','STEEL','STEEP','STEMS','STEP','STEPPED','STICK',
  'STIFF','STILL','STOCK','STOMACH','STONE','STOOD','STOP','STOPPED',
  'STORE','STORM','STORY','STOVE','STRAIGHT','STRANGE','STRANGER','STRAW',
  'STREAM','STREET','STRENGTH','STRETCH','STRIKE','STRING','STRIP','STRONG',
  'STRONGER','STRUCK','STRUCTURE','STRUGGLE','STUCK','STUDENT','STUDIED','STUDYING',
  'SUBJECT','SUBSTANCE','SUCCESS','SUCCESSFUL','SUCH','SUDDEN','SUDDENLY','SUGAR',
  'SUGGEST','SUIT','SUM','SUMMER','SUN','SUNLIGHT','SUPPER','SUPPLY',
  'SUPPORT','SUPPOSE','SURE','SURFACE','SURPRISE','SURROUNDED','SWAM','SWEET',
  'SWEPT','SWIM','SWIMMING','SWING','SWUNG','SYLLABLE','SYMBOL','SYSTEM',
  'TABLE','TAIL','TAKE','TAKEN','TALES','TALK','TALL','TANK',
  'TAPE','TASK','TASTE','TAUGHT','TAX','TEA','TEACH','TEACHER',
  'TEAM','TEARS','TEETH','TELEPHONE','TELEVISION','TELL','TEMPERATURE','TEN',
  'TENT','TERM','TERRIBLE','TEST','THAN','THANK','THAT','THEE',
  'THEM','THEMSELVES','THEN','THEORY','THERE','THEREFORE','THESE','THEY',
  'THICK','THIN','THING','THINK','THIRD','THIRTY','THIS','THOSE',
  'THOU','THOUGH','THOUGHT','THOUSAND','THREAD','THREE','THREW','THROAT',
  'THROUGH','THROUGHOUT','THROW','THROWN','THUMB','THUS','THY','TIDE',
  'TIE','TIGHT','TIGHTLY','TILL','TIME','TIN','TINY','TIP'];




  	button.addEventListener("click", function(e){
  		countdown();
  		random();
  		button.disabled = true;	
  	});


  	function typing(e) {
  			typed = String.fromCharCode(e.which);
  			for (var i = 0; i < spans.length; i++) {
  				if (spans[i].innerHTML === typed) { // if typed letter is the one from the word
  					if (spans[i].classList.contains("bg")) { // if it already has class with the bacground color then check the next one
  						continue;
  					} else if (spans[i].classList.contains("bg") === false && spans[i-1] === undefined || spans[i-1].classList.contains("bg") !== false ) { // if it dont have class, if it is not first letter or if the letter before it dont have class (this is done to avoid marking the letters who are not in order for being checked, for example if you have two "A"s so to avoid marking both of them if the first one is at the index 0 and second at index 5 for example)
  						spans[i].classList.add("bg");
  						break;
  					}
  				}
  			}
  			var checker = 0;
  			for (var j = 0; j < spans.length; j++) { //checking if all the letters are typed
  				if (spans[j].className === "span bg") {
  					checker++;
  				}
  				if (checker === spans.length) { // if so, animate the words with animate.css class
            spark.pause();
					  spark.currentTime = 0;
            spark.play();
  					words.classList.add("animated");
  					words.classList.add("fadeOut");
  					points++; // increment the points
  					scoreDiv.innerHTML = points; //add points to the points div
  					document.removeEventListener("keydown", typing, false);
  					setTimeout(function(){
  						words.className = "words"; // restart the classes
  						random(); // give another word
  						document.addEventListener("keydown", typing, false);
  					}, 400);
  				}

  			}
  	}

  	document.addEventListener("keydown", typing, false);