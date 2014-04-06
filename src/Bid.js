/**
 * @param {number} price
 * @constructor
 */
var Bid = function (price) {

    /**
     * @returns {number}
     */
    this.getPrice = function() {
        return price;
    }
};