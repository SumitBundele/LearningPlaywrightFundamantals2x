import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

export interface TestDataRow {
    [key: string]: string | boolean;
}

export function readYAML(filePath: string): TestDataRow[] {
    let fullPath = path.resolve(filePath);
    if (!fs.existsSync(fullPath)) {
        throw new Error(`YAML file not found: ${fullPath}`);
    }

    let content = fs.readFileSync(fullPath, 'utf-8');
    let data = yaml.load(content) as TestDataRow[];

    if (!Array.isArray(data)) {
        throw new Error(`YAML file does not contain an array: ${fullPath}`);
    }

    return data;
}
