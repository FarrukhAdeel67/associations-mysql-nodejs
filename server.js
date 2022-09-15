const express = require("express");
const port = 5000;
const app = express();
const db = require("./models");
app.use(express.json());

const userRoutes = require("./routes/user_routes");
app.use("/api/users", userRoutes);

const profileRoutes = require("./routes/profile_routes");
app.use("/api/profiles", profileRoutes);

const postRoutes = require("./routes/post_routes");
app.use("/api/posts", postRoutes);
db.sequelize
  .sync({force:false})
  .then(() => {
    app.listen(port, () => {
      console.log("server is running at port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Allah HO Akbar");
