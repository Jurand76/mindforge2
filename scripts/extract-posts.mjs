const fs = require('fs');
const path = require('path');

const dirs = fs.readdirSync('src/content/blog');
const entries = [];

for (const dir of dirs) {
  const mdx = path.join('src/content/blog', dir, 'index.mdx');
  if (!fs.existsSync(mdx)) continue;
  const content = fs.readFileSync(mdx, 'utf8');
  const fm = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) continue;
  const data = {};
  fm[1].split('\n').forEach(line => {
    const m = line.match(/^(\w+):\s*(.+)/);
    if (m) {
      data[m[1]] = m[2].replace(/^["']|["']$/g, '').trim();
    }
  });
  entries.push({
    slug: dir,
    category: data.category || 'psychologia',
    title: data.title || dir,
    description: (data.description || '').slice(0, 120),
    date: data.date || '2026-01-01'
  });
}

entries.sort((a, b) => b.date.localeCompare(a.date));

const catImages = {
  psychologia: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
  technologia: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop",
  ciekawostki: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=800&fit=crop",
  marketing: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop",
};

// Take first 5 for featured, rest for stories
const featured = entries.slice(0, 5);
const stories = entries.slice(5);

console.log('// Featured (hero)');
featured.forEach(e => {
  console.log(`  { slug: "${e.slug}", category: "${e.category}", title: "${e.title}", description: "${e.description}", date: "${e.date}", image: catImages[e.category] || catImages.psychologia },`);
});

console.log('\n// Stories (carousel)');
stories.forEach(e => {
  console.log(`  { slug: "${e.slug}", category: "${e.category}", title: "${e.title}", description: "${e.description}", date: "${e.date}", image: catImages[e.category] || catImages.psychologia },`);
});
