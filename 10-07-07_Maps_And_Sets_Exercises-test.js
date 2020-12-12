describe("test of hasDuplicate() function", function () {

    it("passes when hasDuplicate([1, 3, 2, 1]) returns true", function () {
        expect(hasDuplicate([1, 3, 2, 1])).toEqual(true);
    });

    it("passes when hasDuplicate([1, 5, -1, 4]) returns false", function () {
        expect(hasDuplicate([1, 5, -1, 4])).toEqual(false);
    });

});


describe("test of vowelCount function", function () {

    it('passes when vowelCount("awesome") returns Map(3) {"a" => 1, "e" => 2, "o" => 1}', function () {
        expect(JSON.stringify([] = [...vowelCount('awesome')])).toEqual('[["a",1],["e",2],["o",1]]');
    });

    it('passes when vowelCount("awesome, totally awesome!") returns Map(3) {"a" => 3, "e" => 4, "o" => 3}', function () {
        expect(JSON.stringify([] = [...vowelCount('awesome, totally awesome!')])).toEqual('[["a",3],["e",4],["o",3]]');
    });

    it('passes when vowelCount("JIM GEiST") returns Map(3) {"e" => 1, "i" => 2}', function () {
        expect(JSON.stringify([] = [...vowelCount('JIM GEiST')])).toEqual('[["e",1],["i",2]]');
    });

    it('passes when vowelCount("Supercalifragilisticexpialidocious") returns Map(5) {"a" => 3, "e" => 2, "i" => 7, "o" => 2, "u" => 2}) ', function () {
        expect(JSON.stringify([] = [...vowelCount('Supercalifragilisticexpialidocious')])).toEqual('[["a",3],["e",2],["i",7],["o",2],["u",2]]');
    });

});


