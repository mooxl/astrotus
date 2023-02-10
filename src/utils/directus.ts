import { Directus } from "@directus/sdk";
export const directus = () => {
  try {
    return new Directus(
      import.meta.env.DEV ? "http://" : "https://" + import.meta.env.CMS_URL
    );
  } catch (err) {
    console.log(err);
  }
};
