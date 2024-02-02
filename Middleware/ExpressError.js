class ExpressError extends Error {
    constructor(ststus, massage) {
        super();
        this.ststus = ststus;
        this.massage = massage;
    }
}
module.exports = ExpressError;