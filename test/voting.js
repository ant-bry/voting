var Voting = artifacts.require("./Voting.sol");

contract("Election", function(accounts) {
    var votingIntance;

    it("initializes with two candidates", function() {
        return Voting.deployed().then(function(instance) {
            return instance.candidatesCount();
        }).then(function(count) {
            assert.equal(count, 2);
        });
    });

    it("it initializes the candidates with the correct values", function() {
        return Voting.deployed().then(function(instance) {
            votingIntance = instance;
            return votingIntance.candidates(1);
        }).then(function(candidate) {
            assert.equal(candidate[0], 1, "contains the correct id");
            assert.equal(candidate[1], "Candidate 1", "contains the correct name");
            assert.equal(candidate[2], 0, "containes the correct votes count");
            return votingIntance.candidates(2);
        }).then(function(candidate) {
            assert.equal(candidate[0], 2, "contains the correct id");
            assert.equal(candidate[1], "Candidate 2", "contains the correct name");
            assert.equal(candidate[2], 0, "contains the correct votes count");
        })
    })
});