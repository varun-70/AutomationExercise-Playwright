const { test } = require('@playwright/test');
const {HomePage} = require("../pages/HomePage");
const {Constants, Categories, ApiList, TitleTexts} = require("../constants/Constants");
const {ApiAutomation} = require("../utils/ApiAutomation");

test.describe('Home Page', async () => {
    let homePage;
    test.beforeEach('Initialize',async ({page}) => {
        homePage = new HomePage(page);
        await page.goto('https://automationexercise.com/');
    })

    test('Verify API Documentation', async ({ playwright }) => {
        await homePage.clickApiListForPracticeBtn();
        await homePage.clickApiInList(ApiList.API_1_GET_ALL_PRODUCTS_LIST);

        // Get API URL and product information
        const url = await homePage.getApiURL(ApiList.API_1_GET_ALL_PRODUCTS_LIST);
        const otherApiProducts = await homePage.getLastThreeApiProducts(ApiList.API_1_GET_ALL_PRODUCTS_LIST);

        const api = new ApiAutomation();

        // Prepare post data if there are more than 3 products
        let postData;
        if(otherApiProducts.length > 3) {
            postData = {key: 'value'};
        }

        // Send API request and assert response
        const response = await api.getResponse(playwright, url, postData, otherApiProducts[0]);
        await api.assertApiResponse(response, Number(otherApiProducts[otherApiProducts.length - 2]));
    })

    test('Verify Home Page Elements', async () => {
        await homePage.assertCarouselSliderCount(3);
        await homePage.assertCategoryItemsCount(3);
        await homePage.assertBrandsItemsCount(8);
        await homePage.assertFeatureItemsCountAtLeast(10);
        await homePage.verifyElementIsVisible(homePage.submitBtn);
        await homePage.verifyElementIsVisible(homePage.subscribeEmailTextField);
    })

    test('Verify Shopping Cart Flow for T-shirts', async () => {
        await homePage.clickCategoryItem(Categories.MEN);
        await homePage.clickCategoryItem(Categories.MEN, Categories.MEN_TSHIRTS);
        await homePage.assertTitleTextIsVisible(TitleTexts.MEN_TSHIRTS_TITLE_TEXT);
        // TODO: Add Test
    })
})