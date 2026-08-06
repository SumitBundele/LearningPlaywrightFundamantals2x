import * as fs from 'fs';
import * as path from "path";

export interface TestDataRow {
    [key: string]: string;
}

export function readCSV(filePath: string): TestDataRow[] {

    let fullPath = path.resolve(filePath);
    let content = fs.readFileSync(fullPath, 'utf-8');
    let lines = content.trim().split('\n');

    // Auto-detect delimiter: tab or comma
    let delimiter = lines[0].includes('\t') ? '\t' : ',';

    // First Line is headers
    let headers = lines[0].split(delimiter);

    // Remaining Lines are data
    let data: TestDataRow[] = [];
    for (let i = 1; i < lines.length; i++) {
        let values = lines[i].split(delimiter);
        let row: TestDataRow = {};
        for (let j = 0; j < headers.length; j++) {
            row[headers[j].trim()] = values[j]?.trim() || "";
        }
        data.push(row);

    }
    return data;




}
