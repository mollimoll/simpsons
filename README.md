# Farewill React Code Task

This is a React code task for applicants for the Software Engineer role at Farewill. It's intended to help us get an idea of how familiar you are with writing idiomatic React components.

This task is to be completed in your own time, but please don't spend more than 2 hours on it! An incomplete version is okay.

We're looking to see how you approach the work as much as the end product. As well as the code you write, we also want to understand why you've chosen your solution, and what you'd do if you had more time. There are questions at the bottom of this readme that we'd love your thoughts on when you submit your answers.

## 👋 Intro

For this scenario, we're making a UI for showing random quotes from The Simpsons. This isn't exactly the next product we're thinking of launching, but their use of yellow works quite nicely with our brand colours.

We have:

- a template for the application
- a function to fetch random quotes
- designs for what the page should look like

---

## ❓ What you have to do

You'll need to add one or more components so that the app:

- Fetches 4 random quotes when the "Load quotes" button is clicked.
- Has some kind of "loading" state for the button while quotes are being fetched.
- Displays them in a format similar to the designs.
- Places the character images so they're facing towards their quotes.

#### Fetching quotes

A function is provided in `src/fetchQuotes.js` that selects 4 random quotes and returns them after a short delay (to simulate an API request.) You shouldn't need to modify this function.

The data returned by the quote function has information to position the character's image correctly.

#### The designs

You should follow the designs, but you don't have to match them exactly. If you style things differently, just let us know your reasoning!

##### Wide displays:

![Quote task wide](https://cdn.glitch.com/ca443201-d6f2-4d35-b5c6-8ae30c922edb%2Fquote_task_wide.png?v=1595602129785)

##### Narrow displays:

![Quote task narrow](https://cdn.glitch.com/ca443201-d6f2-4d35-b5c6-8ae30c922edb%2Fquote_task_narrow.png?v=1595602131478)


#### Technology

The provided application uses JavaScript, React, and styled-components. You're welcome to use other libraries if you're more familiar with them and think they're suitable.

---

### 💻 To get started

1. ['Remix' this application](https://glitch.com/edit/#!/remix/farewill-react-task). This will create a copy of all this code for yourself with a unique URL.
1. Work on your code until you're happy
   - The relevant code is in the `src` folder.
   - `src/constants.js` contains constants related to styles.
1. When you've finished, copy your unique Glitch URL.
1. Email us that link with your notes on your thoughts and reasoning behind the decisions you made.

If you don't want to use Glitch for any reason, you can [download the project](https://glitch.happyfox.com/kb/article/26-how-can-i-download-or-backup-my-glitch-project/) and submit your completed task via email attachment or another platform such as GitHub.

#### Things you may wish to cover in your notes:

- What went well?
- What could have gone better?
- Is there anything particular you'd like to come back and improve if you had time? Why?
