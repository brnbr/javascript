function normalizeName(value) {
    const def = value ?? "이름없음";
    const trimm = def.trim();

    return trimm === "" ? "이름없음" : trimm;
}

console.log(normalizeName(" 김하나 "));
console.log(normalizeName(""));
console.log(normalizeName(null));
console.log(normalizeName(undefined));
