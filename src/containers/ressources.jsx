import React, { Component } from "react";
import { addRessource, getSpecialRessource } from "../actions"
import { connect } from "react-redux";
import { getRessourceList, getContainsOneRessourceList, getPrimeNumberRessourceList, specialNumber, getRessourceMessage } from "../selectors/ressources"
class Ressources extends Component {
    componentWillMount = () => {
        this.props.getSpecialRessource();
    }
    
    renderRessouces = (ressourceList) => {
        return ressourceList.map((r, index) => <li key={index}>{r}</li>)
    }

    render() {
        console.log(this.props.ressourceList)
        return (
            <div className="row">
                <div className="col">
                    <button type="button" onClick={() => this.props.addRessource()} className="btn btn-raised btn-primary">Ajouter un nombre</button>
                </div>
                <div className="col">
                    Entiers
                     <ul>
                        {this.renderRessouces(this.props.ressourceList)}
                    </ul>
                </div>
                <div className="col">
                    Contiennent "1"
                    <ul>
                        {this.renderRessouces(this.props.containsOneRessourceList)}
                    </ul>
                </div>
                <div className="col">
                    Entier premiers
                    <ul>
                        {this.renderRessouces(this.props.primeRessourceList)}
                    </ul>
                </div>
                <div className="col">
                    Entiers premiers contenants "1"
                    <ul>
                        {this.renderRessouces(this.props.specialNumber)}
                    </ul>
                </div>
                <div>
                    {this.props.message}
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    ressourceList: getRessourceList(state),
    containsOneRessourceList: getContainsOneRessourceList(state),
    primeRessourceList: getPrimeNumberRessourceList(state),
    specialNumber: specialNumber(state),
    message: getRessourceMessage(state)
});

const mapDispatchToProps = {
    addRessource,
    getSpecialRessource
};

export default connect(mapStateToProps, mapDispatchToProps)(Ressources);