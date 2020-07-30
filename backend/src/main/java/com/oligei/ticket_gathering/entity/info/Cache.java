package com.oligei.ticket_gathering.entity.info;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author feaaaaaa
 **/

public class Cache<T> {

    private Map<String, T> cache = new ConcurrentHashMap<String,T>();

    public T getValue(Object key) {
        return cache.get(key);
    }

    public void addOrUpdateCache(String key,T value) {
        cache.put(key, value);
    }

    // 根据 key 来删除缓存中的一条记录
    public void evictCache(String key) {
        cache.remove(key);
    }

    // 清空缓存中的所有记录
    public void evictCache() {
        cache.clear();
    }

    public int getSize(){
        return cache.size();
    }
}

