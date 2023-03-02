function compress(chars: string[]): number {
    if (chars.length === 1) return 1;
    let pos = 1;

    for (let i = 1; i < chars.length; i++) {
        let count = 1;

        while (
            i < chars.length &&
            (chars[i] === chars[i - 1])
        ) {
            count += 1;
            i += 1;
            
        }

        if (count !== 1) {
            let temp = chars[i];
            count
                .toString()
                .split("")
                .forEach((value) => {
                    chars[pos++] = value;
                });
            if (temp) chars[pos++] = temp;
        } else chars[pos++] = chars[i];
    }

    return pos;
}

console.log(compress(["$", "#", "#", "$", "#", "$", "$", "$", "$", "$"]));
