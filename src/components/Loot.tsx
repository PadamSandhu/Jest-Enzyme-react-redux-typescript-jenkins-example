import * as React from "react";
import { connect } from "react-redux";
import {fetchBitcoin} from "../store/bitcoin";

export class Loot extends React.Component<any, any> {
    componentDidMount() {
        this.props.fetchBitcoin();
    }
     computeBitcoin = () => {
        const { bitcoin } = this.props;
        if (Object.keys(bitcoin).length === 0) {
            return ""; }
            else {
                return parseInt(this.props.balance, 10) / parseInt(this.props.bitcoin.bpi.CAD.rate.replace(",", ""), 10);
            } /// This is a good source of error !!
    }

    render() {
        return (
            <div>
                <h3 className="bitcoinBalance" >Bitcoin balance: {this.computeBitcoin()}</h3>
            </div>
        );
    }
}

export default connect( state => state , { fetchBitcoin } )(Loot);  /// We Don't need to test this function because we already tested
