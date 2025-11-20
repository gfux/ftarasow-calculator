// Enter all your details in this file
// Logo images
//import logo from "./assets/logo.svg";
import logo2 from "./assets/logo2.svg"; // Исправлено: избегаем дублирования имён импортов
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import sass from "./assets/techstack/sass.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Project Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// ✅ НОВОЕ: Добавляем картинку для проекта 3
import fedorCharacter from "./assets/projects/fedor-character.png"; // Поместите картинку сюда: src/assets/projects/

// Enter your Personal Details here
export const personalDetails = {
  name: "Фёдор Тарасов",
  tagline: "Студент веб-разработки | Создаю современные веб-решения",
  img: profile,
  about: <p className="text-gray-600 leading-relaxed text-lg text-2xl mb-8 animate-fade-in">Студент курса веб-разработки с более чем 5 годами опыта в разработке программного обеспечения. Специализируюсь на фронтенде (React, TypeScript, Tailwind CSS) и полном стеке (Node.js, MongoDB, PostgreSQL). Увлекаюсь современными веб-технологиями, открытой разработкой и созданием продуктов, которые делают жизнь проще. Сейчас готовлю итоговый проект для университета, объединяя академические знания с реальным опытом.</p>,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/gfux",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
  whatsapp: "https://web.whatsapp.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Студент веб-разработчик",
    Company: "Свободный фриланс",
    Location: "Москва, Россия",
    Type: "Freelance",
    Duration: "2020 – настоящее время",
  },
  {
    Position: "Frontend Developer",
    Company: "Компания X (конфиденциально)",
    Location: "Москва, Россия",
    Type: "Full Time",
    Duration: "2022 – 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Курс веб-разработки",
    Company: "Университет / Онлайн-платформа",
    Location: "Москва / Онлайн",
    Type: "Обучение",
    Duration: "Январь 2022 – настоящее время",
  },
  {
    Position: "Бакалавр по электронике и связи",
    Company: "Московский государственный технический университет",
    Location: "Москва, Россия",
    Type: "Очное",
    Duration: "Август 2020 – Июнь 2024",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  sass: sass,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  // Добавлены технологии, которые вы реально используете
  typescript: "./assets/techstack/typescript.png", // Добавьте файл типа typescript.png в папку
  nodejs: "./assets/techstack/nodejs.png",        // Добавьте файл nodejs.png
  mongodb: "./assets/techstack/mongodb.png",      // Добавьте файл mongodb.png
  postgresql: "./assets/techstack/postgresql.png", // Добавьте файл postgresql.png
  docker: "./assets/techstack/docker.png",        // Добавьте файл docker.png
  nextjs: "./assets/techstack/nextjs.png",        // Добавьте файл nextjs.png
  aws: "./assets/techstack/aws.png",              // Добавьте файл aws.png
};
// В конец файла Details.js добавьте:
export const logos = {
  //logo: logo, // если logo импортирован
  logo2: logo2, // если logo2 импортирован
};

// ✅ Обновляем projectDetails: теперь projectImage3 — это fedorCharacter
export const projectDetails = [
  {
    title: "ПЗ к модулю 1: Веб-технологии и платформенная экономика",
    image: projectImage1,
    description: `Практическое задание по теме: «Веб-технологии: возможности интернет-среды для платформенной экономики». Создано с использованием HTML, CSS, JavaScript и React. Цель — продемонстрировать понимание архитектуры современного веб-приложения и его роли в цифровой экономике.`,
    techstack: "HTML, CSS, JavaScript, React",
    previewLink: "https://ftarasow.ru",
    githubLink: "https://github.com/gfux/Lab.-Web-Technologies.git",
  },
  {
    title: "Личный портфолио-сайт (академический проект)",
    image: projectImage2,
    description: `Многоязычный (русский) портфолио-сайт, разработанный для представления итогового проекта университета. Использует React, Redux, Tailwind CSS, размещён на Vercel через GitHub. Структура соответствует стандартам академических работ и демонстрирует навыки современной фронтенд-разработки.`,
    techstack: "React, Redux, Tailwind CSS, Vercel, GitHub",
    previewLink: "https://ftarasow.ru",
    githubLink: "https://github.com/gfux/portfolio-academic",
  },
  {
    title: "Интерактивный калькулятор",
    image: fedorCharacter, // ✅ Теперь используется ваша картинка
    description: `Простой, но функциональный калькулятор с поддержкой основных арифметических операций (+, –, ×, ÷), обработкой ошибок и адаптивным интерфейсом. Разработан на React с использованием хуков (useState, useEffect) и стилизован с помощью Tailwind CSS. Проект демонстрирует понимание логики вычислений, управления состоянием и UX-принципов.`,
    techstack: "React, Tailwind CSS, JavaScript",
    previewLink: "https://github.com/gfux/calculator",
    githubLink: "https://github.com/gfux/calculator",
  },
  {
    title: "Погодное приложение с API",
    image: projectImage4,
    description: `Приложение для отображения текущей погоды в Москве и других городах мира с использованием OpenWeather API. Реализовано с использованием React, Axios и Styled Components. Поддерживает кэширование и обработку ошибок.`,
    techstack: "React, Axios, Styled Components, API",
    previewLink: "https://github.com/gfux/weather-app",
    githubLink: "https://github.com/gfux/weather-app",
  },
  {
    title: "Интерактивный учебный трекер",
    image: projectImage5,
    description: `Приложение для отслеживания прогресса в изучении веб-технологий. Использует Redux для управления состоянием, данные хранятся в localStorage. Создано как учебный проект для демонстрации работы с состоянием в React.`,
    techstack: "React, Redux, localStorage",
    previewLink: "https://github.com/gfux/learning-tracker",
    githubLink: "https://github.com/gfux/learning-tracker",
  },
  {
    title: "Многоязычный блог (на русском)",
    image: projectImage6,
    description: `Простой блог с поддержкой русского языка, реализованный на Next.js и Markdown. Планируется расширение до поддержки английского и других языков. Используется для демонстрации подходов к локализации в веб-приложениях.`,
    techstack: "Next.js, MDX, Tailwind CSS",
    previewLink: "https://github.com/gfux/blog-multilang",
    githubLink: "https://github.com/gfux/blog-multilang",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "ft-35@mail.ru",
  phone: "+7 (903) 698-74-09",
};