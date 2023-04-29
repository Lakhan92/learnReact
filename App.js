const heading=React.createElement("div", {id: "parent"}, 
React.createElement("div", {id: "child" , className : "head"},
[React.createElement("h1", {},"I am a H1 tag"),React.createElement("h2", {},"I am a H2 tag")]
)
);


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);