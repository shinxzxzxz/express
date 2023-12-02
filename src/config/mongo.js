import mongoose from 'mongoose';

const mongo = {
    connect: async function (uri = process.env.MONGO_URI, options = {}) {
        return await mongoose.connect(uri, options)
            .then(function () {
                console.log('[MongoDB Status] | \x1b[32mConnected\x1b[0m');
            })
            .catch(function (err) {
                console.error('[MongoDB Status | \x1b[31mFailed\x1b[0m \n', err);
            });
    },
}

export default mongo;