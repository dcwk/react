// ReactDOM.render(React.createElement('input', {
//         placeholder: "Help text",
//         onClick: () => console.log("Clicked"),
//         onMouseEnter: () => console.log("Mouse over"),
//     }),
//     document.getElementById("app")
// )

const inputClick = () => console.log("Clicked")
const mouseOver = ()=> console.log("Mouse Over")

const helpText = "Help text!"
const elements = (<div className="name">
    <input placeholder={helpText}
           onClick={inputClick} onMouseOver={mouseOver}/>
    <p>{helpText == "Help text" ? "Yes" : "No"}</p>
</div>)
const app = document.getElementById("app")

ReactDOM.render(elements, app)