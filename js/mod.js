let modInfo = {
	name: "The Discord Incremental Tree",
	author: "ur average minecraftian",
	pointsName: "point(s)",
	modFiles: ["layers/first.js", "tree.js"],

	discordName: "there's no discord",
	discordLink: "there's no discord",
	initialStartPoints: new Decimal(0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.01",
	name: "Created the mod",
}

let changelog = `<h1>THE CHANGELOG</h1><br>
	<h3>v0.01</h3><br>
	Started creating the mod! <br>
	We got a layer and an upgrade!
`

let winText = `
Congratulations! You beat the game, so either wait for more features or visit: 
<a href="https://minecraftfan69420.github.io/card_incremental">Card Incremental!</a>
`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){return true}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints()) return new Decimal(0)
	let gain = new Decimal(0)
	if(hasUpgrade("f", 11)) gain = gain.add(1)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = []

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal(1000))
}

// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}