import { createClient } from "@sanity/client";
import imageUrlBuiler from "@sanity/image-url";

const client = createClient({
  projectId: "borpfpqd",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

// helper function to get image url
const builder = imageUrlBuiler(client);

export const urlFor = (source) => builder.image(source);

export default client;
