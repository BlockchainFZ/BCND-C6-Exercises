
var ExerciseC6D = artifacts.require("ExerciseC6D");

var Config = async function(accounts) {

    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0xA8b7744F6724eFE46e5EF310c5D85a45F43FB2BE",
        "0x364d6106F7F72c81A225Cf1e81F80a779c886803",
        "0x4556C220013EDc25D99dE52F07A8389d84d8719B",
        "0x071B8E19acea0b000ed71cb493EA47E2d31c4883",
        "0xe381AdA458754A5307A5071379C36E28833EF1E8",
        "0x3546ED9648d333797aaE7F23F050A8b4b0cA6B41",
        "0x63197d8f2FC810d165893F07729899b68b13cDD6",
        "0xBbE8D6b966B29467Be10A5cd591e9004FB063db1",
        "0x8D25A95CBb799bd326b16abdACCCd561414DE5cA"


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
