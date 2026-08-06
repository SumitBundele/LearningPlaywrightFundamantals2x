import mysql from 'mysql2/promise';

export interface MySQLConfig {
    host: string;
    user: string;
    password: string;
    database: string;
    port?: number;
}

export interface TestDataRow {
    [key: string]: string | number | boolean | null;
}

export async function readMySQL(config: MySQLConfig, query: string): Promise<TestDataRow[]> {
    let connection: mysql.Connection | null = null;
    try {
        connection = await mysql.createConnection({
            host: config.host,
            user: config.user,
            password: config.password,
            database: config.database,
            port: config.port || 3306,
        });

        let [rows] = await connection.execute(query);
        return rows as TestDataRow[];
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

// Fallback mock data for demonstration if MySQL is not available
export function getMockLoginData(): TestDataRow[] {
    return [
        { description: "valid credentials", username: "admin@gamil.com", password: "admin123", shouldPass: true, expectedError: "" },
        { description: "invalid password", username: "admin@gamil.com", password: "wrongpass", shouldPass: false, expectedError: "Invalid credentials" },
        { description: "empty username", username: "", password: "admin123@gamil.com", shouldPass: false, expectedError: "Username is required" },
        { description: "empty password", username: "admin@gamil.com", password: "", shouldPass: false, expectedError: "Password is required" },
        { description: "locked account", username: "locked_user@gamil.com", password: "pass123", shouldPass: false, expectedError: "Account is locked" },
    ];
}
