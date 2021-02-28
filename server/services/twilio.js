// const keys = require('../config/keys');
// const client = require('twilio')(keys.TWILIO_ACCOUNT_SID, keys.TWILIO_AUTH_TOKEN);

// exports.createRoom = async ({ roomName, maxParticipants }) => {
//   try {
//     const roomParams = {
//       type: 'group',
//       uniqueName: roomName,
//       maxParticipants,
//       videCodecs: ['VP8', 'H264'],
//     };
//     return await client.video.rooms.create(roomParams);
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };
