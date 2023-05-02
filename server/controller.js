module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

}

module.exports = {

    getFortune: (req, res) => {
        const fortunes = ["Welcome change.", "Many will travel to hear you speak.", "Like the river flow into the sea. Something are just meant to be.", "Meditation with an old enemy is advised.", "A pleasant surprise is waiting for you."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune= fortunes[randomIndex];
      
        res.status(200).send(randomFortunes);
    }

}