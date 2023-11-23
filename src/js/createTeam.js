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

	[Symbol.iterator]() {
		let current = 0;
		let listTeam = this.toArray();
		let last = listTeam.length;

		return {
			next() {
				if(current < last) {
					return {
						done: false,
						value: listTeam[current++],
					}
				}

				return {
					done: true,
				}
			}

		}		
	}

	iterator() {
		if(!this.iter) {
			this.iter = this[Symbol.iterator]();
		}

		return this.iter.next().value;
	}
}

export default Team;

