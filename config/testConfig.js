
var ExerciseC6D = artifacts.require("ExerciseC6D");

var Config = async function(accounts) {

    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0xE554340f81Be79687cb3b971a5740ee8DE171E59",
        "0x3Cc77F53dbC6A4ed047728a724e8044B6F6CbDF7",
        "0x3EEB3bF5819f3Fde044797e2BDCb4009aDE43Ba5",
        "0x56e5D862607521Db6eef442a1b7e8F7f4f6404FC",
        "0x0A72F8ae50FCFEC97333Aa814E128d23CFC05D75",
        "0x2aF39d990F408352D828a406F7a4331BFE380118",
        "0x2558084FB20545d4632F230b26f9E3C5FEb3C4B4",
        "0x81f5F851a7bB916e3eeC8B60E4E03f14177E6A7F",
        "0x2c2b76B496E0E97e83B451AC5455A63f86e367B8"


    ];


    let owner = accounts[0];
    let exerciseC6D = await ExerciseC6D.new();

    return {
        owner: owner,
        testAddresses: testAddresses,
        exerciseC6D: exerciseC6D
    }
}

module.exports = {
    Config: Config
};
