<template>
  <BaseSheet :character="immogen">
  </BaseSheet>
</template>

<script setup>
import BaseSheet from 'components/BaseSheet';

const immogen = {
  introduction: {
    name: 'Immogen',
    solo: true,
    race: 'human',
    trait: [
      'fate\'s favored',
      'reactionary',
    ],
    class: [
      {
        name: 'gestalt',
        level: 12,
        first: true,
        gestalt: [
          {
            archetype: ['archaeologist'],
            name: 'bard',
            level: 11,
            hitDie: 8,
            bab: 3 / 4,
            skillRanks: 2,
            classSkills: [
              'Acrobatics',
              'Appraise',
              'Bluff',
              'Climb',
              'Craft',
              'Diplomacy',
              'Disguise',
              'Escape Artist',
              'Intimidate',
              'Knowledge',
              'Linguistics',
              'Perception',
              'Perform',
              'Profession',
              'Sense Motive',
              'Sleight of Hand',
              'Spellcraft',
              'Stealth',
              'Use Magic Device',
            ],
            favored: {
              hp: 0,
              skill: 0,
              race: {
                human: 12,
              },
            },
            saves: {
              fort: false,
              ref: true,
              will: true,
            },
            casterLevel: 12,
            casting: 'spontaneous',
            spells: {

              '4th': {
                slots: 4,
                prepared: [
                  'Invisibility, Greater',
                  'Dimension Door',
                  'Modify Memory',
                ],
              },
              '3rd': {
                slots: 6,
                prepared: [
                  'Haste',
                  'Glibness',
                  'Major Image',
                  'Charm monster',
                  'Confusion',
                  'Good Hope',
                  'Charm Monster',
                  'False Future',
                ],
              },
              '2nd': {
                slots: 7,
                prepared: [
                  'Heroism',
                  'Gallant Inspiration',
                  'Blur',
                  'Invisibility',
                  'Heroic Fortune',
                  'Share Memory',
                  'Detect Thoughts',
                  'Mirror Image',
                ],
              },
              '1st': {
                slots: 7,
                prepared: [
                  'Shadow Trap',
                  '???',
                  'Fabricate Disguise',
                  'Saving Finale',
                  'Hideous Laughter',
                  'Grease',
                  'Heightened Awareness',
                  'Feather Fall',
                  'Timely Inspiration',
                ],
              },
              Cantrips: {
                prepared: [
                  'Dancing Lights',
                  'Detect Magic',
                  'Prestidigitation',
                  'Daze',
                  'Open/Close',
                  'Mage Hand',
                  'Lullaby',
                  'Message',
                  'Mending',
                ],
              },

            },

          },
          {
            archetype: ['dual-cursed'],
            name: 'oracle',
            level: 11,
            hitDie: 8,
            bab: 3 / 4,
            first: true,
            skillRanks: 2,
            classSkills: [
              'Craft',
              'Diplomacy',
              'Heal',
              // TODO
              'Knowledge (history)',
              'Knowledge (planes)',
              'Knowledge (religion)',
              'Profession',
              'Sense Motive',
              'Spellcraft',
            ],
            favored: {
              hp: 0,
              skill: 0,
              race: {
                human: 12,
              },
            },
            saves: {
              fort: false,
              ref: false,
              will: true,
            },
            casterLevel: 12,
            casting: 'spontaneous',
            spells: {
              '6th': {
                slots: 4,
                prepared: [
                  'Heal',
                ],
              },

              '5th': {
                slots: 6,
                prepared: [
                  'Slay Living',
                  'Plane Shift',
                  'Commune',
                ],
              },
              '4th': {
                slots: 7,
                prepared: [
                  'Sending',
                  'Dimensional Anchor',
                  'Dismissal',
                  'Imbue with Spell Ability',
                  'Wall of Fire',
                  'Freedom of Movement',
                ],
              },
              '3rd': {
                slots: 8,
                prepared: [
                  'Dispel Magic',
                  'Stunning Barrier',
                  'Stone Shape',
                  'Second Wind',
                  'Shield of Wings',
                  'Beacon of Luck',
                ],
              },
              '2nd': {
                slots: 8,
                prepared: [
                  'Hold person',
                  'Silence',
                  'Resist Energy',
                  'Zone of Truth',
                  'Ironskin',
                  'Weapon of Awe',
                  'Scorching Ray',
                  'Detect Magic, Greater',
                ],
              },
              '1st': {
                slots: 8,
                prepared: [
                  'Shield of Faith',
                  'Moment of Greatness',
                  'Murderous Command',
                  'Protection from Law',
                  'Lucky Number',
                  'Fallback Strategy',
                  'Sure casting',
                  'Burning Hands',
                ],
              },
              Orisons: {
                prepared: [
                  'Create Water',
                  'Read Magic',
                  'Stabilize',
                  'Enhance Diplomacy',
                  'Purify Food and Drink',
                  'Mending',
                  'Vigor',
                  'Spark',
                ],
              },

            },
            mysterySpells: [
              {
                name: 'Dual-Cursed',
                '1st': 'ill omen',
                '2nd': 'oracle\'s burden',
                '3rd': 'Bestow Curse',
              }, {
                name: 'Time',
                '4th': 'threefold aspect',
                '5th': 'permanency',
                '6th': 'contingency',
              },
            ],

          },
        ],
      },
    ],
    alignment: 'CG',
    size: 'medium',
    sizeMod: 0,
    type: 'humanoid',
    subtype: ['human'],
    senses: [''],
    aura: '',
  },
  defense: {
    defensiveAbilities: '',
    dr: {
      '—': 2,
    },
    resist: '',
    sr: '',
    weaknesses: ['cold'],
    saveAbilityScore: {
      fort: 'constitution',
      ref: 'charisma',
      will: 'wisdom',
    },
  },
  offense: {
    speed: 30,
    specialAttacks: [
      {
        name: 'Cosmic Gate',
        usesPerDay: 1,
      },
      {
        name: 'Defiant Luck',
        usesPerDay: 5,
      },
      {
        name: 'Inexplicable Luck',
        usesPerDay: 5,
      },
      {
        name: 'Black Cat',
        usesPerDay: 5,
      },
      {
        name: 'Hero Points',
        points: 5,
      },
    ],
    spellLikeAbilities: '',
    supernaturalAbilities: [
      {
        name: 'Erase From Time',
        usesPerDay: 2,
      },
      {
        name: 'Rewind Time',
        usesPerDay: 2,
      },
      {
        name: 'Time Sight',
        spell: 'true seeing',
      },
    ],
    extraordinaryAbilities: [
      {
        name: 'Misfortune',
        special: '1/creature',
      },
      {
        name: 'Fortune',
        usesPerDay: 2,
      },
      {
        name: 'Time Sight',
        usesPerDay: 1,
      },
    ],
  },
  tactics: '',
  statistics: {
    abilityScore: {
      strength: {
        pointBuy: 11,
        automaticBonusProgression: 0,
      },
      dexterity: {
        pointBuy: 14,
        automaticBonusProgression: 4,

      },
      constitution: {
        pointBuy: 12,
        automaticBonusProgression: 2,

      },
      intelligence: {
        pointBuy: 14,
        automaticBonusProgression: 0,

      },
      wisdom: {
        pointBuy: 12,
        automaticBonusProgression: 2,

      },
      charisma: {
        pointBuy: 16,
        automaticBonusProgression: 4,
        levelUp: 3,
        racial: 2,
      },
    },
    feats: [
      'Defiant Luck',
      'Auspicious Birth (Retrograde)',
      'Racial Heritage (Catfolk)',
      'Spellsong (Diplomacy)',
      'Black Cat, Deft Maneuvers',
      'Lingering Performance',
      'Inexplicable Luck',
      'Lucky x2',
      'Combat Reflexes, Extra Revelation',
      'Lady Luck\'s Guidance',
      'Cosmic Gate',
      'Blood of Heroes',
      'Hero\'s Fortune',
      'Luck of Heroes',
      '??? (Advanced Rogue Trick)',
      '???',
    ],
    skills: {
      acrobatics: {
        ranks: 0,
        ability: 'dexterity',
        modifier: [],
      },
      appraise: {
        ranks: 0,
        ability: 'intelligence',
        modifier: [],
      },
      bluff: {
        ranks: 12,
        ability: 'charisma',
        modifier: [],
      },
      climb: {
        ranks: 1,
        ability: 'strength',
        modifier: [],
      },
      craft: {
        ranks: 0,
        ability: 'intelligence',
        modifier: [],
      },
      diplomacy: {
        ranks: 12,
        ability: 'charisma',
        modifier: [],
      },
      'disable device': {
        ranks: 6,
        ability: 'dexterity',
        modifier: [
          {
            name: 'Clever Explorer',
            bonus: 5,
          },
          {
            name: 'Mwk Thieves Tools',
            bonus: 4,
          },

        ],
      },
      disguise: {
        ranks: 8,
        ability: 'charisma',
        modifier: [],
      },
      'escape artist': {
        ranks: 0,
        ability: 'dexterity',
        modifier: [],
      },
      fly: {
        ranks: 3,
        ability: 'dexterity',
        modifier: [],
      },
      'handle animal': {
        ranks: 0,
        ability: 'charisma',
        modifier: [],
      },
      heal: {
        ranks: 0,
        ability: 'wisdom',
        modifier: [],
      },
      intimidate: {
        ranks: 8,
        ability: 'charisma',
        modifier: [],
      },
      knowledge: {
        arcana: {
          ranks: 0,
          ability: 'intelligence',
          modifier: [],
        },
        dungeoneering: {
          ranks: 0,
          ability: 'intelligence',
          modifier: [],
        },
        engineering: {
          ranks: 0,
          ability: 'intelligence',
          modifier: [],
        },
        geography: {
          ranks: 0,
          ability: 'intelligence',
          modifier: [],
        },
        history: {
          ranks: 0,
          ability: 'intelligence',
          modifier: [],
        },
        local: {
          ranks: 0,
          ability: 'intelligence',
          modifier: [],
        },
        nature: {
          ranks: 0,
          ability: 'intelligence',
          modifier: [],
        },
        nobility: {
          ranks: 0,
          ability: 'intelligence',
          modifier: [],
        },
        planes: {
          ranks: 0,
          ability: 'intelligence',
          modifier: [],
        },
        religion: {
          ranks: 0,
          ability: 'intelligence',
          modifier: [],
        },
      },
      linguistics: {
        ranks: 1,
        ability: 'intelligence',
        modifier: [],
      },
      perception: {
        ranks: 12,
        ability: 'wisdom',
        modifier: [{
          name: 'Clever Explorer',
          bonus: 5,
        }],
      },
      perform: {
        ranks: 0,
        ability: 'charisma',
        modifier: [],
      },
      profession: {
        ranks: 0,
        ability: 'wisdom',
        modifier: [],
      },
      ride: {
        ranks: 8,
        ability: 'dexterity',
        modifier: [],
      },
      'sense motive': {
        ranks: 8,
        ability: 'wisdom',
        modifier: [],
      },
      'slight of hand': {
        ranks: 8,
        ability: 'dexterity',
        modifier: [],
      },
      spellcraft: {
        ranks: 8,
        ability: 'intelligence',
        modifier: [],
      },
      stealth: {
        ranks: 12,
        ability: 'dexterity',
        modifier: [],
      },
      survival: {
        ranks: 0,
        ability: 'wisdom',
        modifier: [],
      },
      swim: {
        ranks: 0,
        ability: 'strength',
        modifier: [],
      },
      'use magic device': {
        ranks: 2,
        ability: 'charisma',
        modifier: [],
      },
    },
    languages: '',
    specialQualities: '',
  },
  specialAbilities: {
    active: false,
    abilities: ['Bardic Knowledge'],
  },
  gear: {
    active: false,

    'Adamantite Celestial Armor': {
      bonusType: 'armor',
      bonus: {
        ac: 6,
      },
    },
  },
  ecology: '',
  // ecology: {
  //   environment: '',
  //   organization: '',
  //   treasure: '',
  // },
  miscellaneous: '',
};

</script>

<style scoped>

</style>
