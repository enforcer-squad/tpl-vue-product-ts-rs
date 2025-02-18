declare namespace NodeJS {
  export interface ProcessEnv {
    API_PATH: string;
    TIME_OUT: number;
  }
}

interface Window {
  tx_language: Record<string, string>;
}
