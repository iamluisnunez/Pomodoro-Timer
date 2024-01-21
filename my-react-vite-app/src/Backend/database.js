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
