import { getgoods, getgoodshot } from "./detail";
import { gethomebanner1, gethomebanner2, gethomegoods, gethomehead, gethomehot, gethomenew } from "./home";
export default [
  {
    url: "/home/banner",
    method: "get",
    response: (a, b, c) => {
        console.log(2222)
      console.log(a, b, c);
      return gethomebanner1;
    },
  },
  {
    url: "/home/goods",
    method: "get",
    response: () => {
      return gethomegoods;
    },
  },
  {
    url: "/home/hot",
    method: "get",
    response: () => {
      return gethomehot;
    },
  },
  {
    url: "/home/new",
    method: "get",
    response: () => {
      return gethomenew;
    },
  },
  {
    url: "/home/goods",
    method: "get",
    response: () => {
      return gethomehead;
    },
  },

  //detail
  {
    url: "/goods",
    method: "get",
    response: () => {
      return getgoods;
    },
  },
  {
    url: "/goods/hot",
    method: "get",
    response: () => {
      return getgoodshot;
    },
  },

  //category
  {
    url: "/member/order/pre",
    method: "get",
    response: () => {
      return getmemberorderpre;
    },
  },
  {
    url: "/member/order",
    method: "post",
    response: () => {
      return getmemberorder;
    },
  },
];
