// import json-server functions
import { create, router, defaults } from "json-server";

const server = create();
const middlewares = defaults();
const routes = router("db.json"); // points to your db.json file
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(routes);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
