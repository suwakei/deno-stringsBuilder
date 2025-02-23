# deno-stringsBuilder

## Overview
This repository is a library that supports string manipulation in Deno. It provides the StringBuilder class for efficiently constructing strings.

## Installation

Denoプロジェクトに追加します。

```sh
deno install path/to/deno-stringsBuilder

## Usage
### add string
```typescript
import { StringBuilder } from "./mod.ts";

const sb = new StringBuilder();
sb.append("Hello, ").append("World!");
console.log(sb.toString()); // 出力: "Hello, World!"
```

### reset string
```typescript
import { StringBuilder } from "./mod.ts";

const sb = new StringBuilder();
sb.append("Hello, ").append("World!");
sb.clear();
console.log(sb.toString()); // 出力: ""
```