import {Page, Locator, expect} from '@playwright/test';

export class webCommons{
    page: Page;
    //locator: Locator;

    constructor(page: Page){
        this.page = page;
    }

    // Common method to generate a web element from the locator
    async element(locator: string): Promise<Locator>{
        return this.page.locator(locator);
    }

    //common method to launch the application
    async launchTheApplication(url: string, title ?: string): Promise<void>{
        await this.page.goto(url);
        if(title){
            await expect(this.page).toHaveTitle(title);
        }
    }

    //Common method to scroll to the element
    async scrollToElement(locator: string): Promise<void>{
        const element = await this.element(locator);
        await element.scrollIntoViewIfNeeded();
    }

    //common method to click on element
    async clickElement(locator: string): Promise <void>{
        const element = await this.element(locator);
        await element.click();
    }

    //Common method to perform DoubleClickElement
    async doubleClickElement(locator: string): Promise<void>{
        const element = await this.element(locator);
        element.dblclick();
    }

    //common method to perform right click on the element
    async rightClickElement(locator: string): Promise<void>{
        const element = await this.element(locator);
        await element.click({button: 'right'});
    }

    //common method to hover over the element 
    async hoverOverElement(locator: string): Promise<void>{
        const element = await this.element(locator);
        await element.hover();
    }

    // common method to type within the textbox element
    async typeTextWithinTextBox(locator: string, text: string): Promise<void>{
        const element = await this.element(locator);
        await element.clear();
        await element.fill(text);
    }

    //common method to select the option from the dropdown
    async selectOption(locator: string, option:string): Promise<void>{
        const element = await this.element(locator);
        await element.selectOption(option);
    }

    //common method to check the checkbox
    async checkTheCheckBox(locator: string): Promise<void>{
        const element = await this.element(locator);
        if(!await element.isChecked()){
            await element.click();
        }

    }

    //common method to get the text from the element
    async getTheElementText(locator: string): Promise<string>{
        const element = await this.element(locator);
        return await element.textContent() || ' ';
    }

    //common method to get the value from the attribute
    async getElementAttribute(locator: string, attribute: string): Promise<string | null>{
        const element = await this.element(locator);
        return await element.getAttribute(attribute);
    }

    //common method to check if the element is visible
    async isElementVisible(locator: string): Promise<boolean>{
        const element = this.element(locator);
        return (await element).isVisible();
    }

    //common method to check if the element is Disappeared
    async isElementDisappeared(locator:string): Promise<boolean>{
        const element = await this.element(locator);
        return await element.isHidden();
    }

    //common method to upload a file to the element
    async uploadFiles(locator: string, filePath: string): Promise<void>{
        const element = await this.element(locator);
        await element.setInputFiles(filePath);
    }

    //common method to handle alerts popup
    async handleAlert(action: 'accept' | 'dismiss', promptText ?: string): Promise<void>{
        this.page.once('dialog', async(dialog) =>{
            if(promptText){
                await dialog.accept(promptText);
            }
            else{
                if(action === 'accept'){
                    await dialog.accept();
                }
                else{
                    await dialog.dismiss();
                }
            }
        });
    }

    //common method to take a screenshot
    async takeScreenshot(filePath: string): Promise<void>{
        await this.page.screenshot({path: filePath});
    }

    //common method to set the resolution of the page
    async setResolution(width: number, height: number): Promise<void>{
        await this.page.setViewportSize({width, height});
    }

    //common method to refresh the page
    async refreshPage(): Promise<void>{
        await this.page.reload();
    }

    //common method to locate the frame element
    async frameElement(frameLocator: string, frameElement: string): Promise<Locator>{
        const element = this.page.frameLocator(frameLocator);
        const frame = await element.locator(frameElement);
        return frame;
    }
    
    //common method to locate the element by using playwright locator methods
    async locateElementByMethod(locator: string, role ?: Parameters<Page['getByRole']>[0]): Promise<Locator>{
        //const [method, value] = locator.split('_',2);

        const values = locator.split('_');
        const method = values[0];
        const value = values[1];

        if(method === 'getByRole'){
            if(!role){
                throw new Error('Role is required fot getByRole locator method');
            }
            return this.page.getByRole(role,{name: value ?? ''});
        }
        else if(method === 'getByText'){
            return this.page.getByText(value ?? '');
        }
        else if(method === 'getByLabel'){
            return this.page.getByLabel(value ?? '');
        }
        else if(method === 'getByPlaceholder'){
            return this.page.getByPlaceholder(value ?? '');
        }
        else if(method === 'getByAltText'){
            return this.page.getByAltText(value ?? '');
        }
        else if(method === 'getByTitle'){
            return this.page.getByTitle(value ?? '');
        }
        
        throw new Error(`Unsupported locator method: ${method}`);
    }
     //Common method to compare the text values(actual text contained in the element and expected text)
    async compareText(actual: string, expected: string): Promise<void> {
        expect(actual.trim()).toContain(expected.trim());
    }
}