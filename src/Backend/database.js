import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  host: "localhost",
  user: "luisnunez",
  port: 5432,
  password: "",
  database: "Pomodoro",
});

try {
  client.connect();
  console.log("database connected");
} catch (e) {
  console.log(e.message);
}

client.query("Select * FROM past_timers", (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});

const insertTimerData = async (timer_duration) => {
  try {
    await client.connect();
    const result = await client.query(
      "INSERT INTO past_timers (timer_duration) VALUES ($1) RETURNING *",
      [timer_duration]
    );
    return result.row[0];
  } finally {
    await client.end();
  }
};

module.exports = {
  insertTimerData,
};
