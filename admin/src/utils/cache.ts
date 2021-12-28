

const cache = {
    key: "like_admin_",
    //设置缓存(expire为缓存时效)
    set(key: string, value: any, expire?: string) {
        key = this.getKey(key);
        let data: any = {
            expire: expire ? this.time() + expire : "",
            value,
        };

        if (typeof data === "object") data = JSON.stringify(data);
        try {
            window.localStorage.setItem(key, data);
        } catch (e) {
            return false;
        }
    },
    get(key: string) {
        key = this.getKey(key);
        try {
            let data = window.localStorage.getItem(key);
            if (!data) return false;
            const { value, expire } = JSON.parse(data);
            if (expire && expire < this.time()) {

                window.localStorage.removeItem(key);
                return false;
            } else {
                return value;
            }
        } catch (e) {
            return false;
        }
    },
    //获取当前时间
    time() {
        return Math.round(new Date().getTime() / 1000);
    },
    remove(key: string) {
        key = this.getKey(key);
        window.localStorage.removeItem(key);
    },
    getKey(key: string) {
        return this.key + key;
    },
};

export default cache;
