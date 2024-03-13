import { CTA } from "../blocks/CTA";
import { FeatureCards } from "../blocks/FeatureCards";
import { Hero } from "../blocks/Hero";
import { ImageSlider } from "../blocks/ImageSlider";
import { CollectionConfig } from "payload/types";

export const Pages: CollectionConfig = {
  slug: "locations",
  labels: {
    singular: "Location",
    plural: "Locations",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [Hero, ImageSlider, FeatureCards, CTA],
    },
  ],
};
