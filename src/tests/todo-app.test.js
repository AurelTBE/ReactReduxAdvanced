import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "../components/todo-app";
import { shallow } from "enzyme";

describe("Test TodoApp fonctionnement", function() {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<TodoApp />)
    })
    it("Render le composant TodoApp sans erreur", () => {
        const div = document.createElement('div')
        ReactDOM.render(<TodoApp />, div)
        console.log(div.innerHTML)
    })
    it("Contient la chaine 'Nouvelle tâche'", () => {
        const div = document.createElement('div')
        ReactDOM.render(<TodoApp />, div)
        expect(div.innerHTML).toContain("Nouvelle tâche")
    })
    it("Render le composant TodoApp sans erreur avec shallow", () => {
        expect(wrapper.html()).toContain("Nouvelle tâche")
    })
    it("Possède 2 classes css 'row'", () => {
        expect(wrapper.find(".row").length).toEqual(2)
    })
    it("Possède un id 'addButton'", () => {
        expect(wrapper.find("#addButton").length).toEqual(1)
    })
    it("Change la valeur de l'input", () => {
        wrapper.find("input").simulate("change", {
            target: { value: "Yo" }
        })
        expect(wrapper.find("input").prop("value")).toEqual("Yo")
    })
    it("Saisi une valeur dans l'input, clic sur le bouton et vérifie que le text est dans la liste.", () => {
        wrapper.find("input").simulate("change", {
            target: { value: "Yo" }
        })
        wrapper.find("button").simulate("click")
        expect(wrapper.find(".list-group-item").text()).toContain("Yo")
    })
})