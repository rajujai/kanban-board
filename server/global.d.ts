export {};

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT?: number;
        MONGO_DB?: string;
    }
}
}
  