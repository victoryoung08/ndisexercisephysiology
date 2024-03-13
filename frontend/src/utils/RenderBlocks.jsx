import { blocks } from "@/components/blocks/blockList";

export const RenderBlocks = ({ layout }) => (
  <div>
    {layout.map((block, i) => {
      const Block = blocks[block.blockType];
      if (Block) {
        return <Block key={i} {...block} />;
      }
      return null;
    })}
  </div>
);
