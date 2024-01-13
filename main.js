const btn = document.querySelector(".btn");
const currentName = document.querySelector(".name");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const numberOfParticipants = 4;
const speed = 0;
const time = 1000 * 60 * 2;
let minutesInit = 0;
let secondsInit = 0;

const names = {
  // 0: {
  //   name: "Buba Conteh",
  // },
  1: {
    name: "Hadijatou Jasseh",
  },
  2: {
    name: "Musa Keita",
  },
  // 3: {
  //   name: "Fatou Kinneh",
  // },
  3: {
    name: "Mamfatou Drammeh",
  },
};

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * numberOfParticipants);
  return randomNumber;
};

const dispalyCurrentParticipant = (participants, randomNumber) => {
  return participants[randomNumber].name;
};

const injectToDom = (fn, participants, randomNumber) => {
  currentName.textContent = fn(participants, randomNumber);
};

const startTimer = () => {
  const secondsInterval = setInterval(() => {
    secondsInit = secondsInit += 1;
    seconds.textContent = `${secondsInit < 10 ? "0" : ""}${
      secondsInit === 60 ? "00" : secondsInit
    }`;
  }, 1000);

  const minutesInterval = setInterval(() => {
    secondsInit = 0;
    minutesInit = minutesInit += 1;
    minutes.textContent = `${minutesInit < 10 ? "0" : ""}${minutesInit}`;
  }, 1000 * 60);

  setTimeout(() => {
    secondsInit = 0;
    minutesInit = 0;
    clearInterval(secondsInterval);
    clearInterval(minutesInterval);
  }, time);
};

btn.addEventListener("click", (e) => {
  startTimer();
  const interval = setInterval(() => {
    injectToDom(dispalyCurrentParticipant, names, getRandomNumber());
  }, speed);

  setTimeout(() => {
    clearInterval(interval);
  }, time);
});
