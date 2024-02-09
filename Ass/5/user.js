const os = require('os');
const process = require('process');
const useragent = require('useragent');

// Function to validate date
function isValidDate(dateString) {
  const regexDate = /^\d{4}-\d{2}-\d{2}$/;
  return regexDate.test(dateString);
}

// Get user information
const username = os.userInfo().username;
const ipAddress = (() => {
  const interfaces = os.networkInterfaces();
  for (const key in interfaces) {
    const iface = interfaces[key];
    for (let i = 0; i < iface.length; i++) {
      const surya = iface[i];
      if (surya.family === 'IPv4' && !surya.internal) {
        return surya.address;
      }
    }
  }
  return 'Unknown';
})();
const currentDate = new Date();
const browserInfo = useragent.parse(process.env.HTTP_USER_AGENT);
const browserName = browserInfo.family;
const browserVersion = browserInfo.toVersion();
const cookiesEnabled = process.env.HTTP_COOKIE ? 'Enabled' : 'Disabled';
const platformDetails = `${os.platform()} ${os.release()} ${os.arch()}`;
const userAgentHeader = process.env.HTTP_USER_AGENT;

// Display results
console.log('User Name:', username);
console.log('IP Address of Client:', ipAddress);
console.log('Current Date and Time:', currentDate.toLocaleString());
console.log('Browser Name:', browserName);
console.log('Browser Version:', browserVersion);
console.log('Cookies Enabled:', cookiesEnabled);
console.log('Platform or OS Details:', platformDetails);
console.log('User-agent Header:', userAgentHeader);
