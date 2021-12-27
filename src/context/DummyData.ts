import { IGameType, IBet } from ".";

export const DUMMY_RECENTS_BET: IBet[] = [
  {
    id: 1,
    type: "Lotofácil",
    color: "#7F3992",
    price: 2.50,
    bet: "01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25",
    date: new Date(2020,11,30)
  },
  {
    id: 2,
    type: "Mega-Sena",
    color: "#01AC66",
    price: 2.50,
    bet: "01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25",
    date: new Date(2020,11,30)
  },
  {
    id: 3,
    type: "Lotomania",
    color: "#F79C31",
    price: 2.50,
    bet: "01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25",
    date: new Date(2020,11,30)
  },
  // {
  //   id: 4,
  //   type: "Lotofácil",
  //   color: "#7F3992",
  //   price: 2.50,
  //   bet: "01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25",
  //   date: new Date(2020,11,30)
  // },
  // {
  //   id: 5,
  //   type: "Mega-Sena",
  //   color: "#01AC66",
  //   price: 2.50,
  //   bet: "01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25",
  //   date: new Date(2020,11,30)
  // },
  // {
  //   id: 6,
  //   type: "Lotomania",
  //   color: "#F79C31",
  //   price: 2.50,
  //   bet: "01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25",
  //   date: new Date(2020,11,30)
  // }
]

export const DUMMY_CART: IBet[] = [
  {
    id: 1,
    type: "Lotofácil",
    color: "#7F3992",
    price: 2.50,
    bet: "01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25",
    date: new Date(2020,11,30)
  },
  {
    id: 2,
    type: "Mega-Sena",
    color: "#01AC66",
    price: 2.50,
    bet: "01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25",
    date: new Date(2020,11,30)
  },
  {
    id: 3,
    type: "Lotomania",
    color: "#F79C31",
    price: 2.50,
    bet: "01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25",
    date: new Date(2020,11,30)
  },
  // {
  //   id: 4,
  //   type: "Lotofácil",
  //   color: "#7F3992",
  //   price: 2.50,
  //   bet: "01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25",
  //   date: new Date(2020,11,30)
  // },
  // {
  //   id: 5,
  //   type: "Mega-Sena",
  //   color: "#01AC66",
  //   price: 2.50,
  //   bet: "01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25",
  //   date: new Date(2020,11,30)
  // },
  // {
  //   id: 6,
  //   type: "Lotomania",
  //   color: "#F79C31",
  //   price: 2.50,
  //   bet: "01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25",
  //   date: new Date(2020,11,30)
  // }
]

export const DUMMY_GAME_TYPES: IGameType[] = [
  {
    type: "Mega-Sena",
    color: "#01AC66"
  },
  {
    type: "Lotofácil",
    color: "#7F3992"
  },
  {
    type: "Lotomania",
    color: "#F79C31"
  }
]