import "babel/polyfill";
import App from '../compornents/app';
import Redmine from '../services/redmine';
import { UserSetting } from '../services/user-setting';
import { UserSettingContexts } from "contexts/user-setting-context";
let userSetting = new UserSetting();
export class MinesweepContexts extends Arda.Context {
  get component() {
    return App;
  }
  initState() {
    return {
      client: undefined,
      issues: []
    };
  }

  fetchIssues() {
    if (client === void 0) {
      return;
    }
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

  gotoSetting() {
    Router.pushContext(UserSettingContexts)
  }

  delegate(subscribe) {
    super.delegate();
    subscribe('context:created',
      () => {
        (userSetting.first()).then((setting) => {
            let client = {};// Redmine.getClient(setting)
            client.setVerbose(true);
            this.update((s) => {
              return {
                client: client
              }
            })
          }
        ).catch((e) => {
          this.gotoSetting()
        })
      }
    );
    subscribe('context:started', () => {

    })
    subscribe('issue:select', (issue) => {
      console.log('selected!!')
      console.table(issue)
    })
  }
};
