
const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
    [React.createElement("h1",{id:"heading"},"Hello World from React sib!!"),
    React.createElement("h1",{id:"heading"},"Hello World from React!!")] ),
React.createElement("div",{id:"child2"},
    [React.createElement("h1",{id:"heading1"},"Hello World from React sib!!"),
    React.createElement("h1",{id:"heading1"},"Hello World from React!!")] )] );
//const heading = React.createElement("h1",{id:"heading"},"Hello World from React!!");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);