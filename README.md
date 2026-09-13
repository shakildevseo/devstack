🧱 A-5 Dev Stack Builder Website

# DevStack

## Short Description
DevStack is a modern, responsive web application designed for developers to explore, organize, and build their custom tech stacks. Users can browse various frontend, backend, database, and DevOps tools, view detailed card metrics, and add or remove technologies from their personal selection in real time.

## Technologies Used
* **Frontend Framework:** React.js
* **Styling:** Tailwind CSS & DaisyUI
* **Build Tool:** Vite
* **Notifications:** React-Toastify

## Key Features
* **Interactive Stack Builder:** Easily add technologies to your personalized stack sidebar with duplicate-entry protection and smooth removal capabilities.
* **Dynamic Tech Explorer:** Filter and browse 10+ detailed tech cards featuring real-time rating indicators, difficulty tags, and dynamic badge overlays.
* **Fully Responsive & Unified Theme:** Features a single-point global gradient design system paired with a mobile-friendly layout and interactive toast notifications.




## React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX is a syntax extension for JavaScript that allows me to write HTML-like markup directly inside my JavaScript code. I used it in React because it makes building component structure clear, intuitive, and keeps the UI logic and template together in one place.

---

### 2. What is the difference between props and state?
* **Props:** Data passed into a component from its parent component. It is read-only, so the receiving component cannot change it.
* **State:** Data managed locally inside a single component. When I update state, the component automatically re-renders to reflect the change on the screen.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` is a React Hook that lets functional components create and handle state variables.
**In my project:** I used `useState` in two places:
* **Navbar.tsx:** To open and close the mobile navigation menu using `isMenuOpen`.
* **Technology.tsx:** To add, remove, and clear selected technologies using `stack`.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` is used to handle side effects in React, such as fetching data after a component renders.

**In my project:** I used `useEffect` in `Technology.tsx` to fetch the technology data from `technologies.json` when the component loads. During the fetch, a loading spinner is displayed.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
When rendering a list with `.map()`, React needs a unique `key` prop for each item to track which elements change, get added, or get removed. This allows React to update only the modified DOM elements instead of re-rendering the whole list, improving performance.

---

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing or hiding specific UI elements based on certain conditions or state values.

**In my project:** I used conditional rendering in `Technology.tsx`:
* If `stack.length === 0`, it shows **Your stack is empty**.
* Otherwise, it displays the selected technologies list.



---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Data is passed from a parent to a child component through `props`. A child can send data back to the parent by calling a callback function passed through props.

**In my project:** I did not need to pass custom props between components; each component manages its own UI and state.

