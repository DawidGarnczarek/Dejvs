export interface Section {
  heading: string;
  content: string;
}

export interface MarkdownPostLayoutFrontmatter {
  title: string;
  description: string;
  pubDate: string;
  sections: Section[];
  tags: string[];
}
