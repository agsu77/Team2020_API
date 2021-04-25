
const returnError = (error, operation) => {
    return { errors: [
        {
            msg: error,
            operation: operation
        }
    ]}
}

module.exports = {returnError}