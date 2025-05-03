export interface DataTypes {
  id: string;
  title: string;
  prompt: string;
  contributed: string;
  language: string;
  category: string;
}

// export const tempData: DataTypes[] = [
//   {
//     id: "1",
//     title: "Act as a JavaScript Console",
//     prompt:
//       "I want you to act as a javascript console. I will type commands and you will reply with what the javascript console should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. do not write explanations. do not type commands unless I instruct you to do so. when I need to tell you something in english, I will do so by putting text inside curly brackets {like this}. My first command is console.log(“Hello World”)",
//     contributed: "John Doe",
//     language: "eng",
//     category: "programming",
//   },
//   {
//     id: "2",
//     title: "Act as a UX/UI Developer",
//     prompt:
//       "I want you to act as a UX/UI developer. I will provide some details about the design of an app, website or other digital product, and it will be your job to come up with creative ways to improve its user experience. This could involve creating prototyping prototypes, testing different designs and providing feedback on what works best. My first request is “I need help designing an intuitive navigation system for my new mobile application.",
//     contributed: "John Doe",
//     language: "eng",
//     category: "programming",
//   },
//   {
//     id: "3",
//     title: "Act as a Prompt Enhancer",
//     prompt:
//       "Act as a Prompt Enhancer AI that takes user-input prompts and transforms them into more engaging, detailed, and thought-provoking questions. Describe the process you follow to enhance a prompt, the types of improvements you make, and share an example of how you’d turn a simple, one-sentence prompt into an enriched, multi-layered question that encourages deeper thinking and more insightful responses.",
//     contributed: "Jane Smith",
//     language: "eng",
//     category: "programming",
//   },
//   {
//     id: "4",
//     title: "Act as a StackOverflow Post",
//     prompt:
//       "I want you to act as a stackoverflow post. I will ask programming-related questions and you will reply with what the answer should be. I want you to only reply with the given answer, and write explanations when there is not enough detail. do not write explanations. When I need to tell you something in English, I will do so by putting text inside curly brackets {like this}. My first question is “How do I read the body of an http.Request to a string in Golang”",
//     contributed: "Jane Smith",
//     language: "eng",
//     category: "programming",
//   },
//   {
//     id: "5",
//     title: "Act as a Fullstack Software Developer",
//     prompt:
//       "I want you to act as a software developer. I will provide some specific information about a web app requirements, and it will be your job to come up with an architecture and code for developing secure app with Golang and Angular. My first request is ‘I want a system that allow users to register and save their vehicle information according to their roles and there will be admin, user and company roles. I want the system to use JWT for security’.",
//     contributed: "Jane Smith",
//     language: "eng",
//     category: "programming",
//   },
//   {
//     id: "6",
//     title: "Act as an Ascii Artist",
//     prompt:
//       "I want you to act as an ascii artist. I will write the objects to you and I will ask you to write that object as ascii code in the code block. Write only ascii code. Do not explain about the object you wrote. I will say the objects in double quotes. My first object is “cat”",
//     contributed: "Jane Smith",
//     language: "eng",
//     category: "programming",
//   },
// ];

{
  /* ТИМЧАСОВІ КАТЕГОРІЇ ПРОМПТІВ В НАВІГАЦІЇ FIXME: Прибрати це, коли буде БД*/
}
export const temporaryCategories = [
  { name: "Усі", active: true },
  { name: "Українською", active: false },
  { name: "English", active: false },
];

{
  /* Кроки в MultiStepForm */
}

export type StepT = {
  id: number;
  name: string;
  active: boolean;
};

export const steps: StepT[] = [
  { name: "Крок 1: Роль", active: true, id: 1 },
  { name: "Крок 2: Завдання", active: true, id: 2 },
  { name: "Крок 3: Контекст", active: true, id: 3 },
  { name: "Крок 4: Формат відповіді", active: true, id: 4 },
  {
    name: "Крок 5: Обмеження/Критерії успіху",
    active: true,
    id: 5,
  },
];
