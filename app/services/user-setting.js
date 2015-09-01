import StoneSkin from 'stone-skin/with-tv4';
import Tcomb from 'tcomb-form'

export class UserSetting extends StoneSkin.IndexedDb {
  storeName: 'UserSetting';
  schema: {
    properties: {
      url: { type: 'string' },
      apiKey: { type: 'string' },
      basicAuthPassword: { type: 'string' },
      basicAuthUser: { type: 'string' },
      secure: { type: 'boolean' }
    }
  }
  formScheme() {
    return Tcomb.struct({
      url: Tcomb.Str,
      apiKey: Tcomb.Str,
      basicUser: Tcomb.Str,
      basicPass: Tcomb.Str,
      secure: Tcomb.Bool
    });
  }
}
