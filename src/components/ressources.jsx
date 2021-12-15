import React, { Component } from "react"
import { addRessource } from "../actions"
import { connect } from "react-redux"

class Ressources extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <button type="button" onClick={() => this.props.addRessource()} className="btn btn-raised btn-primary">Ajouter un nombre</button>
                </div>
                <div className="col">
                    Entiers
                </div>
                <div className="col">
                    Contiennent 1
                </div>
                <div className="col">
                    Entiers premiers
                </div>
                <div className="col">
                    Entiers premiers contenant "1"
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = {

}

export default Ressources