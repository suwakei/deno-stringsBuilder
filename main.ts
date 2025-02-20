
class StringBuilder {
    private parts: string[] = [];

    append(str: string): this {
        this.parts.push(str);
        return this;
    }

    toString(): string {
        return this.parts.join("");
    }

    clear(): this {
        this.parts = [];
        return this;
    }
}

// 使用例
const sb = new StringBuilder();
sb.append("Hello, ").append("World!");
console.log(sb.toString()); // 出力: "Hello, World!"
sb.clear();
console.log(sb.toString()); // 出力: ""