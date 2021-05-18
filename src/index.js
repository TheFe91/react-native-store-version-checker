import axios from 'axios';
import DeviceInfo from 'react-native-device-info';
import semver from 'semver';
import SpInAppUpdates from 'sp-react-native-in-app-updates';

const inAppUpdates = new SpInAppUpdates(false);

const checkAndroidNeedsUpdate = async (playStoreUrl) => {
  const result = await axios.get(playStoreUrl);
  const res = result.data.match(
    /Current Version<\/div><span class="htlgb"><div class="IQ1z0d"><span class="htlgb">(.*?)<\/span><\/div><\/span>/s
  );
  const playStoreVersion = res[1];
  const deviceVersion = DeviceInfo.getVersion();
  const comparationResult = semver.compare(
    semver.coerce(deviceVersion),
    semver.coerce(playStoreVersion)
  );
  return comparationResult === -1;
};

const checkIOSNeedsUpdate = async () => {
  const result = await inAppUpdates.checkNeedsUpdate({});
  return result.shouldUpdate;
};

export default {
  checkIOSNeedsUpdate,
  checkAndroidNeedsUpdate,
};
