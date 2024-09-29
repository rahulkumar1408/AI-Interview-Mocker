/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:akBytl9deM8s@ep-solitary-king-a1emzitl.ap-southeast-1.aws.neon.tech/AI-interview-mocker?sslmode=require',
    }
  };