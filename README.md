# Hackerbirds's static blog page builder

Write blog posts quickly using this little script. Originally based on [Lichen](https://lichen.sensorstation.co/), it is backwards compatible with Gemtext.

Write in `post.txt` like we just did, then run `python3 build.py`, and the resulting `index.html` is your pretty website

#### Features
````
1) Each new line in post.txt is a new line in the HTML.

FORMATTING:
 *bold text*
 __italic text__

HEADERS:
# Title
## Big header
### Smaller header

CODE BLOCKS:
You can add `inline code with single quotes` in the middle of your text...

```
Or full code blocks.
```

UNORDERED LISTS:
* Make a list
* Like this
* Add a star for each element in the list

IMAGES:
-> images/sourceimg.png | You can add alt text too | And some text to show up under the image too

BLOCK QUOTE:
> Very important quote.

URL / LINKS:
=> https://zombo.com You can do anything at Zombo.com

HACKERBIRDS'S "FRONTER" QUOTE BLOCK:
% If you do this, a little bird will show up next to your gorgeous text.

HORIZONTAL BAR BREAK:
---
(this creates a line to separate your text)

````

## What? Why?

https://hackerbirds.neocities.org/Slightly-Less-Worse-HTML/

## Disclaimers

### This is not a fully-automated script

You are meant to manually modify the code and resulting HTML to your liking if needed.

### You are all alone in this adventure

We will not maintain or modify this project for anyone else but us. That said, if you think you can use it or modify it for yourself, go ahead.
