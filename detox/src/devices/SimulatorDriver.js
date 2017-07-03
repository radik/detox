const IosDriver = require('./IosDriver');
const FBsimctl = require('./Fbsimctl');
const configuration = require('../configuration');

class SimulatorDriver extends IosDriver {

  constructor(client) {
    super(client);
    this._fbsimctl = new FBsimctl();
    this._deviceId = "";
    this.sim = "";
  }

  async acquireFreeDevice(name) {
    return await this._fbsimctl.list(name);
  }

  async boot(deviceId) {
    await this._fbsimctl.boot(deviceId);
  }

  async installApp(deviceId, binaryPath) {
    await this._fbsimctl.install(deviceId, binaryPath);
  }

  async uninstallApp(deviceId, bundleId) {
    await this._fbsimctl.uninstall(deviceId, bundleId);
  }

  async launch(deviceId, bundleId, launchArgs) {
    await this._fbsimctl.launch(deviceId, bundleId, launchArgs);
  }

  async terminate(deviceId, bundleId) {
    await this._fbsimctl.terminate(deviceId, bundleId);
  }

  async openURL(deviceId, url) {
    await this._fbsimctl.open(deviceId, url);
  }

  async shutdown(deviceId) {
    await this._fbsimctl.shutdown(deviceId);
  }

  async setLocation(deviceId, lat, lon) {
    await this._fbsimctl.setLocation(deviceId, lat, lon);
  }
}

module.exports = SimulatorDriver;
