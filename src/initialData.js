import { v4 as uuid_v4 } from "uuid";

export const initialData = [
  {
    title: "Health",
    description:
      "Учитесь, пока другие спят, работайте, пока другие отдыхают, будьте готовы, пока другие расслабляются и мечтайте, пока другие плачутся.",
    date:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate(),
    id: uuid_v4(),
  },
  {
    title: "Health",
    description:
      "Учитесь, пока другие спят, работайте, пока другие отдыхают, будьте готовы, пока другие расслабляются и мечтайте, пока другие плачутся.",
    date:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate(),
    id: uuid_v4(),
  },
];
