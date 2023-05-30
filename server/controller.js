let items = ["Item 1", "Item 2", "Item 3"];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = ["Welcome change.", "Many will travel to hear you speak.", "Like the river flow into the sea. Some things are just meant to be.", "Meditation with an old enemy is advised.", "A pleasant surprise is waiting for you."];
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];
    res.status(200).send(randomFortune);
  },

  removeItem: (req, res) => {
    const { itemText } = req.body;

    const index = items.indexOf(itemText);
    if (index !== -1) {
      items.splice(index, 1);
      res.status(200).send('Item removed successfully.');
    } else {
      res.status(404).send('Item not found.');
    }
  }
};
