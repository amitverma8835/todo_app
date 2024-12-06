const dotenv =require('dotenv')

dotenv.config()

const config = {
        dbConnectionString:
        process.env.DB_CONNECTION_STRING ||
        "mongodb+srv://amitkv93047:test1234@cluster1.cg7fa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1",
        port:process.env.PORT || 3000
}

if (!config.dbConnectionString) {
        console.error("Error: DB_CONNECTION_STRING is not defined in .env file");
        process.exit(1); 
    }

module.exports = config