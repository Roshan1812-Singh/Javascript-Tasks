function areAnagrams(str1, str2){
    const normalize = str => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

console.log(areAnagrams('listen', 'silent'));
console.log(areAnagrams('bat', 'tab'));
console.log(areAnagrams('lead', 'deal'));
console.log(areAnagrams('hello', 'lord'));
