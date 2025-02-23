class StringBuilder {
    private buf: Uint8Array[] = [];
    private te new TextEncoder()

    append(data: string): this {
        this.parts.push(te.encode(data));
        return this;
    }
テストとベンチマークとci/cdは必ず書く

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

    clear(): this {
        this.parts = [];
        return this;
    }
}

// 使用例
const sb = new ByteStringBuilder();
sb.append(new TextEncoder().encode("Hello, ")).append(new TextEncoder().encode("World!"));
console.log(sb.toString()); // 出力: "Hello, World!"
sb.clear();
console.log(sb.toString()); // 出力: ""