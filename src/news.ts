export interface News {
	date: string;
	title: string;
	markdown: string;
}

export const news: News[] = [
	{
		date: "June 18",
		title: "Chase the Skies",
		markdown: `
In perhaps the fastest update this server has ever received,
the server is updated to 1.21.6—Chase the Skies update!
On the same day as the update!

As part of this update, I have trimmed some nether chunks.
This should make it easier to find dried ghasts.

Happy hunting!

Notable updates:

* Happy Ghasts
* Locator bar to show where other players are
* Leads are stronger, can leash mobs to each other, and can be picked up from fences
* Craftable saddles
* New clouds
* Fireworks used while flying always boost, even if clicking on a block
* Shears can be used on saddles and leads
* New music disc
* Projectiles are more accurate
* Fog is more atmospheric
* Music settings can be changed, including the frequency
* Splash potions are more effective
* Nether portals act as full blocks again
		`,
	},
	{
		date: "April 21",
		title: "Bundle of Updates",
		markdown: `
I finally have enough time to update the server.
The server now runs with 1.21.5
and includes multiple new drops:

* Bundles of Bravery
* The Garden Awakens
* Spring to Life

These updates add a lot of new features.
At the bottom of this, I have included some notable changes for each drop.

To make it possible to find all the new content,
I have reset a large number of chunks.
If something is broken,
please give me coordinates for the location so I can fix it.
This may mean some lag as players are generating lots of these chunks anew.

To help with exploring these changes,
if you need coordinates for some of these biomes and structures,
please message me and I'll get you some.

To get this update out faster,
I have temporarily removed some mods and datapacks.
I would like to fix most of them in the next couple weeks.
I will post as I fix each one.

I will also be looking at other mods and datapacks.
If you have suggestions, please message me.

Mods

* Removed Alternate Current (breaks a very popular TNT duping method)
* Removed Chunky (pre-generating chunks has made updating significantly more difficult)
* Removed Slumber (it's feature of turning off the server when no one was online was added to vanilla)
* Temporarily removed Audaki Cart Engine (current version breaks the item sorter)
* Temporarily removed Very Many Players (out of date)
* Temporarily removed Memory Leak Fix (out of date)

Datapacks

* Removed Craftable Bundles Rabbit Hide (bundles are no longer experimental)
* Removed Wandering Cities. It broke and isn't worth fixing. Please let me know if you need coordinates
* Temporarily removed Invisible Item Frames until I can fix it
* Temporarily removed Deepslate Stonecutting until I can fix it
* Added Painting Picker (there are lots of paintings now)
* Added Husks Drop Sand (until vanilla has proper renewable sand, this is currently the best alternative)
* Added Sandstone Dyeing (until vanilla has proper renewable red sand, this is currently the best alternative)
* Tag game has an issue where the tag text is rendered incorrectly

Bundles of Bravery

* Bundles are now officially complete
* Dolphins, squid, and salmon come in different sizes
* Sneaking on slime blocks no longer deals fall damage
* Ridden boats, minecarts, etc. can go through Nether portals
* Ender pearls load chunks
* Smithing templates and banner patterns are individually named
* Redstone torch texture updated

The Garden Awakens

* Pale Garden biome
* Pale Oak tree and wood set
* Pale moss, hanging moss, and eyeblossoms
* The Creaking mob
* Resin block set
* Removed damage resistance from relogging

Spring to Life

* Bush, firefly bush, cactus flower, dry grass, wildflowers, and leaf litter added
* Cows, pigs, and chickens have cold and warm variants
* Wolves have different sound personalities
* Beacon beams render farther
* Leaf particles from leaf blocks
* Lodestone is significantly cheaper
* Elytra disengages when on climbable blocks
* Camels spawn across deserts instead of just one per village
* Creaking can be name tagged (but must be kept close to its creaking heart block)
* Villagers sell maps to other villages, swamp huts, and jungle temples
* Wandering traders have improved trades
* Zombie piglins no longer drop XP and rare loot when angry at a player but not damaged by that player
		`,
	},
	{
		date: "April 1",
		title: "CraftMine available now",
		markdown: `
I'm very excited to be at the forefront of Minecraft's new direction.
The CraftMine update is immediately available at mc.superdyl.net.

I'd love help to fill the hall with memories of all kinds of "mines".
		`,
	},
	{
		date: "July 27",
		title: "Tricky Trials Update (1.21.0)",
		markdown: `
The server has been updated to 1.21, the Tricky Trials update.
This update took longer since large datapack changes for 1.20.5
were making datapacks take a long time to update.
It ended up taking even longer after Vanilla Tweaks
announced that they were discontinuing the tag datapack.
So, I waited to update the server until I had a replacement
tag datapack.

Features in the update include:
- The armadillo, wolf variants, and wolf armor (from 1.20.5)
- The trail chambers, an exciting new common dungeon
- The breeze and the bogged
- An exciting new weapon: the mace
- The crafter, a redstone component which crafts items

To make it easier to find the new wolf variants, armadillos,
and trial chambers, I have aggressively removed chunks.
If I have mistakenly deleted chunks you care about, please
let me know and I can fix it.

For this update, I have added the Vanilla Tweaks wandering trader
mini blocks datapack and the cauldron mud datapack.
I am still considering new mods and datapacks to add to the server.
Please give me any suggestions you have.

Finally, please remember to update your mods to the latest version.
You can use the list at the bottom of the page to help update your mods.
		`,
	},
	{
		date: "April 2",
		title: "Return to 1.20.4",
		markdown: `
I hope everyone who wanted to was able to play with the
April Fools snapshot.
I have reverted the server back to normal,
so your bases and gear should be returned to you
(including your prized poisonous potatoes!)

In the future, I may be able to run two servers concurrently,
so if you have any ideas for a fun events that require
a second server, please let me know.
We may be able to turn on a favorite mini-game, adventure map,
or mess around with some crazy datapacks.

I still plan on the main server not resetting for updates,
so any second server ideas would be temporary spaces that reset often.
		`,
	},
	{
		date: "April 1",
		title: "Poisonous Potato Update",
		markdown: `
The server has been updated to 24w14potato: The Poisonous Potato Update.
Unfortunately, the potatoes poisoned the server, so it will take me
a day to return the world to normal.

## Changelog

Full changelog available at: [minecraft.net](https://www.minecraft.net/en-us/article/poisonous-potato-update)

## Significant Additions

* Poisonous Potato Dimension
* Colosseum Structure and it's Potato Boss
* Frying table
* Fletching table functionality
* Replaced all mobs with potatoes
* More potato themed...everything!

And yes, Samwise Gamgee would be conflicted about this update
		`,
	},
	{
		date: "March 20",
		title: "1.20.4 Update",
		markdown: `
The server has been updated to 1.20.4.
Please make sure you update any mods accordingly.

## Why the wait?

Though the server doesn't use Optifine,
I know a number of players rely on Optifine to play on the server.
That is why I usually wait until Optifine has a stable version available
before updating the server.

The developer of Optifine has taken a couple months to catch up
with development of their mod due to personal matters,
and since most changes were minor, I opted to wait as well.

## Significant changes

* Diamonds are much more common in deep caves
* Villagers will no longer stack discounts for curing more than once
* Mob attack reach is based on their size
    + Small mobs cannot hit very high, tall mobs can reach high
* The server is better about sending chunks to players
* Decorated pots can store items
* Shields follow player's vertical view
* Bat model updated

## Changes to Datapacks and Mods

* Removed Mods Command mod (no version for 1.20.4)
* Added Krypton mod (better server/client communication)
* Added Memory Leak Fix mod (helps the server work well)

		`,
	},
	{
		date: "July 10",
		title: "Website Redesign Begins",
		markdown: `
I have begun redesigning the website. Why? Because this webpage is a journey. 
Please give me suggestions on how to improve it!

When I started the server, I needed somewhere to put information down, so I 
started a Google Docs page. This housed links to the Discord channel, 
Minecraft IP address, the rules, and information about the mods and 
datapacks used.

Eventually, I decided I had enough web design skills to start a proper 
webpage. I wasn't sure how long it would take to finish designing the 
full website, so I settled on a compromise—I copied all the information 
from the Google Docs page with some light styling and stopped there. This 
allowed the page to be up, since I knew it was technically higher quality 
than the Google Docs page, even if it was kind of ugly and had really bad 
design choices (like the giant amount of scrolling). I have been able to 
add a couple small features, like click-to-copy buttons, links that open in 
new tabs, and the mod tables having filters by Minecraft versions.

It's finally time for a major redesign. I want to make the website look better 
(especially on phones). I also would like to use multiple webpages to collection 
similar information together. I want the home page to give an idea what's on the 
website, but not be so long it takes forever to scroll through. It might take a 
while, but I think we'll end up with a pretty nice website.

And, once again, please let me know if anything breaks or if you have suggestions 
for how to improve the website. Now is an especially good time for that.
		`,
	},
	{
		date: "June 21",
		title: "Trails & Tales Update",
		markdown: `
The server has been updated to 1.20.1, the Trails and Tales update.
This update includes new terrain generation such as suspicious
sand/gravel, the trail ruins structure, and the cherry grove biome.

To make this update easier, I have deleted all Overworld chunks which
players have not visited for more than a few minutes. This will mean
more lag from loading new chunks. It also means that content from the
new update will be closer to already loaded chunks.

Also, here again is a reminder to update the mods you use. If you are
using the suggested client-side mods, you will need to update these
mods:
* Alternate Current --> 1.6.0
* c2me --> 0.2.0+alpha.10.91
* Chunky --> 1.3.92
* Fabric API --> 0.83.1
* FerriteCore --> 6.0.0
* Lithium --> 0.11.2
* Mods Command --> 1.1.3
		`,
	},
	{
		date: "June 4",
		title: "Summer Carnival Community Event",
		markdown: `
I originally intended community events to happen rather often, but we
haven't had one since the Ender Dragon fight last August. It's time
for another event: the summer carnival! For this event, everyone is
invited to create some type of carnival ride or game at the carnival
grounds. This Friday or Saturday (depending on scheduling), everyone
can get on the server together to play the games together

Other details:
* All the games will be free to play. If a game requires a gamble, you will need to provide some form of tokens to freely use (and plenty for the duration of the carnival)
* The carnival fairgrounds are southeast of the cobblestone wall/lava cast
* Everyone who puts in effort in building at least one game/event will be compensated a couple diamonds for their effort
* Prizes will be given to the best games/events
* I expect the carnival to last about 90 minutes, but players can stay on afterward or return to the carnival on other days
* Generally, games should be low risk: players shouldn't be at risk of losing valuable items. If possible, please provide all items players will need for your games

Some suggestions:
* Ice boat racing
* Parkour course
* Spleef
* PvP arena
* Elytra race course
* Bow/Crossbow shooting range
* Pig jousting
* Rollercoaster
		`,
	},
	{
		date: "June 2",
		title: "Website & 1.19.4 Mods",
		markdown: `
The original Google Docs page has been replaced with this website!
Feel free to offer suggestions on how I can improve this page.

Here is the promised list of mod changes:
* Audaki Cart Engine: Makes mine carts 4 times faster on straight sections
* Chunky: Tool to pre-generate chunks
* Inv View: Gives admins the ability to view and edit inventories
* Keep Head: Preserves extra data on player heads that are placed and picked up again
* Ledger: Gives admins a log of player actions
* Mods Command: Shows installed mods
* Slumber: Hibernates the server when no players are online

And a list of datapack changes:
* Better Compass: Compasses show player coordinates and direction
* Better Deepslate Stonecutting: Gives deepslate the stonecutter recipes of cobbled deepslate
* Vanilla Tweaks Double Shulker Shells: Shulkers always drop two shells
		`,
	},
	{
		date: "May 24",
		title: "1.19.4 Update",
		markdown: `
The server has been updated to 1.19.4.
Players will need to update Minecraft and any mods they use in order to play.
Specifics on mods and versions being used will be updated later.

Some quick notes:
* Shulkers now always drop 2 shells
* A held compass will show your current coordinates and direction
* Armor swapping now exists in the game, no datapacks needed
* Non-cobbled deepslate can be used in stone-cutters
* Mine carts are now up to 4x faster
		`,
	},
	{
		date: "August 21",
		title: "1.19.2 Update",
		markdown: `
The server has been updated to 1.19.2.
Players will need to update their mods and Minecraft version to play.
Of special note:
* Optifine needs a 1.19.2 version for either stand-alone or Forge;
* Lithium for Fabric requires 0.8.3 for 1.19.2
* FabricAPI requires 0.60.0+1.19.2

Datapacks have been added:
* Ender Dragon now drops an Ender Dragon egg and Elytra on death
* Tag can now be played. The number of times you've been tagged displays beneath your name
* Custom name prefixes should return after a player is afk
* Wandering traders have a 30% chance to sell a map to the nearest Ancient City
* Nether Portals can be made very small (minimum 4 obsidian)
* Equipping armor from the hotbar will swap it with the armor you're wearing. Works with Elytra by the way
		`,
	},
	{
		date: "August 3",
		title: "1.19.1 Update",
		markdown: `
The server has been updated to 1.19.1.
If there is any trouble caused by the update, let me know.
This also means some of the mods have been updated along with the vanilla tweaks more mob heads datapack.
		`,
	},
	{
		date: "July",
		title: "Armor Switch Datapack",
		markdown: `
The armor switch datapack has been removed.
An armor-duping exploit was found with it, and so it will not return to the server unless that gets patched.
		`,
	},
];
