//import {react} from 'react'
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ])
]);
console.log(parent);
//const heading = React.createElement("h1",{id:"heading"},"Hello Word From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
