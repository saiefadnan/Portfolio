const fastify = require('fastify')({logger: true});
const handleRoutes = require('./routes/handleRoutes');
require('dotenv').config();

fastify.get('/',async(req,res)=>{
    return { status: 'Server is running' };
});

fastify.register(require('@fastify/cors'),{
    origin: true
});

fastify.register(handleRoutes,{prefix: '/api'});

const start = async()=>{
    try{
        console.log('starting...');
        await fastify.listen({port: 5000,host: '0.0.0.0'});
        console.log(`Server listening at ${fastify.server.address().port}`);
    }catch(err){
        fastify.log.error(err);
        process.exit(1);
    } 
}

start();