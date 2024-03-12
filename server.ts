import app from "./app";
import { PORT } from "./constants";

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
