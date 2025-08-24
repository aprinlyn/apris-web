import { marked } from 'marked';
import matter from 'gray-matter';

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: true,
  smartLists: true
});

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: number;
  tags: string[];
}

export async function loadBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    // Import the markdown file using Vite's glob import
    const modules = import.meta.glob('../content/blog/*.md');
    const path = `../content/blog/${slug}.md`;
    
    if (!(path in modules)) {
      throw new Error(`Blog post not found: ${slug}`);
    }
    
    const post = await modules[path]();
    
    // Parse front matter and markdown content
    const { data, content } = matter(post.default || post);
    
    // Validate required frontmatter data
    if (!data.id || !data.title || !data.slug) {
      throw new Error(`Missing required frontmatter in blog post: ${slug}`);
    }
    
    // Convert markdown to HTML
    const htmlContent = marked(content);
    
    return {
      id: data.id,
      slug: data.slug || slug,
      title: data.title,
      excerpt: data.excerpt || '',
      content: htmlContent,
      image: data.image || '',
      date: data.date || new Date().toISOString(),
      readTime: data.readTime || 5,
      tags: data.tags || []
    };
  } catch (error) {
    console.error(`Error loading blog post: ${slug}`, error);
    return null;
  }
}

export async function loadAllBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  
  // Get all .md files from the blog directory
  const blogFiles = import.meta.glob('../content/blog/*.md');
  
  for (const path in blogFiles) {
    try {
      const post = await blogFiles[path]();
      const { data, content } = matter(post.default || post);
      
      // Skip posts without required frontmatter
      if (!data.id || !data.title || !data.slug) {
        console.warn(`Skipping blog post with missing frontmatter: ${path}`);
        continue;
      }
      
      const htmlContent = marked(content);
      
      posts.push({
        id: data.id,
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt || '',
        content: htmlContent,
        image: data.image || '',
        date: data.date || new Date().toISOString(),
        readTime: data.readTime || 5,
        tags: data.tags || []
      });
    } catch (error) {
      console.error(`Error loading blog post from path: ${path}`, error);
    }
  }
  
  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}