export const PersistService = {
  save: (name: string, payload: Object) => {
    try {
      const pl = JSON.stringify(payload);

      window.localStorage.setItem(name, pl);
    } catch {
      throw new Error("Payload not formatted correctly");
    }
  },
  load: (key: string) => {
    try {
      const obj = window.localStorage.getItem(key);

      return JSON.parse(obj ?? "");
    } catch {
      throw new Error("Storage corrupt");
    }
  },
};
