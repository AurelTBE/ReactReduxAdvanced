import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "../components/todo-app";
import { shallow } from "enzyme";

describe("Test TodoApp fonctionnement", function() {
    it("Render le composant TodoApp sans erreur", () => {
        const div = document.createElement('div')
        ReactDOM.render(<TodoApp />, div)
        console.log(div.innerHTML)
    })
})