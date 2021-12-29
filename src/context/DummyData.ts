import { IBet } from "@src/store/interfaces"

export const DUMMY_RECENTS_BET: IBet[] = [
  {
    id: 1,
    type: "Lotofácil",
    color: "#7F3992",
    price: 2.50,
    bet: [1, 2, 4, 5, 6, 7, 9, 15, 17, 20, 21, 22, 23, 24, 25],
    date: new Date(2020,11,30)
  },
  {
    id: 2,
    type: "Mega-Sena",
    color: "#01AC66",
    price: 2.50,
    bet: [1, 2, 4, 5, 6, 7, 9, 15, 17, 20, 21, 22, 23, 24, 25],
    date: new Date(2020,11,30)
  },
  {
    id: 3,
    type: "Lotomania",
    color: "#F79C31",
    price: 2.50,
    bet: [1, 2, 4, 5, 6, 7, 9, 15, 17, 20, 21, 22, 23, 24, 25],
    date: new Date(2020,11,30)
  },
  // {
  //   id: 4,
  //   type: "Lotofácil",
  //   color: "#7F3992",
  //   price: 2.50,
  //   bet: [1, 2, 4, 5, 6, 7, 9, 15, 17, 20, 21, 22, 23, 24, 25],
  //   date: new Date(2020,11,30)
  // },
  // {
  //   id: 5,
  //   type: "Mega-Sena",
  //   color: "#01AC66",
  //   price: 2.50,
  //   bet: [1, 2, 4, 5, 6, 7, 9, 15, 17, 20, 21, 22, 23, 24, 25],
  //   date: new Date(2020,11,30)
  // },
  // {
  //   id: 6,
  //   type: "Lotomania",
  //   color: "#F79C31",
  //   price: 2.50,
  //   bet: [1, 2, 4, 5, 6, 7, 9, 15, 17, 20, 21, 22, 23, 24, 25],
  //   date: new Date(2020,11,30)
  // }
]