import React from "react";
import Header from "../containers/header"
import { mount, shallow } from "enzyme";
import RootTest from "./root-test";
import { incrementActionCount } from "../actions"
import { INCREMENT_ACTIONS_COUNT, SET_AUTHENTIFICATION } from "../actions/action-types";
import AuthentificationReducer from "../reducers/authentification";

describe("Test sur header", () => {
    it("Render du composant connecté sans erreur", () => {
        const wrapper = shallow(
            <RootTest>
                <Header />
            </RootTest>
        )
    })
    it("Test que le libellé du bouton connexion est bien 'connexion' puis 'déconnexion' après clic", () => {
        const wrapper = mount(
            <RootTest>
                <Header />
            </RootTest>
        )
        expect(wrapper.find("a").at(2).text()).toEqual("Connexion")
        wrapper.find("a").at(2).simulate("click")
        expect(wrapper.find("a").at(2).text()).toEqual("Deconnexion")
    })
    it("Test le payload d'une action", () => {
        const action = incrementActionCount()
        expect(action.type).toEqual(INCREMENT_ACTIONS_COUNT)
    })
    it("Test le reducer authentification sans action type", () => {
        const initialState = {
            isLoggedIn: false
        }
        expect(AuthentificationReducer(initialState, {}).isLoggedIn).toEqual(false)
    })
    it("Test le reducer authentification sans action type", () => {
        const action = {type: SET_AUTHENTIFICATION, payload: true}
        const initialState = {
            isLoggedIn: false
        }
        expect(AuthentificationReducer(initialState, action).isLoggedIn).toEqual(true)
    })
})
