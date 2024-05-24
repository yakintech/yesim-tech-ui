import SecureLS from "secure-ls";

export const tokenStorageHelper = {
    setStoreWithEncryption: (value: string) => {
        try {
            var ls = new SecureLS({ encodingType: "aes" });
            ls.set("token", value);
        } catch (error) {
            var ls = new SecureLS({ encodingType: "aes" });
            ls.remove("token");
        }
    },
    getStoreWithDecryption: () => {
        try {
            var ls = new SecureLS({ encodingType: "aes" });
            return ls.get("token");
        } catch (error) {
            var ls = new SecureLS({ encodingType: "aes" });
            ls.remove("token");
        }
    },
    removeStore: () => {
        var ls = new SecureLS({ encodingType: "aes" });
        ls.remove("token");
    },
};