export interface tempDataTypes {
  id: number;
  title: string;
  prompt: string;
  contributed: string;
  language: string;
  category: string;
}

export const tempData: tempDataTypes[] = [
  {
    id: 1,
    title: "Act as a JavaScript Console",
    prompt:
      "I want you to act as a javascript console. I will type commands and you will reply with what the javascript console should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. do not write explanations. do not type commands unless I instruct you to do so. when I need to tell you something in english, I will do so by putting text inside curly brackets {like this}. My first command is console.log(“Hello World”)",
    contributed: "John Doe",
    language: "eng",
    category: "programming",
  },
  {
    id: 2,
    title: "Act as a UX/UI Developer",
    prompt:
      "I want you to act as a UX/UI developer. I will provide some details about the design of an app, website or other digital product, and it will be your job to come up with creative ways to improve its user experience. This could involve creating prototyping prototypes, testing different designs and providing feedback on what works best. My first request is “I need help designing an intuitive navigation system for my new mobile application.",
    contributed: "John Doe",
    language: "eng",
    category: "programming",
  },
];
