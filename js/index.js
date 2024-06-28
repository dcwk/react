ReactDOM.render(React.createElement('input', {
        placeholder: "Help text",
        onClick: () => console.log("Clicked"),
        onMouseEnter: () => console.log("Mouse over"),
    }),
    document.getElementById("app")
)