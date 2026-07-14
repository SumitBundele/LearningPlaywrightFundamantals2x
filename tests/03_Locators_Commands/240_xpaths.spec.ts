//Xpath function

//1.Contains function
// input[contains(@id,"txt-username")]
//a[contains(@id,"btn-make-appointment")]
//a[contains(@id,"btn-make")] - Partial Match
//a[text()="Make Appointment"]
//a[contains(text(),"Make Appointment")]
//a[text()="Make Appointment" or @id="btn-make-appointment"] - 100 Either True
//a[starts-with(@id,"btn")]
//a[ends-with(@id,"btn")]


//CSS -input[id = "txt-username"]
//Xpath for same = //input[@id = "txt-username"]

// Which one do we have to use, XPath or CSS ?

// **Preference Rule**

// 1. Playwright Locator(getByX) ->
// 2.  page.locator(), id, name, class, and tagName ->
// 3.  CSS **Selector** ->
// 4.  XPath ( Fn, Axes)


//css is little bit fast as compared to Xpath