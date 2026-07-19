import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BLOG_DIR = join(ROOT, 'src', 'content', 'blog');
const SQL_PATH = 'D:\\tomek\\mindforge\\molqikratn_dtyr1_1781524145.sql';

function decodeHTMLEntities(text) {
  const entities = {
    '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"',
    '&nbsp;': ' ', '&apos;': "'", '&#039;': "'", '&#038;': '&',
    '&ndash;': '\u2013', '&mdash;': '\u2014',
    '&lsquo;': '\u2018', '&rsquo;': '\u2019',
    '&ldquo;': '\u201C', '&rdquo;': '\u201D',
    '&hellip;': '\u2026', '&laquo;': '\u00AB', '&raquo;': '\u00BB',
    '&Agrave;': '\u00C0', '&Aacute;': '\u00C1', '&Acirc;': '\u00C2',
    '&Atilde;': '\u00C3', '&Auml;': '\u00C4', '&Aring;': '\u00C5',
    '&AElig;': '\u00C6', '&Ccedil;': '\u00C7',
    '&Egrave;': '\u00C8', '&Eacute;': '\u00C9', '&Ecirc;': '\u00CA',
    '&Euml;': '\u00CB', '&Igrave;': '\u00CC', '&Iacute;': '\u00CD',
    '&Icirc;': '\u00CE', '&Iuml;': '\u00CF', '&ETH;': '\u00D0',
    '&Ntilde;': '\u00D1', '&Ograve;': '\u00D2', '&Oacute;': '\u00D3',
    '&Ocirc;': '\u00D4', '&Otilde;': '\u00D5', '&Ouml;': '\u00D6',
    '&Oslash;': '\u00D8', '&Ugrave;': '\u00D9', '&Uacute;': '\u00DA',
    '&Ucirc;': '\u00DB', '&Uuml;': '\u00DC', '&Yacute;': '\u00DD',
    '&THORN;': '\u00DE', '&szlig;': '\u00DF',
    '&agrave;': '\u00E0', '&aacute;': '\u00E1', '&acirc;': '\u00E2',
    '&atilde;': '\u00E3', '&auml;': '\u00E4', '&aring;': '\u00E5',
    '&aelig;': '\u00E6', '&ccedil;': '\u00E7',
    '&egrave;': '\u00E8', '&eacute;': '\u00E9', '&ecirc;': '\u00EA',
    '&euml;': '\u00EB', '&igrave;': '\u00EC', '&iacute;': '\u00ED',
    '&icirc;': '\u00EE', '&iuml;': '\u00EF', '&eth;': '\u00F0',
    '&ntilde;': '\u00F1', '&ograve;': '\u00F2', '&oacute;': '\u00F3',
    '&ocirc;': '\u00F4', '&otilde;': '\u00F5', '&ouml;': '\u00F6',
    '&oslash;': '\u00F8', '&ugrave;': '\u00F9', '&uacute;': '\u00FA',
    '&ucirc;': '\u00FB', '&uuml;': '\u00FC', '&yacute;': '\u00FD',
    '&thorn;': '\u00FE', '&yuml;': '\u00FF',
    '&OElig;': '\u0152', '&oelig;': '\u0153',
    '&Scaron;': '\u0160', '&scaron;': '\u0161',
    '&Yuml;': '\u0178', '&fnof;': '\u0192',
    '&circ;': '\u02C6', '&tilde;': '\u02DC',
    '&Alpha;': '\u0391', '&Beta;': '\u0392', '&Gamma;': '\u0393',
    '&Delta;': '\u0394', '&Epsilon;': '\u0395', '&Zeta;': '\u0396',
    '&Eta;': '\u0397', '&Theta;': '\u0398', '&Iota;': '\u0399',
    '&Kappa;': '\u039A', '&Lambda;': '\u039B', '&Mu;': '\u039C',
    '&Nu;': '\u039D', '&Xi;': '\u039E', '&Omicron;': '\u039F',
    '&Pi;': '\u03A0', '&Rho;': '\u03A1', '&Sigma;': '\u03A3',
    '&Tau;': '\u03A4', '&Upsilon;': '\u03A5', '&Phi;': '\u03A6',
    '&Chi;': '\u03A7', '&Psi;': '\u03A8', '&Omega;': '\u03A9',
    '&alpha;': '\u03B1', '&beta;': '\u03B2', '&gamma;': '\u03B3',
    '&delta;': '\u03B4', '&epsilon;': '\u03B5', '&zeta;': '\u03B6',
    '&eta;': '\u03B7', '&theta;': '\u03B8', '&iota;': '\u03B9',
    '&kappa;': '\u03BA', '&lambda;': '\u03BB', '&mu;': '\u03BC',
    '&nu;': '\u03BD', '&xi;': '\u03BE', '&omicron;': '\u03BF',
    '&pi;': '\u03C0', '&rho;': '\u03C1', '&sigmaf;': '\u03C2',
    '&sigma;': '\u03C3', '&tau;': '\u03C4', '&upsilon;': '\u03C5',
    '&phi;': '\u03C6', '&chi;': '\u03C7', '&psi;': '\u03C8',
    '&omega;': '\u03C9', '&thetasym;': '\u03D1', '&upsih;': '\u03D2',
    '&piv;': '\u03D6', '&ensp;': '\u2002', '&emsp;': '\u2003',
    '&thinsp;': '\u2009', '&zwnj;': '\u200C', '&zwj;': '\u200D',
    '&lrm;': '\u200E', '&rlm;': '\u200F',
    '&larr;': '\u2190', '&uarr;': '\u2191', '&rarr;': '\u2192',
    '&darr;': '\u2193', '&harr;': '\u2194',
    '&crarr;': '\u21B5', '&lArr;': '\u21D0', '&uArr;': '\u21D1',
    '&rArr;': '\u21D2', '&dArr;': '\u21D3', '&hArr;': '\u21D4',
    '&forall;': '\u2200', '&part;': '\u2202', '&exist;': '\u2203',
    '&empty;': '\u2205', '&nabla;': '\u2207', '&isin;': '\u2208',
    '&notin;': '\u2209', '&ni;': '\u220B', '&prod;': '\u220F',
    '&sum;': '\u2211', '&minus;': '\u2212', '&lowast;': '\u2217',
    '&radic;': '\u221A', '&prop;': '\u221D', '&infin;': '\u221E',
    '&ang;': '\u2220', '&and;': '\u2227', '&or;': '\u2228',
    '&cap;': '\u2229', '&cup;': '\u222A', '&int;': '\u222B',
    '&there4;': '\u2234', '&sim;': '\u223C', '&cong;': '\u2245',
    '&asymp;': '\u2248', '&ne;': '\u2260', '&equiv;': '\u2261',
    '&le;': '\u2264', '&ge;': '\u2265', '&sub;': '\u2282',
    '&sup;': '\u2283', '&nsub;': '\u2284', '&sube;': '\u2286',
    '&supe;': '\u2287', '&oplus;': '\u2295', '&otimes;': '\u2297',
    '&perp;': '\u22A5', '&sdot;': '\u22C5',
    '&lceil;': '\u2308', '&rceil;': '\u2309',
    '&lfloor;': '\u230A', '&rfloor;': '\u230B',
    '&loz;': '\u25CA', '&spades;': '\u2660', '&clubs;': '\u2663',
    '&hearts;': '\u2665', '&diams;': '\u2666',
    '&trade;': '\u2122', '&reg;': '\u00AE', '&copy;': '\u00A9',
    '&euro;': '\u20AC', '&pound;': '\u00A3', '&yen;': '\u00A5',
    '&cent;': '\u00A2', '&curren;': '\u00A4', '&brvbar;': '\u00A6',
    '&sect;': '\u00A7', '&uml;': '\u00A8', '&ordf;': '\u00AA',
    '&not;': '\u00AC', '&shy;': '\u00AD', '&macr;': '\u00AF',
    '&deg;': '\u00B0', '&plusmn;': '\u00B1', '&sup2;': '\u00B2',
    '&sup3;': '\u00B3', '&acute;': '\u00B4', '&micro;': '\u00B5',
    '&para;': '\u00B6', '&middot;': '\u00B7', '&cedil;': '\u00B8',
    '&sup1;': '\u00B9', '&ordm;': '\u00BA', '&frac14;': '\u00BC',
    '&frac12;': '\u00BD', '&frac34;': '\u00BE', '&iquest;': '\u00BF',
    '&times;': '\u00D7', '&divide;': '\u00F7',
  };

  text = text.replace(/&[a-zA-Z]+;/g, m => entities[m] || m);
  text = text.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10)));
  text = text.replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCharCode(parseInt(code, 16)));
  return text;
}

function parseInsertValues(valuesText) {
  const rows = [];
  let pos = 0;
  const len = valuesText.length;

  function skipWs() {
    while (pos < len && /[\s\t\r\n]/.test(valuesText[pos])) pos++;
  }

  function parseString() {
    pos++; // opening quote
    let result = '';
    while (pos < len) {
      const ch = valuesText[pos];
      if (ch === '\\') {
        pos++;
        if (pos >= len) break;
        const next = valuesText[pos];
        if (next === "'") result += "'";
        else if (next === '\\') result += '\\';
        else if (next === 'n') result += '\n';
        else if (next === 'r') result += '\r';
        else if (next === 't') result += '\t';
        else if (next === '0') result += '\0';
        else if (next === 'b') result += '\b';
        else if (next === 'Z') result += '\u001A';
        else result += next;
        pos++;
      } else if (ch === "'") {
        pos++; // closing quote
        return result;
      } else {
        result += ch;
        pos++;
      }
    }
    return result;
  }

  function parseField() {
    skipWs();
    if (pos >= len) return '';
    const ch = valuesText[pos];
    if (ch === "'") {
      return parseString();
    } else if (ch === 'N' && valuesText.slice(pos, pos + 4) === 'NULL') {
      pos += 4;
      return null;
    } else if (ch === '-' || (ch >= '0' && ch <= '9')) {
      let num = '';
      while (pos < len && /[0-9.\-]/.test(valuesText[pos])) {
        num += valuesText[pos];
        pos++;
      }
      const n = Number(num);
      return Number.isNaN(n) ? num : n;
    } else {
      return null;
    }
  }

  while (pos < len) {
    skipWs();
    if (pos >= len || valuesText[pos] === ';') break;
    if (valuesText[pos] !== '(') {
      throw new Error(`Expected '(' at position ${pos}, got '${valuesText[pos]}'`);
    }
    pos++; // skip '('

    const row = [];
    for (let f = 0; f < 23; f++) {
      row.push(parseField());
      if (f < 22) {
        skipWs();
        if (valuesText[pos] === ',') pos++;
      }
    }

    skipWs();
    if (valuesText[pos] === ')') pos++;

    rows.push(row);

    skipWs();
    if (valuesText[pos] === ',') pos++;
    if (valuesText[pos] === ';') break;
  }

  return rows;
}

function gutenbergToMarkdown(content) {
  let text = content;

  // Remove ALL Gutenberg block delimiters (wp comments)
  text = text.replace(/<!-- \/?wp:[^>]*-->/g, '');

  // Convert blockquotes with optional nested p tags
  text = text.replace(/<blockquote[^>]*>\s*(.*?)\s*<\/blockquote>/gs, (_, inner) => {
    inner = inner.replace(/<p[^>]*>/gi, '').replace(/<\/p>/gi, '\n');
    inner = inner.replace(/<br\s*\/?>/gi, '\n');
    inner = inner.replace(/<[^>]*>/g, '').trim();
    return '\n> ' + inner.split('\n').map(l => l.trim()).filter(Boolean).join('\n> ') + '\n';
  });

  // Convert headings
  text = text.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '\n## $1\n');
  text = text.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '\n### $1\n');
  text = text.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '\n#### $1\n');
  text = text.replace(/<h5[^>]*>(.*?)<\/h5>/gi, '\n##### $1\n');
  text = text.replace(/<h6[^>]*>(.*?)<\/h6>/gi, '\n###### $1\n');

  // Convert unordered lists
  text = text.replace(/<ul[^>]*>\s*(.*?)\s*<\/ul>/gs, (_, inner) => {
    const items = [];
    const re = /<li[^>]*>(.*?)<\/li>/gs;
    let m;
    while ((m = re.exec(inner)) !== null) {
      items.push('- ' + m[1]);
    }
    if (items.length === 0) return '';
    return '\n' + items.join('\n') + '\n';
  });

  // Convert ordered lists
  text = text.replace(/<ol[^>]*>\s*(.*?)\s*<\/ol>/gs, (_, inner) => {
    const items = [];
    const re = /<li[^>]*>(.*?)<\/li>/gs;
    let m;
    let n = 1;
    while ((m = re.exec(inner)) !== null) {
      items.push(`${n++}. ` + m[1]);
    }
    if (items.length === 0) return '';
    return '\n' + items.join('\n') + '\n';
  });

  // Remove paragraph tags
  text = text.replace(/<p[^>]*>/gi, '').replace(/<\/p>/gi, '\n');

  // Convert <br> to newlines
  text = text.replace(/<br\s*\/?>/gi, '\n');

  // Convert inline formatting
  text = text.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**');
  text = text.replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**');
  text = text.replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*');
  text = text.replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*');

  // Convert links (double-quoted href)
  text = text.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');
  // Convert links (single-quoted href)
  text = text.replace(/<a[^>]*href='([^']*)'[^>]*>(.*?)<\/a>/gi, '[$2]($1)');

  // Strip remaining HTML tags, keep content
  text = text.replace(/<[^>]*>/g, '');

  // Decode HTML entities
  text = decodeHTMLEntities(text);

  // Collapse 3+ newlines to 2
  text = text.replace(/\n{3,}/g, '\n\n');

  // Remove trailing whitespace on each line
  text = text.split('\n').map(l => l.trimEnd()).join('\n');

  // Trim start/end
  text = text.trim();

  return text;
}

function getDescription(postExcerpt, markdownContent) {
  if (postExcerpt && postExcerpt.trim().length > 0) {
    return postExcerpt.trim().replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
  }
  let plain = markdownContent
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\*{1,3}(.*?)\*{1,3}/g, '$1')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/^>\s?/gm, '')
    .replace(/^[-*+]\s/gm, '')
    .replace(/^\d+\.\s/gm, '')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (plain.length > 150) {
    plain = plain.substring(0, 150).trimEnd();
    if (plain.length === 150) plain += '...';
  }
  return plain;
}

function createFrontmatter(post) {
  const title = post[5] || 'Untitled';
  const dateRaw = post[2] || '';
  const date = typeof dateRaw === 'string' ? dateRaw.substring(0, 10) : dateRaw;
  const content = gutenbergToMarkdown(post[4] || '');
  const excerpt = post[6] || '';
  const description = getDescription(excerpt, content);

  return `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
date: ${date}
category: "psychologia"
tags: []
author: "Tomek"
draft: false
---

${content}
`;
}

// --- Main ---

console.log('Reading SQL file...');
const sqlContent = readFileSync(SQL_PATH, 'utf-8');

// Extract all INSERT INTO `vlzy_posts` VALUES blocks
const lines = sqlContent.split(/\r?\n/);
const insertLines = [];

for (const line of lines) {
  if (line.startsWith('INSERT INTO `vlzy_posts` VALUES')) {
    insertLines.push(line);
  }
}

console.log(`Found ${insertLines.length} INSERT statements for vlzy_posts`);

if (insertLines.length === 0) {
  console.error('No INSERT INTO vlzy_posts statements found!');
  process.exit(1);
}

// Parse all rows
const allRows = [];
for (const insertLine of insertLines) {
  const valuesMatch = insertLine.match(/^INSERT INTO `vlzy_posts` VALUES (.+);?\s*$/);
  if (!valuesMatch) {
    console.error('Could not extract VALUES from INSERT line (first 100 chars):', insertLine.substring(0, 100));
    continue;
  }
  const valuesText = valuesMatch[1];
  try {
    const rows = parseInsertValues(valuesText);
    allRows.push(...rows);
  } catch (err) {
    console.error('Error parsing INSERT block:', err.message);
    console.error('First 200 chars of values:', valuesText.substring(0, 200));
    process.exit(1);
  }
}

console.log(`Parsed ${allRows.length} total rows from vlzy_posts`);

// Filter: post_type = 'post' AND post_status = 'publish'
const posts = allRows.filter(row => {
  const postType = row[20];
  const postStatus = row[7];
  return postType === 'post' && postStatus === 'publish';
});

console.log(`Found ${posts.length} published posts (post_type='post', post_status='publish')`);

// Stats
let converted = 0;
let skipped = 0;
const errors = [];

for (const post of posts) {
  const postName = (post[11] || '').toString().trim();
  if (!postName) {
    errors.push(`Post ID ${post[0]}: empty post_name, skipping`);
    skipped++;
    continue;
  }

  // Sanitize post_name for filesystem
  const safeName = postName.replace(/[<>:"/\\|?*\x00-\x1f]/g, '-').replace(/\.+$/, '');
  const postDir = join(BLOG_DIR, safeName);

  if (existsSync(postDir)) {
    console.log(`  SKIP: "${post[5]}" → ${safeName} (already exists)`);
    skipped++;
    continue;
  }

  try {
    const mdxContent = createFrontmatter(post);
    mkdirSync(postDir, { recursive: true });
    writeFileSync(join(postDir, 'index.mdx'), mdxContent, 'utf-8');
    console.log(`  OK: "${post[5]}" → ${safeName}`);
    converted++;
  } catch (err) {
    errors.push(`Post ID ${post[0]} ("${post[5]}"): ${err.message}`);
    skipped++;
  }
}

console.log(`\n=== Summary ===`);
console.log(`Total rows parsed:   ${allRows.length}`);
console.log(`Published posts:      ${posts.length}`);
console.log(`Converted (new):      ${converted}`);
console.log(`Skipped:              ${skipped}`);
if (errors.length > 0) {
  console.log(`\nErrors:`);
  for (const e of errors) {
    console.log(`  - ${e}`);
  }
}
