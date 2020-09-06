const app = require("express")();
const geoip = require("geoip-lite");
const expressIp = require("express-ip");
const PORT = process.env.PORT || 8000;

app.use(expressIp().getIpInfoMiddleware);

app.get("/", (req, res) => {
  const ip = req.ipInfo.ip;
  const geo = geoip.lookup(ip);
  console.log(geo); //Check console for all details.
  return res.send(`Your city's location is ${geo.ll[0]},${geo.ll[1]}`);
});

app.listen(PORT, () => {
  console.log(`APP IS RUNNING AT PORT: ${PORT}`);
});
