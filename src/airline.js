import AirlineContract from "../build/contracts/Airline.json";
import contract from "truffle-contract";

export default async(provider) => {
    const airline = contract(AirlineContract);
    airline.setProvider(provider);

    let instance = await airline.deployed();
    return instance;
};