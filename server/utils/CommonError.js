class CommonError extends Error {
    constructor(code, message, details = null) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(message);
        this.name = 'CommonError';
        this.code = code;
        this.details = details;
    }
}
// module.exports = CommonError;
export default CommonError;
