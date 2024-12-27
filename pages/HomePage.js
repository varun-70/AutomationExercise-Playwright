const { expect } = require('@playwright/test');

/**
 * Represents the Home Page of the application.
 */
class HomePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        // Locators for various elements on the page
        this.sliderCarousel = page.locator('li[data-target="#slider-carousel"]');
        this.categoryItems = page.locator('div[class="panel panel-default"]');
        this.brandsItems = page.locator('ul[class="nav nav-pills nav-stacked"] li');
        this.featureItems = page.locator('div[class="features_items"] div[class="col-sm-4"]');
        this.submitBtn = page.locator('button[id="subscribe"]');
        this.subscribeEmailTextField = page.locator('input[id="susbscribe_email"]');
        this.apiListForPracticeBtn = page.locator('[class="apis_list"] button[class="btn btn-success"]');
    }

    async assertCarouselSliderCount(expected) {
        await expect(this.sliderCarousel).toHaveCount(expected);
    }

    async assertCategoryItemsCount(expected) {
        await expect(this.categoryItems).toHaveCount(expected);
    }

    async assertBrandsItemsCount(expected) {
        await expect(this.brandsItems).toHaveCount(expected);
    }

    async assertFeatureItemsCountAtLeast(minCount) {
        const actualCount = await this.featureItems.count();
        await expect(actualCount).toBeGreaterThanOrEqual(minCount);
    }

    async verifyElementIsVisible(element) {
        await expect(element).toBeVisible();
    }

    async assertTitleTextIsVisible(title) {
        const titleElement = await this.page.locator(`//h2[@class="title text-center" and contains(text(), "${title}")]`);
        await expect(titleElement).toBeVisible();
    }

    async clickCategoryItem(categoryItem, subCategoryItem) {
        if (subCategoryItem == null) {
            await this.page.locator(`a[href="#${categoryItem}"]`).click();
        } else {
            await this.page.locator(`//div[@id="${categoryItem}"]//a[contains(text(), "${subCategoryItem}")]`).click();
        }
    }

    async clickApiListForPracticeBtn() {
        await this.apiListForPracticeBtn.first().click();
    }

    async clickApiInList(scenario) {
        await this.page.locator(`//u[contains(text(), "${scenario}")]`).click();
    }

    async getApiURL(scenario) {
        return await this.page.locator(`//u[contains(text(), "${scenario}")]/../../../following-sibling::div//a[@target="_blank"]`).textContent();
    }

    /**
     * Retrieves the API products for a given scenario.
     * @param {string} scenario - The scenario to search for.
     * @returns {Promise<string[]>} An array of product names.
     */
    async getLastThreeApiProducts(scenario) {
        const products = this.page.locator(`(//u[contains(text(), "${scenario}")]/../../../following-sibling::div//li[@class="list-group-item"])[position()>1]`);
        return await products.evaluateAll(elements => elements.map(el => el.textContent.split(':')[1].trim()));
    }
}
module.exports = { HomePage };