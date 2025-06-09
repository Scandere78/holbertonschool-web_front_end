class studentHogwarts {
    #privateScore = 0;
    #name = null


#changeScoreBy(points) {
    this.#privateScore += points;
}

setName(newname) {
    this.#changeScoreBy(1);
}

 rewardStudent() {
    this.#changeScoreBy(1);
  }

  penalizeStudent() {
    this.#changeScoreBy(-1);
  }

  getScore() {
    return `${this.#name}: ${this.#privateScore}`;
  }
}

// 🔮 Harry
const harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore()); // Harry: 4

// 🐍 Draco
const draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore()); // Draco: -2
