function strStr(haystack: string, needle: string): number {
    function isSubstr(i: number): boolean {
        for (let char of needle) {
            if (char !== haystack[i]) return false;
            i += 1;
        }
        return true;
    }

    for (let i = 0; i < haystack.length; i++) {
        if (isSubstr(i)) return i;
    }
    return -1;
}

console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leeto")); // -1
