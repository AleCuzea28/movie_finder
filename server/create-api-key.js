import client from "./elasticsearch/client.js";

async function generateApiKeys(opts) {
  const body = await client.security.createApiKey({
    body: {
      name: "movie_finder",
      role_descriptors: {
        movie_example_writer: {
          cluster: ["monitor"],
          index: [
            {
              names: ["movies"],
              privileges: ["create_index", "write", "read", "manage"],
            },
          ],
        },
      },
    },
  });
  return Buffer.from(`${body.id}:${body.api_key}`).toString("base64");
}

generateApiKeys()
  .then(console.log)
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
