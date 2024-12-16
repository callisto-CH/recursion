function fib (n) {
    let seq = [];
    if (n >= 1) seq.push(0);
    if (n >= 2) seq.push(1);
    for (let i = 3; i <= n; i++) {
        seq.push(seq[i-2] + seq[i-3]);
    }
    return seq
}

function fibRec (n) {
    if (n == 0) return [];
    if (n == 1) return [0];
    if (n == 2) return [0, 1];
    let seq = fibRec(n-1);
    seq.push(seq.at(-2) + seq.at(-1));
    return seq
}
