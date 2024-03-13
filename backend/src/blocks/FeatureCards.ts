import { Block } from "payload/types";

export const FeatureCards: Block = {
  slug: "featureCards",
  labels: {
    singular: "Feature Cards",
    plural: "Feature Cards",
  },
  fields: [
    {
      name: "cards",
      label: "Feature Cards",
      type: "array",
      fields: [
        {
          name: "heading",
          type: "text",
          label: "Heading",
        },
        {
          name: "body",
          type: "richText",
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
          label: "Link/Slug",
        },
        {
          name: "featureImage",
          type: "upload",
          relationTo: "media",
          label: "Feature Image",
        },
      ],
    },
  ],
};
