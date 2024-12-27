# Automation Exercise Playwright

# Work in progress

## Running Tests



## Test Reports

The project uses Allure for test reporting. After running the pageTests, you can generate the Allure reports using the following command:

1. **Generate Allure report:**
    ```sh
    allure report
    ```

2. **Open Allure report:**
    ```sh
    allure serve allure-results 
    ```
   or
   ```shell
   allure serve
   ```

3. **To save report in a single file with report name**
   ```shell
   allure generate -c --single-file allure-results --report-name
   ```

### Report Screenshots

|  |  |
| ----- | ------ |
| ![img.png](docs/images/allureReporting/img_01.png) | ![img_1.png](docs/images/allureReporting/img_02.png)    |
| ![img_2.png](docs/images/allureReporting/img_03.png) | ![img_3.png](docs/images/allureReporting/img_04.png)   |

https://www.saucedemo.com/v1/