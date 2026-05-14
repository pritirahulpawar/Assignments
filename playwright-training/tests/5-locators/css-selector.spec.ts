// CSS Selector: CSS select tree is all about locating the elements by using css properties of the web elements

// CSS selector Syntaxes

//1. Syntax 1: tagname#id
//2. Syntax 2: tagname.className
//3. Syntax 3: tagname[attribute = "atrribute-value"]

//To cutshot the string

//4. Syntax 4: tagname[attribute *= "atrribute-value"] // refers contains
//5. Syntax 5: tagname[attribute ^= "atrribute-value"] // refers starts-with
//6. Syntax 6: tagname[attribute $= "atrribute-value"] // refers ends-with

//Syntax 7: tagname[attribute = "atrribute-value"][attribute1 = "atrribute-value1"]

//Syntax 8: Advance CSS Selector with relationship

//technique : target > parent > ancestor > ancestor's parent

//css Selector: target > ancestor's parent > parent > target

// ancestor : ul[class="leftmenu"]
// parent element: li
// target element: a[href="services.htm"]


import {test, expect} from "@playwright/test";

test('CSS Selector', async({page}) => {
    //Navigate to google URL
    await page.goto('https://www.google.com');

    //Locate the Google search box using Syntax 1
    await page.locator('textarea#APjFqb');

    //Locate the Google search box using Syntax 2
    await page.locator('textarea.gLFyf');

    //Locate the Google search box using Syntax 3
    await page.locator('textarea[title="Search"]');

    //Locate the 'How Search Works' Hyperlink using Syntax 4
    await page.locator('a[href *= "howsearchworks"]');

    //Locate the Google search box using Syntax 5
    await page.locator('textarea[title ^= "Sea"]');

    //Locate the Google search box using Syntax 6
    await page.locator('textarea[title $= "rch"]');

    //Locate the Google Search box using Syntax 7
    await page.locator('textarea[title="Search"][aria-label="Search"]');

    //Launch the parabank application by using URL www.parabank.com
    await page.goto('https://parabank.parasoft.com/parabank/admin.htm');

    //Locate the 'Services' web element using Syntax 8
    await page.locator('ul[class="leftmenu"] > li > a[href="services.htm"]');

});