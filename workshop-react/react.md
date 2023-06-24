---
marp: true
theme: kodark
class: invert
---

<!-- _color: white -->

# <!-- fit --> React JS

---

- Framework for building user interfaces (UIs)
- Technically not a library, as it also controls the flow of the application
- Build isolated UI components that **react** accordingly to the state of your application as it changes
  - hence, React is a 'declarative' framework -> you declare the expected result and logic, and React will deal with how we transition to that result/state.
- Saves a lot of effort programming for transitions between each state.
- Allows us to define each state nicely with JSX

---

![](completegraphs.png)

---

# JSX (JS XML)

> JavaScript Extension Syntax → allows you to write and render HTML in JS

```jsx
const jsx = <h1>This is JSX</h1>;
```

**Note:** All JSX code must be encapsulated within a SINGLE parent.

```jsx
const jsx = (
  <div>
    <p></p>
    <p></p>
  </div>
);
```

```jsx
const jsx = (   // ❌
    <p></p>
    <p></p>
);
```

---

## React Components

```jsx
//  this is an object   ⤵
const MyComponent = (props) => {
  return <div>Hello {props.text}</div>;
};
```

### Using components

```jsx
//  App.js
const App = () => {
  return <MyComponent text={'World'} />; // becomes: <div>Hello World</div>
};
```

---

## React Components & Props

To use JavaScript code in your JSX HTML, use `{}` to encapsulate it:

```jsx
import React from 'react';
// We prefer this method of passing props⤵
const ExampleComponent = ({ name, age, zid }) => {
  return (
    <div>
      <p>Date: {new Date().toDateString()}</p>
      <h1>Hi! I'm {name}</h1>
      <h3>I'm {age} years old</h3>
      <h3>In 12 years time, I will be {age + 12} years old</h3>
      <h3>My zID is: {zid}</h3>
    </div>
  );
};
export default ExampleComponent;
```

---

## JSX self-closing tags

All tags in JSX must be closed. Tags like `<br>` and `<hr>` cannot be standalone
and must be `<br />` and `<hr />`.

Same goes for any components you make that don't have children: `<MyComponent />`

---

## React Hooks

> → simple JS functions that allow the reusability of functional components
> → they can track **the state** of the component and manage any **side-effects**

---

### `useState()`

The `useState` hook replaces the need for a `state` object that was used in
class based components.

A `state` is a isolated instance of something (like "a is button clicked" or "a user is logged in").
And based on what the value of these states are, we perform different functions.

---

### `useState()` (cont'd)

In components, we declare a state attribute & attribute setter pair
using the `useState(initialState)` hook.

**Example:**

```jsx
import React, { useState } from 'react';

import React from 'react';

function App() {
  const [count, setCount] = useState(0);
  return <div>App</div>;
}

export default App;
```

---

### `useState()` (cont'd)

Let's take a look at a simple example

```jsx
const SimpleButton = () => {
  const [btnColor, setBtnColor] = useState('red');
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Button
      backgroundColor={btnColor}
      onClick={() => {
        setIsClicked(!isClicked);
        btnColor === 'red' ? setBtnColor('green') : setBtnColor('red');
      }}
    />
  );
};
```

---

### `useEffect`

The `useEffect()` hook is mainly used to trigger code when a `state` changes

**Syntax**

```js
useEffect(() => {
  doSomething(); // effect
  return () => cleanUp();
}, [whenever, these, things, change]); // dependency array
```

**Cases**

<div class="container" style="align-items: center">

<span>

```jsx
useEffect(() => {
  // ...
});
```

</span>

<span>Triggers every time component renders, incl. updates/re-renders</span>

</div>

---

### `useEffect` (cont'd)

**Cases (cont'd)**

<div class="container" style="align-items: center">

<span>

```jsx
useEffect(() => {
  // ...
}, []);
```

</span>

<span>Adding array as 2nd arg cause it to trigger **only** when the component first mounts/renders. </span>

<span>

```jsx
useEffect(() => {
    // ...
}, [prop1, prop2, ...]);
```

</span>

<span>Specifying properties will **only** cause it to trigger when the given properties change. </span>

<span>

```jsx
useEffect(() => {
  // mount
  // do something
  return () => {
    // unmount & cleanup
  };
});
```

</span>

<span>Adding a return function allows that function to execute when the component unmounts. <br>
Often used to cleanup previous the effect.
</span>

</div>

---

### `useEffect()` (cont'd)

> The `useEffect()` hook is mainly used to trigger code when a `state` changes

```jsx
const RegisterPage = () => {
  // ...
  useEffect(() => {
    const result = EMAIL_REGEX.test(email); // A Regex is just a certain pattern
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = USERNAME_REGEX.test(username);
    setValidName(result);
  }, [username]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    setValidPassword(result);
    setValidMatch(password === passwordMatch);
  }, [password, passwordMatch]);
  // ...
};
```

---

### Hook Rules

1. **Only call hooks at the top level of a component.**
   - hooks must never be called inside functions, loops or if-statements
   - the **call order** must be preserved to ensure consistency and
     predicatability
   - if the call order is unpredictable, elements may not render, creating inconsistency on every update.

<div class="alt-container" >

<div class="comparison"> <!-- ============================================= -->

```jsx
if (randNum < 20) {
  useEffect(() => {
    console.log('first');
  });
}
```

</div> <!-- =============================================================== -->
<div style="font-size: 3rem;">→</div>

<div class="comparison">

```jsx
// always called
useEffect(() => {
  if (randNum < 20) {
    console.log('first');
  }
});
```

</div>

</div>

---

### Hook Rules (cont'd)

2. **Never call hooks from regular JavaScript Functions**
   - you can call them within React's functional components or from your own
     custom hooks

---

### CSS frameworks & Component Libraries

<svg height="64" viewBox="0 0 248 31" class="text-slate-900 dark:text-white w-auto h-5"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z" fill="currentColor"></path></svg>
Allow you to write CSS in a simplified and convenient way

```JSX
  <div className="flex h-screen flex-col items-center overflow-y-auto overflow-x-hidden px-[5rem] pt-[12rem] text-center lg:px-[9rem]">
    <form
      className="login-form max-w-[70vw]"
      onSubmit={handleSubmit(onLogin)}
    >
      <input
        className="mt-[6rem] w-full border-b-2 border-[#d8d8d8] text-[1.6rem] text-[#b4b4b4] outline-none"
        {...register("email")}
      />
      <button
        className="mt-[6rem] h-[3.6rem] w-full rounded-[10px] bg-full-accent text-[1.8rem] text-white hover:bg-semi-accent focus:outline-none"
        id="login-button"
      >
        {isLoading ? "Loading..." : "Log In"}
      </button>
  </form>
</div>

```

✅Advantages: high level customisation & fine tuning, less vertical space
❌Drawbacks: inflexible css, messy (long lines don't format), not ideal for beginners

---

<span style="display: flex; align-items: center">
<svg style="margin-right: 25px" xmlns="http://www.w3.org/2000/svg" width="60" height="64" viewBox="0 0 36 32" fill="none" class="css-1170n61"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z" fill="#007FFF"></path></svg>
<p style="font-size: 36px">Material UI</p>
</span>
Component libaries come with prebuilt UI components (i.e., buttons, cards, menus)

```jsx
<Box
  sx={{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    mb: 3,
  }}
>
  <TextField
    sx={{ maxWidth: '45%' }}
    variant="standard"
    label="First Name"
    onChange={(event) => setFirstName(event.target.value)}
  />
</Box>
```

✅Advantages: very beginner friendly, low complexity, clean UI, good code formatting
❌Drawbacks: can't greatly customise components, vertical code height

---

## Creating a React App

```console
$ npx create-react-app my-app
$ cd my-app
$ npm start
```

Install `create-react-app` via npm if you don't have it:

```console
$ npm install -g create-react-app
```

---

## Installing NodeJS packages

When you've found a package you like, find its installation instructions
and paste it into the directory with the React app.

#### Tailwind

```shell
$ npm install -D tailwindcss
$ npx tailwindcss init
```

#### Material UI

```shell
$ npm install @mui/material @emotion/react @emotion/styled
```

---

### `package.json`

This file is extremely important. All 'NodeJS' modules you install are recorded here.
It allows anyone to install all the requirements and dependencies for your app in the future.

```json
...
  "dependencies": {
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@mui/icons-material": "^5.11.16",
    "@mui/material": "^5.13.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.13.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
...
```

Run `npm install` to install all dependencies from a `package.json` file.

---

# Demo time

Registration Page and Dashboard

---

# **Homework**

<!-- > 📖 Watch the following videos (preferably on 2x speed). These are from the COMP6080 course.
> → [DOM](https://www.youtube.com/watch?v=6gn3H4miRmQ)
> → [Events](https://www.youtube.com/watch?v=SdEfIJrruL0)
> → [Forms](https://www.youtube.com/watch?v=mO8AyWYnEPA)
> → [Promises](https://www.youtube.com/watch?v=Bc91T9pvgZg) -->
<!--
<br/>

<svg id="mdn-docs-logo" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 694.9 104.4" style="width:50%; enable-background:new 0 0 694.9 104.4" xml:space="preserve" role="img"><title>MDN Web Docs</title><style>.logo-m{fill:#8cb4ff}</style><g class="logo-m"><path d="M40.3 0 11.7 92.1H0L28.5 0h11.8zM50.7 0v92.1H40.3V0h10.4zM91 0 62.5 92.1H50.8L79.3 0H91zM101.4 0v92.1H91V0h10.4z"></path></g><path class="logo-m" d="M627.9 95.6h67v8.8h-67v-8.8z"></path><g style="fill:white"><path d="M367 42h-4l-10.7 30.8h-5.5l-10.8-26h-.4l-10.5 26h-5.2L308.7 42h-3.8v-5.6H323V42h-6.5l6.8 20.4h.4l10.3-26h4.7l11.2 26h.5l5.7-20.3h-6.2v-5.6H367V42zM401.9 62c-.4 3.2-2 5.9-4.7 8.2-2.8 2.3-6.5 3.4-11.3 3.4-5.4 0-9.7-1.6-13.1-4.7-3.3-3.2-5-7.7-5-13.7 0-5.7 1.6-10.3 4.7-14s7.4-5.5 12.9-5.5c5.1 0 9.1 1.6 11.9 4.7s4.3 6.9 4.3 11.3c0 1.5-.2 3-.5 4.7h-25.6c.3 7.7 4 11.6 10.9 11.6 2.9 0 5.1-.7 6.5-2 1.5-1.4 2.5-3 3-4.9l6 .9zM394 51.3c.2-2.4-.4-4.7-1.8-6.9s-3.8-3.3-7-3.3c-3.1 0-5.3 1-6.9 3-1.5 2-2.5 4.4-2.8 7.2H394zM445 53.7c0 5-1.3 9.5-4 13.7s-6.9 6.2-12.7 6.2c-6 0-10.3-2.2-12.7-6.7-.1.4-.2 1.4-.4 2.9s-.3 2.5-.4 2.9h-7.3c.3-1.7.6-3.5.8-5.3.3-1.8.4-3.7.4-5.5V22.3h-6v-5.6H416v27c1.1-2.2 2.7-4.1 4.7-5.7 2-1.6 4.8-2.4 8.4-2.4 4.6 0 8.4 1.6 11.4 4.7 3 3.2 4.5 7.6 4.5 13.4zm-7.7.6c0-4.2-1-7.4-3-9.5-2-2.2-4.4-3.3-7.4-3.3-3.4 0-6 1.2-8 3.7-1.9 2.4-2.9 5-3 7.7V57c0 3 1 5.6 3 7.7s4.5 3.1 7.6 3.1c3.6 0 6.3-1.3 8.1-3.9 1.8-2.7 2.7-5.9 2.7-9.6zM506.5 72.8h-13.2v-7.2c-1.2 2.2-2.8 4.1-4.9 5.6-2.1 1.6-4.8 2.4-8.3 2.4-4.8 0-8.7-1.6-11.6-4.9-2.9-3.2-4.3-7.7-4.3-13.3 0-5 1.3-9.6 4-13.7 2.6-4.1 6.9-6.2 12.8-6.2 5.7 0 9.8 2.2 12.3 6.5V22.3h-8.6v-5.6h15.8v50.6h6v5.5zM493.2 56v-4.4c-.1-3-1.2-5.5-3.2-7.3s-4.4-2.8-7.2-2.8c-3.6 0-6.3 1.3-8.2 3.9-1.9 2.6-2.8 5.8-2.8 9.6 0 4.1 1 7.3 3 9.5s4.5 3.3 7.4 3.3c3.2 0 5.8-1.3 7.8-3.8 2.1-2.6 3.1-5.3 3.2-8zM546.3 54.6c0 5.6-1.8 10.2-5.3 13.7s-8.2 5.3-13.9 5.3-10.1-1.7-13.4-5.1c-3.3-3.4-5-7.9-5-13.5 0-5.3 1.6-9.9 4.7-13.7 3.2-3.8 7.9-5.7 14.2-5.7s11 1.9 14.1 5.7c3 3.7 4.6 8.1 4.6 13.3zm-7.7-.2c0-4-1-7.2-3-9.5s-4.8-3.5-8.2-3.5c-3.6 0-6.4 1.2-8.3 3.7s-2.9 5.6-2.9 9.5c0 3.7.9 6.8 2.8 9.4 1.9 2.6 4.6 3.9 8.3 3.9 3.6 0 6.4-1.3 8.4-3.8 1.9-2.6 2.9-5.8 2.9-9.7zM583.6 60.2c-.4 3.2-1.9 6.3-4.4 9.1-2.5 2.9-6.4 4.3-11.8 4.3-5.2 0-9.4-1.6-12.6-4.8-3.2-3.2-4.8-7.7-4.8-13.7 0-5.5 1.6-10.1 4.7-13.9 3.2-3.8 7.6-5.7 13.2-5.7 2.3 0 4.6.3 6.7.8 2.2.5 4.2 1.5 6.2 2.9l1.5 9.5-5.9.7-1.3-6.1c-2.1-1.2-4.5-1.8-7.2-1.8-3.5 0-6.1 1.2-7.7 3.7-1.7 2.5-2.5 5.7-2.5 9.6 0 4.1.9 7.3 2.7 9.5 1.8 2.3 4.4 3.4 7.8 3.4 5.2 0 8.2-2.9 9.2-8.8l6.2 1.3zM618.3 62.1c0 3.6-1.5 6.5-4.6 8.5s-7 3-11.7 3c-5.7 0-10.6-1.2-14.6-3.6l1.2-8.8 5.7.6-.2 4.7c1.1.5 2.3.9 3.6 1.1s2.6.3 3.9.3c2.4 0 4.5-.4 6.5-1.3 1.9-.9 2.9-2.2 2.9-4.1 0-1.8-.8-3.1-2.3-3.8s-3.5-1.3-5.8-1.7-4.6-.9-6.9-1.4c-2.3-.6-4.2-1.6-5.7-2.9-1.6-1.4-2.3-3.5-2.3-6.3 0-4.1 1.5-6.9 4.6-8.5s6.4-2.4 9.9-2.4c2.6 0 5 .3 7.2.9 2.2.6 4.3 1.4 6.1 2.4l.8 8.8-5.8.7-.8-5.7c-2.3-1-4.7-1.6-7.2-1.6-2.1 0-3.7.4-5.1 1.1-1.3.8-2 2-2 3.8 0 1.7.8 2.9 2.3 3.6 1.5.7 3.4 1.2 5.7 1.6 2.2.4 4.5.8 6.7 1.4 2.2.6 4.1 1.6 5.7 3 1.4 1.6 2.2 3.7 2.2 6.6zM197.6 73.2h-17.1v-5.5h3.8V51.9c0-3.7-.7-6.3-2.1-7.9-1.4-1.6-3.3-2.3-5.7-2.3-3.2 0-5.6 1.1-7.2 3.4s-2.4 4.6-2.5 6.9v15.6h6v5.5h-17.1v-5.5h3.8V51.9c0-3.8-.7-6.4-2.1-7.9-1.4-1.5-3.3-2.3-5.6-2.3-3.2 0-5.5 1.1-7.2 3.3-1.6 2.2-2.4 4.5-2.5 6.9v15.8h6.9v5.5h-20.2v-5.5h6V42.4h-6.1v-5.6h13.4v6.4c1.2-2.1 2.7-3.8 4.7-5.2 2-1.3 4.4-2 7.3-2s5.3.7 7.5 2.1c2.2 1.4 3.7 3.5 4.5 6.4 1.1-2.5 2.7-4.5 4.9-6.1s4.8-2.4 7.9-2.4c3.5 0 6.5 1.1 8.9 3.3s3.7 5.6 3.7 10.2v18.2h6.1v5.5zm42.5 0h-13.2V66c-1.2 2.2-2.8 4.1-4.9 5.6-2.1 1.6-4.8 2.4-8.3 2.4-4.8 0-8.7-1.6-11.6-4.9-2.9-3.2-4.3-7.7-4.3-13.3 0-5 1.3-9.6 4-13.7 2.6-4.1 6.9-6.2 12.8-6.2s9.8 2.2 12.3 6.5V22.7h-8.6v-5.6h15.8v50.6h6v5.5zm-13.3-16.8V52c-.1-3-1.2-5.5-3.2-7.3s-4.4-2.8-7.2-2.8c-3.6 0-6.3 1.3-8.2 3.9-1.9 2.6-2.8 5.8-2.8 9.6 0 4.1 1 7.3 3 9.5s4.5 3.3 7.4 3.3c3.2 0 5.8-1.3 7.8-3.8 2.1-2.6 3.1-5.3 3.2-8zm61.5 16.8H269v-5.5h6V51.9c0-3.7-.7-6.3-2.2-7.9-1.4-1.6-3.4-2.3-5.7-2.3-3.1 0-5.6 1-7.4 3s-2.8 4.4-2.9 7v15.9h6v5.5h-19.3v-5.5h6V42.4h-6.2v-5.6h13.6V43c2.6-4.6 6.8-6.9 12.7-6.9 3.6 0 6.7 1.1 9.2 3.3s3.7 5.6 3.7 10.2v18.2h6v5.4h-.2z"></path></g></svg>

**Note:** if in doubt, search it up. A good place to start is the [MDN Web Docs](https://developer.mozilla.org/en-US/). Search anything Web dev related on google and read up on the MDN docs. -->
