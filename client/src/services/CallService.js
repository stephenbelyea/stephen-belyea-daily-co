import axios from 'axios';

function mapStartCallData(data) {
  return {
    callId: data.name || ''
  };
}

class CallService {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8000'
    });
  }

  async startCall() {
    try {
      const response = await this.instance.post('/rooms');
      return mapStartCallData(response.data);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new CallService();