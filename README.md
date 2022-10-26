
![songBirb heading](readmeimages/songbirbheading.png)

<br>
<br>
<br>

# ABOUT SONGBIRB

The simple goal of songBird is to help people to learn the songs of various songbirds.
With enough practice they should be guessing the songs on the first go of songBirb and
then be able to recognise the birdsong in the outdoors whether on a walk or in their back gardens.

<br>
<br>
<br>

# INITIAL WIREFRAMES
![Balsamiq mobile wireframe screenshots](readmeimages/songbirb-wireframe-mobiles.png)
![Balsamiq desktop wireframe screenshot1](readmeimages/songbirb-wireframe-desktop1.png)
![Balsamiq desktop wireframe screenshot1](readmeimages/songbirb-wireframe-desktop2.png)

<br>
<br>
<br>

# UX (USER-EXPERIENCE)
The target audience is both broad and narrow at the same time. 
From 8 to 80, the only requirement is an interest in birds. 

Maybe a more niche hobby in the past I think the lockdowns of recent years have given a broader range of people an interest in nature and in particular birdlife and the their songs. The dawn chorus never seemed louder than during those early extreme lockdowns, without so many cars on the road and planes in the sky. A much needed bright spot during grim times. 

Even experienced birdwatchers can struggle to recognise the individual calls and they can seem baffling to newcomers. But a little knowledge of birdsong can really add to the experience of birdwatching or enhance a walk to the woods or park. 

<br>
<br>
<br>

# USER STORIES


## VISITOR GOALS

* I want to be able to discern the purpose of the site quickly
* I want to be able to find out how to play the game if necessary
* I want to be able to play the game as many times as I like
* I want be able to reset the game easily
* I want to learn the songs of birds

<br>
<br>
<br>

# LOGO

![songBirb Logo 1](readmeimages/songbirblogo1.png)

![songBirb Logo 2](readmeimages/songbirblogo2.png)

![songBirb Logo  3](readmeimages/songbirblogo3.png)

I used a simple font for the other elements in the game so that everything is easy to read so I thought that I could use a more interesting font for the name. I group a bunch of possibilities together and in the end I chose a font called Embryo.

I felt it was eyecatching and suited the quirky title. I just adjusted the kerning and replaced the superscript-dot over the i with a simple bird icon. I arranged the logo camelCase as a little nod to the javascript module. I like the blocky format and it works well as a solid color or reversed out of a background color.

<br>
<br>
<br>

# GAME OVERVIEW

![gameoverview](#)


The game in based on the famous Wordle. I've tried to change some of the key components so the overall look is different though, from the colour scheme to the key and tile shapes. 
A big difference is the audio aspect and the fact it's to be used as a learning aid. 
To begin the user presses play on the audio navigation button and listens to the birdsong that is played. Then they can proceed to the birdname guess part of the game. Once a birdname is typed in and the enter button (↵) is clicked, it will trigger a flipping animation on the tiles and change the tile colour depending on whether a letter is present in the birdname, or not. If present in the birdname but in the wrong place, or present in the birdname and in the correct place, or not in the birdname at all. At the same time, the keyboard keys used also change to the relevant colour.
With each guess the user will should relisten to the birdsong and over time will hopefully come to 
recognise each tune and eventually be able to guess the bird on the first go!

<br>
<br>
<br>

# INTRO SPLASH SCREEN

![introsplashscreen](#)

I've add a splash screen on initial load of the game. It contains the songBirb logo and the line:
Time to learn some birdsong. This should give the user an instant idea of what the site is about.
I set the intro page so it loads and disappears quickly so it doesn't delay the user too much.
I also wanted to use a brighter colour on the intro screen against the blue of the main game to provide some extra contrast and separation between the two elements.

<br>
<br>
<br>

# RULES MODAL

![rulesmodal](#)

I want the user to be able find out what the purpose of the site is easily and to understand how to play the game. With this in mind I included a modal that fills the screen when the ? button is clicked. While the modal is active it overlay covers the rest of the screen and prevents the user from acessing the game until it's closed. The modal can be close using the x in the top right of the info panel or for ease of use just by clicking the overlay background itself. I include the rules modal button with the audio naviagtion to create a compact arrangement of all the game buttons that would also be more mobile screen size friendly.

<br>
<br>
<br>

# AUDIO CONTROL

![audiocontrol](#)

The audio navigation is simple set-up. The play button is largest as this will probably be the main button used. There is also a prev and next button in case the user wants to play multiple games and toggle through the birdsong array. Once playing a progress bar pops-up to give a guide to how long
the particular birdsong will play for, to relisten to the current song the user just needs to press the play button again. 

<br>
<br>
<br>

# THE GAME TILES

![gametiles](#)

I've changed the game tiles to a circle format to differantiate for Wordle.
At the moment it's currently arranged for a 9 letter birdname.

<br>
<br>
<br>

# THE KEYBOARD

![thekeyboard](#)

I tried a circle format for the keyboard as well but I felt it was too much with the tiles and didn't balance on screen. So switched to a square format with a rounded corner that is also reflected in the audio nav component and modal.

<br>
<br>
<br>

# WIN AND RELOAD

![winreload](#)

I hope that the user will want to play multiple times so on WIN a congratulations message will
pop-up with the option to try again. I hope to set this up so the intro splash page won't reload, just the game.

<br>
<br>
<br>

# LOSE AND RELOAD

![losereload](#)

I hope that the user will want to play multiple times so on LOSE a commiserations message will
pop-up with the option to try again. I hope to set this up so the intro splash page won't reload, just the game.

<br>
<br>
<br>

# FUTURE FEATURES

There are so many features that I'd like to add given more time and skill.
* Expand the library to include many more birds, with names of different lengths.
From Wren to Nightingale.
* Add code so the tiles would change to suit the length of birdname.
* Add options so the user could adapt the game to their needs e.g be able to select 
birds to guess by location.
* Add ability to track their progress, keep their statistics on record.

<br>
<br>
<br>

# LANGUAGES USED

* HTML
* CSS
* JAVASCRIPT
* MARKDOWN

<br>
<br>
<br>

# FRAMEWORKS, LIBRARIES & PROGRAMS USED

* BALSAMIQ - to create wireframe website mockups
* GITPOD - to create the website and version control
* GITHUB - to save and store the files for the website
* ADOBE ILLUSTRATOR - to create the logo and various headings
* ADOBE INDESIGN - ran the readme text through InDesign's spellchecker
* AM I RESPONSIVE - to display the website on a range of devices
* RESPONSIVEDESIGNCHECKER.COM - to check the display of the website on a range of devices
* FONT AWESOME - for icons
* FAVICON.IO -  to create a favicon
* XENO_CANTO>ORG - for birdsong audio
* GOOGLE DEV TOOLS - for troubleshooting and testing fixes
* W3C HTML & CSS VALIDATORS - to test HTML and CSS code
* JSHINT - to test javascript
* SLACK, STACKOVERFLOW, YOUTUBE, GOOGLE, W3C Schools - for help with troubleshooting errors
* COOLORS.CO - to check colour contrast
* W3C SPELL CHECKER - to check website spelling
* FREECONVERT.COM - to compress mp4
* EZGIF.COM - to convert compressed mp4 to gif for README
* RECORD IT PRO - for screen-capturing video and converting mp4 to gif

<br>
<br>
<br>

# MANUAL TESTING
* I manually tested each link in different browsers and at different sizes.
* I checked responsiveness using web dev tools in Chrome and Firefox. I manually resized each page to check flow and behaviour. I also viewed the site at various sizes: desktops to mobiles.
* I also used https://responsivedesignchecker.com to check the website performance on a range of devices.
* I used the W3C SPELL CHECKER to check website spelling.

<br>
<br>
<br>

# VALIDATION

<br>
<br>
<br>

# BUGS

## HORIZONTAL SCROLL AT MOBILE SCREEN SIZES

* **EXPECTED** - the game to work well on mobile, tablet and desktop
* **TESTING** - launched website using terminal, used web dev tools to test the game at various sizes. 
* **RESULT** - I noticed a of small amount horizontal scroll at mobile-screen sizes (a problem that
I'd missed in my Portfolio 1 project but was highlighted in my assessment report)
* **FIX** - I adjusted my CSS media queries to correct it.

## AUDIO NAVIGATION BUTTONS AND MODAL OVERLAY ISSUE

* **EXPECTED** - when the info modal was activated it would overlay the game container and all its elements
* **TESTING** - launched website using terminal, initially just tested the desktop view. 
* **RESULT** - once the info modal was selected some of the buttons for the audio naviagtion appeared over the info screen 
* **FIX** - I added a Z-index to correct the problem.

## WHEN GAMEOVER, COULD STILL DELETE LETTERS

* **EXPECTED** - on completion of the game, win or lose, the game is over and has to to be refreshed to play again
* **TESTING** - launched website using terminal, initially just tested the desktop view. 
* **RESULT** - noticed that on completion of the game, after the win/lose/try again message pops up you could still access the tiles and delete letters.
* **FIX** - in the javascript I had a line 'isGameOver = false;', changed to 'isGameOver = true;' to fix the error.

## WORDTILES APEARING OVER GAME MESSAGE WHEN FLIPPING

* **EXPECTED** - on completion of the game, win or lose, the game message would appear over the game board, slightly transparent so you can see the tiles underneath it.
* **TESTING** - launched website using terminal, initially just tested the desktop view. 
* **RESULT** - noticed that on completion of the game, after the win/lose/try again message pops up the game tile briefly appeared over the message box when flipping over.
* **FIX** - I added a Z-index to the message container to keep it above the tiles.


<br>
<br>
<br>

# DEPLOYMENT

![deployment](#)

* The site was deployed to GitHub pages<br>

* The steps to deploy are as follows:
* Go to GitHub and select the repository for the project
* Navigate to the Settings tab
* Select Pages from the left hand navigation window
* Select Deploy from a branch under the source drop-down menu
* Select main from the Branch dropdown menu
* Make sure the /root folder is selected and press save
* The site has now been deployed, it may take a few minutes before it is live
* Here is the deployed link:

<br>
<br>
<br>

# HOW TO FORK

![how to fork](#)

* Login/signup to GitHub.
* Locate the relevant repository, for example: 
* Click on the 'Fork' button in the upper left.
* The forked version of this repo will be generated.

<br>
<br>
<br>

# VERSION CONTROL

I used GITPOD for version control software. Regular git add ., git commit -m, and git push were used to add, save and push the code to the GITHUB Reop where the source code is stored. I adjusted my git commit messages formatting midway through the project to reflect the feedback from my Portfolio 1 Assessment report.

# CREDITS

* The overall concept is based on the Wordle game
* Intro splash page tutorial by Conor Bailey was very instructive: 
https://www.youtube.com/watch?v=2ak37WrbSDg
* I referenced many youtube tutorials on wordle clones but in particular Ania Kubów:
https://www.youtube.com/watch?v=mpby4HiElek
* Modal overlay tutorial by Web Dev Simplified was excellent:
https://www.youtube.com/watch?v=MBaw_6cPmAw
* A tutorial on audio by Traversy Media was very useful:
https://www.youtube.com/watch?v=QTHRWGn_sJw


<br>
<br>
<br>

# MUSIC

![xeno canto](readmeimages/xeno-canto-screenhot.png)

The birdsongs used were all selected from https://xeno-canto.org.
Sharing wildlife sounds from around the world. A wonderful website.

<br>
<br>
<br>

# ACKNOWLEDGEMENTS
