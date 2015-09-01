import _redmine from 'promised-redmine';
import Promise from 'bluebird';
export class Redmine {
  static isAvailable(option) {
    let defer = Promise.defer()
    try {
      let client = new _redmine(option)
      client.getIssues().then((data) => {
          defer.resolve("success");
        }
      ).catch((e) => {
        defer.reject("invalid opton");
      })
    } catch(e) {
      defer.reject("invalid opton");
    }
    return defer.promise;
  }

  static getClient(option) {
    return new _redmine(this.option);
  }
}
