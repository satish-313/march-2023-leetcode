class node {
    url: string;
    next: node | null;
    prev: node | null;

    constructor(url: string, prev?: node | undefined | null, next?: node | undefined | null) {
        this.url = url;
        this.next = (next === undefined ? null : next);
        this.prev = (prev === undefined ? null : prev);
    }
}

class BrowserHistory {
    loc: node;

    constructor(homepage: string) {
        this.loc = new node(homepage)
    }

    visit(url: string) {
        let temp: node;
        temp = new node(url, this.loc);
        this.loc.next = temp;
        this.loc = this.loc.next;
    }

    back(steps: number): string {
        while (steps--) {
            if (this.loc.prev !== null) this.loc = this.loc.prev;
        }
        return this.loc.url;
    }

    forward(steps: number): string {
        while (steps--) {
            if (this.loc.next !== null) this.loc = this.loc.next;
        }
        return this.loc.url;
    }
}

let obj = new BrowserHistory("leetcode.com");
obj.visit("google.com")
obj.visit("facebook.com");
obj.visit("youtube.com");
console.log(obj.back(1), " = back");
console.log(obj.back(1), " = back");
console.log(obj.forward(1), " = forward");
obj.visit("linkedin.com");
console.log(obj.forward(2), " = forward");
console.log(obj.back(2), " = back");
console.log(obj.back(7), " = back");
