const { expect } = require('@playwright/test');

/**
 * Utility class for API automation tasks.
 */
class ApiAutomation {
    /**
     * Sends an HTTP request and returns the response.
     * @param {Object} playwright - The Playwright object.
     * @param {string} url - The URL to send the request to.
     * @param {Object} postRequest - The request body for POST and PUT requests.
     * @param {string} requestMethod - The HTTP method to use.
     * @returns {Promise<Object>} The response object.
     */
    async getResponse(playwright, url, postRequest, requestMethod) {
        const apiContext = await playwright.request.newContext();
        let response;

        switch (requestMethod) {
            case ApiHttpRequestMethods.GET:
                response = await apiContext.get(url);
                break;
            case ApiHttpRequestMethods.POST:
                response = await apiContext.post(url, { json: postRequest });
                break;
            case ApiHttpRequestMethods.PUT:
                response = await apiContext.put(url, { json: postRequest });
                break;
            case ApiHttpRequestMethods.DELETE:
                response = await apiContext.delete(url);
                break;
            default:
                throw new Error('Invalid HTTP request method');
        }

        return response;
    }

    /**
     * Asserts the API response status.
     * @param {Object} response - The API response object.
     * @param {number} expectedApiStatus - The expected HTTP status code.
     */
    async assertApiResponse(response, expectedApiStatus) {
        expect(response.status()).toEqual(expectedApiStatus);
        // TODO: Add assertions for other criteria when proper APIs are available
    }
}

/**
 * Enum for HTTP request methods.
 */
const ApiHttpRequestMethods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};

module.exports = {
    ApiAutomation,
    ApiHttpRequestMethods,
};