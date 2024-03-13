import { Block } from "payload/types";

export const CTA: Block = {
  slug: "cta",
  labels: {
    singular: "CTA",
    plural: "CTA",
  },
  fields: [
    {
      name: "mainCTA",
      type: "text",
      label: "Main CTA",
    },
    {
      name: "body",
      type: "text",
      label: "Body Text",
    },
    {
      name: "button",
      type: "text",
      label: "Button Text",
    },
    {
      name: "link",
      type: "text",
      label: "Button Link Text",
    },
  ],
};
