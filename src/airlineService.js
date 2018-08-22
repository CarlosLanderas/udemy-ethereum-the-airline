
export class AirlineService {
    constructor(contract) {
        this.contract = contract;
    }

    async buyFlight(flightIndex, from, value) {
        return this.contract.buyFlight(flightIndex, { from, value });
    }

    async getFlights() {
        let total = await this.getTotalFlights();
        let flights = [];
        for (var i = 0; i < total; i++) {
            let flight = await this.contract.flights(i);
            flights.push(flight);
        }

        return this.mapFlights(flights);
    }

    async getCustomerFlights(account) {

        let customerTotalFlights = await this.contract.customerTotalFlights(account);
        let flights = [];
        for (var i = 0; i < customerTotalFlights.toNumber(); i++) {
            let flight = await this.contract.customerFlights(account, i);
            flights.push(flight);
        }

        return this.mapFlights(flights);
    }

    async getTotalFlights() {
        return (await this.contract.totalFlights()).toNumber();
    }

    getRefundableEther(from) {
        return this.contract.getRefundableEther({ from });
    }

    redeemLoyaltyPoints(from) {
        return this.contract.redeemLoyaltyPoints({ from });
    }

    mapFlights(flights) {
        return flights.map(flight => {
            return {
                name: flight[0],
                price: flight[1].toNumber()
            }
        });
    }
}