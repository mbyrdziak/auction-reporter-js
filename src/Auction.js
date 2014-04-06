/**
 * @param {string} name
 * @param {AuctionType} type
 * @param {AuctionStatus} status
 * @param {number} startPrice
 * @param {number} buyNowPrice
 * @constructor
 */
var Auction = function(name, type, status, startPrice, buyNowPrice) {

    /**
     * @type {Array.<Bid>}
     */
    var bids = [];

    /**
     * @param {number} price
     */
    this.addBid = function(price) {
        bids.push(new Bid(price));
    };

    /**
     * @returns {Array.<Bid>}
     */
    this.getBids = function() {
        return bids;
    };

    /**
     * @returns {string}
     */
    this.getName = function() {
        return name;
    };

    /**
     * @returns {AuctionType}
     */
    this.getType = function() {
        return type;
    };

    /**
     * @returns {AuctionStatus}
     */
    this.getStatus = function() {
        return status;
    };

    /**
     * @returns {number}
     */
    this.getBuyNowPrice = function() {
        return buyNowPrice;
    };

    /**
     * @returns {number}
     */
    this.getStartPrice = function() {
        return startPrice;
    };

    this.toString = function() {
        return "auction with name: " + name;
    };
};