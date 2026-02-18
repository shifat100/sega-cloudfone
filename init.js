'use strict';

// 1. Initialize JSSMS
// We pass JSSMS.KaiOSUI as the constructor (without 'new').
// JSSMS will call 'new ui(this)' internally.
var sms = new JSSMS({
  'ui': JSSMS.KaiOSUI,
  'soundEnabled': true
});

// 2. Configure ROMs with categories
// The UI expects this specific structure: an object where keys are category names
// and values are arrays of objects, with each object having 'name' and 'url' properties.
sms.ui.setRoms({
    "Sega Game Gear": [
        {
            "name": "5 In One FunPak (USA)",
            "url": "rom/sega game gear/5 in One FunPak (USA).gg"
        },
        {
            "name": "Addams Family, The (World)",
            "url": "rom/sega game gear/Addams Family, The (World).gg"
        },
        {
            "name": "Adventures Of Batman & Robin, The (USA, Europe) (Beta) (1995 04 27)",
            "url": "rom/sega game gear/Adventures of Batman & Robin, The (USA, Europe) (Beta) (1995-04-27).gg"
        },
        {
            "name": "Adventures Of Batman & Robin, The (USA, Europe) (Beta) (1995 04 29)",
            "url": "rom/sega game gear/Adventures of Batman & Robin, The (USA, Europe) (Beta) (1995-04-29).gg"
        },
        {
            "name": "Adventures Of Batman & Robin, The (USA, Europe) (Beta) (1995 04 30)",
            "url": "rom/sega game gear/Adventures of Batman & Robin, The (USA, Europe) (Beta) (1995-04-30).gg"
        },
        {
            "name": "Adventures Of Batman & Robin, The (USA, Europe) (Beta) (1995 05 02)",
            "url": "rom/sega game gear/Adventures of Batman & Robin, The (USA, Europe) (Beta) (1995-05-02).gg"
        },
        {
            "name": "Adventures Of Batman & Robin, The (USA, Europe) (Beta) (1995 05 04)",
            "url": "rom/sega game gear/Adventures of Batman & Robin, The (USA, Europe) (Beta) (1995-05-04).gg"
        },
        {
            "name": "Adventures Of Batman & Robin, The (USA, Europe) (Beta) (1995 05 06) (Alt 1)",
            "url": "rom/sega game gear/Adventures of Batman & Robin, The (USA, Europe) (Beta) (1995-05-06) (Alt 1).gg"
        },
        {
            "name": "Adventures Of Batman & Robin, The (USA, Europe) (Beta) (1995 05 06)",
            "url": "rom/sega game gear/Adventures of Batman & Robin, The (USA, Europe) (Beta) (1995-05-06).gg"
        },
        {
            "name": "Adventures Of Batman & Robin, The (USA, Europe) (Beta) (1995 05 07)",
            "url": "rom/sega game gear/Adventures of Batman & Robin, The (USA, Europe) (Beta) (1995-05-07).gg"
        },
        {
            "name": "Adventures Of Batman & Robin, The (USA, Europe)",
            "url": "rom/sega game gear/Adventures of Batman & Robin, The (USA, Europe).gg"
        },
        {
            "name": "Aerial Assault (World) (Rev 1)",
            "url": "rom/sega game gear/Aerial Assault (World) (Rev 1).gg"
        },
        {
            "name": "Aerial Assault (World)",
            "url": "rom/sega game gear/Aerial Assault (World).gg"
        },
        {
            "name": "Aladdin (USA, Europe, Brazil) (Beta) (1993 12 28)",
            "url": "rom/sega game gear/Aladdin (USA, Europe, Brazil) (Beta) (1993-12-28).gg"
        },
        {
            "name": "Aladdin (USA, Europe, Brazil) (Beta) (1994 01 11)",
            "url": "rom/sega game gear/Aladdin (USA, Europe, Brazil) (Beta) (1994-01-11).gg"
        },
        {
            "name": "Aladdin (USA, Europe, Brazil) (Beta) (1994 01 13)",
            "url": "rom/sega game gear/Aladdin (USA, Europe, Brazil) (Beta) (1994-01-13).gg"
        },
        {
            "name": "Aladdin (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Aladdin (USA, Europe, Brazil).gg"
        },
        {
            "name": "Alien 3 (USA, Europe)",
            "url": "rom/sega game gear/Alien 3 (USA, Europe).gg"
        },
        {
            "name": "Andre Agassi Tennis (USA) (Beta)",
            "url": "rom/sega game gear/Andre Agassi Tennis (USA) (Beta).gg"
        },
        {
            "name": "Andre Agassi Tennis (USA)",
            "url": "rom/sega game gear/Andre Agassi Tennis (USA).gg"
        },
        {
            "name": "Arcade Classics (USA)",
            "url": "rom/sega game gear/Arcade Classics (USA).gg"
        },
        {
            "name": "Arch Rivals   The Arcade Game (USA)",
            "url": "rom/sega game gear/Arch Rivals - The Arcade Game (USA).gg"
        },
        {
            "name": "Arena   Maze Of Death ~ Arena (USA, Europe)",
            "url": "rom/sega game gear/Arena - Maze of Death ~ Arena (USA, Europe).gg"
        },
        {
            "name": "Ariel The Little Mermaid (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Ariel the Little Mermaid (USA, Europe, Brazil).gg"
        },
        {
            "name": "Asterix And The Great Rescue (USA) (Beta) (1994 02 22)",
            "url": "rom/sega game gear/Asterix and the Great Rescue (USA) (Beta) (1994-02-22).gg"
        },
        {
            "name": "Asterix And The Great Rescue (USA) (Beta) (1994 03 03)",
            "url": "rom/sega game gear/Asterix and the Great Rescue (USA) (Beta) (1994-03-03).gg"
        },
        {
            "name": "Asterix And The Great Rescue (USA) (Beta) (1994 03 15)",
            "url": "rom/sega game gear/Asterix and the Great Rescue (USA) (Beta) (1994-03-15).gg"
        },
        {
            "name": "Asterix And The Great Rescue (USA) (En,Fr,De,Es,It) (Beta) (1994 01 25)",
            "url": "rom/sega game gear/Asterix and the Great Rescue (USA) (En,Fr,De,Es,It) (Beta) (1994-01-25).gg"
        },
        {
            "name": "Asterix And The Great Rescue (USA) (En,Fr,De,Es,It) (Beta) (1994 02 16)",
            "url": "rom/sega game gear/Asterix and the Great Rescue (USA) (En,Fr,De,Es,It) (Beta) (1994-02-16).gg"
        },
        {
            "name": "Asterix And The Great Rescue (USA, Brazil)",
            "url": "rom/sega game gear/Asterix and the Great Rescue (USA, Brazil).gg"
        },
        {
            "name": "Ax Battler   A Legend Of Golden Axe (USA, Europe, Brazil) (Beta) (1991 08 10)",
            "url": "rom/sega game gear/Ax Battler - A Legend of Golden Axe (USA, Europe, Brazil) (Beta) (1991-08-10).gg"
        },
        {
            "name": "Ax Battler   A Legend Of Golden Axe ~ Golden Axe (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Ax Battler - A Legend of Golden Axe ~ Golden Axe (USA, Europe, Brazil).gg"
        },
        {
            "name": "Ayrton Senna's Super Monaco GP II (USA, Europe, Brazil) (Beta)",
            "url": "rom/sega game gear/Ayrton Senna's Super Monaco GP II (USA, Europe, Brazil) (Beta).gg"
        },
        {
            "name": "Ayrton Senna's Super Monaco GP II (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Ayrton Senna's Super Monaco GP II (USA, Europe, Brazil).gg"
        },
        {
            "name": "Baku Baku (USA)",
            "url": "rom/sega game gear/Baku Baku (USA).gg"
        },
        {
            "name": "Barbie Super Model (USA) (Proto)",
            "url": "rom/sega game gear/Barbie Super Model (USA) (Proto).gg"
        },
        {
            "name": "Bare Knuckle II ~ Streets Of Rage 2 ~ Streets Of Rage II (World)",
            "url": "rom/sega game gear/Bare Knuckle II ~ Streets of Rage 2 ~ Streets of Rage II (World).gg"
        },
        {
            "name": "Bare Knuckle ~ Streets Of Rage (World)",
            "url": "rom/sega game gear/Bare Knuckle ~ Streets of Rage (World).gg"
        },
        {
            "name": "Batman Forever (World)",
            "url": "rom/sega game gear/Batman Forever (World).gg"
        },
        {
            "name": "Batman Returns (World)",
            "url": "rom/sega game gear/Batman Returns (World).gg"
        },
        {
            "name": "Batter Up (USA)",
            "url": "rom/sega game gear/Batter Up (USA).gg"
        },
        {
            "name": "Battleship   The Classic Naval Combat Game (USA)",
            "url": "rom/sega game gear/Battleship - The Classic Naval Combat Game (USA).gg"
        },
        {
            "name": "Battletoads (USA)",
            "url": "rom/sega game gear/Battletoads (USA).gg"
        },
        {
            "name": "Beavis And Butt Head (USA, Europe) (Beta)",
            "url": "rom/sega game gear/Beavis and Butt-Head (USA, Europe) (Beta).gg"
        },
        {
            "name": "Beavis And Butt Head (USA, Europe)",
            "url": "rom/sega game gear/Beavis and Butt-Head (USA, Europe).gg"
        },
        {
            "name": "Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994 06 28)",
            "url": "rom/sega game gear/Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994-06-28).gg"
        },
        {
            "name": "Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994 07 15)",
            "url": "rom/sega game gear/Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994-07-15).gg"
        },
        {
            "name": "Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994 07 21)",
            "url": "rom/sega game gear/Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994-07-21).gg"
        },
        {
            "name": "Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994 07 22)",
            "url": "rom/sega game gear/Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994-07-22).gg"
        },
        {
            "name": "Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994 07 27)",
            "url": "rom/sega game gear/Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994-07-27).gg"
        },
        {
            "name": "Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994 08 01)",
            "url": "rom/sega game gear/Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994-08-01).gg"
        },
        {
            "name": "Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994 08 11) (Alt 1)",
            "url": "rom/sega game gear/Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994-08-11) (Alt 1).gg"
        },
        {
            "name": "Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994 08 11)",
            "url": "rom/sega game gear/Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994-08-11).gg"
        },
        {
            "name": "Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994 08 12)",
            "url": "rom/sega game gear/Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994-08-12).gg"
        },
        {
            "name": "Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994 08 13)",
            "url": "rom/sega game gear/Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994-08-13).gg"
        },
        {
            "name": "Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994 08 14)",
            "url": "rom/sega game gear/Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994-08-14).gg"
        },
        {
            "name": "Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994 08 19)",
            "url": "rom/sega game gear/Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994-08-19).gg"
        },
        {
            "name": "Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994 08 20)",
            "url": "rom/sega game gear/Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994-08-20).gg"
        },
        {
            "name": "Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994 08 24)",
            "url": "rom/sega game gear/Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994-08-24).gg"
        },
        {
            "name": "Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994 08 25)",
            "url": "rom/sega game gear/Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994-08-25).gg"
        },
        {
            "name": "Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994 08 26) (Alt 1)",
            "url": "rom/sega game gear/Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994-08-26) (Alt 1).gg"
        },
        {
            "name": "Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994 08 26)",
            "url": "rom/sega game gear/Berenstain Bears' Camping Adventure, The (USA) (Beta) (1994-08-26).gg"
        },
        {
            "name": "Berenstain Bears' Camping Adventure, The (USA)",
            "url": "rom/sega game gear/Berenstain Bears' Camping Adventure, The (USA).gg"
        },
        {
            "name": "Bonkers Wax Up! (USA, Europe) (Beta) (1994 10 31)",
            "url": "rom/sega game gear/Bonkers Wax Up! (USA, Europe) (Beta) (1994-10-31).gg"
        },
        {
            "name": "Bonkers Wax Up! (USA, Europe) (Beta) (1994 11 15)",
            "url": "rom/sega game gear/Bonkers Wax Up! (USA, Europe) (Beta) (1994-11-15).gg"
        },
        {
            "name": "Bonkers Wax Up! (USA, Europe) (Beta) (1994 11 21)",
            "url": "rom/sega game gear/Bonkers Wax Up! (USA, Europe) (Beta) (1994-11-21).gg"
        },
        {
            "name": "Bonkers Wax Up! (USA, Europe) (Beta) (1994 11 23)",
            "url": "rom/sega game gear/Bonkers Wax Up! (USA, Europe) (Beta) (1994-11-23).gg"
        },
        {
            "name": "Bonkers Wax Up! (USA, Europe) (Beta) (1994 11 26)",
            "url": "rom/sega game gear/Bonkers Wax Up! (USA, Europe) (Beta) (1994-11-26).gg"
        },
        {
            "name": "Bonkers Wax Up! (USA, Europe) (Beta) (1994 11 29)",
            "url": "rom/sega game gear/Bonkers Wax Up! (USA, Europe) (Beta) (1994-11-29).gg"
        },
        {
            "name": "Bonkers Wax Up! (USA, Europe) (Beta) (1994 12 03)",
            "url": "rom/sega game gear/Bonkers Wax Up! (USA, Europe) (Beta) (1994-12-03).gg"
        },
        {
            "name": "Bonkers Wax Up! (USA, Europe) (Beta) (1994 12 05)",
            "url": "rom/sega game gear/Bonkers Wax Up! (USA, Europe) (Beta) (1994-12-05).gg"
        },
        {
            "name": "Bonkers Wax Up! (USA, Europe) (Beta) (1994 12 07)",
            "url": "rom/sega game gear/Bonkers Wax Up! (USA, Europe) (Beta) (1994-12-07).gg"
        },
        {
            "name": "Bonkers Wax Up! (USA, Europe) (Beta) (1994 12 08) (Alt 1)",
            "url": "rom/sega game gear/Bonkers Wax Up! (USA, Europe) (Beta) (1994-12-08) (Alt 1).gg"
        },
        {
            "name": "Bonkers Wax Up! (USA, Europe) (Beta) (1994 12 08)",
            "url": "rom/sega game gear/Bonkers Wax Up! (USA, Europe) (Beta) (1994-12-08).gg"
        },
        {
            "name": "Bonkers Wax Up! (USA, Europe) (Beta) (1994 12 11)",
            "url": "rom/sega game gear/Bonkers Wax Up! (USA, Europe) (Beta) (1994-12-11).gg"
        },
        {
            "name": "Bonkers Wax Up! (USA, Europe) (Beta) (1994 12 12)",
            "url": "rom/sega game gear/Bonkers Wax Up! (USA, Europe) (Beta) (1994-12-12).gg"
        },
        {
            "name": "Bonkers Wax Up! (USA, Europe)",
            "url": "rom/sega game gear/Bonkers Wax Up! (USA, Europe).gg"
        },
        {
            "name": "Bram Stoker's Dracula (USA)",
            "url": "rom/sega game gear/Bram Stoker's Dracula (USA).gg"
        },
        {
            "name": "Bubble Bobble (USA) (Beta)",
            "url": "rom/sega game gear/Bubble Bobble (USA) (Beta).gg"
        },
        {
            "name": "Bubble Bobble (USA)",
            "url": "rom/sega game gear/Bubble Bobble (USA).gg"
        },
        {
            "name": "Bugs Bunny In Double Trouble (USA, Europe)",
            "url": "rom/sega game gear/Bugs Bunny in Double Trouble (USA, Europe).gg"
        },
        {
            "name": "Bust A Move (USA)",
            "url": "rom/sega game gear/Bust-A-Move (USA).gg"
        },
        {
            "name": "CJ Elephant Fugitive (USA, Europe) (Beta) (1993 10 22)",
            "url": "rom/sega game gear/CJ Elephant Fugitive (USA, Europe) (Beta) (1993-10-22).gg"
        },
        {
            "name": "CJ Elephant Fugitive (USA, Europe)",
            "url": "rom/sega game gear/CJ Elephant Fugitive (USA, Europe).gg"
        },
        {
            "name": "Caesars Palace (USA)",
            "url": "rom/sega game gear/Caesars Palace (USA).gg"
        },
        {
            "name": "Captain America And The Avengers (USA)",
            "url": "rom/sega game gear/Captain America and the Avengers (USA).gg"
        },
        {
            "name": "Casino FunPak (USA)",
            "url": "rom/sega game gear/Casino FunPak (USA).gg"
        },
        {
            "name": "Chakan (USA, Europe)",
            "url": "rom/sega game gear/Chakan (USA, Europe).gg"
        },
        {
            "name": "Chase H.Q. (USA)",
            "url": "rom/sega game gear/Chase H.Q. (USA).gg"
        },
        {
            "name": "Cheese Cat Astrophe Starring Speedy Gonzales (USA, Europe, Brazil) (En,Fr,De,Es)",
            "url": "rom/sega game gear/Cheese Cat-Astrophe Starring Speedy Gonzales (USA, Europe, Brazil) (En,Fr,De,Es).gg"
        },
        {
            "name": "Chessmaster, The (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Chessmaster, The (USA, Europe, Brazil).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 05 05)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-05-05).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 06 01)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-06-01).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 06 05)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-06-05).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 06 07)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-06-07).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 06 08)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-06-08).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 06 12)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-06-12).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 06 14)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-06-14).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 06 19)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-06-19).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 06 20)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-06-20).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 06 22)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-06-22).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 06 26)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-06-26).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 06 28)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-06-28).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 06 29) (Alt 1)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-06-29) (Alt 1).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 06 29)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-06-29).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 06 30)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-06-30).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 07 03)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-07-03).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 07 05)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-07-05).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 07 06)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-07-06).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 07 10)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-07-10).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 07 11)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-07-11).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 07 19)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-07-19).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 07 20)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-07-20).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 07 21) (Alt 1)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-07-21) (Alt 1).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil) (Beta) (1995 07 21)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil) (Beta) (1995-07-21).gg"
        },
        {
            "name": "Chicago Syndicate (USA, Brazil)",
            "url": "rom/sega game gear/Chicago Syndicate (USA, Brazil).gg"
        },
        {
            "name": "Choplifter III (USA)",
            "url": "rom/sega game gear/Choplifter III (USA).gg"
        },
        {
            "name": "Chuck Rock (World) (Beta)",
            "url": "rom/sega game gear/Chuck Rock (World) (Beta).gg"
        },
        {
            "name": "Chuck Rock (World)",
            "url": "rom/sega game gear/Chuck Rock (World).gg"
        },
        {
            "name": "Chuck Rock II   Son Of Chuck (USA)",
            "url": "rom/sega game gear/Chuck Rock II - Son of Chuck (USA).gg"
        },
        {
            "name": "Cliffhanger (USA)",
            "url": "rom/sega game gear/Cliffhanger (USA).gg"
        },
        {
            "name": "Clutch Hitter (USA)",
            "url": "rom/sega game gear/Clutch Hitter (USA).gg"
        },
        {
            "name": "Columns (USA, Europe, Brazil) (Rev 2)",
            "url": "rom/sega game gear/Columns (USA, Europe, Brazil) (Rev 2).gg"
        },
        {
            "name": "Cool Spot (USA)",
            "url": "rom/sega game gear/Cool Spot (USA).gg"
        },
        {
            "name": "Cosmic Spacehead (USA, Europe)",
            "url": "rom/sega game gear/Cosmic Spacehead (USA, Europe).gg"
        },
        {
            "name": "Crystal Warriors (USA, Europe)",
            "url": "rom/sega game gear/Crystal Warriors (USA, Europe).gg"
        },
        {
            "name": "CutThroat Island (USA) (Beta)",
            "url": "rom/sega game gear/CutThroat Island (USA) (Beta).gg"
        },
        {
            "name": "CutThroat Island (USA)",
            "url": "rom/sega game gear/CutThroat Island (USA).gg"
        },
        {
            "name": "David Robinson's Supreme Court (USA) (Auto Demo)",
            "url": "rom/sega game gear/David Robinson's Supreme Court (USA) (Auto Demo).gg"
        },
        {
            "name": "Deep Duck Trouble Starring Donald Duck (USA, Europe)",
            "url": "rom/sega game gear/Deep Duck Trouble Starring Donald Duck (USA, Europe).gg"
        },
        {
            "name": "Defenders Of Oasis (USA, Europe) (Beta)",
            "url": "rom/sega game gear/Defenders of Oasis (USA, Europe) (Beta).gg"
        },
        {
            "name": "Defenders Of Oasis (USA, Europe)",
            "url": "rom/sega game gear/Defenders of Oasis (USA, Europe).gg"
        },
        {
            "name": "Desert Speedtrap Starring Road Runner And Wile E. Coyote (USA, Brazil)",
            "url": "rom/sega game gear/Desert Speedtrap Starring Road Runner and Wile E. Coyote (USA, Brazil).gg"
        },
        {
            "name": "Desert Strike   Return To The Gulf (USA)",
            "url": "rom/sega game gear/Desert Strike - Return to the Gulf (USA).gg"
        },
        {
            "name": "Devilish (USA)",
            "url": "rom/sega game gear/Devilish (USA).gg"
        },
        {
            "name": "Donald No Magical World (Japan) (En,Ja)",
            "url": "rom/sega game gear/Donald no Magical World (Japan) (En,Ja).gg"
        },
        {
            "name": "Double Dragon (USA, Europe) (Beta)",
            "url": "rom/sega game gear/Double Dragon (USA, Europe) (Beta).gg"
        },
        {
            "name": "Double Dragon (USA, Europe)",
            "url": "rom/sega game gear/Double Dragon (USA, Europe).gg"
        },
        {
            "name": "Dr. Robotnik's Mean Bean Machine (USA, Europe)",
            "url": "rom/sega game gear/Dr. Robotnik's Mean Bean Machine (USA, Europe).gg"
        },
        {
            "name": "Dragon   The Bruce Lee Story (USA)",
            "url": "rom/sega game gear/Dragon - The Bruce Lee Story (USA).gg"
        },
        {
            "name": "Dragon Crystal (USA, Europe)",
            "url": "rom/sega game gear/Dragon Crystal (USA, Europe).gg"
        },
        {
            "name": "Dynamite Headdy (USA, Europe) (Beta) (1994 06 15)",
            "url": "rom/sega game gear/Dynamite Headdy (USA, Europe) (Beta) (1994-06-15).gg"
        },
        {
            "name": "Dynamite Headdy (USA, Europe) (Beta) (1994 07 01)",
            "url": "rom/sega game gear/Dynamite Headdy (USA, Europe) (Beta) (1994-07-01).gg"
        },
        {
            "name": "Dynamite Headdy (USA, Europe) (Beta) (1994 07 05)",
            "url": "rom/sega game gear/Dynamite Headdy (USA, Europe) (Beta) (1994-07-05).gg"
        },
        {
            "name": "Dynamite Headdy (USA, Europe)",
            "url": "rom/sega game gear/Dynamite Headdy (USA, Europe).gg"
        },
        {
            "name": "Earthworm Jim (USA)",
            "url": "rom/sega game gear/Earthworm Jim (USA).gg"
        },
        {
            "name": "Ecco   The Tides Of Time (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Ecco - The Tides of Time (USA, Europe, Brazil).gg"
        },
        {
            "name": "Ecco The Dolphin (USA, Europe, Brazil) (Beta 1) (1993 06 14)",
            "url": "rom/sega game gear/Ecco the Dolphin (USA, Europe, Brazil) (Beta 1) (1993-06-14).gg"
        },
        {
            "name": "Ecco The Dolphin (USA, Europe, Brazil) (Beta 2)",
            "url": "rom/sega game gear/Ecco the Dolphin (USA, Europe, Brazil) (Beta 2).gg"
        },
        {
            "name": "Ecco The Dolphin (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Ecco the Dolphin (USA, Europe, Brazil).gg"
        },
        {
            "name": "Evander Holyfield's 'Real Deal' Boxing (USA, Europe)",
            "url": "rom/sega game gear/Evander Holyfield's 'Real Deal' Boxing (USA, Europe).gg"
        },
        {
            "name": "F 15 Strike Eagle (USA, Europe)",
            "url": "rom/sega game gear/F-15 Strike Eagle (USA, Europe).gg"
        },
        {
            "name": "F1   World Championship Edition (Europe)",
            "url": "rom/sega game gear/F1 - World Championship Edition (Europe).gg"
        },
        {
            "name": "F1~ Formula One (USA, Europe)",
            "url": "rom/sega game gear/F1~ Formula One (USA, Europe).gg"
        },
        {
            "name": "FIFA International Soccer (USA, Europe)",
            "url": "rom/sega game gear/FIFA International Soccer (USA, Europe).gg"
        },
        {
            "name": "FIFA Soccer 96 (USA, Europe) (En,Fr,De,Es)",
            "url": "rom/sega game gear/FIFA Soccer 96 (USA, Europe) (En,Fr,De,Es).gg"
        },
        {
            "name": "Fantasy Zone (USA, Brazil)",
            "url": "rom/sega game gear/Fantasy Zone (USA, Brazil).gg"
        },
        {
            "name": "Fatal Fury Special (USA)",
            "url": "rom/sega game gear/Fatal Fury Special (USA).gg"
        },
        {
            "name": "Foreman For Real (Japan, USA)",
            "url": "rom/sega game gear/Foreman for Real (Japan, USA).gg"
        },
        {
            "name": "Frank Thomas Big Hurt Baseball (USA)",
            "url": "rom/sega game gear/Frank Thomas Big Hurt Baseball (USA).gg"
        },
        {
            "name": "Fred Couples Golf (USA)",
            "url": "rom/sega game gear/Fred Couples Golf (USA).gg"
        },
        {
            "name": "Frogger (USA) (Proto)",
            "url": "rom/sega game gear/Frogger (USA) (Proto).gg"
        },
        {
            "name": "G LOC   Air Battle (USA, Europe, Brazil)",
            "url": "rom/sega game gear/G-LOC - Air Battle (USA, Europe, Brazil).gg"
        },
        {
            "name": "G Sonic ~ Sonic Blast (World)",
            "url": "rom/sega game gear/G-Sonic ~ Sonic Blast (World).gg"
        },
        {
            "name": "GG Shinobi II, The ~ Shinobi II   The Silent Fury (World)",
            "url": "rom/sega game gear/GG Shinobi II, The ~ Shinobi II - The Silent Fury (World).gg"
        },
        {
            "name": "GG Shinobi, The ~ Shinobi (World) (Rev 1)",
            "url": "rom/sega game gear/GG Shinobi, The ~ Shinobi (World) (Rev 1).gg"
        },
        {
            "name": "GP Rider (World) (Beta) (1994 01 04)",
            "url": "rom/sega game gear/GP Rider (World) (Beta) (1994-01-04).gg"
        },
        {
            "name": "GP Rider (World)",
            "url": "rom/sega game gear/GP Rider (World).gg"
        },
        {
            "name": "Garfield   Caught In The Act (USA, Europe)",
            "url": "rom/sega game gear/Garfield - Caught in the Act (USA, Europe).gg"
        },
        {
            "name": "Gear Works (USA)",
            "url": "rom/sega game gear/Gear Works (USA).gg"
        },
        {
            "name": "George Foreman's KO Boxing (USA, Europe)",
            "url": "rom/sega game gear/George Foreman's KO Boxing (USA, Europe).gg"
        },
        {
            "name": "Greendog   The Beached Surfer Dude! (USA, Brazil)",
            "url": "rom/sega game gear/Greendog - The Beached Surfer Dude! (USA, Brazil).gg"
        },
        {
            "name": "Halley Wars (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Halley Wars (USA, Europe, Brazil).gg"
        },
        {
            "name": "Home Alone (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Home Alone (USA, Europe, Brazil).gg"
        },
        {
            "name": "Hook (USA)",
            "url": "rom/sega game gear/Hook (USA).gg"
        },
        {
            "name": "Incredible Crash Dummies, The ~ Crash Dummy   Slick Bouya No Daichousen (World)",
            "url": "rom/sega game gear/Incredible Crash Dummies, The ~ Crash Dummy - Slick Bouya no Daichousen (World).gg"
        },
        {
            "name": "Incredible Hulk, The (USA, Europe)",
            "url": "rom/sega game gear/Incredible Hulk, The (USA, Europe).gg"
        },
        {
            "name": "Indiana Jones And The Last Crusade (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Indiana Jones and the Last Crusade (USA, Europe, Brazil).gg"
        },
        {
            "name": "Iron Man X O Manowar In Heavy Metal (USA)",
            "url": "rom/sega game gear/Iron Man X-O Manowar in Heavy Metal (USA).gg"
        },
        {
            "name": "Itchy & Scratchy Game, The (USA, Europe)",
            "url": "rom/sega game gear/Itchy & Scratchy Game, The (USA, Europe).gg"
        },
        {
            "name": "James Pond II   Codename RoboCod (USA)",
            "url": "rom/sega game gear/James Pond II - Codename RoboCod (USA).gg"
        },
        {
            "name": "Jeopardy! (USA)",
            "url": "rom/sega game gear/Jeopardy! (USA).gg"
        },
        {
            "name": "Jeopardy!   Sports Edition (USA)",
            "url": "rom/sega game gear/Jeopardy! - Sports Edition (USA).gg"
        },
        {
            "name": "Joe Montana Football (USA, Europe)",
            "url": "rom/sega game gear/Joe Montana Football (USA, Europe).gg"
        },
        {
            "name": "Journey From Darkness   Strider Returns (USA, Europe)",
            "url": "rom/sega game gear/Journey from Darkness - Strider Returns (USA, Europe).gg"
        },
        {
            "name": "Judge Dredd (USA, Europe)",
            "url": "rom/sega game gear/Judge Dredd (USA, Europe).gg"
        },
        {
            "name": "Junction (USA)",
            "url": "rom/sega game gear/Junction (USA).gg"
        },
        {
            "name": "Jungle Book, The (USA)",
            "url": "rom/sega game gear/Jungle Book, The (USA).gg"
        },
        {
            "name": "Jungle Strike (USA)",
            "url": "rom/sega game gear/Jungle Strike (USA).gg"
        },
        {
            "name": "Jurassic Park (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Jurassic Park (USA, Europe, Brazil).gg"
        },
        {
            "name": "KLAX (USA, Europe)",
            "url": "rom/sega game gear/KLAX (USA, Europe).gg"
        },
        {
            "name": "Kawasaki Superbike Challenge (USA)",
            "url": "rom/sega game gear/Kawasaki Superbike Challenge (USA).gg"
        },
        {
            "name": "Krusty's Fun House (USA, Europe)",
            "url": "rom/sega game gear/Krusty's Fun House (USA, Europe).gg"
        },
        {
            "name": "Land Of Illusion Starring Mickey Mouse (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Land of Illusion Starring Mickey Mouse (USA, Europe, Brazil).gg"
        },
        {
            "name": "Last Action Hero (USA)",
            "url": "rom/sega game gear/Last Action Hero (USA).gg"
        },
        {
            "name": "Legend Of Illusion Starring Mickey Mouse (USA, Europe) (Beta) (1994 09 22)",
            "url": "rom/sega game gear/Legend of Illusion Starring Mickey Mouse (USA, Europe) (Beta) (1994-09-22).gg"
        },
        {
            "name": "Legend Of Illusion Starring Mickey Mouse (USA, Europe) (Beta) (1994 09 30) (Alt 1)",
            "url": "rom/sega game gear/Legend of Illusion Starring Mickey Mouse (USA, Europe) (Beta) (1994-09-30) (Alt 1).gg"
        },
        {
            "name": "Legend Of Illusion Starring Mickey Mouse (USA, Europe) (Beta) (1994 09 30)",
            "url": "rom/sega game gear/Legend of Illusion Starring Mickey Mouse (USA, Europe) (Beta) (1994-09-30).gg"
        },
        {
            "name": "Legend Of Illusion Starring Mickey Mouse (USA, Europe) (Beta) (1994 10 11)",
            "url": "rom/sega game gear/Legend of Illusion Starring Mickey Mouse (USA, Europe) (Beta) (1994-10-11).gg"
        },
        {
            "name": "Legend Of Illusion Starring Mickey Mouse (USA, Europe) (Beta) (1994 10 14)",
            "url": "rom/sega game gear/Legend of Illusion Starring Mickey Mouse (USA, Europe) (Beta) (1994-10-14).gg"
        },
        {
            "name": "Legend Of Illusion Starring Mickey Mouse (USA, Europe) (Beta) (1994 10 17)",
            "url": "rom/sega game gear/Legend of Illusion Starring Mickey Mouse (USA, Europe) (Beta) (1994-10-17).gg"
        },
        {
            "name": "Legend Of Illusion Starring Mickey Mouse (USA, Europe)",
            "url": "rom/sega game gear/Legend of Illusion Starring Mickey Mouse (USA, Europe).gg"
        },
        {
            "name": "Lemmings (World) (Beta)",
            "url": "rom/sega game gear/Lemmings (World) (Beta).gg"
        },
        {
            "name": "Lemmings (World)",
            "url": "rom/sega game gear/Lemmings (World).gg"
        },
        {
            "name": "Lion King, The (USA) (Beta) (1994 08 03)",
            "url": "rom/sega game gear/Lion King, The (USA) (Beta) (1994-08-03).gg"
        },
        {
            "name": "Lion King, The (USA) (Beta) (1994 08 11)",
            "url": "rom/sega game gear/Lion King, The (USA) (Beta) (1994-08-11).gg"
        },
        {
            "name": "Lion King, The (USA) (Beta) (1994 08 12)",
            "url": "rom/sega game gear/Lion King, The (USA) (Beta) (1994-08-12).gg"
        },
        {
            "name": "Lion King, The (USA) (Beta) (1994 08 13)",
            "url": "rom/sega game gear/Lion King, The (USA) (Beta) (1994-08-13).gg"
        },
        {
            "name": "Lion King, The (USA) (Beta) (1994 08 14)",
            "url": "rom/sega game gear/Lion King, The (USA) (Beta) (1994-08-14).gg"
        },
        {
            "name": "Lion King, The (USA) (Beta) (1994 08 16)",
            "url": "rom/sega game gear/Lion King, The (USA) (Beta) (1994-08-16).gg"
        },
        {
            "name": "Lion King, The (USA) (Beta) (1994 08 17) (Alt 1)",
            "url": "rom/sega game gear/Lion King, The (USA) (Beta) (1994-08-17) (Alt 1).gg"
        },
        {
            "name": "Lion King, The (USA) (Beta) (1994 08 17)",
            "url": "rom/sega game gear/Lion King, The (USA) (Beta) (1994-08-17).gg"
        },
        {
            "name": "Lion King, The (USA) (Beta) (1994 08 20)",
            "url": "rom/sega game gear/Lion King, The (USA) (Beta) (1994-08-20).gg"
        },
        {
            "name": "Lion King, The (USA)",
            "url": "rom/sega game gear/Lion King, The (USA).gg"
        },
        {
            "name": "Lost World, The   Jurassic Park (USA)",
            "url": "rom/sega game gear/Lost World, The - Jurassic Park (USA).gg"
        },
        {
            "name": "Lucky Dime Caper Starring Donald Duck, The (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Lucky Dime Caper Starring Donald Duck, The (USA, Europe, Brazil).gg"
        },
        {
            "name": "MLBPA Baseball (USA)",
            "url": "rom/sega game gear/MLBPA Baseball (USA).gg"
        },
        {
            "name": "Madden 96 (USA, Europe)",
            "url": "rom/sega game gear/Madden 96 (USA, Europe).gg"
        },
        {
            "name": "Madden NFL 95 (USA)",
            "url": "rom/sega game gear/Madden NFL 95 (USA).gg"
        },
        {
            "name": "Magical Puzzle Popils (World) (En,Ja)",
            "url": "rom/sega game gear/Magical Puzzle Popils (World) (En,Ja).gg"
        },
        {
            "name": "Majors, The   Pro Baseball (USA)",
            "url": "rom/sega game gear/Majors, The - Pro Baseball (USA).gg"
        },
        {
            "name": "Marble Madness (USA, Europe)",
            "url": "rom/sega game gear/Marble Madness (USA, Europe).gg"
        },
        {
            "name": "Mega Man (USA)",
            "url": "rom/sega game gear/Mega Man (USA).gg"
        },
        {
            "name": "Mickey's Ultimate Challenge (USA)",
            "url": "rom/sega game gear/Mickey's Ultimate Challenge (USA).gg"
        },
        {
            "name": "Micro Machines (USA, Europe) (Beta) (1993 10 22)",
            "url": "rom/sega game gear/Micro Machines (USA, Europe) (Beta) (1993-10-22).gg"
        },
        {
            "name": "Micro Machines (USA, Europe)",
            "url": "rom/sega game gear/Micro Machines (USA, Europe).gg"
        },
        {
            "name": "Mighty Morphin Power Rangers (USA, Europe) (Beta) (1994 07 16)",
            "url": "rom/sega game gear/Mighty Morphin Power Rangers (USA, Europe) (Beta) (1994-07-16).gg"
        },
        {
            "name": "Mighty Morphin Power Rangers (USA, Europe)",
            "url": "rom/sega game gear/Mighty Morphin Power Rangers (USA, Europe).gg"
        },
        {
            "name": "Mighty Morphin Power Rangers   The Movie (USA, Europe)",
            "url": "rom/sega game gear/Mighty Morphin Power Rangers - The Movie (USA, Europe).gg"
        },
        {
            "name": "Monster Truck Wars (USA, Europe)",
            "url": "rom/sega game gear/Monster Truck Wars (USA, Europe).gg"
        },
        {
            "name": "Mortal Kombat (USA, Europe)",
            "url": "rom/sega game gear/Mortal Kombat (USA, Europe).gg"
        },
        {
            "name": "Mortal Kombat II (World)",
            "url": "rom/sega game gear/Mortal Kombat II (World).gg"
        },
        {
            "name": "Ms. Pac Man (USA)",
            "url": "rom/sega game gear/Ms. Pac-Man (USA).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1993 11 28)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1993-11-28).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1993 12 01)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1993-12-01).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 01 04)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-01-04).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 01 06)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-01-06).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 01 10)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-01-10).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 01 24)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-01-24).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 01 29)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-01-29).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 02 02)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-02-02).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 02 03)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-02-03).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 02 06)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-02-06).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 02 08)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-02-08).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 02 12)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-02-12).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 02 15)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-02-15).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 02 17)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-02-17).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 02 20)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-02-20).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 02 21)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-02-21).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 02 24)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-02-24).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 02 25) (Alt 1)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-02-25) (Alt 1).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 02 25)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-02-25).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 02 26)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-02-26).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 02 27)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-02-27).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 02 28) (Alt 1)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-02-28) (Alt 1).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 02 28)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-02-28).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 03 01)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-03-01).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 03 02)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-03-02).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 03 03)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-03-03).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 03 04) (Alt 1)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-03-04) (Alt 1).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 03 04)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-03-04).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 03 05)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-03-05).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994 03 08)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil) (Beta) (1994-03-08).gg"
        },
        {
            "name": "NBA Action Starring David Robinson (USA, Brazil)",
            "url": "rom/sega game gear/NBA Action Starring David Robinson (USA, Brazil).gg"
        },
        {
            "name": "NBA Jam (USA) (Rev 1)",
            "url": "rom/sega game gear/NBA Jam (USA) (Rev 1).gg"
        },
        {
            "name": "NBA Jam (USA, Europe)",
            "url": "rom/sega game gear/NBA Jam (USA, Europe).gg"
        },
        {
            "name": "NBA Jam   Tournament Edition (World)",
            "url": "rom/sega game gear/NBA Jam - Tournament Edition (World).gg"
        },
        {
            "name": "NFL '95 (USA) (Beta) (1994 08 08)",
            "url": "rom/sega game gear/NFL '95 (USA) (Beta) (1994-08-08).gg"
        },
        {
            "name": "NFL '95 (USA) (Beta) (1994 08 25) (Alt 1)",
            "url": "rom/sega game gear/NFL '95 (USA) (Beta) (1994-08-25) (Alt 1).gg"
        },
        {
            "name": "NFL '95 (USA) (Beta) (1994 08 25)",
            "url": "rom/sega game gear/NFL '95 (USA) (Beta) (1994-08-25).gg"
        },
        {
            "name": "NFL '95 (USA) (Beta) (1994 08 26)",
            "url": "rom/sega game gear/NFL '95 (USA) (Beta) (1994-08-26).gg"
        },
        {
            "name": "NFL '95 (USA) (Beta) (1994 08 31)",
            "url": "rom/sega game gear/NFL '95 (USA) (Beta) (1994-08-31).gg"
        },
        {
            "name": "NFL '95 (USA) (Beta) (1994 09 02)",
            "url": "rom/sega game gear/NFL '95 (USA) (Beta) (1994-09-02).gg"
        },
        {
            "name": "NFL '95 (USA) (Beta) (1994 09 08)",
            "url": "rom/sega game gear/NFL '95 (USA) (Beta) (1994-09-08).gg"
        },
        {
            "name": "NFL '95 (USA) (Beta) (1994 09 10)",
            "url": "rom/sega game gear/NFL '95 (USA) (Beta) (1994-09-10).gg"
        },
        {
            "name": "NFL '95 (USA) (Beta) (1994 09 11) (Alt 1)",
            "url": "rom/sega game gear/NFL '95 (USA) (Beta) (1994-09-11) (Alt 1).gg"
        },
        {
            "name": "NFL '95 (USA) (Beta) (1994 09 11)",
            "url": "rom/sega game gear/NFL '95 (USA) (Beta) (1994-09-11).gg"
        },
        {
            "name": "NFL '95 (USA) (Beta) (1994 09 12)",
            "url": "rom/sega game gear/NFL '95 (USA) (Beta) (1994-09-12).gg"
        },
        {
            "name": "NFL '95 (USA) (Beta) (1994 09 14) (Alt 1)",
            "url": "rom/sega game gear/NFL '95 (USA) (Beta) (1994-09-14) (Alt 1).gg"
        },
        {
            "name": "NFL '95 (USA) (Beta) (1994 09 14)",
            "url": "rom/sega game gear/NFL '95 (USA) (Beta) (1994-09-14).gg"
        },
        {
            "name": "NFL '95 (USA)",
            "url": "rom/sega game gear/NFL '95 (USA).gg"
        },
        {
            "name": "NFL Quarterback Club (World)",
            "url": "rom/sega game gear/NFL Quarterback Club (World).gg"
        },
        {
            "name": "NFL Quarterback Club 96 (USA)",
            "url": "rom/sega game gear/NFL Quarterback Club 96 (USA).gg"
        },
        {
            "name": "NHL All Star Hockey (USA) (Beta) (1994 12 15)",
            "url": "rom/sega game gear/NHL All-Star Hockey (USA) (Beta) (1994-12-15).gg"
        },
        {
            "name": "NHL All Star Hockey (USA) (Beta) (1994 12 22)",
            "url": "rom/sega game gear/NHL All-Star Hockey (USA) (Beta) (1994-12-22).gg"
        },
        {
            "name": "NHL All Star Hockey (USA) (Beta) (1994 12 29)",
            "url": "rom/sega game gear/NHL All-Star Hockey (USA) (Beta) (1994-12-29).gg"
        },
        {
            "name": "NHL All Star Hockey (USA) (Beta) (1994 12 31)",
            "url": "rom/sega game gear/NHL All-Star Hockey (USA) (Beta) (1994-12-31).gg"
        },
        {
            "name": "NHL All Star Hockey (USA) (Beta) (1995 01 02)",
            "url": "rom/sega game gear/NHL All-Star Hockey (USA) (Beta) (1995-01-02).gg"
        },
        {
            "name": "NHL All Star Hockey (USA) (Beta) (1995 01 03)",
            "url": "rom/sega game gear/NHL All-Star Hockey (USA) (Beta) (1995-01-03).gg"
        },
        {
            "name": "NHL All Star Hockey (USA) (Beta) (1995 01 07)",
            "url": "rom/sega game gear/NHL All-Star Hockey (USA) (Beta) (1995-01-07).gg"
        },
        {
            "name": "NHL All Star Hockey (USA) (Beta) (1995 01 11)",
            "url": "rom/sega game gear/NHL All-Star Hockey (USA) (Beta) (1995-01-11).gg"
        },
        {
            "name": "NHL All Star Hockey (USA) (Beta) (1995 01 13)",
            "url": "rom/sega game gear/NHL All-Star Hockey (USA) (Beta) (1995-01-13).gg"
        },
        {
            "name": "NHL All Star Hockey (USA) (Beta) (1995 01 16)",
            "url": "rom/sega game gear/NHL All-Star Hockey (USA) (Beta) (1995-01-16).gg"
        },
        {
            "name": "NHL All Star Hockey (USA) (Beta) (1995 01 20)",
            "url": "rom/sega game gear/NHL All-Star Hockey (USA) (Beta) (1995-01-20).gg"
        },
        {
            "name": "NHL All Star Hockey (USA) (Beta) (1995 01 21)",
            "url": "rom/sega game gear/NHL All-Star Hockey (USA) (Beta) (1995-01-21).gg"
        },
        {
            "name": "NHL All Star Hockey (USA) (Beta) (1995 01 24) (Alt 1)",
            "url": "rom/sega game gear/NHL All-Star Hockey (USA) (Beta) (1995-01-24) (Alt 1).gg"
        },
        {
            "name": "NHL All Star Hockey (USA) (Beta) (1995 01 24) (Alt 2)",
            "url": "rom/sega game gear/NHL All-Star Hockey (USA) (Beta) (1995-01-24) (Alt 2).gg"
        },
        {
            "name": "NHL All Star Hockey (USA) (Beta) (1995 01 24) (Alt 3)",
            "url": "rom/sega game gear/NHL All-Star Hockey (USA) (Beta) (1995-01-24) (Alt 3).gg"
        },
        {
            "name": "NHL All Star Hockey (USA) (Beta) (1995 01 24)",
            "url": "rom/sega game gear/NHL All-Star Hockey (USA) (Beta) (1995-01-24).gg"
        },
        {
            "name": "NHL All Star Hockey (USA) (Beta) (1995 01 25)",
            "url": "rom/sega game gear/NHL All-Star Hockey (USA) (Beta) (1995-01-25).gg"
        },
        {
            "name": "NHL All Star Hockey (USA)",
            "url": "rom/sega game gear/NHL All-Star Hockey (USA).gg"
        },
        {
            "name": "NHL Hockey (USA, Europe)",
            "url": "rom/sega game gear/NHL Hockey (USA, Europe).gg"
        },
        {
            "name": "Ninja Gaiden (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Ninja Gaiden (USA, Europe, Brazil).gg"
        },
        {
            "name": "Off The Wall (USA) (Proto) (1992 06 28)",
            "url": "rom/sega game gear/Off the Wall (USA) (Proto) (1992-06-28).gg"
        },
        {
            "name": "PGA Tour 96 (USA, Europe)",
            "url": "rom/sega game gear/PGA Tour 96 (USA, Europe).gg"
        },
        {
            "name": "PGA Tour Golf (USA) (Rev 1)",
            "url": "rom/sega game gear/PGA Tour Golf (USA) (Rev 1).gg"
        },
        {
            "name": "PGA Tour Golf (USA, Europe)",
            "url": "rom/sega game gear/PGA Tour Golf (USA, Europe).gg"
        },
        {
            "name": "PGA Tour Golf II (USA, Europe)",
            "url": "rom/sega game gear/PGA Tour Golf II (USA, Europe).gg"
        },
        {
            "name": "Pac Attack (USA)",
            "url": "rom/sega game gear/Pac-Attack (USA).gg"
        },
        {
            "name": "Pac Man (USA)",
            "url": "rom/sega game gear/Pac-Man (USA).gg"
        },
        {
            "name": "Pac In Time (USA) (Proto)",
            "url": "rom/sega game gear/Pac-in-Time (USA) (Proto).gg"
        },
        {
            "name": "Paperboy (USA, Europe)",
            "url": "rom/sega game gear/Paperboy (USA, Europe).gg"
        },
        {
            "name": "Paperboy 2 (USA) (Beta)",
            "url": "rom/sega game gear/Paperboy 2 (USA) (Beta).gg"
        },
        {
            "name": "Paperboy 2 (USA)",
            "url": "rom/sega game gear/Paperboy 2 (USA).gg"
        },
        {
            "name": "Pete Sampras Tennis (USA, Europe)",
            "url": "rom/sega game gear/Pete Sampras Tennis (USA, Europe).gg"
        },
        {
            "name": "Phantom 2040 (USA, Europe)",
            "url": "rom/sega game gear/Phantom 2040 (USA, Europe).gg"
        },
        {
            "name": "Pinball Dreams (USA)",
            "url": "rom/sega game gear/Pinball Dreams (USA).gg"
        },
        {
            "name": "Poker Face Paul's Blackjack (USA)",
            "url": "rom/sega game gear/Poker Face Paul's Blackjack (USA).gg"
        },
        {
            "name": "Poker Face Paul's Gin (USA)",
            "url": "rom/sega game gear/Poker Face Paul's Gin (USA).gg"
        },
        {
            "name": "Poker Face Paul's Poker (USA)",
            "url": "rom/sega game gear/Poker Face Paul's Poker (USA).gg"
        },
        {
            "name": "Poker Face Paul's Solitaire (USA)",
            "url": "rom/sega game gear/Poker Face Paul's Solitaire (USA).gg"
        },
        {
            "name": "Primal Rage (USA, Europe)",
            "url": "rom/sega game gear/Primal Rage (USA, Europe).gg"
        },
        {
            "name": "Psychic World (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Psychic World (USA, Europe, Brazil).gg"
        },
        {
            "name": "Putt & Putter   Miniature Golf ~ Putt & Putter ~ Minigolf (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Putt & Putter - Miniature Golf ~ Putt & Putter ~ Minigolf (USA, Europe, Brazil).gg"
        },
        {
            "name": "Quest For The Shaven Yak Starring Ren Hoek & Stimpy (USA, Europe)",
            "url": "rom/sega game gear/Quest for the Shaven Yak Starring Ren Hoek & Stimpy (USA, Europe).gg"
        },
        {
            "name": "R.B.I. Baseball '94 (USA)",
            "url": "rom/sega game gear/R.B.I. Baseball '94 (USA).gg"
        },
        {
            "name": "Revenge Of Drancon (USA, Brazil)",
            "url": "rom/sega game gear/Revenge of Drancon (USA, Brazil).gg"
        },
        {
            "name": "Riddick Bowe Boxing (USA)",
            "url": "rom/sega game gear/Riddick Bowe Boxing (USA).gg"
        },
        {
            "name": "Rise Of The Robots (USA, Europe)",
            "url": "rom/sega game gear/Rise of the Robots (USA, Europe).gg"
        },
        {
            "name": "Ristar (World) (Beta) (1994 09 09)",
            "url": "rom/sega game gear/Ristar (World) (Beta) (1994-09-09).gg"
        },
        {
            "name": "Ristar (World) (Beta) (1994 10 19)",
            "url": "rom/sega game gear/Ristar (World) (Beta) (1994-10-19).gg"
        },
        {
            "name": "Ristar (World) (Beta) (1994 10 24)",
            "url": "rom/sega game gear/Ristar (World) (Beta) (1994-10-24).gg"
        },
        {
            "name": "Ristar (World) (Beta) (1994 11 01)",
            "url": "rom/sega game gear/Ristar (World) (Beta) (1994-11-01).gg"
        },
        {
            "name": "Ristar (World) (Beta) (1994 11 02)",
            "url": "rom/sega game gear/Ristar (World) (Beta) (1994-11-02).gg"
        },
        {
            "name": "Ristar ~ Ristar   The Shooting Star (World)",
            "url": "rom/sega game gear/Ristar ~ Ristar - The Shooting Star (World).gg"
        },
        {
            "name": "Road Rash (USA)",
            "url": "rom/sega game gear/Road Rash (USA).gg"
        },
        {
            "name": "RoboCop 3 (World)",
            "url": "rom/sega game gear/RoboCop 3 (World).gg"
        },
        {
            "name": "RoboCop Versus The Terminator (USA, Europe)",
            "url": "rom/sega game gear/RoboCop versus The Terminator (USA, Europe).gg"
        },
        {
            "name": "Samurai Shodown (USA)",
            "url": "rom/sega game gear/Samurai Shodown (USA).gg"
        },
        {
            "name": "Scratch Golf (USA)",
            "url": "rom/sega game gear/Scratch Golf (USA).gg"
        },
        {
            "name": "Shaq Fu (USA)",
            "url": "rom/sega game gear/Shaq Fu (USA).gg"
        },
        {
            "name": "Shining Force   The Sword Of Hajya (USA) (Beta) (1994 04 27)",
            "url": "rom/sega game gear/Shining Force - The Sword of Hajya (USA) (Beta) (1994-04-27).gg"
        },
        {
            "name": "Shining Force   The Sword Of Hajya (USA) (Beta) (1994 05 30)",
            "url": "rom/sega game gear/Shining Force - The Sword of Hajya (USA) (Beta) (1994-05-30).gg"
        },
        {
            "name": "Shining Force   The Sword Of Hajya (USA) (Beta) (1994 06 27)",
            "url": "rom/sega game gear/Shining Force - The Sword of Hajya (USA) (Beta) (1994-06-27).gg"
        },
        {
            "name": "Shining Force   The Sword Of Hajya (USA) (Beta) (1994 07 08)",
            "url": "rom/sega game gear/Shining Force - The Sword of Hajya (USA) (Beta) (1994-07-08).gg"
        },
        {
            "name": "Shining Force   The Sword Of Hajya (USA)",
            "url": "rom/sega game gear/Shining Force - The Sword of Hajya (USA).gg"
        },
        {
            "name": "Side Pocket (USA)",
            "url": "rom/sega game gear/Side Pocket (USA).gg"
        },
        {
            "name": "Simpsons, The   Bart Vs. The Space Mutants (USA, Europe)",
            "url": "rom/sega game gear/Simpsons, The - Bart vs. the Space Mutants (USA, Europe).gg"
        },
        {
            "name": "Simpsons, The   Bart Vs. The World ~ Bart World (World)",
            "url": "rom/sega game gear/Simpsons, The - Bart vs. the World ~ Bart World (World).gg"
        },
        {
            "name": "Simpsons, The   Bartman Meets Radioactive Man (USA)",
            "url": "rom/sega game gear/Simpsons, The - Bartman Meets Radioactive Man (USA).gg"
        },
        {
            "name": "Slider (USA, Europe)",
            "url": "rom/sega game gear/Slider (USA, Europe).gg"
        },
        {
            "name": "Solitaire FunPak (USA)",
            "url": "rom/sega game gear/Solitaire FunPak (USA).gg"
        },
        {
            "name": "Solitaire Poker (USA, Europe)",
            "url": "rom/sega game gear/Solitaire Poker (USA, Europe).gg"
        },
        {
            "name": "Sonic Blast (World) (Beta) (1996 05 31)",
            "url": "rom/sega game gear/Sonic Blast (World) (Beta) (1996-05-31).gg"
        },
        {
            "name": "Sonic Blast (World) (Beta) (1996 07 04)",
            "url": "rom/sega game gear/Sonic Blast (World) (Beta) (1996-07-04).gg"
        },
        {
            "name": "Sonic Blast (World) (Beta) (1996 08 06)",
            "url": "rom/sega game gear/Sonic Blast (World) (Beta) (1996-08-06).gg"
        },
        {
            "name": "Sonic Blast (World) (Beta) (1996 08 21)",
            "url": "rom/sega game gear/Sonic Blast (World) (Beta) (1996-08-21).gg"
        },
        {
            "name": "Sonic Blast (World) (Beta) (1996 08 27)",
            "url": "rom/sega game gear/Sonic Blast (World) (Beta) (1996-08-27).gg"
        },
        {
            "name": "Sonic Blast (World) (Beta) (1996 09 02)",
            "url": "rom/sega game gear/Sonic Blast (World) (Beta) (1996-09-02).gg"
        },
        {
            "name": "Sonic Chaos (USA, Europe, Brazil) (Beta) (1993 05 17)",
            "url": "rom/sega game gear/Sonic Chaos (USA, Europe, Brazil) (Beta) (1993-05-17).gg"
        },
        {
            "name": "Sonic Chaos (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Sonic Chaos (USA, Europe, Brazil).gg"
        },
        {
            "name": "Sonic Drift Racing ~ Sonic Drift 2 (World)",
            "url": "rom/sega game gear/Sonic Drift Racing ~ Sonic Drift 2 (World).gg"
        },
        {
            "name": "Sonic Labyrinth (World)",
            "url": "rom/sega game gear/Sonic Labyrinth (World).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 03 07)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-03-07).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 03 10)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-03-10).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 03 11)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-03-11).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 03 21)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-03-21).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 03 28)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-03-28).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 03 29)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-03-29).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 03 30)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-03-30).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 04 05)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-04-05).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 04 12)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-04-12).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 04 13)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-04-13).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 04 15)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-04-15).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 04 21)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-04-21).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 04 27)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-04-27).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 04 29) (Alt 1)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-04-29) (Alt 1).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 04 29)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-04-29).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 05 03)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-05-03).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 05 05)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-05-05).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 05 06)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-05-06).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 05 25)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-05-25).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe) (Beta) (1994 05 30)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe) (Beta) (1994-05-30).gg"
        },
        {
            "name": "Sonic Spinball (USA, Europe)",
            "url": "rom/sega game gear/Sonic Spinball (USA, Europe).gg"
        },
        {
            "name": "Sonic The Hedgehog (Japan, USA) (Beta)",
            "url": "rom/sega game gear/Sonic The Hedgehog (Japan, USA) (Beta).gg"
        },
        {
            "name": "Sonic The Hedgehog (Japan, USA)",
            "url": "rom/sega game gear/Sonic The Hedgehog (Japan, USA).gg"
        },
        {
            "name": "Sonic The Hedgehog   Triple Trouble (USA, Europe, Brazil) (Beta) (1994 08 08)",
            "url": "rom/sega game gear/Sonic The Hedgehog - Triple Trouble (USA, Europe, Brazil) (Beta) (1994-08-08).gg"
        },
        {
            "name": "Sonic The Hedgehog   Triple Trouble (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Sonic The Hedgehog - Triple Trouble (USA, Europe, Brazil).gg"
        },
        {
            "name": "Sonic The Hedgehog 2 (World) (Auto Demo)",
            "url": "rom/sega game gear/Sonic The Hedgehog 2 (World) (Auto Demo).gg"
        },
        {
            "name": "Sonic The Hedgehog 2 (World)",
            "url": "rom/sega game gear/Sonic The Hedgehog 2 (World).gg"
        },
        {
            "name": "Space Harrier (World)",
            "url": "rom/sega game gear/Space Harrier (World).gg"
        },
        {
            "name": "Spider Man (USA, Europe)",
            "url": "rom/sega game gear/Spider-Man (USA, Europe).gg"
        },
        {
            "name": "Spider Man   Return Of The Sinister Six (USA, Europe)",
            "url": "rom/sega game gear/Spider-Man - Return of the Sinister Six (USA, Europe).gg"
        },
        {
            "name": "Spider Man   X Men   Arcade's Revenge (USA)",
            "url": "rom/sega game gear/Spider-Man - X-Men - Arcade's Revenge (USA).gg"
        },
        {
            "name": "Sports Illustrated   Championship Football & Baseball (USA)",
            "url": "rom/sega game gear/Sports Illustrated - Championship Football & Baseball (USA).gg"
        },
        {
            "name": "Sports Trivia (USA) (Beta) (1995 03 08)",
            "url": "rom/sega game gear/Sports Trivia (USA) (Beta) (1995-03-08).gg"
        },
        {
            "name": "Sports Trivia (USA) (Beta) (1995 03 09)",
            "url": "rom/sega game gear/Sports Trivia (USA) (Beta) (1995-03-09).gg"
        },
        {
            "name": "Sports Trivia (USA) (Beta) (1995 03 16)",
            "url": "rom/sega game gear/Sports Trivia (USA) (Beta) (1995-03-16).gg"
        },
        {
            "name": "Sports Trivia (USA) (Beta) (1995 04 25) (Alt 1)",
            "url": "rom/sega game gear/Sports Trivia (USA) (Beta) (1995-04-25) (Alt 1).gg"
        },
        {
            "name": "Sports Trivia (USA) (Beta) (1995 04 25)",
            "url": "rom/sega game gear/Sports Trivia (USA) (Beta) (1995-04-25).gg"
        },
        {
            "name": "Sports Trivia (USA) (Beta) (1995 04 27)",
            "url": "rom/sega game gear/Sports Trivia (USA) (Beta) (1995-04-27).gg"
        },
        {
            "name": "Sports Trivia (USA) (Beta) (1995 05 04)",
            "url": "rom/sega game gear/Sports Trivia (USA) (Beta) (1995-05-04).gg"
        },
        {
            "name": "Sports Trivia (USA)",
            "url": "rom/sega game gear/Sports Trivia (USA).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 03 13)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-03-13).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 03 16)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-03-16).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 03 17)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-03-17).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 03 20) (Alt 1)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-03-20) (Alt 1).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 03 20)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-03-20).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 03 21)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-03-21).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 03 23) (Alt 1)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-03-23) (Alt 1).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 03 23) (Alt 2)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-03-23) (Alt 2).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 03 23)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-03-23).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 03 27) (Alt 1)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-03-27) (Alt 1).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 03 27)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-03-27).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 03 29) (Alt 1)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-03-29) (Alt 1).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 03 29) (Alt 2)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-03-29) (Alt 2).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 03 29)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-03-29).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 03 30) (Alt 1)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-03-30) (Alt 1).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 03 30)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-03-30).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 04 03)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-04-03).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 04 04) (Alt 1)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-04-04) (Alt 1).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 04 04)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-04-04).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 04 05) (Alt 1)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-04-05) (Alt 1).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 04 05) (Alt 2)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-04-05) (Alt 2).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 04 05)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-04-05).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 04 06)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-04-06).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 04 07) (Alt 1)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-04-07) (Alt 1).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 04 07)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-04-07).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 04 11)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-04-11).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 04 12)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-04-12).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 04 13)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-04-13).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA) (Beta) (1995 04 28)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA) (Beta) (1995-04-28).gg"
        },
        {
            "name": "Sports Trivia   Championship Edition (USA)",
            "url": "rom/sega game gear/Sports Trivia - Championship Edition (USA).gg"
        },
        {
            "name": "Star Trek   The Next Generation   The Advanced Holodeck Tutorial (USA)",
            "url": "rom/sega game gear/Star Trek - The Next Generation - The Advanced Holodeck Tutorial (USA).gg"
        },
        {
            "name": "Star Trek Generations   Beyond The Nexus (USA)",
            "url": "rom/sega game gear/Star Trek Generations - Beyond the Nexus (USA).gg"
        },
        {
            "name": "Star Wars (USA, Europe)",
            "url": "rom/sega game gear/Star Wars (USA, Europe).gg"
        },
        {
            "name": "Stargate (World)",
            "url": "rom/sega game gear/Stargate (World).gg"
        },
        {
            "name": "Street Hero (USA) (Proto 1)",
            "url": "rom/sega game gear/Street Hero (USA) (Proto 1).gg"
        },
        {
            "name": "Street Hero (USA) (Proto 2)",
            "url": "rom/sega game gear/Street Hero (USA) (Proto 2).gg"
        },
        {
            "name": "Super Battletank (USA)",
            "url": "rom/sega game gear/Super Battletank (USA).gg"
        },
        {
            "name": "Super Columns (USA, Europe) (Beta) (1994 11 11)",
            "url": "rom/sega game gear/Super Columns (USA, Europe) (Beta) (1994-11-11).gg"
        },
        {
            "name": "Super Columns (USA, Europe) (Beta) (1994 12 01)",
            "url": "rom/sega game gear/Super Columns (USA, Europe) (Beta) (1994-12-01).gg"
        },
        {
            "name": "Super Columns (USA, Europe) (Beta) (1994 12 15)",
            "url": "rom/sega game gear/Super Columns (USA, Europe) (Beta) (1994-12-15).gg"
        },
        {
            "name": "Super Columns (USA, Europe) (Beta) (1994 12 21)",
            "url": "rom/sega game gear/Super Columns (USA, Europe) (Beta) (1994-12-21).gg"
        },
        {
            "name": "Super Columns (USA, Europe) (Beta) (1994 12 26)",
            "url": "rom/sega game gear/Super Columns (USA, Europe) (Beta) (1994-12-26).gg"
        },
        {
            "name": "Super Columns (USA, Europe) (Beta) (1994 12 28)",
            "url": "rom/sega game gear/Super Columns (USA, Europe) (Beta) (1994-12-28).gg"
        },
        {
            "name": "Super Columns (USA, Europe) (Beta) (1995 01 06)",
            "url": "rom/sega game gear/Super Columns (USA, Europe) (Beta) (1995-01-06).gg"
        },
        {
            "name": "Super Columns (USA, Europe)",
            "url": "rom/sega game gear/Super Columns (USA, Europe).gg"
        },
        {
            "name": "Super Golf (USA)",
            "url": "rom/sega game gear/Super Golf (USA).gg"
        },
        {
            "name": "Super Monaco GP (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Super Monaco GP (USA, Europe, Brazil).gg"
        },
        {
            "name": "Super Off Road (USA, Europe) (Beta)",
            "url": "rom/sega game gear/Super Off Road (USA, Europe) (Beta).gg"
        },
        {
            "name": "Super Off Road (USA, Europe)",
            "url": "rom/sega game gear/Super Off Road (USA, Europe).gg"
        },
        {
            "name": "Super Smash T.V. (World)",
            "url": "rom/sega game gear/Super Smash T.V. (World).gg"
        },
        {
            "name": "Super Space Invaders (USA, Europe)",
            "url": "rom/sega game gear/Super Space Invaders (USA, Europe).gg"
        },
        {
            "name": "Super Star Wars   Return Of The Jedi (USA, Europe)",
            "url": "rom/sega game gear/Super Star Wars - Return of the Jedi (USA, Europe).gg"
        },
        {
            "name": "Surf Ninjas (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Surf Ninjas (USA, Europe, Brazil).gg"
        },
        {
            "name": "Swabby (USA) (Unl) (1.11)",
            "url": "rom/sega game gear/Swabby (USA) (Unl) (1.11).gg"
        },
        {
            "name": "T2   The Arcade Game (USA, Europe)",
            "url": "rom/sega game gear/T2 - The Arcade Game (USA, Europe).gg"
        },
        {
            "name": "Tails Adventure ~ Tails Adventures (World) (En,Ja)",
            "url": "rom/sega game gear/Tails Adventure ~ Tails Adventures (World) (En,Ja).gg"
        },
        {
            "name": "TaleSpin (USA, Europe, Brazil)",
            "url": "rom/sega game gear/TaleSpin (USA, Europe, Brazil).gg"
        },
        {
            "name": "Taz In Escape From Mars (USA, Europe) (Beta) (1994 05 11)",
            "url": "rom/sega game gear/Taz in Escape from Mars (USA, Europe) (Beta) (1994-05-11).gg"
        },
        {
            "name": "Taz In Escape From Mars (USA, Europe) (Beta) (1994 08 10)",
            "url": "rom/sega game gear/Taz in Escape from Mars (USA, Europe) (Beta) (1994-08-10).gg"
        },
        {
            "name": "Taz In Escape From Mars (USA, Europe) (Beta) (1994 08 12)",
            "url": "rom/sega game gear/Taz in Escape from Mars (USA, Europe) (Beta) (1994-08-12).gg"
        },
        {
            "name": "Taz In Escape From Mars (USA, Europe) (Beta) (1994 08 14)",
            "url": "rom/sega game gear/Taz in Escape from Mars (USA, Europe) (Beta) (1994-08-14).gg"
        },
        {
            "name": "Taz In Escape From Mars (USA, Europe) (Beta) (1994 08 19)",
            "url": "rom/sega game gear/Taz in Escape from Mars (USA, Europe) (Beta) (1994-08-19).gg"
        },
        {
            "name": "Taz In Escape From Mars (USA, Europe) (Beta) (1994 08 23)",
            "url": "rom/sega game gear/Taz in Escape from Mars (USA, Europe) (Beta) (1994-08-23).gg"
        },
        {
            "name": "Taz In Escape From Mars (USA, Europe) (Beta) (1994 08 29)",
            "url": "rom/sega game gear/Taz in Escape from Mars (USA, Europe) (Beta) (1994-08-29).gg"
        },
        {
            "name": "Taz In Escape From Mars (USA, Europe) (Beta) (1994 08 30)",
            "url": "rom/sega game gear/Taz in Escape from Mars (USA, Europe) (Beta) (1994-08-30).gg"
        },
        {
            "name": "Taz In Escape From Mars (USA, Europe) (Beta) (1994 09 02)",
            "url": "rom/sega game gear/Taz in Escape from Mars (USA, Europe) (Beta) (1994-09-02).gg"
        },
        {
            "name": "Taz In Escape From Mars (USA, Europe) (Beta) (1994 09 05) (Alt 1)",
            "url": "rom/sega game gear/Taz in Escape from Mars (USA, Europe) (Beta) (1994-09-05) (Alt 1).gg"
        },
        {
            "name": "Taz In Escape From Mars (USA, Europe) (Beta) (1994 09 05)",
            "url": "rom/sega game gear/Taz in Escape from Mars (USA, Europe) (Beta) (1994-09-05).gg"
        },
        {
            "name": "Taz In Escape From Mars (USA, Europe) (Beta) (1994 09 06)",
            "url": "rom/sega game gear/Taz in Escape from Mars (USA, Europe) (Beta) (1994-09-06).gg"
        },
        {
            "name": "Taz In Escape From Mars (USA, Europe) (Beta) (1994 09 09)",
            "url": "rom/sega game gear/Taz in Escape from Mars (USA, Europe) (Beta) (1994-09-09).gg"
        },
        {
            "name": "Taz In Escape From Mars (USA, Europe) (Beta) (1994 09 10)",
            "url": "rom/sega game gear/Taz in Escape from Mars (USA, Europe) (Beta) (1994-09-10).gg"
        },
        {
            "name": "Taz In Escape From Mars (USA, Europe)",
            "url": "rom/sega game gear/Taz in Escape from Mars (USA, Europe).gg"
        },
        {
            "name": "Taz Mania (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Taz-Mania (USA, Europe, Brazil).gg"
        },
        {
            "name": "Tempo Jr. (World) (Beta) (1994 11 28)",
            "url": "rom/sega game gear/Tempo Jr. (World) (Beta) (1994-11-28).gg"
        },
        {
            "name": "Tempo Jr. (World) (Beta) (1994 12 05)",
            "url": "rom/sega game gear/Tempo Jr. (World) (Beta) (1994-12-05).gg"
        },
        {
            "name": "Tempo Jr. (World) (Beta) (1994 12 12)",
            "url": "rom/sega game gear/Tempo Jr. (World) (Beta) (1994-12-12).gg"
        },
        {
            "name": "Tempo Jr. (World) (Beta) (1994 12 26)",
            "url": "rom/sega game gear/Tempo Jr. (World) (Beta) (1994-12-26).gg"
        },
        {
            "name": "Tempo Jr. (World) (Beta) (1995 01 17)",
            "url": "rom/sega game gear/Tempo Jr. (World) (Beta) (1995-01-17).gg"
        },
        {
            "name": "Tempo Jr. (World) (Beta) (1995 01 20)",
            "url": "rom/sega game gear/Tempo Jr. (World) (Beta) (1995-01-20).gg"
        },
        {
            "name": "Tempo Jr. (World) (Beta) (1995 01 31)",
            "url": "rom/sega game gear/Tempo Jr. (World) (Beta) (1995-01-31).gg"
        },
        {
            "name": "Tempo Jr. (World) (Beta) (1995 02 06)",
            "url": "rom/sega game gear/Tempo Jr. (World) (Beta) (1995-02-06).gg"
        },
        {
            "name": "Tempo Jr. (World) (Beta) (1995 02 15)",
            "url": "rom/sega game gear/Tempo Jr. (World) (Beta) (1995-02-15).gg"
        },
        {
            "name": "Tempo Jr. (World)",
            "url": "rom/sega game gear/Tempo Jr. (World).gg"
        },
        {
            "name": "Tengen World Cup Soccer (USA, Europe)",
            "url": "rom/sega game gear/Tengen World Cup Soccer (USA, Europe).gg"
        },
        {
            "name": "Terminator, The (USA, Europe)",
            "url": "rom/sega game gear/Terminator, The (USA, Europe).gg"
        },
        {
            "name": "Tesserae (USA)",
            "url": "rom/sega game gear/Tesserae (USA).gg"
        },
        {
            "name": "Tom And Jerry   The Movie (USA, Europe)",
            "url": "rom/sega game gear/Tom and Jerry - The Movie (USA, Europe).gg"
        },
        {
            "name": "True Lies (World)",
            "url": "rom/sega game gear/True Lies (World).gg"
        },
        {
            "name": "Urban Strike (USA)",
            "url": "rom/sega game gear/Urban Strike (USA).gg"
        },
        {
            "name": "VR Troopers (USA, Europe, Brazil)",
            "url": "rom/sega game gear/VR Troopers (USA, Europe, Brazil).gg"
        },
        {
            "name": "Vampire   Master Of Darkness (USA)",
            "url": "rom/sega game gear/Vampire - Master of Darkness (USA).gg"
        },
        {
            "name": "Virtua Fighter Animation (USA, Europe)",
            "url": "rom/sega game gear/Virtua Fighter Animation (USA, Europe).gg"
        },
        {
            "name": "WWF Raw (USA, Europe)",
            "url": "rom/sega game gear/WWF Raw (USA, Europe).gg"
        },
        {
            "name": "Wheel Of Fortune (USA)",
            "url": "rom/sega game gear/Wheel of Fortune (USA).gg"
        },
        {
            "name": "WildSnake (USA) (Proto)",
            "url": "rom/sega game gear/WildSnake (USA) (Proto).gg"
        },
        {
            "name": "Wimbledon (World)",
            "url": "rom/sega game gear/Wimbledon (World).gg"
        },
        {
            "name": "Wing Warriors (USA) (Unl)",
            "url": "rom/sega game gear/Wing Warriors (USA) (Unl).gg"
        },
        {
            "name": "Winter Olympic Games ~ Winter Olympics (USA, Europe) (En,Fr,De,Es,It,Pt,Sv,No)",
            "url": "rom/sega game gear/Winter Olympic Games ~ Winter Olympics (USA, Europe) (En,Fr,De,Es,It,Pt,Sv,No).gg"
        },
        {
            "name": "Woody Pop (USA, Europe, Brazil)",
            "url": "rom/sega game gear/Woody Pop (USA, Europe, Brazil).gg"
        },
        {
            "name": "World Class Leaderboard Golf ~ World Class Leader Board (USA, Europe)",
            "url": "rom/sega game gear/World Class Leaderboard Golf ~ World Class Leader Board (USA, Europe).gg"
        },
        {
            "name": "World Cup USA 94 (USA, Europe) (En,Fr,De,Es,It,Nl,Pt,Sv)",
            "url": "rom/sega game gear/World Cup USA 94 (USA, Europe) (En,Fr,De,Es,It,Nl,Pt,Sv).gg"
        },
        {
            "name": "World Series Baseball '95 (USA) (Beta) (1994 06 29)",
            "url": "rom/sega game gear/World Series Baseball '95 (USA) (Beta) (1994-06-29).gg"
        },
        {
            "name": "World Series Baseball '95 (USA) (Beta) (1994 07 09)",
            "url": "rom/sega game gear/World Series Baseball '95 (USA) (Beta) (1994-07-09).gg"
        },
        {
            "name": "World Series Baseball '95 (USA) (Beta) (1994 07 19)",
            "url": "rom/sega game gear/World Series Baseball '95 (USA) (Beta) (1994-07-19).gg"
        },
        {
            "name": "World Series Baseball '95 (USA) (Beta) (1994 07 22)",
            "url": "rom/sega game gear/World Series Baseball '95 (USA) (Beta) (1994-07-22).gg"
        },
        {
            "name": "World Series Baseball '95 (USA) (Beta) (1994 07 28)",
            "url": "rom/sega game gear/World Series Baseball '95 (USA) (Beta) (1994-07-28).gg"
        },
        {
            "name": "World Series Baseball '95 (USA) (Beta) (1994 07 29)",
            "url": "rom/sega game gear/World Series Baseball '95 (USA) (Beta) (1994-07-29).gg"
        },
        {
            "name": "World Series Baseball '95 (USA)",
            "url": "rom/sega game gear/World Series Baseball '95 (USA).gg"
        },
        {
            "name": "World Series Baseball (USA) (Rev 1)",
            "url": "rom/sega game gear/World Series Baseball (USA) (Rev 1).gg"
        },
        {
            "name": "World Series Baseball (USA)",
            "url": "rom/sega game gear/World Series Baseball (USA).gg"
        },
        {
            "name": "X Men (USA)",
            "url": "rom/sega game gear/X-Men (USA).gg"
        },
        {
            "name": "X Men   GameMaster's Legacy (USA, Europe) (Beta) (1994 08 10)",
            "url": "rom/sega game gear/X-Men - GameMaster's Legacy (USA, Europe) (Beta) (1994-08-10).gg"
        },
        {
            "name": "X Men   GameMaster's Legacy (USA, Europe) (Beta) (1994 08 31)",
            "url": "rom/sega game gear/X-Men - GameMaster's Legacy (USA, Europe) (Beta) (1994-08-31).gg"
        },
        {
            "name": "X Men   GameMaster's Legacy (USA, Europe) (Beta) (1994 09 06)",
            "url": "rom/sega game gear/X-Men - GameMaster's Legacy (USA, Europe) (Beta) (1994-09-06).gg"
        },
        {
            "name": "X Men   Gamemaster's Legacy (USA, Europe)",
            "url": "rom/sega game gear/X-Men - Gamemaster's Legacy (USA, Europe).gg"
        },
        {
            "name": "X Men   Mojo World (USA) (Beta) (1996 06 05)",
            "url": "rom/sega game gear/X-Men - Mojo World (USA) (Beta) (1996-06-05).gg"
        },
        {
            "name": "X Men   Mojo World (USA) (Beta) (1996 06 13)",
            "url": "rom/sega game gear/X-Men - Mojo World (USA) (Beta) (1996-06-13).gg"
        },
        {
            "name": "X Men   Mojo World (USA) (Beta) (1996 06 24)",
            "url": "rom/sega game gear/X-Men - Mojo World (USA) (Beta) (1996-06-24).gg"
        },
        {
            "name": "X Men   Mojo World (USA) (Beta) (1996 06 25)",
            "url": "rom/sega game gear/X-Men - Mojo World (USA) (Beta) (1996-06-25).gg"
        },
        {
            "name": "X Men   Mojo World (USA) (Beta) (1996 06 27)",
            "url": "rom/sega game gear/X-Men - Mojo World (USA) (Beta) (1996-06-27).gg"
        },
        {
            "name": "X Men   Mojo World (USA) (Beta) (1996 06 28)",
            "url": "rom/sega game gear/X-Men - Mojo World (USA) (Beta) (1996-06-28).gg"
        },
        {
            "name": "X Men   Mojo World (USA) (Beta) (1996 06 29)",
            "url": "rom/sega game gear/X-Men - Mojo World (USA) (Beta) (1996-06-29).gg"
        },
        {
            "name": "X Men   Mojo World (USA)",
            "url": "rom/sega game gear/X-Men - Mojo World (USA).gg"
        },
        {
            "name": "Zool   Ninja Of The 'Nth' Dimension (USA)",
            "url": "rom/sega game gear/Zool - Ninja of the 'Nth' Dimension (USA).gg"
        },
        {
            "name": "Zoop (USA) (Beta)",
            "url": "rom/sega game gear/Zoop (USA) (Beta).gg"
        },
        {
            "name": "Zoop (USA)",
            "url": "rom/sega game gear/Zoop (USA).gg"
        }
    ],
    "Sega Master System": [
        {
            "name": "3D Gunner (USA) (Demo)",
            "url": "rom/sega master system/3D Gunner (USA) (Demo).sms"
        },
        {
            "name": "Action Fighter (USA, Europe, Brazil) (Rev 1)",
            "url": "rom/sega master system/Action Fighter (USA, Europe, Brazil) (Rev 1).sms"
        },
        {
            "name": "Aerial Assault (USA)",
            "url": "rom/sega master system/Aerial Assault (USA).sms"
        },
        {
            "name": "After Burner (World)",
            "url": "rom/sega master system/After Burner (World).sms"
        },
        {
            "name": "Alex Kidd   High Tech World (USA, Europe, Brazil) (Beta)",
            "url": "rom/sega master system/Alex Kidd - High-Tech World (USA, Europe, Brazil) (Beta).sms"
        },
        {
            "name": "Alex Kidd   High Tech World (USA, Europe, Brazil)",
            "url": "rom/sega master system/Alex Kidd - High-Tech World (USA, Europe, Brazil).sms"
        },
        {
            "name": "Alex Kidd In Miracle World (USA, Europe)",
            "url": "rom/sega master system/Alex Kidd in Miracle World (USA, Europe).sms"
        },
        {
            "name": "Alex Kidd In Miracle World (USA, Europe, Brazil) (Rev 1)",
            "url": "rom/sega master system/Alex Kidd in Miracle World (USA, Europe, Brazil) (Rev 1).sms"
        },
        {
            "name": "Alex Kidd In Miracle World 2 (World) (Unl)",
            "url": "rom/sega master system/Alex Kidd in Miracle World 2 (World) (Unl).sms"
        },
        {
            "name": "Alex Kidd In Shinobi World (USA, Europe, Brazil)",
            "url": "rom/sega master system/Alex Kidd in Shinobi World (USA, Europe, Brazil).sms"
        },
        {
            "name": "Alf (USA)",
            "url": "rom/sega master system/Alf (USA).sms"
        },
        {
            "name": "Alien Syndrome (USA, Europe, Brazil) (Beta)",
            "url": "rom/sega master system/Alien Syndrome (USA, Europe, Brazil) (Beta).sms"
        },
        {
            "name": "Alien Syndrome (USA, Europe, Brazil)",
            "url": "rom/sega master system/Alien Syndrome (USA, Europe, Brazil).sms"
        },
        {
            "name": "Altered Beast (USA, Europe, Brazil)",
            "url": "rom/sega master system/Altered Beast (USA, Europe, Brazil).sms"
        },
        {
            "name": "Assault City (USA, Europe, Brazil) (Light Phaser)",
            "url": "rom/sega master system/Assault City (USA, Europe, Brazil) (Light Phaser).sms"
        },
        {
            "name": "Astro Warrior (Japan, USA, Brazil)",
            "url": "rom/sega master system/Astro Warrior (Japan, USA, Brazil).sms"
        },
        {
            "name": "Aztec Adventure ~ Nazca '88   The Golden Road To Paradise (World)",
            "url": "rom/sega master system/Aztec Adventure ~ Nazca '88 - The Golden Road to Paradise (World).sms"
        },
        {
            "name": "Black Belt (USA, Europe, Brazil)",
            "url": "rom/sega master system/Black Belt (USA, Europe, Brazil).sms"
        },
        {
            "name": "Blade Eagle (World) (Beta)",
            "url": "rom/sega master system/Blade Eagle (World) (Beta).sms"
        },
        {
            "name": "Blade Eagle ~ Blade Eagle 3 D (World)",
            "url": "rom/sega master system/Blade Eagle ~ Blade Eagle 3-D (World).sms"
        },
        {
            "name": "Bomber Raid (World)",
            "url": "rom/sega master system/Bomber Raid (World).sms"
        },
        {
            "name": "Bruce Lee (USA) (Unl)",
            "url": "rom/sega master system/Bruce Lee (USA) (Unl).sms"
        },
        {
            "name": "California Games ~ Jogos De Verao (USA, Europe, Brazil)",
            "url": "rom/sega master system/California Games ~ Jogos de Verao (USA, Europe, Brazil).sms"
        },
        {
            "name": "Captain Silver (USA) (Beta)",
            "url": "rom/sega master system/Captain Silver (USA) (Beta).sms"
        },
        {
            "name": "Captain Silver (USA)",
            "url": "rom/sega master system/Captain Silver (USA).sms"
        },
        {
            "name": "Casino Games (USA, Europe)",
            "url": "rom/sega master system/Casino Games (USA, Europe).sms"
        },
        {
            "name": "Castle Of Illusion Starring Mickey Mouse (USA, Brazil) (Demo)",
            "url": "rom/sega master system/Castle of Illusion Starring Mickey Mouse (USA, Brazil) (Demo).sms"
        },
        {
            "name": "Castle Of Illusion Starring Mickey Mouse (USA, Brazil)",
            "url": "rom/sega master system/Castle of Illusion Starring Mickey Mouse (USA, Brazil).sms"
        },
        {
            "name": "Castle Of Illusion Starring Mickey Mouse (USA, Europe, Brazil) (Rev 1)",
            "url": "rom/sega master system/Castle of Illusion Starring Mickey Mouse (USA, Europe, Brazil) (Rev 1).sms"
        },
        {
            "name": "Castle Of Illusion Starring Mickey Mouse (USA, Europe, Brazil)",
            "url": "rom/sega master system/Castle of Illusion Starring Mickey Mouse (USA, Europe, Brazil).sms"
        },
        {
            "name": "Cave Dude (USA) (Proto)",
            "url": "rom/sega master system/Cave Dude (USA) (Proto).sms"
        },
        {
            "name": "Choplifter (USA, Europe, Brazil) (Beta)",
            "url": "rom/sega master system/Choplifter (USA, Europe, Brazil) (Beta).sms"
        },
        {
            "name": "Choplifter (USA, Europe, Brazil)",
            "url": "rom/sega master system/Choplifter (USA, Europe, Brazil).sms"
        },
        {
            "name": "Cloud Master (USA, Europe, Brazil)",
            "url": "rom/sega master system/Cloud Master (USA, Europe, Brazil).sms"
        },
        {
            "name": "Columns (USA, Europe, Brazil) (Beta)",
            "url": "rom/sega master system/Columns (USA, Europe, Brazil) (Beta).sms"
        },
        {
            "name": "Columns ~ Shapes And Columns (USA, Europe, Brazil)",
            "url": "rom/sega master system/Columns ~ Shapes and Columns (USA, Europe, Brazil).sms"
        },
        {
            "name": "Cyborg Hunter (USA, Europe, Brazil)",
            "url": "rom/sega master system/Cyborg Hunter (USA, Europe, Brazil).sms"
        },
        {
            "name": "DARC (USA) (Unl)",
            "url": "rom/sega master system/DARC (USA) (Unl).sms"
        },
        {
            "name": "Dead Angle (USA, Europe, Brazil)",
            "url": "rom/sega master system/Dead Angle (USA, Europe, Brazil).sms"
        },
        {
            "name": "Dick Tracy (USA, Europe, Brazil)",
            "url": "rom/sega master system/Dick Tracy (USA, Europe, Brazil).sms"
        },
        {
            "name": "Double Dragon (World)",
            "url": "rom/sega master system/Double Dragon (World).sms"
        },
        {
            "name": "E SWAT (USA, Europe, Brazil) (Beta 1)",
            "url": "rom/sega master system/E-SWAT (USA, Europe, Brazil) (Beta 1).sms"
        },
        {
            "name": "E SWAT (USA, Europe, Brazil) (Beta 2)",
            "url": "rom/sega master system/E-SWAT (USA, Europe, Brazil) (Beta 2).sms"
        },
        {
            "name": "E SWAT (USA, Europe, Brazil) (Beta 3)",
            "url": "rom/sega master system/E-SWAT (USA, Europe, Brazil) (Beta 3).sms"
        },
        {
            "name": "E SWAT (USA, Europe, Brazil) (Rev 1)",
            "url": "rom/sega master system/E-SWAT (USA, Europe, Brazil) (Rev 1).sms"
        },
        {
            "name": "E SWAT (USA, Europe, Brazil)",
            "url": "rom/sega master system/E-SWAT (USA, Europe, Brazil).sms"
        },
        {
            "name": "Enduro Racer ~ Super Cross (USA, Europe, Brazil)",
            "url": "rom/sega master system/Enduro Racer ~ Super Cross (USA, Europe, Brazil).sms"
        },
        {
            "name": "F 16 Fighting Falcon (USA)",
            "url": "rom/sega master system/F-16 Fighting Falcon (USA).sms"
        },
        {
            "name": "F 16 Fighting Falcon ~ F 16 Fighter ~ F16 Falcon Fighter (USA, Europe, Brazil)",
            "url": "rom/sega master system/F-16 Fighting Falcon ~ F-16 Fighter ~ F16 Falcon Fighter (USA, Europe, Brazil).sms"
        },
        {
            "name": "Fantastic Dizzy (USA, Europe) (En,Fr,De,Es,It)",
            "url": "rom/sega master system/Fantastic Dizzy (USA, Europe) (En,Fr,De,Es,It).sms"
        },
        {
            "name": "Fantasy Zone (World) (Beta)",
            "url": "rom/sega master system/Fantasy Zone (World) (Beta).sms"
        },
        {
            "name": "Fantasy Zone (World) (Rev 1)",
            "url": "rom/sega master system/Fantasy Zone (World) (Rev 1).sms"
        },
        {
            "name": "Fantasy Zone   The Maze (USA, Europe, Brazil)",
            "url": "rom/sega master system/Fantasy Zone - The Maze (USA, Europe, Brazil).sms"
        },
        {
            "name": "Fantasy Zone II (USA, Europe, Brazil)",
            "url": "rom/sega master system/Fantasy Zone II (USA, Europe, Brazil).sms"
        },
        {
            "name": "Flight Of Pigarus (USA) (Unl) (1.11)",
            "url": "rom/sega master system/Flight of Pigarus (USA) (Unl) (1.11).sms"
        },
        {
            "name": "Galactic Revenge (USA) (Unl) (3.0)",
            "url": "rom/sega master system/Galactic Revenge (USA) (Unl) (3.0).sms"
        },
        {
            "name": "Galaxy Force (USA)",
            "url": "rom/sega master system/Galaxy Force (USA).sms"
        },
        {
            "name": "Gangster Town (USA, Europe, Brazil)",
            "url": "rom/sega master system/Gangster Town (USA, Europe, Brazil).sms"
        },
        {
            "name": "Ghost House (USA, Europe, Brazil) (Beta)",
            "url": "rom/sega master system/Ghost House (USA, Europe, Brazil) (Beta).sms"
        },
        {
            "name": "Ghost House (USA, Europe, Brazil)",
            "url": "rom/sega master system/Ghost House (USA, Europe, Brazil).sms"
        },
        {
            "name": "Ghostbusters (USA, Europe, Brazil)",
            "url": "rom/sega master system/Ghostbusters (USA, Europe, Brazil).sms"
        },
        {
            "name": "Ghouls'n Ghosts (USA, Europe, Brazil) (Demo)",
            "url": "rom/sega master system/Ghouls'n Ghosts (USA, Europe, Brazil) (Demo).sms"
        },
        {
            "name": "Ghouls'n Ghosts (USA, Europe, Brazil)",
            "url": "rom/sega master system/Ghouls'n Ghosts (USA, Europe, Brazil).sms"
        },
        {
            "name": "Global Defense (USA, Europe, Brazil) (Beta)",
            "url": "rom/sega master system/Global Defense (USA, Europe, Brazil) (Beta).sms"
        },
        {
            "name": "Global Defense (USA, Europe, Brazil)",
            "url": "rom/sega master system/Global Defense (USA, Europe, Brazil).sms"
        },
        {
            "name": "Golden Axe (USA, Europe, Brazil)",
            "url": "rom/sega master system/Golden Axe (USA, Europe, Brazil).sms"
        },
        {
            "name": "Golden Axe Warrior (USA, Europe, Brazil)",
            "url": "rom/sega master system/Golden Axe Warrior (USA, Europe, Brazil).sms"
        },
        {
            "name": "Golvellius   Valley Of Doom (USA, Europe, Brazil)",
            "url": "rom/sega master system/Golvellius - Valley of Doom (USA, Europe, Brazil).sms"
        },
        {
            "name": "Great Baseball (USA, Europe)",
            "url": "rom/sega master system/Great Baseball (USA, Europe).sms"
        },
        {
            "name": "Great Basketball (World)",
            "url": "rom/sega master system/Great Basketball (World).sms"
        },
        {
            "name": "Great Football (World)",
            "url": "rom/sega master system/Great Football (World).sms"
        },
        {
            "name": "Great Golf (World) (Beta)",
            "url": "rom/sega master system/Great Golf (World) (Beta).sms"
        },
        {
            "name": "Great Golf ~ Masters Golf (World)",
            "url": "rom/sega master system/Great Golf ~ Masters Golf (World).sms"
        },
        {
            "name": "Great Ice Hockey (Japan, USA)",
            "url": "rom/sega master system/Great Ice Hockey (Japan, USA).sms"
        },
        {
            "name": "Great Volleyball (USA, Europe, Brazil)",
            "url": "rom/sega master system/Great Volleyball (USA, Europe, Brazil).sms"
        },
        {
            "name": "Hang On & Astro Warrior (USA)",
            "url": "rom/sega master system/Hang On & Astro Warrior (USA).sms"
        },
        {
            "name": "Hang On & Safari Hunt (USA) (Beta)",
            "url": "rom/sega master system/Hang On & Safari Hunt (USA) (Beta).sms"
        },
        {
            "name": "Hang On & Safari Hunt (USA)",
            "url": "rom/sega master system/Hang-On & Safari Hunt (USA).sms"
        },
        {
            "name": "Indiana Jones And The Last Crusade (USA) (Proto)",
            "url": "rom/sega master system/Indiana Jones and the Last Crusade (USA) (Proto).sms"
        },
        {
            "name": "James 'Buster' Douglas Knockout Boxing (USA) (Beta)",
            "url": "rom/sega master system/James 'Buster' Douglas Knockout Boxing (USA) (Beta).sms"
        },
        {
            "name": "James 'Buster' Douglas Knockout Boxing (USA)",
            "url": "rom/sega master system/James 'Buster' Douglas Knockout Boxing (USA).sms"
        },
        {
            "name": "Joe Montana Football (USA, Europe, Brazil)",
            "url": "rom/sega master system/Joe Montana Football (USA, Europe, Brazil).sms"
        },
        {
            "name": "Kenseiden (USA, Europe, Brazil)",
            "url": "rom/sega master system/Kenseiden (USA, Europe, Brazil).sms"
        },
        {
            "name": "King's Quest   Quest For The Crown (USA) (Beta)",
            "url": "rom/sega master system/King's Quest - Quest for the Crown (USA) (Beta).sms"
        },
        {
            "name": "King's Quest   Quest For The Crown (USA)",
            "url": "rom/sega master system/King's Quest - Quest for the Crown (USA).sms"
        },
        {
            "name": "Kung Fu Kid (USA, Europe, Brazil)",
            "url": "rom/sega master system/Kung Fu Kid (USA, Europe, Brazil).sms"
        },
        {
            "name": "Lord Of The Sword (USA, Europe, Brazil)",
            "url": "rom/sega master system/Lord of the Sword (USA, Europe, Brazil).sms"
        },
        {
            "name": "Marksman Shooting & Trap Shooting (USA, Brazil)",
            "url": "rom/sega master system/Marksman Shooting & Trap Shooting (USA, Brazil).sms"
        },
        {
            "name": "Maze Hunter 3 D (USA, Europe, Brazil)",
            "url": "rom/sega master system/Maze Hunter 3-D (USA, Europe, Brazil).sms"
        },
        {
            "name": "Michael Jackson's Moonwalker (USA, Europe, Brazil) (Beta)",
            "url": "rom/sega master system/Michael Jackson's Moonwalker (USA, Europe, Brazil) (Beta).sms"
        },
        {
            "name": "Michael Jackson's Moonwalker (USA, Europe, Brazil)",
            "url": "rom/sega master system/Michael Jackson's Moonwalker (USA, Europe, Brazil).sms"
        },
        {
            "name": "Miracle Warriors   Seal Of The Dark Lord (USA, Europe, Brazil) (Beta)",
            "url": "rom/sega master system/Miracle Warriors - Seal of the Dark Lord (USA, Europe, Brazil) (Beta).sms"
        },
        {
            "name": "Miracle Warriors   Seal Of The Dark Lord (USA, Europe, Brazil)",
            "url": "rom/sega master system/Miracle Warriors - Seal of the Dark Lord (USA, Europe, Brazil).sms"
        },
        {
            "name": "Missile Defense 3 D (USA, Europe, Brazil) (Sample)",
            "url": "rom/sega master system/Missile Defense 3-D (USA, Europe, Brazil) (Sample).sms"
        },
        {
            "name": "Missile Defense 3 D (USA, Europe, Brazil)",
            "url": "rom/sega master system/Missile Defense 3-D (USA, Europe, Brazil).sms"
        },
        {
            "name": "Monopoly (USA) (Beta)",
            "url": "rom/sega master system/Monopoly (USA) (Beta).sms"
        },
        {
            "name": "Monopoly (USA)",
            "url": "rom/sega master system/Monopoly (USA).sms"
        },
        {
            "name": "Montezuma's Revenge Featuring Panama Joe (USA) (Beta)",
            "url": "rom/sega master system/Montezuma's Revenge featuring Panama Joe (USA) (Beta).sms"
        },
        {
            "name": "Montezuma's Revenge Featuring Panama Joe (USA)",
            "url": "rom/sega master system/Montezuma's Revenge featuring Panama Joe (USA).sms"
        },
        {
            "name": "My Hero (USA, Europe, Brazil)",
            "url": "rom/sega master system/My Hero (USA, Europe, Brazil).sms"
        },
        {
            "name": "Ninja, The (USA, Europe, Brazil)",
            "url": "rom/sega master system/Ninja, The (USA, Europe, Brazil).sms"
        },
        {
            "name": "Olympic Gold (Japan, USA, Brazil) (En,Fr,De,Es,It,Nl,Pt,Sv)",
            "url": "rom/sega master system/Olympic Gold (Japan, USA, Brazil) (En,Fr,De,Es,It,Nl,Pt,Sv).sms"
        },
        {
            "name": "OutRun (World)",
            "url": "rom/sega master system/OutRun (World).sms"
        },
        {
            "name": "OutRun Europa (USA)",
            "url": "rom/sega master system/OutRun Europa (USA).sms"
        },
        {
            "name": "Paperboy (USA, Brazil)",
            "url": "rom/sega master system/Paperboy (USA, Brazil).sms"
        },
        {
            "name": "Parlour Games (USA, Europe)",
            "url": "rom/sega master system/Parlour Games (USA, Europe).sms"
        },
        {
            "name": "Pat Riley Basketball (USA) (Proto)",
            "url": "rom/sega master system/Pat Riley Basketball (USA) (Proto).sms"
        },
        {
            "name": "Penguin Land (USA, Europe)",
            "url": "rom/sega master system/Penguin Land (USA, Europe).sms"
        },
        {
            "name": "Phantasy Star (USA, Europe) (Rev 1)",
            "url": "rom/sega master system/Phantasy Star (USA, Europe) (Rev 1).sms"
        },
        {
            "name": "Phantasy Star (USA, Europe)",
            "url": "rom/sega master system/Phantasy Star (USA, Europe).sms"
        },
        {
            "name": "Platform Explorer (USA) (Unl) (3.0)",
            "url": "rom/sega master system/Platform Explorer (USA) (Unl) (3.0).sms"
        },
        {
            "name": "Poseidon Wars 3 D (USA, Europe, Brazil)",
            "url": "rom/sega master system/Poseidon Wars 3-D (USA, Europe, Brazil).sms"
        },
        {
            "name": "Positorb (USA) (Unl)",
            "url": "rom/sega master system/Positorb (USA) (Unl).sms"
        },
        {
            "name": "Power Strike (USA, Europe, Brazil)",
            "url": "rom/sega master system/Power Strike (USA, Europe, Brazil).sms"
        },
        {
            "name": "Predator 2 (USA, Europe)",
            "url": "rom/sega master system/Predator 2 (USA, Europe).sms"
        },
        {
            "name": "Prince Of Persia (USA, Europe) (Beta)",
            "url": "rom/sega master system/Prince of Persia (USA, Europe) (Beta).sms"
        },
        {
            "name": "Prince Of Persia (USA, Europe)",
            "url": "rom/sega master system/Prince of Persia (USA, Europe).sms"
        },
        {
            "name": "Prisonnier II (USA) (Unl)",
            "url": "rom/sega master system/Prisonnier II (USA) (Unl).sms"
        },
        {
            "name": "Pro Wrestling (USA, Europe, Brazil)",
            "url": "rom/sega master system/Pro Wrestling (USA, Europe, Brazil).sms"
        },
        {
            "name": "Psychic World (Europe, Brazil)",
            "url": "rom/sega master system/Psychic World (Europe, Brazil).sms"
        },
        {
            "name": "Psycho Fox (USA, Europe, Brazil)",
            "url": "rom/sega master system/Psycho Fox (USA, Europe, Brazil).sms"
        },
        {
            "name": "Quartet (USA, Europe)",
            "url": "rom/sega master system/Quartet (USA, Europe).sms"
        },
        {
            "name": "R Type (World) (Beta)",
            "url": "rom/sega master system/R-Type (World) (Beta).sms"
        },
        {
            "name": "R Type (World)",
            "url": "rom/sega master system/R-Type (World).sms"
        },
        {
            "name": "R.C. Grand Prix (USA)",
            "url": "rom/sega master system/R.C. Grand Prix (USA).sms"
        },
        {
            "name": "R.C. Grand Prix (USA, Europe, Brazil) (Beta)",
            "url": "rom/sega master system/R.C. Grand Prix (USA, Europe, Brazil) (Beta).sms"
        },
        {
            "name": "R.C. Grand Prix (USA, Europe, Brazil)",
            "url": "rom/sega master system/R.C. Grand Prix (USA, Europe, Brazil).sms"
        },
        {
            "name": "Rambo   First Blood Part II (USA)",
            "url": "rom/sega master system/Rambo - First Blood Part II (USA).sms"
        },
        {
            "name": "Rambo III (USA, Europe, Brazil)",
            "url": "rom/sega master system/Rambo III (USA, Europe, Brazil).sms"
        },
        {
            "name": "Rampage (USA, Europe, Brazil)",
            "url": "rom/sega master system/Rampage (USA, Europe, Brazil).sms"
        },
        {
            "name": "Rastan (USA, Europe, Brazil)",
            "url": "rom/sega master system/Rastan (USA, Europe, Brazil).sms"
        },
        {
            "name": "Reggie Jackson Baseball (USA)",
            "url": "rom/sega master system/Reggie Jackson Baseball (USA).sms"
        },
        {
            "name": "Rescue Mission (USA, Europe, Brazil)",
            "url": "rom/sega master system/Rescue Mission (USA, Europe, Brazil).sms"
        },
        {
            "name": "Rocky (World)",
            "url": "rom/sega master system/Rocky (World).sms"
        },
        {
            "name": "Sega Graphic Board (USA) (v2.0) (Proto)",
            "url": "rom/sega master system/Sega Graphic Board (USA) (v2.0) (Proto).sms"
        },
        {
            "name": "Shanghai (USA, Europe) (Beta)",
            "url": "rom/sega master system/Shanghai (USA, Europe) (Beta).sms"
        },
        {
            "name": "Shanghai (USA, Europe)",
            "url": "rom/sega master system/Shanghai (USA, Europe).sms"
        },
        {
            "name": "Shinobi (USA, Europe, Brazil) (Rev 1)",
            "url": "rom/sega master system/Shinobi (USA, Europe, Brazil) (Rev 1).sms"
        },
        {
            "name": "Shooting Gallery ~ Shooting G. (USA, Europe, Brazil)",
            "url": "rom/sega master system/Shooting Gallery ~ Shooting G. (USA, Europe, Brazil).sms"
        },
        {
            "name": "Silver Valley (USA) (Unl)",
            "url": "rom/sega master system/Silver Valley (USA) (Unl).sms"
        },
        {
            "name": "Slap Shoot (USA) (Beta)",
            "url": "rom/sega master system/Slap Shoot (USA) (Beta).sms"
        },
        {
            "name": "Slap Shot (USA, Brazil)",
            "url": "rom/sega master system/Slap Shot (USA, Brazil).sms"
        },
        {
            "name": "Sonic The Hedgehog (USA, Europe, Brazil)",
            "url": "rom/sega master system/Sonic The Hedgehog (USA, Europe, Brazil).sms"
        },
        {
            "name": "Space Harrier (Japan, USA)",
            "url": "rom/sega master system/Space Harrier (Japan, USA).sms"
        },
        {
            "name": "Space Harrier 3 D ~ Space Harrier 3D (USA, Europe, Brazil)",
            "url": "rom/sega master system/Space Harrier 3-D ~ Space Harrier 3D (USA, Europe, Brazil).sms"
        },
        {
            "name": "SpellCaster (USA, Europe, Brazil)",
            "url": "rom/sega master system/SpellCaster (USA, Europe, Brazil).sms"
        },
        {
            "name": "Spider Man (USA, Europe, Brazil)",
            "url": "rom/sega master system/Spider-Man (USA, Europe, Brazil).sms"
        },
        {
            "name": "Sports Pad Football (USA)",
            "url": "rom/sega master system/Sports Pad Football (USA).sms"
        },
        {
            "name": "Spy Vs Spy (USA, Europe, Brazil)",
            "url": "rom/sega master system/Spy vs Spy (USA, Europe, Brazil).sms"
        },
        {
            "name": "Street Battle (USA) (Proto) (Unl)",
            "url": "rom/sega master system/Street Battle (USA) (Proto) (Unl).sms"
        },
        {
            "name": "Strider (USA, Europe, Brazil) (Demo)",
            "url": "rom/sega master system/Strider (USA, Europe, Brazil) (Demo).sms"
        },
        {
            "name": "Strider (USA, Europe, Brazil)",
            "url": "rom/sega master system/Strider (USA, Europe, Brazil).sms"
        },
        {
            "name": "Super Basketball (USA) (Demo)",
            "url": "rom/sega master system/Super Basketball (USA) (Demo).sms"
        },
        {
            "name": "Super Monaco GP (USA) (Beta)",
            "url": "rom/sega master system/Super Monaco GP (USA) (Beta).sms"
        },
        {
            "name": "Super Monaco GP (USA)",
            "url": "rom/sega master system/Super Monaco GP (USA).sms"
        },
        {
            "name": "Super Tennis (USA, Europe)",
            "url": "rom/sega master system/Super Tennis (USA, Europe).sms"
        },
        {
            "name": "Teddy Boy (USA, Europe, Brazil)",
            "url": "rom/sega master system/Teddy Boy (USA, Europe, Brazil).sms"
        },
        {
            "name": "Thunder Blade (USA, Europe, Brazil)",
            "url": "rom/sega master system/Thunder Blade (USA, Europe, Brazil).sms"
        },
        {
            "name": "Time Soldiers (USA, Europe, Brazil)",
            "url": "rom/sega master system/Time Soldiers (USA, Europe, Brazil).sms"
        },
        {
            "name": "TransBot (USA, Europe, Brazil) (Beta)",
            "url": "rom/sega master system/TransBot (USA, Europe, Brazil) (Beta).sms"
        },
        {
            "name": "TransBot (USA, Europe, Brazil)",
            "url": "rom/sega master system/TransBot (USA, Europe, Brazil).sms"
        },
        {
            "name": "Vigilante (USA, Europe, Brazil)",
            "url": "rom/sega master system/Vigilante (USA, Europe, Brazil).sms"
        },
        {
            "name": "WWF Wrestlemania   Steel Cage Challenge (USA, Europe)",
            "url": "rom/sega master system/WWF Wrestlemania - Steel Cage Challenge (USA, Europe).sms"
        },
        {
            "name": "Waimanu   Scary Monsters Saga (USA) (Unl)",
            "url": "rom/sega master system/Waimanu - Scary Monsters Saga (USA) (Unl).sms"
        },
        {
            "name": "Walter Payton Football (USA)",
            "url": "rom/sega master system/Walter Payton Football (USA).sms"
        },
        {
            "name": "Wanted (USA, Europe, Brazil)",
            "url": "rom/sega master system/Wanted (USA, Europe, Brazil).sms"
        },
        {
            "name": "Weka Invaders (USA) (Unl)",
            "url": "rom/sega master system/Weka Invaders (USA) (Unl).sms"
        },
        {
            "name": "Where In The World Is Carmen Sandiego (USA)",
            "url": "rom/sega master system/Where in the World is Carmen Sandiego (USA).sms"
        },
        {
            "name": "Wing Warriors (USA) (Unl)",
            "url": "rom/sega master system/Wing Warriors (USA) (Unl).sms"
        },
        {
            "name": "Wonder Boy (USA, Europe, Brazil) (Rev 1)",
            "url": "rom/sega master system/Wonder Boy (USA, Europe, Brazil) (Rev 1).sms"
        },
        {
            "name": "Wonder Boy III   The Dragon's Trap (USA, Europe) (GOG) (Unl)",
            "url": "rom/sega master system/Wonder Boy III - The Dragon's Trap (USA, Europe) (GOG) (Unl).sms"
        },
        {
            "name": "Wonder Boy III   The Dragon's Trap (USA, Europe)",
            "url": "rom/sega master system/Wonder Boy III - The Dragon's Trap (USA, Europe).sms"
        },
        {
            "name": "Wonder Boy In Monster Land (USA, Europe) (Beta)",
            "url": "rom/sega master system/Wonder Boy in Monster Land (USA, Europe) (Beta).sms"
        },
        {
            "name": "Wonder Boy In Monster Land (USA, Europe)",
            "url": "rom/sega master system/Wonder Boy in Monster Land (USA, Europe).sms"
        },
        {
            "name": "World Cup Italia '90 (USA) (Demo)",
            "url": "rom/sega master system/World Cup Italia '90 (USA) (Demo).sms"
        },
        {
            "name": "World Grand Prix (USA, Brazil) (Beta)",
            "url": "rom/sega master system/World Grand Prix (USA, Brazil) (Beta).sms"
        },
        {
            "name": "World Grand Prix (USA, Brazil)",
            "url": "rom/sega master system/World Grand Prix (USA, Brazil).sms"
        },
        {
            "name": "World Soccer ~ Great Soccer ~ Super Futebol (World)",
            "url": "rom/sega master system/World Soccer ~ Great Soccer ~ Super Futebol (World).sms"
        },
        {
            "name": "Ys   The Vanished Omens (USA, Europe) (Demo)",
            "url": "rom/sega master system/Ys - The Vanished Omens (USA, Europe) (Demo).sms"
        },
        {
            "name": "Ys   The Vanished Omens ~ Y's (USA, Europe, Brazil)",
            "url": "rom/sega master system/Ys - The Vanished Omens ~ Y's (USA, Europe, Brazil).sms"
        },
        {
            "name": "Zaxxon 3 D (World) (Beta)",
            "url": "rom/sega master system/Zaxxon 3-D (World) (Beta).sms"
        },
        {
            "name": "Zaxxon 3 D (World)",
            "url": "rom/sega master system/Zaxxon 3-D (World).sms"
        },
        {
            "name": "Zillion (USA, Europe) (Rev 1)",
            "url": "rom/sega master system/Zillion (USA, Europe) (Rev 1).sms"
        },
        {
            "name": "Zillion II   The Tri Formation (World)",
            "url": "rom/sega master system/Zillion II - The Tri Formation (World).sms"
        }
    ]
});