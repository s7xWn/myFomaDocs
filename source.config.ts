import { remarkMdxMermaid } from "fumadocs-core/mdx-plugins";
import { remarkSteps } from "fumadocs-core/mdx-plugins/remark-steps";
import { defineConfig } from "fumadocs-mdx/config";
export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMdxMermaid, remarkSteps],
  },
});
