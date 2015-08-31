import Redmine from 'promised-redmine'
import App from '../compornents/app'

export class MinesweepContexts extends Arda.Context {
  get component() {
    return App;
  }
  initState() {
    return {
      client: (function() {
        let client = new Redmine(
          {
            protocol: "http",
            verbose: true
          }
        )
        client.setVerbose(true)
        return client
      })(),
      issues: []
    };
  }

  fetchIssues() {
    this.state.client.getIssues().then((res) => {
        this.update((s) => {
          return {
            issues: res.issues
          }
        })
      }
    ).catch((e) =>
      console.log(e)
    )
  }

  expandComponentProps(props, state) {
    return { issues: state.issues };
  }

  delegate(subscribe) {
    super.delegate();
    subscribe('context:created', () =>
      this.fetchIssues()
    );
    subscribe('issue:select', (issue) => {
      console.log('selected!!')
      console.table(issue)
    })
  }
};
