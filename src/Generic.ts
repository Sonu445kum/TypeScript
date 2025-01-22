function identity<T>(arg: T[]): T {
    return arg[0];
}

let output = identity<string>(['a', 'b', 'c']);
console.log(output);