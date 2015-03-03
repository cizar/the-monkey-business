var React = require('react');
var mui = require('material-ui');
var Firebase = require('firebase');
var moment = require('moment');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      amount: 0,
      keywords: [],
      total: 0,
      expenditures: []
    };
  },
  getDefaultProps: function() {
    return {
      url: 'https://vivid-fire-4528.firebaseio.com/'
    };
  },
  componentDidMount: function() {
    this.loadData();
  },
  loadData: function() {
    var firebase = new Firebase(this.props.url);
    firebase.child('expenditures').orderByChild('ts').on('value', function(snap) {
      var items = [];
      var total = 0;
      snap.forEach(function(itemSnap) {
        var item = itemSnap.val();
        item.key = itemSnap.key();
        items.unshift(item);
        total += item.amount;
      });
      this.setState({
        expenditures: items,
        total: total
      })
    }.bind(this));

  },
  onChange: function(event) {
    var value = event.target.value;
    var matches = value.match(/\d+/);
    this.setState({
      amount: matches ? parseInt(matches[0]) : 0
    })
  },
  onFormSubmit: function(event) {
    event.preventDefault();
    var value = this.refs.texto.getValue();
    var firebase = new Firebase(this.props.url);
    firebase.child('expenditures').push({ description: value, amount: this.state.amount, ts: +new Date });
    this.setState({ amount: 0 });
    this.refs.texto.setValue('');
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <mui.TextField ref="texto" floatingLabelText="Movimiento" onChange={this.onChange} />
          <mui.RaisedButton label={"Ingresar $" + this.state.amount} disabled={this.state.amount == 0} />
          <div className="total">
            Total: {this.state.total}
          </div>
          <table>
            {this.state.expenditures.map(function(expenditure) {
              return (
                <tr>
                  <td><small>{moment(expenditure.ts).format('L')}</small></td>
                  <td>{expenditure.description}</td>
                  <td style={{textAlign:'right'}}><strong style={ {fontSize: '1.2em' } }>{expenditure.amount}</strong></td>
                </tr>
              );
            })}
          </table>
        </form>
      </div>
    );
  }
});
