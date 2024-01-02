const btn = document.querySelector(".btn");
// const bars = document.querySelectorAll(".bar");
// const counts = document.querySelectorAll(".count");
const currentName = document.querySelector(".name");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const numberOfParticipants = 4;
const speed = 0;
const time = 1000 * 60 * 2;
let minutesInit = 0;
let secondsInit = 0;
// let maxHeight = false;
// const barContainerHeight =
//   document.querySelector(".bar-container").clientHeight;

// let showWinnerinterval;

// counts.forEach((count) => {
//   count.textContent = "(0)";
// });

const names = {
  0: {
    name: "Buba Conteh",
    count: 0,
  },
  1: {
    name: "Hadijatou Jasseh",
    count: 0,
  },
  2: {
    name: "Musa Keita",
    count: 0,
  },
  // 3: {
  //   name: "Fatou Kinneh",
  //   count: 0,
  // },
  3: {
    name: "Mamfatou Drammeh",
    count: 0,
  },
};

// const incrementCount = (id) => {
//   const participant_count = (names[id].count += 1);
//   const participant_name = names[id].name;

//   return {
//     participant_name,
//     participant_count,
//   };
// };

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

// const getBarName = (participant) => {
//   const bar = participant.participant_name.toLowerCase().split(" ").join("-");
//   return bar;
// };

// const getBarHeight = (count) => {
//   const barHeight = count <= barContainerHeight ? count : barContainerHeight;

//   return barHeight;
// };

// const injectToDOM = (participant) => {
//   const currentBar = document.querySelector(`.${getBarName(participant)}`);
//   const barHeight = getBarHeight(participant.participant_count);
//   const barHeightPercentage = `${Math.round(
//     (barHeight / barContainerHeight) * 100
//   )}%`;
//   const barBgColor = `coral`;

//   currentBar.nextElementSibling.lastElementChild.textContent = `(${participant.participant_count})`;
//   currentBar.style.width = "100%";
//   currentBar.style.height = barHeightPercentage;
//   currentBar.style.background = barBgColor;

//   if (participant.participant_count >= barContainerHeight) {
//     maxHeight = true;

//     const showWinner = () => {
//       currentBar.style.background = barBgColor;
//       setTimeout(() => {
//         currentBar.style.background = "green";
//       }, 500);
//     };

//     showWinner();

//     showWinnerinterval = setInterval(showWinner, 1000);

//     setTimeout(() => {
//       clearInterval(showWinnerinterval);
//     }, 1000 * 10);
//   }
// };

// const reset = () => {
//   for (let key in names) {
//     names[key].count = 0;
//   }

//   bars.forEach((bar) => {
//     bar.style.width = "100%";
//     bar.style.height = 0;
//     bar.style.background = "";
//   });

//   counts.forEach((count) => {
//     count.textContent = "(0)";
//   });

//   maxHeight = false;
// };

btn.addEventListener("click", (e) => {
  // reset();
  // clearInterval(showWinnerinterval);
  startTimer();
  const interval = setInterval(() => {
    // injectToDOM(incrementCount(getRandomNumber()));
    // if (maxHeight) {
    //   clearInterval(interval);
    // }
    injectToDom(dispalyCurrentParticipant, names, getRandomNumber());
  }, speed);

  setTimeout(() => {
    clearInterval(interval);
  }, time);
});
