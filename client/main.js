const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const fortuneTextarea = document.getElementById("fortuneTextarea");
const fetchFortuneButton = document.getElementById("fetchFortuneButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
      const data = res.data;
      alert(data);
    });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
      const data = res.data;
      alert(data);
    });
};

const fetchFortune = () => {
    axios.post('/api/fortune', {})
      .then(function(response) {
        const newFortune = response.data;
        fortuneTextarea.value = newFortune;
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  

fortuneBtn.addEventListener('click', getFortune);
complimentBtn.addEventListener('click', getCompliment);
fetchFortuneButton.addEventListener('click', fetchFortune);



