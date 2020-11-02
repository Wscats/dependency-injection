"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MruCache {
    constructor(_maxSize) {
        this._maxSize = _maxSize;
        this._map = new Map();
        this._entries = new Set();
    }
    set(filePath, entry) {
        this._map.set(filePath, entry);
        this._entries.add(filePath);
        for (const key of this._entries.keys()) {
            if (this._entries.size <= this._maxSize) {
                break;
            }
            this._map.delete(key);
            this._entries.delete(key);
        }
    }
    has(filePath) {
        return this._map.has(filePath);
    }
    get(filePath) {
        if (this._entries.has(filePath)) {
            this._entries.delete(filePath);
            this._entries.add(filePath);
        }
        return this._map.get(filePath);
    }
}
exports.MruCache = MruCache;
//# sourceMappingURL=mruCache.js.map