// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeHighlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { Pluggable } from "unified";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    url: { type: "string", resolve: (post) => `/${post._raw.flattenedPath}` },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark", // 코드작성시 적용할 테마
        },
      ],
      rehypeHighlight, //순서가 중요함.
    ] as Pluggable[], // 해당 타입 없이 그냥은 할당하기 어려워서 강제 타입 할당함
  },
});
