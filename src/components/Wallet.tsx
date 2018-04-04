import * as React from "react";
import { connect } from "react-redux";
import { deposit, withdraw } from "../store/actions";
import { bindActionCreators } from "redux";

export class Wallet extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = { balance: undefined };
    }

    updateBalance = (event) => this.setState({balance: parseInt(event.target.value, 10)});
    deposits = () => this.props.deposit( this.state.balance );
    withdrawl = () => this.props.withdraw( this.state.balance );

    render() {
        return (
            <div>
                <h2 className="balance">Wallet balance: { this.props.balance }</h2>
                <br/>
                <input type="number" className="input-wallet" onChange = { this.updateBalance}/>
                <button className="btn-deposit" onClick = { this.deposits }> Deposit </button>
                <button className="btn-withdrawl" onClick = { this.withdrawl }> Withdraw!!! </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { balance: state.balance };
}
function mapDispatchToProps(dispath) {
    return bindActionCreators({ deposit , withdraw }, dispath);
}

// A compact way of creating mapStateToProps is used in Loot.tsx Example
export default connect( mapStateToProps, mapDispatchToProps )(Wallet);   // Whole state in redux is just a number for now !!
