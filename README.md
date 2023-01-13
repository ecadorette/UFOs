# UFOs

## Overview
The purpose of the analysis was to create a webpage where users can browse UFO sighting data, using various filters to explore different questions and come up with their own conclusions around alien existence. 

Using `html`, `javascript`, and `css` we built a website with an interactive table that users will hopefully find appealing and easy to use.

![WebView](https://user-images.githubusercontent.com/114450503/212225182-20f876fe-c56e-4eec-b5fb-70c2d20d66d7.png)
## Results
The table has filters for several columns allowing a wide range of searches to be performed. See below, Date and City filters have been populated and the matching data was automatically returned.

![FilterExample](https://user-images.githubusercontent.com/114450503/212225332-4ef32cbd-b926-47e6-9f91-276388bcb3f4.png)


One thing to keep in mind while filtering, in order for the filters to properly return the desired data the user must spell the value correctly. For instance, trying to filter 'cicle' instead of 'circle' in the "shape" filter will return zero results. 

![Cicle](https://user-images.githubusercontent.com/114450503/212225400-2b02cc20-06d0-4915-8e5d-ed2396338cd5.png)

Once the user hits the Tab or Enter keys, or clicks off the filter cell the table will automatically adjust. 

## Summary
This is a great tool for users to quickly browse through a lot of data. One large drawback of this current design is the lack of "fuzzy" searching, allowing for mild misspellings or case insensitivity.

In light of this, if this webpage were to be further developed I would add the above considerations into the script. As well as the ability to export filtered data so a user could further their analysis on their own machine. 
