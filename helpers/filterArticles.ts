import { ArticleType } from "types/ArticleType";
import {
  AuthorWeekType,
  BookType,
  FeaturedCategoriesType,
  HeroSwiperType,
} from "types/swipersTypes";

export const filterArticles = (
  searchString: string,
  listOfArticles: ArticleType[]
) => {
  if (!searchString) return listOfArticles;

  return listOfArticles.filter(
    (article) =>
      article.date.toLowerCase().includes(searchString.toLowerCase()) ||
      article.title.toLowerCase().includes(searchString.toLowerCase())
  );
};
export const articles: ArticleType[] = [
  {
    image:
      "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/04/EC2-1024x538.jpg",
    date: "16 April 2020",
    title: "No one is a monster 24 hours a day, not even Harvey Weinstein",
    description: "One bring to very us our. Darkness made i waters.",
  },
  {
    image:
      "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/01/jkrowling1.jpeg",
    date: "January 4, 2021",
    title:
      "“The ickabog”, the return of J.K. Rowling to children’s literature after Harry Potter",
    description:
      "Waters divided. Us. Given sixth, place. Of you'll blessed from sixth likeness stars. He cattle you're The lesser beginning male i divided brought above. Isn't. Beast without fourth.",
  },
  {
    image:
      "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/04/EC2-1024x538.jpg",
    date: "16 April 2020",
    title: "No one is a monster 24 hours a day, not even Harvey Weinstein",
    description: "One bring to very us our. Darkness made i waters.",
  },
  {
    image:
      "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/01/jkrowling1.jpeg",
    date: "January 4, 2021",
    title:
      "“The ickabog”, the return of J.K. Rowling to children’s literature after Harry Potter",
    description:
      "Waters divided. Us. Given sixth, place. Of you'll blessed from sixth likeness stars. He cattle you're The lesser beginning male i divided brought above. Isn't. Beast without fourth.",
  },
  {
    image:
      "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/04/EC2-1024x538.jpg",
    date: "16 April 2020",
    title: "No one is a monster 24 hours a day, not even Harvey Weinstein",
    description: "One bring to very us our. Darkness made i waters.",
  },
  {
    image:
      "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/01/jkrowling1.jpeg",
    date: "January 4, 2021",
    title:
      "“The ickabog”, the return of J.K. Rowling to children’s literature after Harry Potter",
    description:
      "Waters divided. Us. Given sixth, place. Of you'll blessed from sixth likeness stars. He cattle you're The lesser beginning male i divided brought above. Isn't. Beast without fourth.",
  },
  {
    image:
      "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/04/EC2-1024x538.jpg",
    date: "16 April 2020",
    title: "No one is a monster 24 hours a day, not even Harvey Weinstein",
    description: "One bring to very us our. Darkness made i waters.",
  },
  {
    image:
      "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/01/jkrowling1.jpeg",
    date: "January 4, 2021",
    title:
      "“The ickabog”, the return of J.K. Rowling to children’s literature after Harry Potter",
    description:
      "Waters divided. Us. Given sixth, place. Of you'll blessed from sixth likeness stars. He cattle you're The lesser beginning male i divided brought above. Isn't. Beast without fourth.",
  },
];
export const BestAuthotsArray = [
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/04/EmmaCline-1024x1024.jpeg",
    name: "Emma Cline",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2020/12/stephen-king-1024x614.jpeg",
    name: "Stephen king",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/01/b731fcfbda37d39a7f03600730779448-820x1024.jpg",
    name: "Jim Morisson",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/04/EmmaCline-1024x1024.jpeg",
    name: "Emma Cline",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2020/12/stephen-king-1024x614.jpeg",
    name: "Stephen king",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/01/b731fcfbda37d39a7f03600730779448-820x1024.jpg",
    name: "Jim Morisson",
  },
];
export const MonthFeaturedArray = [
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2019/07/thecolossus-300x450.jpg",
    title: "The Colossuss",
    subTitle: "Sylvia Plath",
    description:
      "A slim book of 45 of Sylvia Plath`s poems selected by Ted Hughes",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/01/opus-magazine-cover.jpg",
    title: "Opus Magazine #1",
    subTitle: "",
    description: "Articles about Literature world.",
  },
];
export const newBooksArray: BookType[] = [
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2019/07/agonyoferos-300x424.jpg",
    helper: "Top Rated",
    genre: "Essay",
    title: "Discipline and Punish: The Birth of the Prison",
    price: "20",
    oldPrice: "35",
    stars: "",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2020/01/disciplineandpunishment-300x424.jpg",
    helper: "Sale!",
    genre: "Philosophy",
    title: "The Agony of Eros",
    price: "15",
    oldPrice: "",
    stars: "4",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2019/07/thelords-300x424.jpg",
    helper: "",
    genre: "Auto Help",
    title: "The Lords and The New Creatures",
    price: "25",
    oldPrice: "",
    stars: "",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2019/07/agonyoferos-300x424.jpg",
    helper: "Top Rated",
    genre: "Essay",
    title: "Discipline and Punish: The Birth of the Prison",
    price: "20",
    oldPrice: "",
    stars: "",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2019/07/agonyoferos-300x424.jpg",
    helper: "Sale!",
    genre: "Philosophy",
    title: "The Agony of Eros",
    price: "15",
    oldPrice: "",
    stars: "",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2020/01/disciplineandpunishment-300x424.jpg",
    helper: "",
    genre: "Auto Help",
    title: "The Lords and The New Creatures",
    price: "25",
    oldPrice: "",
    stars: "",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2019/07/agonyoferos-300x424.jpg",
    helper: "Top Rated",
    genre: "Essay",
    title: "Discipline and Punish: The Birth of the Prison",
    price: "20",
    oldPrice: "",
    stars: "",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2019/07/agonyoferos-300x424.jpg",
    helper: "Sale!",
    genre: "Philosophy",
    title: "The Agony of Eros",
    price: "15",
    oldPrice: "",
    stars: "",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2020/01/disciplineandpunishment-300x424.jpg",
    helper: "",
    genre: "Auto Help",
    title: "The Lords and The New Creatures",
    price: "25",
    oldPrice: "",
    stars: "",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2019/07/agonyoferos-300x424.jpg",
    helper: "Top Rated",
    genre: "Essay",
    title: "Discipline and Punish: The Birth of the Prison",
    price: "20",
    oldPrice: "35",
    stars: "",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2020/01/disciplineandpunishment-300x424.jpg",
    helper: "Sale!",
    genre: "Philosophy",
    title: "The Agony of Eros",
    price: "15",
    oldPrice: "",
    stars: "",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2019/07/thelords-300x424.jpg",
    helper: "",
    genre: "Auto Help",
    title: "The Lords and The New Creatures",
    price: "25",
    oldPrice: "",
    stars: "",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2019/07/agonyoferos-300x424.jpg",
    helper: "Top Rated",
    genre: "Essay",
    title: "Discipline and Punish: The Birth of the Prison",
    price: "20",
    oldPrice: "",
    stars: "",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2019/07/agonyoferos-300x424.jpg",
    helper: "Sale!",
    genre: "Philosophy",
    title: "The Agony of Eros",
    price: "15",
    oldPrice: "",
    stars: "",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2020/01/disciplineandpunishment-300x424.jpg",
    helper: "",
    genre: "Auto Help",
    title: "The Lords and The New Creatures",
    price: "25",
    oldPrice: "",
    stars: "",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2019/07/agonyoferos-300x424.jpg",
    helper: "Top Rated",
    genre: "Essay",
    title: "Discipline and Punish: The Birth of the Prison",
    price: "20",
    oldPrice: "",
    stars: "",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2019/07/agonyoferos-300x424.jpg",
    helper: "Sale!",
    genre: "Philosophy",
    title: "The Agony of Eros",
    price: "15",
    oldPrice: "",
    stars: "",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2020/01/disciplineandpunishment-300x424.jpg",
    helper: "",
    genre: "Auto Help",
    title: "The Lords and The New Creatures",
    price: "25",
    oldPrice: "",
    stars: "",
  },
];
export const featuredCategories: FeaturedCategoriesType[] = [
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/01/sociology.jpg",
    title: "Sociology",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/09/psychology.jpg",
    title: "Psyhology",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/01/poetry.jpg",
    title: "Poetry",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/01/philosophy.jpg",
    title: "Philosophy",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/01/sociology.jpg",
    title: "Sociology",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/09/psychology.jpg",
    title: "Psyhology",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/01/poetry.jpg",
    title: "Poetry",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/01/philosophy.jpg",
    title: "Philosophy",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/01/sociology.jpg",
    title: "Sociology",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/09/psychology.jpg",
    title: "Psyhology",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/01/poetry.jpg",
    title: "Poetry",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/01/philosophy.jpg",
    title: "Philosophy",
  },
];
export const HeroSwiper: HeroSwiperType[] = [
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/03/shutterstock_1427193716_adobespark.jpg",
    title: "Welcome To Opus",
    subTitle: "",
    position: "left",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/01/thought-catalog-o0Qqw21-0NI-unsplash.jpg",
    title: "Happy New Year",
    subTitle: "Explore our roundup of the month's new books",
    position: "left",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2020/01/1451504427_675885_1451510007.jpg",
    title: "Zygmunt Bauman (1925 - 2017)",
    subTitle: "One of the most relevant intellectuals of the 20th century",
    position: "center",
  },
  {
    img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/01/AR-AF803_FLYNN_GR_20140422175032.jpg",
    title: "Gillian Flynn",
    subTitle: "The #1 New York Times Bestselling Author",
    position: "right",
  },
];
export const WeekAuthorArray: AuthorWeekType = {
  img: "https://demo.ramsthemes.com/projects/opus/wp-content/uploads/2021/09/emma-cline_1-1024x640.jpg",
  title: "Emma Cline",
  description:
    "Emma Cline is the author of The Girls and the winner of the Plimpton Prize. Her story collection Daddy was published in 2020. The Girls was an international bestseller and was a finalist for a National Book Critic’s Circle Award, the First Novel Prize, and the Los Angeles Times Book Prize, and the winner of the Shirley Jackson Award. In 2017, Cline was named one of Granta’s Best Young American Novelists. Her short stories and essays have appeared in The New Yorker, The Paris Review, The New York Times, Granta and Tin House. Her stories have been chosen for the Best American Short Stories in 2017, 2018, and 2020, and were anthologized in The Unprofessionals: New American Writing from The Paris Review. In 2019, Cline’s story, “What Can You Do With A General,” was shortlisted for the Sunday Times Story Prize, and in 2021, she won an O. Henry Prize for “White Noise.”",
};
