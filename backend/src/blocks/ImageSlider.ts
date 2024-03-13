import { Block } from "payload/types";

export const ImageSlider: Block = {
  slug: "imageSlider",
  labels: {
    singular: "Image Slider",
    plural: "Image Sliders",
  },
  fields: [
    {
      name: "images",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
