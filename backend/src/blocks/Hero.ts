import { Block } from "payload/types";
export const Hero: Block = {
  slug: "hero",
  labels: {
    singular: "Hero Block",
    plural: "Hero Blocks",
  },
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "text",
    },
    {
      name: "body",
      label: "Body Text",
      type: "textarea",
    },
    {
      name: "heroImage",
      label: "Hero Image",
      type: "upload",
      relationTo: "media",
    },
  ],
};
