export interface Section {
  heading: string;
  content: string;
}

export interface MarkdownPostLayoutFrontmatter {
  title: string;
  shortDescription: string;
  pubDate: string;
  sections: Section[];
  tags: string[];
}
