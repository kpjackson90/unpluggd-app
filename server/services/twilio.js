const ACCOUNT_SID = '';
const AUTH_TOKEN = '';
const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);

exports.createRoom = async ({roomName, maxParticipants}) => {
	try {
		const roomParams = {
			type: 'group',
			uniqueName: roomName,
			maxParticipants,
			videCodecs: ['VP8', 'H264'],
		};
		return await client.video.rooms.create(roomParams);
	} catch (err) {
		console.error(err);
		throw err;
	}
};
