const axios = require('axios');

class GatewaySdk {
  constructor(appId) {
    this.appId = appId;
  }

  async post(endpoint, payload) {
    const jsonPayload = JSON.stringify(payload);

    try {
      const response = await axios.post(`https://open.xiadandt.com/${endpoint}`, jsonPayload, {
        headers: {
          'Content-Type': 'application/json',
          'X-Gateway-AppId': this.appId,
        },
      });

      if (response.status !== 200) {
        throw new Error(`Unexpected response status code: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Failed to send POST request: ${error.message}`);
    }
  }
}

module.exports = GatewaySdk;