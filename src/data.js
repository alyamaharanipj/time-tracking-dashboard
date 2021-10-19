import play from "../public/images/icon-play.svg";
import exercise from "../public/images/icon-exercise.svg";
import selfCare from "../public/images/icon-self-care.svg";
import social from "../public/images/icon-social.svg";
import study from "../public/images/icon-study.svg";
import work from "../public/images/icon-work.svg";

export const display = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7
      },
      weekly: {
        current: 32,
        previous: 36
      },
      monthly: {
        current: 103,
        previous: 128
      }
    },
    img: work
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2
      },
      weekly: {
        current: 10,
        previous: 8
      },
      monthly: {
        current: 23,
        previous: 29
      }
    },
    img: play
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 7
      },
      monthly: {
        current: 13,
        previous: 19
      }
    },
    img: study
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 5
      },
      monthly: {
        current: 11,
        previous: 18
      }
    },
    img: exercise
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3
      },
      weekly: {
        current: 5,
        previous: 10
      },
      monthly: {
        current: 21,
        previous: 23
      }
    },
    img: social
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 2,
        previous: 2
      },
      monthly: {
        current: 7,
        previous: 11
      }
    },
    img: selfCare
  }
];
