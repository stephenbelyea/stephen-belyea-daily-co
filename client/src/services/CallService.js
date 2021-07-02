import axios from 'axios';

function mapStartCallData(data) {
  return {
    callId: data.name || ''
  };
}

function mapAllCallsData({ data }) {
  return data.map(call => ({
    id: call.id,
    room: call.room,
    start: call.start_time * 1000,
    length: Math.ceil(call.duration / 60)
  }));
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

  async getAllCalls() {
    try {
      const response = await this.instance.get('/meetings');
      return mapAllCallsData(response.data);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new CallService();