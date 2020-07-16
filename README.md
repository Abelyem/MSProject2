# Interactive Frontend Development Milestone

I've created a website which makes use of an API providing information on different (both alcoholic and non-alcoholic)
drinks. The aim of the website is to allow any user to click on 1 single button, and have that button generate a new
drink for them to try. The provided results would include the name and image of the drink, as well as instructions, 
ingredients, and measurements required to put the drink together.

In addition to this, the website includes a search function through which any user can search and get information on any
drink which is included within the TheCocktailDB API.

Lastly, I have also included 3 popular cocktails and added images of these (hyperlinked so they lead to site which provides
information on how to make those cocktails) to the website. This was done in case the user of the website does not know what to search
and they are not content with the randomly generated drink.

The overall aim the website is to allow anyone who may not yet be able to visit any opened bars/pubs a chance to create
their own cocktail, and experiment with the randomly generated drink that they may receive. This could be helpful to those
who may still be shielding as a result of corona virus, and also to those who do not yet feel comfortable to go to public
places such as bars/pubs. 

## UX

The aim of the website is to allow any user to - with one click - get a randomly suggested drink they can make
at home, as well as be able to search for and get information on any cocktail.

I believe the website does this well in the way its set up, as at first instance and on the top right handside of the 
website a search button is provided to allow the user to search for any drink. 

If no drinks are searched for, 3 popular cocktails are presented (with links on how to make these), and should these
options not be enough, then the user is presented with the option to randomly generate/suggest a new drink.

As a visitor of the website, I want to search for and get information on any cocktail drink.

As someone who may be shielding/not comfortable with visting bars, I want to be able to experiment and try new 
drinks without having to look through a 'menu' or leave my house.

As someone who is not sure what cocktails are nice, I want to be able to see what the popular cocktails are and 
information on how to make these at home.

[Landing page - prior to any searches made / random drink generator button clicked)](https://github.com/Abelyem/MSProject2/blob/master/assets/images/wireframes/wireframeScreenshot1.png)

When no searches are made, the page is presented as the image (wireframeScreenshot1). This allows any person visiting
the website the option of searching for a drink of their choice, clicking on the one of the popular cocktails 
presented, or clicking on the button named "Click here to try out a new randomly generated drink!"

[Landing page - after search has been made / random drink generator button clicked](https://github.com/Abelyem/MSProject2/blob/master/assets/images/wireframes/wireframeScreenshot2.png)

The above wireframe (wireframeScreenshot2) shows the page after a search has been made, and the button named
"Click here to try out a new randomly generated drink!" has been clicked. The top half of the wireframe shows an image
and some text - this is information provided on the searched drink.

The second half of the page shows an image followed up with 3 sections of information (name/instructions + ingredients 
and measurements of the randomly generated cocktail.)

## Features 


 ### Existing Features

 - Header (fixed top)
   - Has a lighter background colour than white, but contrast can be seen.
   - Input box has placeholder text to make it clear it is a search box.
   - Search button in purple with a white background, background fills white space with purple
     and text colour changes to white when hovered over.

 - 3 popular cocktails images
   - Scale transforms when hovered over (to indicate they are interactive)
   - Text below images also confirms cocktail images can be clicked on for more information on what they are 
     and how you can make them.

 - Random drink generator section
   - What the function of the button is, is well described within the button itself
   - Button has dark background and white text so it is clear to read - button also has within it a spinning gif

 - Information generated from button click
   - Shown in 3 parts - 1st part has name and image of cocktail, second part has instructions, and the third contains
     the measurements and ingredients required. 

 ### Features left to implement 

-

## Technologies Used

Languages used:
   - HTML
   - CSS
   - Javascript

   - Bootstrap used to create input box and search button for navigation (https://getbootstrap.com/)
   - Wireframe created on https://www.mockflow.com/

## Testing

### Navigation:

### Three popular cocktail links

All three images have their respective href tags which function as planned when clicked on, taking the user to the linked
site's (https://www.bbcgoodfood.com/) recipe section.

Hover feature also fully functions as can be seen in the image scale being transformed by 1.3 times when hovered over.

### XXXXX

<!-- - All 'Ticket' links highlighted work as clickable links leading to the website from which tickets can be purchased.
  Ticket links all open in a new tab, and do not steer user off from the band website.
  Hover feature functioning to show a change in colour when any ticket clickable link is hovered over.

- Image below tour section has a transform tag applied which increases size of image when hovered over. This feature
  working as intended, and sized so that any increase in image size does not cover any text (e.g tour-dates inforamtion,
  or the title for the next section (About-us)). -->

### XXXXXX

<!-- - Song name/album all have amended colours (purple) and font-weight increases when hovered over to make it clear all 
  are cliakable links. As all other links, when clicked they are opened in a new tab as to not lead away from the 
  website.

- Video - song placed below About-us section. Video works without any issues - can also continue to scroll the page
  to the next section without any interruption in video. Video settings not on autoplay - allows user to action
  this, and prevents confusion (e.g music does not start to play when user is on home page and not yet reached
  'About-us' section of the site). -->

### XXXXX

<!-- - Email placeholder has text decoration which shows a blue colour when selected.
- Email address is set as 'required' in that section, unable to submit without including '@' - when attempting to do this
  as a test, error message pops up advising there is an '@' missing.
- Tested hover feature on subscribe button - working as set, and colour of button changes to purple when hovered over. -->

## Screensize

Navbar text (next to search bar) is only visible on large sized screens (or above) and hidden on all smaller screens.
The placeholder text states 'Search for cocktails here' and so the website can function without the navbar text being
available.

The background cocktail image (cocktail_header_purple) is hidden on all screens smaller than medium.
The three popular cocktails have their display set as block so they'd appear individually on smaller sized screens.

## Deployment

File deployed on Gitpages via Github.
From settings, scroll down to Github pages section and select the master branch as source to enable github pages to run.

To run file locally, you can (once file is open via gitpod) search the following within the terminal:
python3 -m http.server

A pop up will appear with three options, of which you click 'Open Browser' to run the file.

## Credits

### Content

All content on the site written by me. 

API information (on search / on click) from:
https://www.thecocktaildb.com/api.php


### Media

https://emojipedia.org/ 
https://unsplash.com
https://www.google.co.uk/

### Acknowledgement 

Provided by mentor:
https://www.taniarascia.com/how-to-use-the-javascript-fetch-api-to-get-json-data/
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

API site: 
https://www.thecocktaildb.com/api.php

Accessing API information:
https://idratherbewriting.com/learnapidoc/docapis_access_json_values.html

Information on popular cocktails:
https://www.bbcgoodfood.com
