import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distDir = path.join(__dirname, 'dist')
const indexHtmlPath = path.join(distDir, 'index.html')

if (!fs.existsSync(indexHtmlPath)) {
  process.exit(1)
}

let html = fs.readFileSync(indexHtmlPath, 'utf-8')

const linkRegex = /<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/
const match = html.match(linkRegex)

if (match) {
  const cssHref = match[1]
  const cssFileName = path.basename(cssHref)
  const cssPath = path.join(distDir, 'assets', cssFileName)

  if (fs.existsSync(cssPath)) {
    const cssContent = fs.readFileSync(cssPath, 'utf-8')

    html = html.replace(match[0], `<style>${cssContent}</style>`)
    fs.writeFileSync(indexHtmlPath, html)
  }
}
