var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    }
  },
  
  down: function() {
    var newCounter = this.state.counter - 1;
    this.setState({counter: newCounter});
  },
  
  up: function() {
    var newCounter = this.state.counter + 1;
    this.setState({counter: newCounter});
  },
  
  getDefaultProps: function() {
    console.log('[getDefaultProps] - funkcja ustawia domyślne wartości propsów');
  },

  componentWillMount: function() {
    console.log('[componentWillMount] - funkcja odpala się przed render');
  },
  
  componentDidMount: function() {
    console.log('[componentDidMount] - funkcja odpala się po render');
  },
  
  componentWillReceiveProps: function() {
    console.log('[componentWillReceiveProps] - otrzymano nowe właściwości, trwa aktualizowanie stanu...');
  },

  shouldComponentUpdate: function() {
    console.log('[shouldComponentUpdate] - updating...');
    return true;
  },

  componentWillUpdate: function() {
    console.log('[componentWillUpdate] - funkcja przygotowuje na nadchodzące zmiany');
  },

  componentDidUpdate: function() {
    console.log('[componentDidUpdate] - funkcja wykonuje manipulacje DOM');
  },

  componentWillUnmount: function() {
    console.log('[componentWillUnmount] - funkcja wykonuje zadania związane z zakończeniem życia komponentu');
  },
  
  render: function() {
    console.log('trwa renderowanie...');
    return (
      React.createElement('div', {}, 
                          React.createElement('button', {onClick: this.down}, '-'),
                          React.createElement('span', {}, this.state.counter),
                          React.createElement('button', {onClick: this.up}, '+')
                         )    
    );
  }
});

var counters = React.createElement('div', {},
                                   React.createElement(Counter),
                                   React.createElement(Counter),
                                   React.createElement(Counter)
);

ReactDOM.render(
  counters,
  document.getElementById('root')
);