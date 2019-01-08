(function() {
	$(document).ready(function() {
		
  function sound(src,loop) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
		this.sound.loop = loop
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
	
  var player = function()
  {
    this.name = "name"
		this.dead = false
    this.health = 10
    this.stamina = 10
		this.fullhealth = this.health
    this.fullstamina = this.stamina
    this.strength = 1
    this.level = 1
    this.damage = 1
		this.rations = 5
    this.choice = [0,0]
    this.parts = [[],[],[]]
    this.parts[0] = ["head","jaw","eyes","ear","brow","face","nose"]
    this.parts[1] = ["chest", "ribs", "heart", "gut", "kidney", "spleen", "back"]
    this.parts[2] = ["knees", "calf", "ankle", "groin", "thigh", "rear", "worst way possible, you were charlie-horsed"]
		this.img = new Image()
		this.img.src = "./resource/Player.png"

    this.get_part = function(zone)
    {
      var part = Math.floor(Math.random() * 6)
			console.log("Part hit: " + this.parts[zone - 1][part] + "Zone = " + zone)
			console.log("|| Zone Value: " + (zone - 1).toString() + "|| Damage Value:" + part.toString())
      return this.parts[zone - 1][part]
    }
  }
  
  var goblin  = {
    name : "Goblin",
    desc : "A Green Boy",
    health : 9,
    stamina : 9,
    damage : 2,
    ai : 0,
		img : "./resource/Goblin.png",
    text_list : [
                  "You continue to descend through the dark cave, Your torchlight flickering against the rough stone walls. Suddenly you hear a shrill cry! A Goblin sprints towards you, crude dagger drawn and held high.",
                  "Injured 1",
                  "Injured 2",
                  "Exhausted 1",
                  "Exhausted 2",
                  "His dark, shifty eyes lock with yours",
                  "He is looking straight at you",
                  "He crouches down into a low stance. Suddenly he is barreling towards you on all fours",
                  "He slowly bobs his dagger up and down with a look of intense concentration. You can tell he's looking for a good place to place a stab you",
                  "He extends the dagger between the two of you, and it steadies slightly",
                  "He holds the dagger way behind his body. It is clear he is winding up a large attack",
                  "The Goblin jumps up onto your chest before you have a chance to react. With one hand on your head he slits your throat. You fall to the ground, blood gushing from you're neck. Your adventure has come to an end",
									"The Goblin blocks your path and clutches his dagger, ready to bury it in you at a momment's notice. You will have to fight!",
									"Sparks fly as the goblin's dagger clashes against your blade."
              ]
  }
	
	var flyball  = {
    name : "Fly-Ball",
    desc : "A flying eyeball.",
    health : 7,
    stamina : 8,
    damage : 1,
    ai : 0,
		img : "./resource/Fly-ball.png",
    text_list : [
                  "The sound of flapping slowly grows as you walk deeper into the cave. You manage to make out an odd shape flying through the darknesss. As it draws closer to your torch light you see know that it is a horrific flying eyeball!",
                  "Tears well up in the Fly-Ball's eye.",
									"The Fly-Ball's eye now dangles out of it's socket, it's pupil still following you as it flaps up and down",
                  "The beating wings of the Fly-ball start to beat slower and more deliberately",
                  "The Fly-ball appears flaps turn frantic as it desperately tries to stay airborn",
                  "It flaps up high near the cave ceiling",
                  "It flaps at eye level",
                  "It flaps down near the floor of the cave",
                  "It bares it's needle-like fangs and swoops in",
                  "It speeding at you, horns pointed forward",
                  "It eye flashes and pulses with some kind of magical energy. It looks dangerous.",
                  "The Fly-Ball sends a blast a magical energy at your head, melting your baby-like facial features into a puddle of goo. Your adventure has come to an end.",
									"The Fly-Ball glares at you. You would have found this quite rude, but you understand there are only a limited number of ways one can emote as a flying eyeball.",
									"Your blade clashes against the fangs of the Fly-Ball."
              ]
  }
	
  var skeleton  = {
    name : "Skeleton",
    desc : "A pile of bones given life through dark and evil magic",
    health : 12,
    stamina : 6,
    damage : 3,
    ai : 0,
		img : "./resource/Skeleton.png",
    text_list : [
                  "As you walk through the cave, you manage to make out a pair of faint glowing lights shimmering in the darkness. You draw closer only to find they belong to an evil skeleton!",
                  "Cracks begin to form on the skeleton's bones",
                  "The dim lights in the skull of the skeleton flare, burning with a dark, murderous rage",
                  "The skelton's head and shoulders droop low",
                  "The skeleton whips out a carton of milk and begins to chug it furiously",
                  "It straightens it's crooked spine and stands to it's full, towering height. It looms over you",
                  "It raises a pointed bony finger at you",
                  "It changes it's grip on it's blade, dropping into a hunched pose",
                  "With it's feet planted it rotates and spins it's blade in it's hand, preparing to strike",
                  "It rolls it's skeletal shoulders and prepares to swing",
                  "It leans back, left hand in front of it and blade arm streched back as far as it can reach",
                  "The skeleton grabs your shoulder and thrusts it's blade straight through your chest. The last thing you see before blacking out is the skull of the skeleton fixed in a silent scream, inches from your face. Your adventure has come to an end.",
									"The skeleton's empty eye sockets gaze straight into your soul, sending shivers up your spine. The dark aura around it tells you it's looking for a fight",
									"Sparks fly as the skelton's sword clashes against your blade."
              ]
  }
	
	var slime  = {
    name : "Slime",
    desc : "A mass of sentient goo",
    health : 14,
    stamina : 3,
    damage : 3,
    ai : 0,
		img : "./resource/Slime.png",
    text_list : [
                  "You suddenly slip on a puddle of green liquid and fall on your back. As you climb to your feet you see you stand face to face with a perturbed looking slime",
                  "Your weapon is dripping with green slime",
                  "Slimey residue is splattered all over the cave walls",
                  "The slime starts making really odd farting noises. You don't dare take a whiff of the foul slimey wind",
                  "Snotty bubbles simmer up to the surface of the slime and pop, sending gross mucus everywhere",
                  "The slime sprouts a bunch of tendrils and begins flailing around with them",
                  "The slime gathers up all its goop into one big lump",
                  "The slime flattens down into a thin, wide puddle. It snakes it's way across the floor towards you",
                  "It quivers intesely. You sense major vibrations",
                  "It shakes and shudders a bit",
                  "It's surface suddenly becomes quite calm and as smooth as glass. You see a green version of your reflection in it's forehead",
                  "The slime slaps you in the face with a goopy tendril. You fall to the ground and are helpless as the slime slides up your body and sits on your face. You take a breath but instead of air you pull in dank slime. Your adventure has come to an end.",
									"The slime quivers threateningly. The rapid flapping noises make you extremely uncomfortable",
									"The slime sees you about to hit it and morphs out of the way"
              ]
  }
	
	var poison_slime  = {
    name : "Poison Slime",
    desc : "A mass of purple sentient goo. Purple means poisonous, just fyi",
    health : 16,
    stamina : 1,
    damage : 8,
    ai : 0,
		img : "./resource/Poison Slime.png",
    text_list : [
                  "Your torchlight reveals a trail of sickly purple slime leading to an unhealthy mass of magenta goop. You gasp loudly the moment you realize you face a deadly poison slime",
                  "Your weapon is dripping with purple slime",
                  "Slimey residue is splattered all over the cave walls",
                  "The slime starts making really odd farting noises. You don't dare take a whiff of the foul slimey wind",
                  "Snotty bubbles simmer up to the surface of the slime and pop, sending gross mucus everywhere",
                  "The slime sprouts a bunch of tendrils and begins flailing around with them",
                  "The slime gathers up all its goop into one big lump",
                  "The slime flattens down into a thin, wide puddle. It snakes it's way across the floor towards you",
                  "It quivers intesely. You sense major vibrations",
                  "It shakes and shudders a bit",
                  "It's surface suddenly becomes quite calm and as smooth as glass. You see a green version of your reflection in it's forehead",
                  "You suddenly burst out into hives and boils. Your adventure has come to an end.",
									"The slime quivers threateningly. The rapid flapping noises fill you with dread. Legends say that purple slimes are extremely toxic",
									"The slime sees you about to hit it and morphs out of the way"
              ]
  }
	
	var fungi  = {
    name : "Fun-guy",
    desc : "A really fun guy",
    health : 11,
    stamina : 11,
    damage : 2,
    ai : 0,
		img : "./resource/Mushkin.png",
    text_list : [
                  "You hear an odd sound coming from the wall of the cave. You are about to put your ear to it when suddenly a Fun-guy bursts through the wall",
                  "The Fun-guy is starting to look a little mushy",
                  "The Fun-guy isn't lichen how this is going for him",
                  "The Fun-guy grabs a handfull of dirt and eats it in front of you",
                  "The Fun-guy looks like he has reached the cap of his physical endurance",
                  "The Fun-guy climbs up to the roof",
                  "The Fung-guy gives you a not so fun look with his beady eyeballs",
                  "The Fun-guy squats like he is taking a shitake",
                  "He seems quite enraged at all your mushroom related puns",
                  "He moves towards you with one creamy hand outstreached",
                  "This fungus charges towards you with humungous speed",
                  "The Fun-guy shoots spores into your mouth untill there isn't mushroom for you to breath. You find solace in the fact that there is a special place in the afterlife for those who have punned as much as you. Your adventure has come to an end.",
									"The truffle shuffle of this humongous fungous blocks your path because there is not mushroom in the cave",
									"The Fun-guy grabs your blade and pushes it to the side"
              ]
  }
	
	var underling  = {
    name : "Underling",
    desc : "A really angery guy",
    health : 25,
    stamina : 20,
    damage : 4,
    ai : 0,
		img : "./resource/Underling.png",
    text_list : [
                  "You continue to march onwards through the cave. You hear a tapping sound echo around you. Your torchlight soon reveals a strong underling warrior, tapping his spear on the ground in preparation of battle to come",
                  "The Underling pulls out a little cloth and banadages a wound on it's arm before you can react",
                  "The Underling clutches at a wound on it's side",
                  "You suddenly notice you can hear the Underling pulling in raspy sounding breaths",
                  "The Underling leans on it's spear for support",
                  "The Underling raises his spear over his head",
                  "The Underling points his spear at you",
                  "The Underling lowers his speartip near to the ground",
                  "He takes a defensive pose",
                  "His legs tense up as he prepares to step forward and strike at you",
                  "It sprints towards you with supernatural speed",
                  "The Undeling breaks through your defenses and stabs you through the heart with it's spear. Your adventure has come to an end.",
									"The creature's black eyes lock with yours. You sense seething hatred. It readies it's spear and you think it would be wise to do the same. From the way your opponent deftly grasps it's spear you can tell this will be a challenging fight",
									"The Underling swings it's spear around and clashes it against your blade"
              ]
  }
	var golem  = {
    name : "Golem",
    desc : "An ancient evil",
    health : 50,
    stamina : 20,
    damage : 4,
    ai : 0,
		img : "./resource/Golem Boss.png",
    text_list : [
                  "The Ancient Golem stands before you, motionless. Many before you have reached this point only to be crushed here. Don't give in!",
                  "The golem makes an irritating grinding noise",
                  "Crack's in the golem's surface begin to leak magical energy",
                  "The golem is moving sluggishly",
                  "It's seems almost as if the golem is moving witha delay. It's reaction speed is very slow",
                  "The golem raises his arms high over his head",
                  "The golem advances towards you with his arms streached wide",
                  "The golem drags his arms along the ground",
                  "It moves towards you with slow, shuffling steps",
                  "It stomps towards you",
                  "The huling creature somehow breaks into a sprint and charges towards you",
                  "The golem crushes you with it's powerful arms. Your adventure has come to an end.",
									"As you approach, the golem stirs. It's single eyes stares unflinchingly.",
									"The Golem's mightly limbs crash against your weapon. With herculean strenght you manage to push them away."
              ]
  }
	//
	var weak_monsters = [goblin,flyball,slime]
	var strong_monsters = [underling,skeleton,poison_slime,fungi]
	var boss_monsters = [golem]
	var monsters = weak_monsters
  
  var enemyAI = function()
  {
    this.get_monster = function(monster)
    {
      this.name = monster.name
      this.desc = monster.desc
      this.stamina = monster.stamina
      this.health = monster.health
			this.fullstamina = this.stamina
			this.fullhealth = this.health
      this.damage = monster.damage
      this.ai = monster.ai
			this.img = new Image()
			this.img.src = monster.img
      this.text_list = monster.text_list
      this.hint = ""
      this.choice = [0,0]
			this.animated = false
			this.fallsound = new sound("./resource/enemy fall.mp3",false)
			this.landsound = new sound("./resource/enemy land.wav", false)
    }

    this.choose_attack = function()
    {
      var choice_seed = 0
      if (this.ai === 0)
        {
					choice_seed = Math.floor(Math.random() * 3) + 1
					this.choice[0] = choice_seed
					choice_seed = Math.floor(Math.random() * 3) + 1
					this.choice[1] = choice_seed
					if(this.stamina < this.choice[1])
						{
							this.choice[1] = this.stamina
							if(this.stamina === 0)
								{
									this.choice = [0,0]
									this.stamina += 1
								}
						}
				}
      else
        {
          console.log("to be implimented")
        }
    }
		this.get_hint = function()
		{
			var hint1 = ""
			var hint2 = ""
        if (this.choice[0] == 1)
					{
            hint1 = this.text_list[5]
					}

        else if (this.choice[0] == 2)
					{
            hint1 = this.text_list[6]
					}

        else if (this.choice[0] == 3)
            hint1 = this.text_list[7]

        if (this.choice[1] == 1)
					{
            hint2 = this.text_list[8]
					}

        else if (this.choice[1] == 2)
					{
            hint2 = this.text_list[9]
					}

        else if (this.choice[1] == 3)
					{
            hint2 = this.text_list[10]
					}

        if (this.choice[1] === 0)
					{
            return "The " + this.name + " will not attack"
					}
        else
					{
            return hint1 + ". " + hint2 + "."
					}
		}
  }
	
	var background = function(width,height)
	{
		this.total_width = width
		this.total_height = height
		this.img_list = []
		this.img_list[0] = new Image()
		this.img_list[0].src = "./background/Cave Background 1.png"
		this.img_list[1] = new Image()
		this.img_list[1].src = "./background/Cave Background 2.png"
		this.img_list[2] = new Image()
		this.img_list[2].src = "./background/Cave Background 3.png"
		this.img_list[3] = new Image()
		this.img_list[3].src = "./background/Cave Background 4.png"
		
		this.img_pos_list = [0,0,0]
		
		this.cellnum = Math.ceil(this.total_width / this.total_height)
		
		this.update = function()
		{
			console.log("Background updating!")
			this.img_pos_list[0] -= 5
			this.img_pos_list[1] -= 3
			this.img_pos_list[2] -= 1
			console.log(this.img_pos_list)
			
			for (i=0;i<3;i++)
				{
					console.log("Reset loop")
					if(this.img_pos_list[i] < -this.total_height)
						{
							this.img_pos_list[i] = 0
							console.log("Reset happened")
						}
				}
		}
	}
	
	function gameController()
	{
		//Attributes for the Game Controller Class
		this.player = new player()
		this.enemy_ai = new enemyAI()
		this.state = 1
		this.final = false
		this.canvas = document.getElementById("myCanvas")
		this.canvas.width = document.body.clientWidth
    this.canvas.height = document.body.clientHeight
		this.ctx = this.canvas.getContext("2d");
		this.ctx.font = "30px VT323";
		this.choice_img = new Image()
		this.choice_img.src = "./resource/Sword.png"
		this.background_obj = []
		this.skipimg = new Image()
		this.skipimg.src = "./resource/Skip Button.png"
		this.uipanel_img = new Image()
		this.uipanel_img.src = "./resource/Ui Panel.png"
		this.ham_img = new Image()
		this.ham_img.src = "./resource/Ham.png"
		
		this.background = new background(this.canvas.width,this.canvas.height)
		
		this.mainmusic = new sound("./resource/main music.mp3",true)
		this.finalmusic = new sound("./resource/final music.mp3",true)
		this.winmusic = new sound("./resource/win music.mp3",true)
		this.success_sound = new sound("./resource/success.wav",false)
		this.defeat_sound = new sound("./resource/defeat.wav",false)
		this.click_sound = new sound("./resource/click.wav",false)
		this.recover_sound = new sound("./resource/recover.wav",false)
		this.hit_sound = new sound("./resource/hit.wav",false)
		this.parry_sound = new sound("./resource/parry.wav",false)
		this.recover_sound = new sound("./resource/recover.wav",false)
		this.mainmusic.play()
		
		this.wait = false
		this.player_chosen = false
		this.skip = 0
		this.keys = []
		this.activetext = "undef"
		
		this.tick = 0

		//Behaviours for the Game Controller Class
		//Main update Function
		this.update = function()
		{
			console.log("state = " + this.state.toString() + " enemy: " + this.enemy_ai.name)
			console.log(this.enemy_ai.stamina + " Enemy Stamina")
			//console.log(this.enemy_ai.choice[0].toString() + " Enemy Choice 0" + this.enemy_ai.choice[1].toString() + " Enemy Choice 1")
			this.skip -= 1
			if (this.skip < 0)
				{
					this.skip = 0
				}
			if(this.wait)
				{
					if (this.skip == 100)
					{
						if(this.state == 4)
							{
								if(this.player_chosen)
									{
										this.tick = 0
										this.player_chosen = false
										this.state += 1
										this.wait = false
									}
							}
						else
							{
								this.tick = 0
								this.state += 1
								this.wait = false
							}
					}
				}
			else if (this.state  == 1)
				{
					this.player.alive = true
					//Selects a new monster for the players to fight
					if(this.final)
						{
							console.log("Boss encounter!")
							this.enemy_ai.get_monster(golem)
						}
					else
						{
							this.monsterseed = Math.floor(Math.random() * monsters.length)
							this.enemy_ai.get_monster(monsters[this.monsterseed])
						}
					this.activetext = this.enemy_ai.text_list[0]
					this.player.health = this.player.fullhealth
					this.player.stamina = this.player.fullstamina
					this.enemy_ai.animated = true
					this.enemy_ai.fallsound.play()
					this.wait = true
				}
			else if (this.state == 2)
				{
					//Selects the enemy's attack
					if (this.enemy_ai.stamina < 2)
						{
							this.activetext = this.enemy_ai.text_list[3]
						}
					else if (this.enemy_ai.stamina < 1)
						{
							this.activetext = this.enemy_ai.text_list[4]
						}
					else
						{
							this.activetext = this.enemy_ai.text_list[12]
						}
					this.wait = true
				}
			else if(this.state == 3)
				{
					//Gives the player a hint
					this.enemy_ai.choose_attack()
					console.log(this.enemy_ai.choice[0].toString() + " Enemy Choice 0" + this.enemy_ai.choice[1].toString() + " Enemy Choice 1")
					this.activetext = this.enemy_ai.name + " Attacks: " + this.enemy_ai.get_hint()
					this.wait = true
				}
			else if(this.state == 4)
				{
					//Player chooses attack
					this.wait = true
				}
			else if(this.state == 5)
				{
					if (this.player.stamina > 0 && this.player.choice[1] > this.player.stamina)
						{
							//Player chooses the 2 parts of their attack
							//Think of something to put here to deal with buttons
							//Limits the power of the attack to however much stamina the player has
							this.player.choice[1] = this.player.stamina
							this.activetext = "You lack the stamina to attack in full force, but you attack regardless"
						}
					else if(this.player.stamina > 0 && this.player.choice[0] !== 0)
						{
							this.activetext = "You charge forwards, weapon in hand."
						}
					else if(this.player.choice[0] === 0)
						{
							this.activetext = "You pause to try and recover some stamina..."
						}
					else
						{
							//Player cannot attack with no stamina
							this.activetext = "You are out of stamina"
							this.player.choice[1] = 0
							this.player.stamina += 1
						}
					this.wait = true
				}
			//The resolution state
			else if (this.state == 6)
				{
					//Calculates the result of the combat round
					this.resolve_attack(this.player,this.enemy_ai)
					if(this.player.stamina > this.player.fullstamina)
					{
						this.player.health = this.player.fullstamina
					}
					this.wait = true
				}
			else if (this.state == 7)
				{
					//Check if a) both are alive b) player is dead c) monster is dead
					if (this.player.health > 0 && this.enemy_ai.health > 0)
						{
							this.state = 3
						}
					else if (this.player.health <= 0)
						{
							this.state = 30
						}
					else if (this.enemy_ai.health <= 0)
						{
							this.state = 8
							if(this.final == true)
								{
									this.state = 35
								}
						}
				}
			//Victory State
			else if (this.state == 8)
				{
					this.enemy_ai.animated = true
					this.activetext = "You Win!"
					this.wait = true
				}
			//Level up state
			else if (this.state == 9)
				{
					this.success_sound.play()
					this.player.level += 1
					this.player.rations -= 1
					var lvl_seed = Math.ceil(Math.random() * 3)
					if (lvl_seed == 1)
					{
						this.player.damage += 2
						this.activetext = "With every victory, your powers increase. You gained +2 Damage"
					}
					else if(lvl_seed == 2)
					{
						this.player.fullstamina += 5
						this.activetext = "With every victory, your powers increase. You gained +5 Stamina"
					}
					else
					{
						this.player.fullhealth += 5
						this.activetext = "With every victory, your powers increase. You gained +5 Health"
					}
					
					monsters.splice(this.monsterseed,1)
					if (this.player.level == 3)
						{
							monsters = monsters.concat(strong_monsters)
						}
					if (monsters.length < 1)
						{
							console.log("BOSS FIGHT INIT")
							monsters.concat(boss_monsters)
							this.mainmusic.stop()
							this.finalmusic.play()
							this.final = true
						}
					this.state = 0
					this.wait = true
				}
			//Game Over State
			else if (this.state == 30)
				{
					this.activetext = "Game Over, Slain By: " + this.enemy_ai.name
					this.player.fullstamina = 10
					this.player.fullhealth = 10
					this.player.damage = 1
					this.player.level = 1
					monsters = weak_monsters
					this.defeat_sound.play()
					this.mainmusic.play()
					this.finalmusic.stop()
					this.final = false
					this.player.alive = false
					this.state = 0
					this.wait = true
				}
			else if (this.state == 35)
				{
					this.activetext = "Congratulations, you have beat the game."
					this.finalmusic.stop()
					this.winmusic.play()
					this.wait = true
				}
		}
		//Calculates The result of the combat round, including health/stamina drain
		this.resolve_attack = function()
		{
			if(this.player.stamina <= 0)
				{
					this.player.choice = [0,0]
				}
			var text_result = ""
			this.player.stamina = this.player.stamina - this.player.choice[1]
			this.enemy_ai.stamina -= this.enemy_ai.choice[1]
			
			if(this.player.stamina < 0)
				{
					this.player.stamina = 0
				}
			if(this.enemy_ai.stamina < 0)
				{
					this.enemy_ai.stamina = 0
				}
			//Checks for a parry situation
			if (this.player.choice[0] == this.enemy_ai.choice[0] && this.player.choice[1] !== 0 && this.enemy_ai.choice[1] !== 0)
				{
					text_result += this.enemy_ai.text_list[13]
					this.parry_sound.play()
				}
			//Checks for a situation where the player attacks and the monster rests
			else if(this.enemy_ai.choice[1] === 0 && this.player.choice[0] !== 0)
				{
					this.hit_sound.play()
					text_result += "The " + this.enemy_ai.name + " doesn't fight back, you deal " + (this.player.damage + this.player.choice[1]).toString() + " damage."
					this.enemy_ai.health -= (this.player.damage + this.player.choice[1])
					if (this.enemy_ai.health < 0)
						{
							this.enemy_ai.health = 0
						}
				}
			//Checks for a situation where the player and the monster both rest
			else if (this.player.choice[0] == this.enemy_ai.choice[0] && this.player.choice[1] + this.enemy_ai.choice[1] === 0)
				{
					this.recover_sound.play()
					text_result += "You and the " + this.enemy_ai.name + " pause for a moment. You both catch your breath. "
					this.player.stamina += 3
				}
			//Checks for a situation where the player rests and the monster attack
			else if (this.player.choice[1] === 0 && this.enemy_ai.choice[1] > 0)
				{
					this.hit_sound.play()
					text_result += "You step back, trying to catch your breath. The " + this.enemy_ai.name + " has other ideas... "
					this.player.health -= (this.enemy_ai.damage + this.enemy_ai.choice[1])
					this.player.stamina += 2
					if(this.player.stamina > this.player.fullstamina)
						{
							this.player.stamina = this.player.fullstamina
						}
					if (this.player.health > 0 && this.enemy_ai.choice[1] != 0)
						{
							text_result += "The " + this.enemy_ai.name + " hit you in the " + this.player.get_part(this.enemy_ai.choice[0]) + " for " + (this.enemy_ai.damage + this.enemy_ai.choice[1]).toString() + " damage. "
						}
					else
						{
							text_result += this.enemy_ai.text_list[11]
						}
				}
			//If no other conditions exist, calculates as if the player and monster both attack
			else
				{
					this.hit_sound.play()
					this.player.health -= (this.enemy_ai.damage + this.enemy_ai.choice[1])
					if (this.player.health > 0)
						{
							text_result += "The " + this.enemy_ai.name + " hit you in the " + this.player.get_part(this.enemy_ai.choice[0]) +" for " + (this.enemy_ai.damage + this.enemy_ai.choice[1]).toString() + " damage. "
							this.enemy_ai.health -= (this.player.damage + this.player.choice[1])
							if (this.enemy_ai.health < 0)
								{
										this.enemy_ai.health = 0
								}
							text_result += "You hit the " + this.enemy_ai.name + " for " + (this.player.damage + this.player.choice[1]).toString() + " damage."
						}
					else
						{
							text_result += this.enemy_ai.text_list[11]
						}
				}
			this.player.choice[0] = 0
			this.player.choice[1] = 0
			this.activetext = text_result
		}
		
		this.skipbox =
		{
			x: this.canvas.width * 0.72,
			y: this.canvas.height * 0.30,
			width:240,
			height:80
		}
		
		this.draw = function()
		{
			this.tick += 1
			if (this.tick > 10000)
				{
					this.tick = 0
				}
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.bg_draw()
			
			/*
			this.ctx.drawImage(this.background.img_wall,0,0,this.canvas.width,this.canvas.height)
			this.ctx.drawImage(this.background.img_back,this.background.img_back_pos,0,this.canvas.height,this.canvas.height)
			this.ctx.drawImage(this.background.img_middle,this.background.img_middle_pos,0,this.canvas.height,this.canvas.height)
			this.ctx.drawImage(this.background.img_front,this.background.img_front_pos,0,this.canvas.height,this.canvas.height)
			*/
			
			//draws the textbox
			this.ctx.fillStyle = "black"
			this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height / 3)
			this.ctx.fillStyle = "yellow"
			this.ctx.fillRect(2,2,this.canvas.width - 4, (this.canvas.height / 3) - 4)
			this.ctx.fillStyle = "#1a012d"
			this.ctx.fillRect(5,5,this.canvas.width - 10, (this.canvas.height / 3) - 10)
			this.ctx.fillStyle = "#01001c"
			this.ctx.fillRect(10,10,this.canvas.width - 20, (this.canvas.height / 3) - 20)
			this.ctx.fillStyle = "black"
			this.ctx.fillRect(20,20,this.canvas.width - 40, (this.canvas.height / 3) - 40)
			
			/*
			This would display the ration system
			this.ctx.drawImage(this.uipanel_img,this.canvas.width * 0.1 ,this.canvas.height * 0.3)
			this.ctx.drawImage(this.ham_img,this.canvas.width * 0.1 ,this.canvas.height * 0.3,80,80)
			this.ctx.font = "40px VT323";
			this.ctx.fillStyle = "white"
			this.ctx.fillText(this.player.rations + " Rations",this.canvas.width * 0.16,this.canvas.height * 0.38)
			this.ctx.font = "30px VT323";
			*/
			
			if(this.player_chosen)
				{
					this.ctx.fillStyle = "yellow"
					this.ctx.drawImage(this.skipimg,this.skipbox.x,this.skipbox.y)
				}
			else if(this.state != 4)
				{
					this.ctx.fillStyle = "yellow"
					this.ctx.drawImage(this.skipimg,this.skipbox.x,this.skipbox.y)
				}
			
			var player_pos = [(this.canvas.width / 3) - (this.player.img.width / 2),this.canvas.height - this.player.img.height]
			var enemy_pos = [(this.canvas.width / 3 * 2) - (this.enemy_ai.img.width / 2),this.canvas.height - this.enemy_ai.img.height]
			
			var old_pos = 0
			if(this.state == 1 && this.enemy_ai.animated)
				{
					old_pos = enemy_pos[1]
					enemy_pos[1] = -this.enemy_ai.img.height
					enemy_pos[1] += 20 * this.tick
					if(enemy_pos[1] > old_pos)
						{
							this.enemy_ai.landsound.play()
							this.enemy_ai.animated = false
						}
				}
			else if(this.state == 8  || this.state == 35 && this.enemy_ai.animated)
				{
					old_pos = enemy_pos[1]
					enemy_pos[1] += 10 * this.tick
					if(enemy_pos[1] > old_pos * 2)
						{
							enemy_pos[1] = old_pos * 2
						}
				}
			else if(!this.player.alive)
				{
					player_pos[1] += 10 * this.tick
				}
			
			this.ctx.drawImage(this.player.img,player_pos[0],player_pos[1])
			if(this.state != 30 && this.state != 31 && this.state !== 0 && this.state != 9)
				{
					this.ctx.drawImage(this.enemy_ai.img,enemy_pos[0],enemy_pos[1])
				}
			
			//player healthbar
			this.bardraw()
			if(this.state == 4)
				{
					this.drawbuttons()
				}
			this.textdraw(this.activetext)
		}
		
		this.bg_draw = function()
		{
			this.background.update()
			this.ctx.drawImage(this.background.img_list[3],0,0,this.canvas.width,this.canvas.height)
			for(i = 3; i > -1; i--)
				{
					for(p = -1; p != this.background.cellnum + 1; p++)
						{
							this.ctx.drawImage(this.background.img_list[i],p * this.canvas.height + this.background.img_pos_list[i],0,this.canvas.height,this.canvas.height)
						}
				}
		}
		this.bardraw = function()
		{
			var p_displayhealth = this.player.health / this.player.fullhealth * 10
			var e_displayhealth = this.enemy_ai.health / this.enemy_ai.fullhealth * 10
			var p_displaystamina = this.player.stamina / this.player.fullstamina * 10
			var e_displaystamina = this.enemy_ai.stamina / this.enemy_ai.fullstamina * 10
			
			this.ctx.fillStyle = "red"
			this.ctx.fillRect(10,this.canvas.height - (p_displayhealth * 40),50,p_displayhealth * 40)
			this.ctx.fillStyle = "green"
			this.ctx.fillRect(60,this.canvas.height - (p_displaystamina * 40),50,p_displaystamina * 40)
			
			if(this.state == 3 || this.state == 4 || this.state == 5 || this.state == 6 || this.state == 7)
				{
					this.ctx.fillStyle = "red"
					this.ctx.fillRect(this.canvas.width - 60,this.canvas.height - (e_displayhealth * 40),50,e_displayhealth * 40)
					this.ctx.fillStyle = "green"
			  	this.ctx.fillRect(this.canvas.width - 110,this.canvas.height - (e_displaystamina * 40),50,e_displaystamina * 40)
				}
		}
		
		this.textdraw = function(text)
		{
			//remove substring, chop out what you print
			var string_limit = 99
			var string_end = 0
			this.ctx.fillStyle = "white"
			for (i = 1; i < (Math.ceil(text.length * 1.0 /string_limit)) + 1; i++) 
			{ 
    		var text_export = ""
				var string_start = string_end
				//breaks the text into seperate lines
				if(text.length < string_limit * i - 5)
					{
						string_end = string_limit * i
					}
				else
					{
						string_end = text.indexOf(" ",string_limit * i - 5)
					}
				text_export = text.substring(string_start, string_limit * i - (string_limit * i - string_end))
				this.ctx.fillText(text_export,50,(i * 50 + 20));
			}
			
			this.drawbuttons = function()
			{
				//draws the grid of 9 buttons
				for(i = 0; i < 10; i++)
					{
						this.ctx.fillStyle = "yellow"
						this.ctx.fillRect(this.buttons[i].x,this.buttons[i].y,this.buttons[i].width,this.buttons[i].height);
					}
				//places the sword icon on top of the button the player has chosen
				if(this.player_chosen)
					{
						var choice_x = this.buttons[0].x + (this.player.choice[1] - 1) * this.buttons[0].width + (this.player.choice[1] - 1) * 10
						var choice_y = this.buttons[0].y + (this.player.choice[0] - 1) * this.buttons[0].height + (this.player.choice[0] - 1) * 10
						if (this.player.choice[0] != 0 && this.player.choice[1] != 0)
							{
								this.ctx.drawImage(this.choice_img,choice_x,choice_y,50,50);
							}
						else
							{
								this.ctx.fillStyle = "black"
								this.ctx.fillText("Rest",this.buttons[9].x + (this.buttons[9].width / 2) - 22, this.buttons[9].y + (this.buttons[9].height / 2));
							}
						
					}
			}
		}
		
		this.getAttackText = function()
		{
			var text_export = ""
			if (this.player.choice[0] === 0)
				{
					text_export += "You will lower your weapon to your side. Not attacking will leave you vulnerable but it is worth it to regain some stamina"
				}
			else if (this.player.choice[0] == 1)
				{
					text_export += "You plan to swing high, with enough force to deal " + (this.player.choice[1] + this.player.damage) + " damage if you manage to hit your target"
				}
			else if (this.player.choice[0] == 2)
				{
					text_export += "You prepare to thrust your weapon forward, with enough force to deal " + (this.player.choice[1] + this.player.damage) + " damage to the " + this.enemy_ai.name + " if you manage to hit it"
				}
			else if (this.player.choice[0] == 3)
				{
					text_export += "You choose to attack the " + this.enemy_ai.name + " low, with enough force to deal " + (this.player.choice[1] + this.player.damage) + " damage if you land the hit"
				}
			this.activetext = text_export
		}
		this.get_player_choice = function(x,y)
		{
			if (x > 3)
				{
					x = 3
				}
			if (this.player.stamina > 0)
				{
					if (x > this.player.stamina)
						{
							this.player.choice[1] = this.player.stamina
							this.player.choice[0] = y
						}
					else
						{
							this.player.choice[1] = x
							this.player.choice[0] = y
						}
				}
			else
				{
					//Player cannot attack with no stamina
					this.textdraw("You are out of stamina")
					this.player.choice[1] = 0
					this.player.choice[0] = 0
					this.player.stamina += 1
				}
		}
	}
	
function getMousePos(canvas, event) 
	{
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
	}
//Function to check whether a point is inside a rectangle
function isInside(pos, rect)
	{
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
	}
	
	//button rect
	var button_panel = 
		{
			x:240,
			y:390,
			width:340,
			height:340
		}
	var gameControl = new gameController()
	document.getElementById("myCanvas").addEventListener('click', function(evt) {
    var mousePos = getMousePos(document.getElementById("myCanvas"), evt);
		if (isInside(mousePos,gameControl.skipbox) && gameControl.player_chosen)
			{
				gameControl.click_sound.play()
				gameControl.skip = 101
			}
		if (isInside(mousePos,gameControl.skipbox) && gameControl.state != 4)
			{
				gameControl.click_sound.play()
				gameControl.skip = 101
			}
		if (gameControl.state == 4)
			{
				for(i = 0; i < 10; i++)
					{
						if (isInside(mousePos,gameControl.buttons[i]))
						{
							gameControl.player_chosen  = true
							gameControl.keys = []
							if(i == 0)
							{
								gameControl.player.choice = [1,1]
								i = 10
							}
							else if(i == 1)
							{
								gameControl.player.choice = [1,2]
								i = 10
							}
							else if(i == 2)
							{
								gameControl.player.choice = [1,3]
								i = 10
							}
							else if(i == 3)
							{
								gameControl.player.choice = [2,1]
								i = 10
							}
							else if(i == 4)
							{
								gameControl.player.choice = [2,2]
								i = 10
							}
							else if(i == 5)
							{
								gameControl.player.choice = [2,3]
								i = 10
							}
							else if(i == 6)
							{
								gameControl.player.choice = [3,1]			
							}
							else if(i == 7)
							{
								gameControl.player.choice = [3,2]
								i = 10
							}
							else if(i == 8)
							{
								gameControl.player.choice = [3,3]
								i = 10
							}
							else if(i == 9)
							{
								gameControl.player.choice = [0,0]
								i = 10
							}
							gameControl.getAttackText()
							console.log('clicked inside rect');
						}
						else
						{
							console.log('clicked outside rect');
						}
					}
			}
}, false);
	
	var buttoncorner = [(gameControl.canvas.width) / 2 - 87, gameControl.canvas.height / 2]
	gameControl.buttons = [
		{
			x: buttoncorner[0],
			y: buttoncorner[1],
			width:50,
			height:50
		},
		{
			x: buttoncorner[0] + 60,
			y: buttoncorner[1],
			width:50,
			height:50
		},
		{
			x: buttoncorner[0] + 120,
			y: buttoncorner[1],
			width:50,
			height:50
		},
		{
			x: buttoncorner[0],
			y: buttoncorner[1] + 60,
			width:50,
			height:50
		},
		{
			x: buttoncorner[0] + 60,
			y: buttoncorner[1] + 60,
			width:50,
			height:50
		},
		{
			x: buttoncorner[0] + 120,
			y: buttoncorner[1] + 60,
			width:50,
			height:50
		},
		{
			x: buttoncorner[0],
			y: buttoncorner[1] + 120,
			width:50,
			height:50
		},
		{
			x: buttoncorner[0] + 60,
			y: buttoncorner[1] + 120,
			width:50,
			height:50
		},
		{
			x: buttoncorner[0] + 120,
			y: buttoncorner[1] + 120,
			width:50,
			height:50
		},
		{
			x: buttoncorner[0],
			y: buttoncorner[1] + 180,
			width:170,
			height:50
		}
	]
		
	setInterval(function(){console.log("loop"); gameControl.update(); gameControl.draw()}, 60);
	
	$(document).keydown(function(e) {
				gameControl.keys[e.keyCode ? e.keyCode : e.which] = true;
	});

	$(document).keyup(function(e) {
		delete gameControl.keys[e.keyCode ? e.keyCode : e.which];
	});
});
})();
window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame   ||
    	window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame    ||
		window.oRequestAnimationFrame    ||
		window.msRequestAnimationFrame    ||
		function( callback ){
			window.setTimeout(callback, 1000 / 60);
    	};
})();