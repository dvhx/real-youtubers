To add new channel, create new JSON file, new file for each channel, for example:

    {
        "channel_url": "https://www.youtube.com/@GhostTownLiving",
        "channel_name": "Ghost Town Living",
        "last_video": "https://www.youtube.com/watch?v=4YCYnQfarkM",
        "description": "The videos chronicle Brent Underwood's ongoing, hands-on project of living in and restoring the abandoned mining town of Cerro Gordo, California. Episodes follow his attempts to revive the town's infrastructure, like drilling for water or rebuilding structures, and to explore its history by digging into collapsed mines, often using methods like mechanical diggers or dynamite to gain access. The content balances the practical challenges of off-grid restoration with historical exploration and the personal goal of eventually opening the site to visitors.",
        "videos_last_year": 13,
        "average_video_duration_minutes": 35,
        "tags": ["mining", "ghost town", "history", "exploration"] 
    }

To keep naming consistent and human-searchable, use following rules to choose file names:

- pronounce name of the channel or it's handle, whichever is better known
  (for example Practical Engineering has handle PracticalEngineeringChannel but is better known without the -channel suffix)
- write down what you (or rather someone else would) hear
- all lowercase
- underscore instead of space
- numbers as digits, not words
- omit preceeding "the" or "a"
- omit apostrophe
- once you push the filename, don't change it

File name Examples:

- Lindybeige --> lindy_beige.json
- ElectroBOOM --> electro_boom.json
- EEVBlog --> eev_blog.json
- Cody'sLab --> codys_lab.json

Prompt for channel description:

- Give me 2-3 sentence description of this youtube channel, 
  not what's in the channel description but rather what are the videos about: CHANNEL NAME

When you add new json files, run INDEX_update.sh script that will update INDEX.txt, refresh the page and you should see new channels.
Send me a pull request and I will merge it into my version too.