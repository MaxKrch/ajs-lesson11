import { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from "./createCharacters.js";



class Team {
	constructor() {
		this.members = new Set();
	}
	
	add(character) {
		const chek = this.members.has(character);
		if(chek) {
			throw new Error("Этот персонаж уже в команде")
		} else {
			this.members.add(character);
		}
	}

	addAll(...characters) {
		for(let character of characters) {
			this.members.add(character)
		}
	}

	toArray() {
		const arrayCharacters = Array.from(this.members);
		return arrayCharacters;
	}

	// [Symbol.iterator]() {
	// 	let current = 0;
	// 	let listTeam = this.toArray();
	// 	let last = listTeam.length;

	// 	return {
	// 		next() {
	// 			if(current < last) {
	// 				return {
	// 					done: false,
	// 					value: listTeam[current++],
	// 				}
	// 			}

	// 			return {
	// 				done: true,
	// 			}
	// 		}

	// 	}		
	// }

	 *[Symbol.iterator]() {
	 	
	 	let listCharacters = this.toArray();
	 	
	 	for(let item of listCharacters) {
	 		yield item
	 	}

  }

}

const bowerman = new Bowerman("Bower");
const swordsman = new Swordsman("Sword");
const magician = new Magician("Mag");
const daemon = new Daemon("Dam");
const undead = new Undead("Kriv");
const zombie = new Zombie("Zom")

const myTeam = new Team;

myTeam.addAll(bowerman, swordsman, magician, daemon, undead, zombie);

const gen = myTeam[Symbol.iterator]();
const gen2 = myTeam[Symbol.iterator]()


// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen2.next().value);
