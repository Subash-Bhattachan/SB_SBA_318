const books = [
    {
        "title": "Unlocking Android: A Developer's Guide",
        "isbn": "1933988673",
        "pageCount": 416,
        "publishedDate": { "$date": "2009-04-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
        "shortDescription": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
        "longDescription": "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
        "status": "PUBLISH",
        "authors": ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
        "categories": ["Open Source", "Mobile"]
    },
    {
        "title": "Flex 3 in Action",
        "isbn": "1933988746",
        "pageCount": 576,
        "publishedDate": { "$date": "2009-02-02T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
        "longDescription": "New web applications require engaging user-friendly interfaces   and the cooler, the better. With Flex 3, web developers at any skill level can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And now that the major components of Flex are free and open-source, the cost barrier is gone, as well!    Flex 3 in Action is an easy-to-follow, hands-on Flex tutorial. Chock-full of examples, this book goes beyond feature coverage and helps you put Flex to work in real day-to-day tasks. You'll quickly master the Flex API and learn to apply the techniques that make your Flex applications stand out from the crowd.    Interesting themes, styles, and skins  It's in there.  Working with databases  You got it.  Interactive forms and validation  You bet.  Charting techniques to help you visualize data  Bam!  The expert authors of Flex 3 in Action have one goal   to help you get down to business with Flex 3. Fast.    Many Flex books are overwhelming to new users   focusing on the complexities of the language and the super-specialized subjects in the Flex eco-system; Flex 3 in Action filters out the noise and dives into the core topics you need every day. Using numerous easy-to-understand examples, Flex 3 in Action gives you a strong foundation that you can build on as the complexity of your projects increases.",
        "status": "PUBLISH",
        "authors": ["Tariq Ahmed with Jon Hirschi", "Faisal Abid"],
        "categories": ["Internet"]
    },
    {
        "title": "Flex 4 in Action",
        "isbn": "1935182420",
        "pageCount": 600,
        "publishedDate": { "$date": "2010-11-15T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
        "longDescription": "Using Flex, you can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And the new features added in Flex 4 give you an even wider range of options!    Flex 4 in Action is an easy-to-follow, hands-on Flex tutorial that goes beyond feature coverage and helps you put Flex to work in real day-to-day tasks. You'll quickly master the Flex API and learn to apply the techniques that make your Flex applications stand out from the crowd.    The expert authors of Flex 4 in Action have one goal-to help you get down to business with Flex. Fast. Flex 4 in Action filters out the noise and dives into the core topics you need every day. Using numerous easy-to-understand examples, Flex 4 in Action gives you a strong foundation that you can build on as the complexity of your projects increases.    Interesting themes, styles, and skins  It's in there.  Working with databases  You got it.  Interactive forms and validation  You bet.  Charting techniques to help you visualize data  Bam!  And you'll get full coverage of these great Flex 4 upgrades:  Next generation Spark components-New buttons, form inputs, navigation controls and other visual components replace the Flex 3 \"Halo\" versions. Spark components are easier to customize, which makes skinning and theme design much faster  A new \"network monitor\" allows you to see the data communications between a Flex application and a backend server, which helps when trying to debug applications that are communicating to another system/service  Numerous productivity boosting features that speed up the process of creating applications  A faster compiler to take your human-written source code and convert it into a machine-readable format  Built-in support for unit testing allows you to improve the quality of your software, and reduce the time spent in testing",
        "status": "PUBLISH",
        "authors": ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
        "categories": ["Internet"]
    },
    {
        "title": "BDD in Action",
        "isbn": "161729165X",
        "pageCount": 0,
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/smart.jpg",
        "status": "MEAP",
        "authors": ["John F. Smart"],
        "categories": []
    },
    {
        "title": "Windows Phone 8 in Action",
        "isbn": "1617291374",
        "pageCount": 0,
        "publishedDate": { "$date": "2013-12-31T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/binkley.jpg",
        "status": "PUBLISH",
        "authors": [
            "Timothy Binkley-Jones",
            "Massimo Perga",
            "Michael Sync",
            "Adam Benoit"
        ],
        "categories": []
    },
    {
        "title": "PowerShell in Depth, Second Edition",
        "isbn": "1617292184",
        "pageCount": 0,
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones6.jpg",
        "status": "MEAP",
        "authors": ["Don Jones", "Jeffery Hicks", "", "Richard Siddaway"],
        "categories": []
    },
    {
        "title": "Unity in Action",
        "isbn": "161729232X",
        "pageCount": 0,
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hocking.jpg",
        "status": "MEAP",
        "authors": ["Joseph Hocking"],
        "categories": []
    },
    {
        "title": "Express.js in Action",
        "isbn": "1617292427",
        "pageCount": 0,
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hahn.jpg",
        "status": "MEAP",
        "authors": ["Evan M. Hahn"],
        "categories": []
    },
    {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
    },
    
];


module.exports = books;