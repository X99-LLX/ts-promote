

export function kValues<K,V>(map: Map<K, V>) {
    const values: V[] = [];
    for(const [key, value] of map) {
        values.push(value);
    }
    return values;
}

export function kKeys<K,V>(map: Map<K, V>) {
    const keys: K[] = [];
    for(const [key, value] of map) {
        keys.push(key);
    }
    return keys;
}
