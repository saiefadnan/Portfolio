const {sendEmail} = require('../requests/handleRequests');

async function handleRoutes(fastify,options){
    fastify.post('/send-email',sendEmail);
}

module.exports = handleRoutes;