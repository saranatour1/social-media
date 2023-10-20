import { readable } from "svelte/store";
import fb from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
import instagram from "./images/icon-instagram.svg";
import yt from "./images/icon-youtube.svg";

export const socialLinksOverview = readable([
  {
    title: "Facebook",
    color: "hsl(208, 92%, 53%)",
    logo: fb,
    userName: "@nathanf",
    followers: "1987",
    increase: true,
    today: "12",
  },
  {
    title: "Twitter",
    color: "hsl(203, 89%, 53%)",
    logo: twitter,
    userName: "@nathanf",
    followers: "1044",
    increase: true,
    today: "99",
  },
  {
    title: "Instagram",
    color: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
    logo: instagram,
    userName: "@realnathanf",
    followers: "11k",
    increase: true,
    today: "1099",
  },
  {
    title: "Youtube",
    color: "hsl(348, 97%, 39%)",
    logo: yt,
    userName: "Nathan F.",
    followers: "8239",
    increase: false,
    today: "144",
  },
]);

export const overviewToday = readable([
  {
    icon: fb,
    inc: true,
    title: "Page Views",
    count: "87",
    percentage: "3%",
  },

  {
    icon: fb,
    inc: false,
    title: "Likes",
    count: "52",
    percentage: "2%",
  },
  {
    icon: instagram,
    inc: true,
    title: "Likes",
    count: "5462",
    percentage: "2257%",
  },
  {
    icon: instagram,
    inc: true,
    title: "Profile Views",
    count: "52k",
    percentage: "1375%",
  },
  {
    icon: twitter,
    inc: true,
    title: "Retweets",
    count: "117",
    percentage: "303%",
  },
  {
    icon: twitter,
    inc: true,
    title: "Likes",
    count: "507",
    percentage: "553%",
  },
  {
    icon: yt,
    inc: false,
    title: "Likes",
    count: "107",
    percentage: "19%",
  },
  {
    icon: yt,
    inc: false,
    title: "Total Views",
    count: "1407",
    percentage: "12%",
  },
]);

