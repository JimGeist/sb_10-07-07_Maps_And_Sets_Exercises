/*
    Maps and Sets Exercise
    Quick Question #1

    What does the following code return?

        new Set([1, 1, 2, 2, 3, 4])

    Quick Question #2

    What does the following code return?

        [...new Set("referee")].join("")

    Quick Questions #3

    What does the Map m look like after running the following code ?

        let m = new Map();
    m.set([1, 2, 3], true);
    m.set([1, 2, 3], false);
*/

/*
    hasDuplicate

    Write a function called hasDuplicate which accepts an array and returns true or false 
    if that array contains a duplicate

*/

function hasDuplicate(inArr) {

    const setInArr = new Set(inArr)

    if (setInArr.size === inArr.length) {
        return false;
    } else {
        return true;
    }

}

hasDuplicate([1, 3, 2, 1]) // true
hasDuplicate([1, 5, -1, 4]) // false


/*
vowelCount

Write a function called vowelCount which accepts a string and returns a map where the keys are 
numbers and the values are the count of the vowels in the string.

*/
function vowelCount(inStr) {

    // const outVowelCount = new Map();

    // Array.from(inStr.toLowerCase()).forEach(function (fxInLtr) {

    //     if (("aeiou").indexOf(fxInLtr) > -1) {
    //         if (outVowelCount.has(fxInLtr)) {
    //             outVowelCount.set(fxInLtr, outVowelCount.get(fxInLtr) + 1);
    //         } else {
    //             outVowelCount.set(fxInLtr, 1);
    //         }
    //     }

    // })

    // another version. Prefill outVowelCount with the vowels. Iterate over string
    //  and instead of 2 checks (first to see if vowel and second to see if in count)
    //  just check. When done, remove vowels with a zero count.
    const outVowelCount = new Map([["a", 0], ["e", 0], ["i", 0], ["o", 0], ["u", 0]]);
    Array.from(inStr.toLowerCase()).forEach((fxInLtr) => {

        if (outVowelCount.has(fxInLtr)) {
            outVowelCount.set(fxInLtr, outVowelCount.get(fxInLtr) + 1);
        }

    })

    // dump the vowels where count is 0
    for (let [key, value] of outVowelCount.entries()) {
        if (value === 0) {
            outVowelCount.delete(key);
        }
    }


    return outVowelCount;

}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
vowelCount("Supercalifragilisticexpialidocious") // Map(5) {"u" => 2, "e" => 2, "a" => 3, "i" => 7, "o" => 2}
                                                 // Map(5) {"a" => 3, "e" => 2, "i" => 7, "o" => 2, "u" => 2}
