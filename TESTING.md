## CONTENTS

* [HTML Validator](#html-validator)
* [CSS Validator](#css-validator)
* [JavaScript Validator](#javascript-validator)
* [Lighthouse](#lighthouse)
* [Wave](#wave)
* [Device Responsiveness](#device-responsiveness)
* [Manual Testing](#manual-testing)

## HTML Validator  


### Problems/Bugs highlighted and how they were fixed  

* There were unwanted // inside the meta elements in the head of the html document.  
  This was fixed by removing them.

### Final Test Results

![HTML Validator](assets/media/testing/html-validator.png)
![HTML Validator](assets/media/testing/error-html-validator.png)

## CSS Validator  


### Problems/Bugs highlighted and how they were fixed  

* .button had an unknown value of re instead of rem.  
  The fix was to correct spelling mistake.  

* The font family Indie Flower was not encased in ''.  
  This was fixed by adding ''.

* Overflow-y: overlay was not recognised in the validator.  
  I changed this to a more modern overflow-y: scroll to fix issue.

### Final Test Results  

![CSS Validator](assets/media/testing/css-validator.PNG)

## JavaScript Validator 


### Problems/Bugs highlighted and how they were fixed  

* A number of unnecessary semi-colons were found.
  These semi-colons were deleted to fix the warning.

* There were 2 warnings stating: 'Functions declared within loops referencing out scoped variable may lead to confusing semantics.' This was where I initially had two long functions within click event listener loops containing other functions. These were for both my answer buttons and user animal choice buttons.  
I fixed the issue by adding two functions for when the relevant button was clicked ('questionClick' and 'gamRun') so I could take the other functions out of the loop.  

### Final Test Results  

![JavaScript Validator](assets/media/testing/jshint.png)

## Lighthouse  

### Problems/Bugs highlighted and how they were fixed  

* The 404 page had a contrast issue with the text color.  
  I changed the text to black to fix the problem.  

* Large images affecting the performance score.  
  All the images and gif was changed to webp files to reduce size and I scaled down the images to reduce further. This helped the performance score to get to 100 on desktop. Lighthouse was stating that these images affected the cache performance on the mobile device so the score was a bit lower than I would have liked. Cache issues are out of scope of this project but I will look into this in the future.  
   

### Final Test Results

![Desktop Site](assets/media/testing/lighthouse-desktop.png)  

![Mobile Site](assets/media/testing/lighthouse-mobile.png)  

![Desktop Site 404 Page](assets/media/testing/lighthouse-404-desktop.png)  

![Mobile Site 404 Page](assets/media/testing/lighthouse-404-mobile.png)

## Wave  

### Problems/Bugs highlighted and how they were fixed  

* Warnings on alt image descriptions.  
  I changed the image descriptions to make clearer and this fixed the warning.

* Warning about 15 possible headings instead of paragraph elements.  
  All sugested changes were made and this fixed the issue.

* Redundant link on 404 page. There was a link back to the question area both when you press the logo and the play again button.  
  I removed the link n the logo and it fixed the warning.  
   

### Final Test Results


![Wave Testing](assets/media/testing/wave.png)  

![Wave Testing 404 Page](assets/media/testing/wave-404.png)  

## Device Responsiveness  

Responsiveness was tested throughout the development by using dev tools on every section of the site. I then thoroughly tested the site on [responsivedesignchecker.com](https://www.responsivedesignchecker.com/checker.php?url=https%3A%2F%2Fdaviddock.github.io%2FElephantMouseMonkey%2F&width=1400&height=700), especially focusing on whether the site works on small devices of 320px wide and also the desktop breakpoint of 1024px wide. This website is fully responsive on all devices. 

### Problems/Bugs highlighted and how they were fixed    

* The background image jumped to accomodate a scroll bar on devices over 1024px when going from the questions area to the rules area.  
The fix was to add overflow-y: scroll onto the body element. I learnt this technique from [stackoverflow.com](https://stackoverflow.com/questions/18548465/prevent-scroll-bar-from-adding-up-to-the-width-of-page-on-chrome*/).

## Manual Testing  

I have tested the site on Chrome, Safari and Microsoft Edge browsers and it works well on all. As well as the above responsive design testing I have also personally tested the website on a laptop, IPad and a number of mobile devices.

I undertook the following manual testing for the website:

### Question Area  

| Feature | Expected Outcome | Test Performed | Result | Pass/Bug fixed |  
| --- | --- | --- | --- | --- |  
| Logo links to the question area | The page refreshes | Clicked the logo several times | Refreshes page | Pass |
| Random Question | All questions appear eventually | Keep refreshing the page | All questions appeared | Pass |
| Hover effect on answer buttons | Button should change color on hover | Hover over button with mouse | The color changed | Pass |
| Focus changed | Tab should change focus on the logo and answer buttons and they should be highlighted | Press tab to go through focus items | Focus changed correctly | Pass |
| Question answered incorrectly | Container should turn red, guess again message should appear and picked answer should disappear | Get lots of questions wrong | Feature worked correctly | Pass |
| Question answered corectly | Should take you to the rules area | Answer a number of questions correctly | Taken to rules area | Pass |  

### Rules Area  


| Feature | Expected Outcome | Test Performed | Result | Pass/Bug fixed |  
| --- | --- | --- | --- | --- |  
| Hover effect on destination buttons | Button should change color on hover | Hover over button with mouse | The color changed | Pass |  
| Focus changed | Tab should change focus on destination buttons and they should be highlighted | Press tab to go through focus items | Focus changed correctly | Pass |
| Changing background image | When the button is pressed the game area should open and have the relevent background image | Try out all the destination buttons | The relevent background image apeared in the game area | Pass |  

### Game Area  

| Feature | Expected Outcome | Test Performed | Result | Pass/Bug fixed |  
| --- | --- | --- | --- | --- | 
| Hover effect on animal choice buttons | Button should have brighter background on hover | Hover over button with mouse | The background changed | Pass |  
| Focus changed | Tab should change focus on animal choice buttons and they should be highlighted | Press tab to go through focus items | Focus changed correctly | Pass |  
| Making your choice | When the user chooses their animal it should appear in the results area under 'you' and a random choice for the computer should appear under 'computer' | Play the game a number of times choosing each animal | The correct image choice appears and a random choice is made by the computer | Pass |  
| Color and Opacity for winner and loser Image | The Winners image should have a green background and the losers image should have a red background and the opacity should be decreased to make the winner stand out | Play the game a number of times | Expected color and opacity changes matching the result | Pass |  
| Result message | A message at the bottom of the screen should appear stating what happened and who won that point | Play the game a number of times | The relevent message that matched the result was displayed | Pass |  
| Score counter | After each round a point should add to the relevant persons score counter | Play the game a number of times | The point was added to the correct persons score | Pass |
| Win | When the users score gets to 5 you should get taken to the winners area |  Play the game | If i got to 5 points I was taken to the winners area | Pass |
| Loose | When the computers score gets to 5 you should get taken to the loosers area |  Play the game | If the computer got to 5 points I was taken to the loosers area | Pass |  


### Winners Area

| Feature | Expected Outcome | Test Performed | Result | Pass/Bug fixed |  
| --- | --- | --- | --- | --- | 
| Hover effect on play again button | Button should change color on hover | Hover over button with mouse | The color changed | Pass |  
| Focus changed | Tab should change focus on play agin button and it should be highlighted | Press tab to go through focus items | Focus changed correctly | Pass |
| Play again | Pressing the play again button should take the user back to the questions area | Tried the button a number of times | Took me back to the questions area | Pass |
| Confetti gif | A confetti gif background image should be displayed | Played game | The image played, with some issues on safari browser |  Safari browser did not like the inital gif image and kept flashing black so I changed this to a webp image which resolved the bug |


### Loser Area

| Feature | Expected Outcome | Test Performed | Result | Pass/Bug fixed |  
| --- | --- | --- | --- | --- | 
| Hover effect on play again button | Button should change color on hover | Hover over button with mouse | The color changed | Pass |  
| Focus changed | Tab should change focus on play agin button and it should be highlighted | Press tab to go through focus items | Focus changed correctly | Pass |
| Play again | Pressing the play again button should take the user back to the questions area | Tried the button a number of times | Took me back to the questions area | Pass |  


### 404 Error Page

| Feature | Expected Outcome | Test Performed | Result | Pass/Bug fixed |  
| --- | --- | --- | --- | --- | 
| Home button | Pressing the Home button should take the user back to the questions area | Tried the button a number of times | Took me back to the questions area | Pass |









