var AuctionReporterPrinter = function() {
    AuctionReporter.call(this);

    var totalBid = 0;
    var totalBidPrice = 0;
    var totalBuyNow = 0;
    var totalBuyNowPrice = 0;
    var totalNewAuctions = 0;
    var totalActiveAuctions = 0;
    var totalFinishedAuctions = 0;

    /**
     * @param {Array.<Auction>} p_array
     * @param {Array} report
     * @returns {string}
     */
    this.createAllAuctionsReport = function(p_array, report) {

        var c = getRequestContext();

        report.push("\nANNUAL SUMMARY OF ALL AUCTIONS.\n");
        report.push("*******************************\n\n");

        var now = c.getNow();
        var month = now.getMonth();

        console.log("Month -> " + month);

        if (month > 0 && month <= 2) {
            report.push("Report period: 01/01/2012 and 31/03/2012\n");
        } else if (month > 2 && month <= 5) {
            report.push("Report period: 01/04/2012 and 30/06/2012\n");
        } else if (month > 5 && month <= 8) {
            report.push("Report period: 01/07/2012 and 30/09/2012\n");
        } else if (month > 8 && month <= 11) {
            report.push("Report period: 01/10/2012 and 31/12/2012\n");
        } else {
            throw "Critical issue";
        }

        report.push("Total number of auctions: " + p_array.length);
        report.push("\n");

        p_array.forEach(function(entry) {
            data(entry);
        });

        report.push("Including ");
        report.push(totalBid);
        report.push(" bid auctions and ");
        report.push(totalBuyNow);
        report.push(" buy now auctions\n");

        report.push(totalNewAuctions);
        report.push(" auctions are ");
        report.push(getDescription(AuctionStatus.NEW));
        report.push("\n");

        report.push(totalActiveAuctions);
        report.push(" auctions are ");
        report.push(getDescription(AuctionStatus.ACTIVE));
        report.push("\n");

        report.push(totalFinishedAuctions);
        report.push(" auctions are ");
        report.push(getDescription(AuctionStatus.FINISHED));
        report.push("\n");

        report.push("Total buy now price: ");
        report.push(totalBuyNowPrice.toFixed(2));
        report.push(" zl\n");

        report.push("Total bid price: ");
        report.push(totalBidPrice.toFixed(2));
        report.push(" zl\n");

        return report.join("");
    };

    /**
     * @returns {RequestContext}
     */
    var getRequestContext = function() {
        return new RequestContext(null);
    }

    /**
     * @param {Auction} auction
     */
    var data = function(auction) {
        switch (auction.getType()) {
            case AuctionType.BID: {
                totalBid++;
                if (auction.getBids().length == 0) {
                    totalBidPrice += auction.getStartPrice();
                } else {
                    totalBidPrice += auction.getBids().pop().getPrice();
                }
                break;
            };
            case AuctionType.BUY_NOW: {
                totalBuyNow++;
                totalBuyNowPrice += auction.getBuyNowPrice();
                break;
            }
        }

        switch (auction.getStatus()) {
            case AuctionStatus.NEW: {
                totalNewAuctions++;
                break;
            };
            case AuctionStatus.ACTIVE: {
                totalActiveAuctions++;
                break;
            };
            case AuctionStatus.FINISHED: {
                totalFinishedAuctions++;
                break;
            }
            default: {
                throw "Not recognized auction status";
            }
        }
    }

    /**
     * @param {AuctionStatus} status
     * @returns {string}
     */
    var getDescription = function(status) {
        if (AuctionStatus.NEW == status)
            return "new";
        else if (AuctionStatus.ACTIVE == status)
            return "active";
        else
            return "finished";
    }

    /**
     * Use this methods to clear state after execution
     */
    this.clear = function() {
        totalBid = 0;
        totalBidPrice = 0;
        totalBuyNow = 0;
        totalBuyNowPrice = 0;
        totalNewAuctions = 0;
        totalActiveAuctions = 0;
        totalFinishedAuctions = 0;
    }

    /**
     * @param {Array.<Auction>} p_array
     * @returns {string}
     */
    this.createBidAuctionsReport = function(p_array) {
        throw "Report type not supported";
    };

    /**
     * @param {Array.<Auction>} p_array
     * @returns {string}
     */
    this.createBuyNowAuctionsReport = function(p_array) {
        console.log("working");
        return AuctionReporter.prototype.createBuyNowAuctionsReport(p_array);
    };
};
AuctionReporterPrinter.prototype = Object.create(AuctionReporter.prototype)
AuctionReporterPrinter.prototype.constructor = AuctionReporterPrinter;