import axios from 'axios';

class TendermintData {
  constructor(url) {
    this.data = null;
    this.url = url;
  }

  async getData() {
    let response;
    try {
      response = await axios.get(this.url);
      if (response.data) {
        if (response.data.result) this.data = response.data.result;
        // eslint-disable-next-line
        console.log(this.data);
      }
    } catch (err) {
      this.data = null;
      // eslint-disable-next-line
      console.error(`Cannot GET ${this.url}`, err);
    }
  }

  export() {
    return this.data;
  }
}

export default TendermintData;