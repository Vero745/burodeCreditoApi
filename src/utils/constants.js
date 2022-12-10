module.exports.Query = (cnx, query, callback) => {
    cnx.query(query, callback);
};