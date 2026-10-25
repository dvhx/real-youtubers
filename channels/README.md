To keep naming consistent and human-searchable, use following rules to choose filenames:

- pronounce name of the channel or it's handle, whichever is better known
  (for example Practical Engineering has handle PracticalEngineeringChannel but is better known without the -channel suffix)
- write down what you (or rather someone else would) hear
- all lowercase
- underscore instead of space
- numbers as digits, not words
- omit preceeding "the" or "a"
- omit apostrophe
- once you push the filename, don't change it

Examples:

- Lindybeige --> lindy_beige
- ElectroBOOM --> electro_boom
- EEVBlog --> eev_blog
- Cody'sLab --> codys_lab

Prompt for channel description:

- Give me 2-3 sentence description of this youtube channel, 
  not what's in the channel description but rather what are the videos about: CHANNEL NAME

# Example JSON file

    {
        "channel_url": "https://www.youtube.com/@GhostTownLiving",
        "channel_name": "Ghost Town Living",
        "last_video": "https://www.youtube.com/watch?v=4YCYnQfarkM",
        "description": "The videos chronicle Brent Underwood's ongoing, hands-on project of living in and restoring the abandoned mining town of Cerro Gordo, California. Episodes follow his attempts to revive the town's infrastructure, like drilling for water or rebuilding structures, and to explore its history by digging into collapsed mines, often using methods like mechanical diggers or dynamite to gain access. The content balances the practical challenges of off-grid restoration with historical exploration and the personal goal of eventually opening the site to visitors.",
        "videos_last_year": 13,
        "average_video_duration_minutes": 35,
        "tags": ["mining", "ghost town", "history", "exploration"] 
    }