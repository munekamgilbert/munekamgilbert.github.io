describe("sum", function () {
    it("takes 5 numbers in an array, and returns sum of all numbers", function () {
        assert.equal(15, sum([1,2,3,4,5]));
    });

    it("takes 2 negative numbers in an array, and returns sum of those numbers", function () {
        assert.equal(-33, sum([-11, -22]));
    });
});

describe("multiply", function () {
    it("takes 4 numbers, and returns multiply of all numbers", function () {
        assert.equal(210, multiply([2,3,5,7]));
    });
});

describe("reverse", function () {
    it("takes a string, and returns reverse of string", function () {
        assert.equal('Gilbert', reverse('trebliG'));
    });
});

describe("filterLongWords", function () {
    it("takes an array of string and number n, and returns words with length greater than n", function () {
        assert.deepEqual(['good', 'people','help'], filterLongWords(['good', 'people', 'ok', 'help'], 3));
    });
});

