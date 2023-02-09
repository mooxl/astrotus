import { Directus } from "@directus/sdk";
export const directus = () => {
  try {
    return new Directus(`http://${import.meta.env.NAME}_cms:8055`);
  } catch (err) {
    console.log(err);
  }
};
