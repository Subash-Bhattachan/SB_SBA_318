function error(status, message) {
    const err = new Error(message);
    err.status = status;
    return err;
}


const addTimestamp = (req, res, next) => {
    if (req.method === "POST" && req.url === "/api/v1/books") {
        req.body.timestamp = new Date().toISOString();
        console.log(`Timestamp: ${req.body.timestamp}`);
    }
    next();

}


module.exports = { error, addTimestamp };