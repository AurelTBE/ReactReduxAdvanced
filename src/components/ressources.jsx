import React, { Component } from "react"
import { addRessource } from "../actions"
import { connect } from "react-redux"
import { getContainsOne, getIntegerList, getPrimeNumberList, specialNumbersList } from "../selectors"

class Ressources extends Component {
    renderRessource = ressources => {
        return (
            ressources.map(ressource => <li key={ressource}>{ressource}</li>)
        )
    }
    render() {
        return (
            <div className="row">
                <div className="col">
                    <button type="button" onClick={() => this.props.addRessource()} className="btn btn-raised btn-primary">Ajouter un nombre</button>
                </div>
                <div className="col">
                    Entiers
                    <ul>
                        {this.renderRessource(this.props.integerRessources)}
                    </ul>
                </div>
                <div className="col">
                    Contiennent 1
                    <ul>
                        {this.renderRessource(this.props.containsOneRessources)}
                    </ul>
                </div>
                <div className="col">
                    Entiers premiers
                    <ul>
                        {this.renderRessource(this.props.primeRessources)}
                    </ul>
                </div>
                <div className="col">
                    Entiers premiers contenant "1"
                    <ul>
                        {this.renderRessource(this.props.specialNumbersList)}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        integerRessources: getIntegerList(state),
        containsOneRessources: getContainsOne(state),
        primeRessources: getPrimeNumberList(state),
        specialNumbersList: specialNumbersList(state)
    }
}

const mapDispatchToProps = {
    addRessource
}

export default connect(mapStateToProps, mapDispatchToProps)(Ressources)