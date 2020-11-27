class TargetingSolution {
	constructor(set) {
		this.x = set.x;
		this.y = set.y;
		this.z = set.z;
	}
	target() {
		let nub;
		return (nub = `(${String(this.x)}, ${String(this.y)}, ${String(this.z)})`);
	}
}

const test = new TargetingSolution({
	x: 10,
	y: 5,
	z: 1,
});
console.log(test.target());


