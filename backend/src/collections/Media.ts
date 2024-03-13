import { CollectionConfig } from "payload/types";
export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "Media",
    plural: "Media",
  },
  access: {
    read: () => true,
  },
  upload: true,
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Alt Text",
      required: true,
    },
  ],
};
