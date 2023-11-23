import { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from "./createCharacters.js";
import Team from "./createTeam.js";

const bowerman = new Bowerman("Bower");
const swordsman = new Swordsman("Sword");
const magician = new Magician("Mag");
const daemon = new Daemon("Dam");
const undead = new Undead("Kriv");
const zombie = new Zombie("Zom")

const myTeam = new Team;

myTeam.addAll(bowerman, swordsman, magician, daemon, undead, zombie);

// for(let item of myTeam) {
// 	console.log(item);
// }

// let iterator = myTeam[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// console.log(myTeam.iterator());
// console.log(myTeam.iterator());
