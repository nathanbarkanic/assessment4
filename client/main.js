const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment")
    .then(res => {
      const data = res.data;
      alert(data);
    });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune")
    .then(res => {
      const data = res.data;
      alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune);
complimentBtn.addEventListener('click', getCompliment);

const myList = document.getElementById('myList');
myList.addEventListener('click', function(event) {
  if (event.target.nodeName === 'LI') {
    const itemText = event.target.textContent;

    axios.post('http://localhost:4000/api/removeItem', { itemText })
      .then(response => {
        event.target.remove();
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
});
