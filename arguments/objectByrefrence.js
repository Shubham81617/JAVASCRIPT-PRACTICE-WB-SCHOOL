function replacePlayer(player) {
    // Reassignment creates a brand-new object; breaks the link to the original
    player.score += 1000;
    player.name="akash"
    player = { name: "Alex", score: 999 };
    console.log(player.name); // "Alex"
    console.log(player.score)
}

let user = { name: "Shubham", score: 100 };

replacePlayer(user);
console.log(user.score); // 1100
console.log(user.name); // "Shubham" (Not "Alex"!)