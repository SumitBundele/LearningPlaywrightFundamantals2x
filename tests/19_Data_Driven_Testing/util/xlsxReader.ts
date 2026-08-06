import * as xlsx from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

export interface TestDataRow {
    [key: string]: string;
}

export function readXLSX(filePath: string): TestDataRow[] {
    let fullPath = path.resolve(filePath);
    if (!fs.existsSync(fullPath)) {
        throw new Error(`XLSX file not found: ${fullPath}`);
    }

    let workbook = xlsx.readFile(fullPath);
    let sheetName = workbook.SheetNames[0];
    let sheet = workbook.Sheets[sheetName];
    let data = xlsx.utils.sheet_to_json(sheet) as TestDataRow[];

    // Convert all values to strings
    for (let row of data) {
        for (let key of Object.keys(row)) {
            row[key] = String(row[key] ?? "");
        }
    }

    return data;
}
