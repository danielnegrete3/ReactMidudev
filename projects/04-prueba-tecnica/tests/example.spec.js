// @ts-check
import  { test, expect }  from '@playwright/test';
const LOCALHOST_URL = 'http://localhost:5173/'
const IMAGE_CAT_API = 'thecatapi.com'

test('app get random images and facts', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
  
  // get the tags of the page 
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  // the content of we need to the test 
  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')


  // do a test
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.includes(IMAGE_CAT_API)).toBeTruthy()
});
