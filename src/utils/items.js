import { guid } from "react-agenda";

const now = new Date();

export const items = [
  {
    _id: guid(),
    name: "Programming Day One!",
    startDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      10,
      0
    ),
    endDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      12,
      0
    ),
    classes: "color-1 color-4",
  },
  {
    _id: guid(),
    name: "Programming Day Two",
    startDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      11,
      0
    ),
    endDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      13,
      0
    ),
    classes: "color-2",
  },
  {
    _id: guid(),
    name: "Beach Party | Day X",
    startDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      11,
      0
    ),
    endDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      14,
      30
    ),
    classes: "color-4",
  },
  {
    _id: "event-4",
    name: "Customers issues review",
    startDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 2,
      10,
      0
    ),
    endDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 2,
      15,
      0
    ),
    classes: "color-3",
  },
  {
    _id: "event-5",
    name: "Java Programming",
    startDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 3,
      10,
      0
    ),
    endDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 3,
      16,
      30
    ),
    classes: "color-4",
  },
  {
    _id: "event-6",
    name: "Python Programming",
    startDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 7,
      9,
      14
    ),
    endDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 7,
      17
    ),
    classes: "color-3",
  },
];
