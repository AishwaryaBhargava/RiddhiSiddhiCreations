// Renders docs/logo-concepts/index.html to PNGs (one per logo, plus a contact sheet).
// Usage: node docs/logo-concepts/render.mjs   (needs playwright-core resolvable; see scratchpad shot folder)
import { chromium } from 'playwright-core'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const here = process.argv[2] ?? path.dirname(fileURLToPath(import.meta.url))
const browser = await chromium.launch({ channel: 'chrome', headless: true })
const page = await browser.newPage({ viewport: { width: 1560, height: 1200 }, deviceScaleFactor: 2 })
await page.goto('file:///' + path.join(here, 'index.html').replace(/\\/g, '/'), { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
await page.waitForTimeout(500)
for (const id of ['circle-light', 'circle-dark', 'rectangle-light', 'rectangle-dark', 'square-light', 'square-dark']) {
  await page.locator(`#${id} svg`).screenshot({ path: path.join(here, `logo-${id}.png`) })
}
await page.screenshot({ path: path.join(here, 'contact-sheet.png'), fullPage: true })
console.log('rendered')
await browser.close()
