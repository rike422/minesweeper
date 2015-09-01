"use strict";
import Tcomb from 'tcomb-form';
import { UserSetting } from '../services/user-setting';
let Form = Tcomb.form.Form;
let userSetting = new UserSetting();
let UserSettingForm = React.createClass({
  mixins: [Arda.mixin],
  getInitialState() {
    console.log(this.props.userSetting)
    return {
      userSetting: this.props.userSetting
    };
  },
  save() {
    this.dispatch("userSetting:posted", this.state.userSetting)
  },
  render() {
    return (
      <div>
        <Form
          ref="form"
          value={this.state.userSetting}
          type={userSetting.formScheme()}>
        </Form>
        <button onClick={ this.save }> Save</button >
      </div>
    )
  }
})

module.exports = UserSettingForm;
