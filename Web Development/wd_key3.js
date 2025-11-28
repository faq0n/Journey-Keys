/*
WEB DEVELOPMENT QUIZ 3 — REACT, VITE & ROUTER
TechLabs Aachen | Digital Shaper Program
---------------------------------------------------------
Instructions:
1. Fill in your name or email in the variable below.
2. Complete the coding tasks.
3. Run `node wd_checker.js 4 your_email_here` to verify and get your key.
*/

const name = "your_email_here";

// === TASK 1 ===
// Return a React component string that displays "Welcome <name>"
function createComponent(name) {
        //REACTDom.createRoot('root').render(`<h1>Welcome ${name}</h1>`);
        return `function Welcome() { return <h1>Welcome ${name}</h1>; }`;
}

// === TASK 2 ===
// Return a simple JSX Route string like: "<Route path='/' element={<Home />} />"
function createRoute() {
    // TODO
    return "<Route path='/' element={<Home />} />";
}

// === TASK 3 ===
// Return a React state initialization code: "const [count, setCount] = useState(0);"
function useStateSnippet() {
    // TODO
    return "const [count, setCount] = useState(0);"
}

// === TASK 4 ===
// Return a Bootstrap button JSX: "<button class='btn btn-primary'>Click Me</button>"
function bootstrapButton() {
    // TODO
    return "<button class='btn btn-primary'>Click Me</button>";
}

module.exports = { name, createComponent, createRoute, useStateSnippet, bootstrapButton };
