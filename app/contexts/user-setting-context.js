import "babel/polyfill";
import { Redmine } from '../services/redmine';
import { UserSetting } from '../services/user-setting'
import UserSettingForm from '../compornents/user-setting-form'

let userSetting = new UserSetting()
const emptySetting = {
  // url: 'redmine.snva.jp',
  // apiKey: 'test',
  // basicAuthPassword: 'test',
  // basicAuthUser: 'test',
  // secure: false
}

export class UserSettingContexts extends Arda.Context {

  get component() {
    return UserSettingForm;
  }

  initState() {
    (async function() {
      let setting = await (userSetting.ready().first())
    })
    return {
      userSetting: setting || emptySetting,
      erros: []
    };
  }

  expandComponentProps(props, state) {
    return {
      userSetting: state.userSetting,
      errors: state.errors
    };
  }

  delegate(subscribe) {
    super.delegate();
    subscribe('context:created', () => {
      console.log("usersettingCreate")
    });

    subscribe('userSetting:posted', (setting) => {
      Redmine
        .isAvailable(setting)
        .then(() => { userSetting.ready() })
        .then(() => { userSetting.save(setting) })
        .then(() => Router.popContext())
        .catch((e) => {
          console.alert(e);
          this.update((s) => {
            return {
              userSetting: this.state.userSetting,
              errors: [e.toString()]
            }
          })
        }).finally(() => {
        this.update((s) => {
          return {
            userSetting: this.state.userSetting,
            userSetting: setting
          }
        })
      })
    });

    subscribe('context:started', () => {
      console.log("usersettingCreate")
    });
    subscribe('context:paused', () => {
      console.log("usersettingPause")
    });

    subscribe('context:resumed', () => {});
    subscribe('context:disposed', () => {});
  }
}
