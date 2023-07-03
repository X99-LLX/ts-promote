function catchError(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const func = descriptor.value;

    descriptor.value = function (...args: any[]) {
        try {
            return func(...args);
        } catch (error) {
            console.error('catchError:', error);
        }
    };
}

export class testClass {
    @catchError
    public add(a: number, b: number): number {
        return a + b;
    }
}

