<template>
  <div class="wrapper">
		<h1>Simon Says</h1>
			<div class="game-board">
				<div 
          class="simon" 
        >
					<ul>
            <li 
              v-for="(tile, index) in tiles" :key="index"   
              :class="[{ active: tile.activeTile, hoverable: isHoverable, lit: tile.isLittenTile }, tile.tileColor]" 
              @click="registerClick(tile), playSound(tile)" :data-tile="tile.dataTile"
              @mousedown="deactivated ? tile.activeTile = false : tile.activeTile = true"
              @mouseup="tile.activeTile = false;"
            ></li>
					</ul>
				</div>
			</div>
			<div class="game-info">
				<h2>Round: <span v-text="dataRound"></span></h2>
				<button @click="startGame">Start</button>
				<p v-if="this.ifLost" class="lose__message">Sorry, you lost after 
          <span v-text="dataRound"></span> rounds!
        </p>
			</div>
			<div class="game-options">
				<h2>Game Options:</h2>
        <div v-for="(mode, index) in modes" :key="index">  <!-- Avoid using non-primitive value as key -->
          <input 
            type="radio" name="mode" 
            :value="mode.value" @click="changeMode(mode)"
            checked
          />{{ mode.name }}<br>
        </div>
			</div>
	</div>
</template>

<script>
import "./styles/styles.scss";
export default {
  name: 'App',
  data() {
    return {
      sequence: [],
      copy: [],
      mode: {
        name: 'free-board',
        time: 1000
      },
      dataRound: 0,
      deactivated: true,
      active: false,
      ifLost: false,
      isHoverable: false,
      modes: {
        hard: {
          value: "hard",
          name: "Hard",
          checked: false,
          time: 400
        },
        normal: {
          value: "normal",
          name: "Normal",
          checked: true,
          time: 1000
        },
        easy: {
          value: "easy",
          name: "Easy",
          checked: false,
          time: 1500
        },
        sound: {
          value: "sound-only",
          name: "Sound Only",
          checked: false,
          time: 600
        },
        light: {
          value: "light-only",
          name: "Light Only",
          checked: false,
          time: 600
        },
        free: {
          value: "free-board",
          name: "Free board",
          checked: false,
          time: 600
        },
      },
      tiles: {
        1: {
          tileColor: "tile red",
          dataTile: 1,
          activeTile: false,
          isLittenTile: false
        },
        2: {
          tileColor: "tile blue",
          dataTile: 2,
          activeTile: false,
          isLittenTile: false
        },
        3: {
          tileColor: "tile yellow",
          dataTile: 3,
          activeTile: false,
          isLittenTile: false
        },
        4: {
          tileColor: "tile green",
          dataTile: 4,
          activeTile: false,
          isLittenTile: false
        }
      }
    }
  },
  methods: {
    randomNumber() {
			return Math.floor((Math.random()*4)+1);
    },
    startGame() {
			this.sequence = [];
			this.copy = [];
			this.dataRound = 0;
			this.active = true;
      this.ifLost = false;
      this.newRound();
		},
    newRound() {
      this.deactivated = false;
      this.isHoverable = true;
      this.dataRound++;
      this.sequence.push(this.randomNumber());
      this.copy = this.sequence.slice(0);
			this.animate();
    },
    registerClick(tile) {
      if (!this.deactivated) {
        let desiredResponse = this.copy.shift();
        let actualResponse = tile.dataTile;
        this.active = (desiredResponse === actualResponse);
        this.checkLose();
      }
    },
    playSound(tile) {
      let track = new Audio(require(`./sounds/${tile.dataTile}.mp3`));
      this.sound = tile.dataTile;
      if (this.mode.name !== 'light-only' && !this.deactivated) {
          track.play();
      } 
    },
    changeMode(mode) {
      this.mode.name = mode.value;
      this.mode.time = mode.time
    },
    checkLose: function() {
      if (this.mode.name !== "free-board") {
        if (this.copy.length === 0 && this.active) {
          this.deactivateSimonBoard();
          this.newRound();
        } else if (!this.active) { 
          this.deactivateSimonBoard();
          this.ifLost = true;
        }
      }
		},
    deactivateSimonBoard() {
        this.deactivated = true;
        this.isHoverable = false;
    },
    lightUp(tile) {
			if (this.mode.name !== 'sound-only') {
        tile.isLittenTile = true;
        setTimeout(() => {
          tile.isLittenTile = false;
        }, this.mode.time);
      }
    },
    animate() {
      let i = 0;
      let ref = this;
			let interval = setInterval(function() {
        ref.lightUp(ref.tiles[ref.sequence[i]]);
        ref.playSound(ref.tiles[ref.sequence[i]]);
        i++;
				if (i >= ref.sequence.length) {
					clearInterval(interval);
					ref.deactivated = false;
				}
			}, this.mode.time / 1.5);
		},
  }
}
</script>
