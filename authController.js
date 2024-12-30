
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "ricky",
  port: 5432,
});

exports.login = async (req, res, next) => {
  res.status(200).json({
    msg: "hello from the server",
  });
};
exports.signup = async (req, res, next) => {
  // const data = await req.body;
  console.log(req.body);
  // res.status(200).json({
  //   data,
  // });
};
exports.check = async (req, res, next) => {
  try {
    const client = await pool.connect(); // Connect to the database
    res.status(200).json({
      msg: "check connection successful",
    });
    client.release(); // Release the client back to the pool
  } catch (error) {
    console.error("Database connection error:", error.message);
    res.status(500).json({
      msg: "Database connection failed",
      error: error.message,
    });
  }
};

exports.getAll = async (req, res, next) => {
  try {
    // Query to fetch all users
    const result = await pool.query('SELECT * FROM users');
    const allData = result.rows; // Extract rows from the query result

    // Respond with the data
    res.status(200).json({
      success: true,
      data: allData[0],
    });
  } catch (error) {
    // Log the error and send a response
    console.error('Error fetching users:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};