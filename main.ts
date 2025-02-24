class StringBuilder {
    private parts: Uint8Array[] = [];
    private te: TextEncoder = new TextEncoder();

    write_string(data: string): this {
        this.parts.push(this.te.encode(data));
        return this;
    }

    toString(): string {
        const length = this.parts.reduce((acc, part) => acc + part.length, 0);
        const result = new Uint8Array(length);
        let offset = 0;

        for (const part of this.parts) {
            result.set(part, offset);
            offset += part.length;
        }

        return new TextDecoder().decode(result);
    }

    reset(): this {
        this.parts = [];
        return this;
    }
}

// 使用例
const sb = new StringBuilder();
sb.append("Hello, ").append("World!");
console.log(sb.toString()); // 出力: "Hello, World!"
sb.reset();
console.log(sb.toString()); // 出力: ""