"use strict";
import Launcher from './launcher';
var App = React.createClass({
  mixins: [Arda.mixin],
  render() {
    return (
      <div>
        <Launcher issues={ this.props.issues } />
      </div>
    );
  }
});

module.exports = App;
