import { kMapLib } from "./KMapLibrary";

export function mapTest() {
    const testMap = new Map<string, number>();
    testMap.set("1", 1);
    testMap.set("2", 2);
    testMap.set("3", 3);
    testMap.set("4", 4);


    const values = kMapLib.kValues(testMap);
    console.log(values);

    const keys = kMapLib.kKeys(testMap);
    console.log(keys);
}

