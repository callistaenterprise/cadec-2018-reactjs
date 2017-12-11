import AWS from 'aws-sdk';

export default ({endpoint, topic}) => {
  const iotData = new AWS.IotData({endpoint});
  console.log('--- iotData', endpoint, topic);
  return {
    publish: async payload => {
      const cb = (err, data) => {
        if (err) console.log('--- publish cb error', err);
        else console.log('--- publish cb data', data);
      };
      console.log('+++', payload);
      return iotData.publish({topic, payload: JSON.stringify(payload)}, cb);
    }
  }
}
