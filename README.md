# News Scraper

This project is a simple web scraper built using Node.js, Axios, Cheerio, and Express. It fetches and extracts the latest news headlines from "The Hindu" website and prints them to the console.

## Prerequisites

Make sure you have Node.js installed on your machine. If you don't have it, you can download and install it from here.

## Installation

1. Clone the repository or download the project files.

1. Navigate to the project directory and install the required dependencies using npm:


`npm install`

## Usage

1. The scraper is set to fetch news from "The Hindu" website.

2. To run the scraper, execute the following command in your terminal:

`npm start`

3. The server will start running on port 2003, and the scraped news headlines will be printed to the console.

## Example Output

After running the scraper, the console will display an array of news objects with the following structure:
`[
{
"heading": "Some news headline",
"link": "https://www.thehindu.com/some-news-link"
},
...
]`

## Notes

1. The scraper filters out links that are less than 40 characters in length and ensures that they start with "https://www.thehindu.com".
2. The server itself does not serve any web pages; it simply starts up to demonstrate that the code can run within an Express application context.

## License

This project is licensed under the MIT License.

