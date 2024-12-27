class Constants {
}

const TitleTexts = Object.freeze({
    MEN_TSHIRTS_TITLE_TEXT:  'Men - Tshirts Products',
});

const Categories = Object.freeze({
    MEN: 'Men',
    MEN_TSHIRTS: 'Tshirts',
    MEN_JEANS: 'Jeans',
    WOMEN: 'Women',
    WOMEN_DRESS: 'Dress',
    WOMEN_TOP: 'Top',
    WOMEN_SAREE: 'Saree',
    KIDS: 'Kids',
    KIDS_DRESS: 'DRESS',
    KIDS_TOP_AND_SHIRTS: 'Top & Shirts',
});

const Products = Object.freeze({
    PURE_COTTON_NEON_GREEN_TSHIRT: 'Pure Cotton Neon Green Tshirt',
});

const ApiList = Object.freeze({
    API_1_GET_ALL_PRODUCTS_LIST: 'API 1: Get All Products List',
    API_2_POST_TO_ALL_PRODUCTS_LIST: 'API 2: POST To All Products List',
    API_3_GET_ALL_BRANDS_LIST: 'API 3: Get All Brands List',
    API_4_PUT_TO_ALL_BRANDS_LIST: 'API 4: PUT To All Brands List',
    API_5_POST_TO_SEARCH_PRODUCT: 'API 5: POST To Search Product',
    API_6_POST_TO_SEARCH_PRODUCT_WITHOUT_PARAM: 'API 6: POST To Search Product without search_product parameter',
    API_7_POST_TO_VERIFY_LOGIN_VALID: 'API 7: POST To Verify Login with valid details',
    API_8_POST_TO_VERIFY_LOGIN_WITHOUT_EMAIL: 'API 8: POST To Verify Login without email parameter',
    API_9_DELETE_TO_VERIFY_LOGIN: 'API 9: DELETE To Verify Login',
    API_10_POST_TO_VERIFY_LOGIN_INVALID: 'API 10: POST To Verify Login with invalid details',
    API_11_POST_TO_CREATE_USER_ACCOUNT: 'API 11: POST To Create/Register User Account',
    API_12_DELETE_TO_DELETE_USER_ACCOUNT: 'API 12: DELETE METHOD To Delete User Account',
    API_13_PUT_TO_UPDATE_USER_ACCOUNT: 'API 13: PUT METHOD To Update User Account',
    API_14_GET_USER_ACCOUNT_DETAIL: 'API 14: GET user account detail by email'
});

module.exports = {
    Constants,
    Categories,
    Products,
    ApiList,
    TitleTexts,
};