var AuctionReporter = function() {
};

/**
 * @param {Array.<Auction>} p_array
 * @param {Array} report
 * @returns {string}
 */
AuctionReporter.prototype.createAllAuctionsReport = function(p_array, report) {
    return "Sample Total Auctions Report";
};

/**
 * @param {Array.<Auction>} p_array
 * @returns {string}
 */
AuctionReporter.prototype.createBidAuctionsReport = function(p_array) {
    return "Sample Bid Auctions Report";
};

/**
 * @param {Array.<Auction>} p_array
 * @returns {string}
 */
AuctionReporter.prototype.createBuyNowAuctionsReport = function(p_array) {
    return "Sample Buy Now Auctions Report";
};