"use strict";
import Autocomplete from 'react-autocomplete/dist/react-autocomplete'
let Launcher = React.createClass({
  mixins: [Arda.mixin],
  getDefaultProps: function() {
    return {
      issues: [],
      loading: false
    }
  },
  render() {
    return(
      <div>
        <h1>Async Data</h1>

        <p>
          Autocomplete works great with async data by allowing you to pass in
          items. The <code>onChange</code> event provides you the value to make
          a server request with, then change state and pass in new items, it will
          attempt to autocomplete the first one.
        </p>
      <Autocomplete
        ref="autocomplete"
        items={this.props.issues}
        getItemValue={(item) => `#${item.id}: ${item.subject}` }
        onSelect={(value, issue) => {
            this.dispatch('issue:select', issue)
          }
        }
        onChange={(event, issue) => {
          this.dispatch('issue:select', issue)
          }
        }
        renderItem={(item, isHighlighted) => (
          <div
            key={item.id}
            id={item.id}
          >{`#${item.id}: ${item.subject}`}</div>
         )}
      />
    </div>
    )
  }
})

module.exports = Launcher;
