export declare function readFile(filePath: string): Promise<string>;
export declare function getAllOutputFileNames(): string[];
export declare function getJsFile(filePath: string): Promise<string>;
export declare function concatFilesWithSourceMaps(fileName: string, files: Array<{
    path: string;
    content: string;
}>, prefix?: string, suffix?: string): string;
export declare function getConcatenatedFilesWithSourceMaps(fileName: string, filePaths: string[], prefix?: string, suffix?: string): Promise<string>;
