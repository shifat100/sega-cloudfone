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
  'Homebrew Master System': [
    { name: 'Blockhead', url: 'rom/homebrew/blockhead.sms' },
    { name: 'KunKun & KokoKun', url: 'rom/homebrew/KunKun & KokoKun.sms' },
    { name: 'Sokoban', url: 'rom/homebrew/sokoban.sms' }
  ],
  'Homebrew Game Gear': [
    { name: 'Fire Track', url: 'rom/gg/homebrew/ftrack.gg' }
  ],
  'Action Games': [
    { name: 'Alex Kidd in Miracle World', url: 'rom/action/alexkidd.sms' },
    { name: 'Sonic the Hedgehog', url: 'rom/action/sonic.sms' }
  ],
  'Puzzle Games': [
    { name: 'Columns', url: 'rom/puzzle/columns.gg' },
    { name: 'Puyo Puyo', url: 'rom/puzzle/puyopuyo.sms' }
  ]
});