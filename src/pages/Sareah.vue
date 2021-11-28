<template>
  <BaseSheet :character="sareah">
  </BaseSheet>
</template>

<script setup>
import BaseSheet from 'components/BaseSheet';
import { reactive } from 'vue';

const sareah = reactive({
  introduction: {
    name: 'Sareah',
    race: 'half-elf',
    traits: [
      'oblivious',
      'less effort',
      'auspicious tattoo',
      'advantageous distraction',
      'reactionary',
      'fate\'s favored',
      {
        name: 'bluff trait (fill this later)',
        bonusType: 'trait',
        bonus: {
          bluff: 2,
        },
      },
    ],
    class: [
      {
        archetype: ['ley-line gaurdian'],
        name: 'witch',
        level: 6,
        hitDie: 6,
        bab: 1 / 2,
        first: true,
        skillRanks: 2,
        classSkills: ['craft', 'bluff', 'diplomacy', 'fly', 'heal', 'arcana', 'history', 'nature', 'history', 'planes', 'profession', 'spellcraft', 'use magic device'],
        favored: {
          hp: 3,
          skill: 0,
          race: {
            'half-elf': 6,
          },
        },
        saves: {
          fort: false,
          ref: false,
          will: true,
        },
        casterLevel: 8,
        casting: 'spontanious',
        spells: {
          '4th': {
            slots: 5,
            prepared: [
              'enervation',
            ],
          },
          '3rd': {
            slots: 7,
            prepared: [
              'suggestion',
              'lightning bolt',
              'bestow curse',
            ],
          },
          '2nd': {
            slots: 8,
            prepared: [
              'lipstitch',
              'hold person',
              'web',
              'enthrall',
              'limp lash',
              'zone of truth',

            ],
          },
          '1st': {
            slots: 9,
            prepared: [
              'murderous command',
              'charm person',
              'mage armor',
              'ear-piercing scream',
              'beguiling gift',
              'ill omen',
              'ray of enfeeblement',
            ],
          },
          Cantrips: {
            prepared: [
              'mage hand',
              'detect magic',
              'light',
              'daze',
              'bleed',
              'touch of fatigue',
              '???',
              '???',

            ],
          },

        },
        patronSpells: {
          name: 'jynx',
          '1st': 'animate rope',
          '2nd': 'mirror image',
          '3rd': 'major image',
          '4th': 'hallucinatory terrain',

        },
      }],
    alignment: 'N',
    size: 'medium',
    sizeMod: 0,
    type: 'humanoid',
    subtype: ['elf', 'human'],
    senses: ['low-light vision'],
    aura: '',
  },
  defense: {
    defensiveAbilities: '',
    dr: '',
    immune: ['sleep'],
    resist: '',
    sr: '',
    weaknesses: '',
    saveAbilityScore: {
      fort: 'constitution',
      ref: 'dexterity',
      will: 'wisdom',
    },
  },
  offense: {
    speed: 30,
    space: 5,
    reach: 5,
    specialAttacks: [
      {
        name: 'Witch Hexes (DC 22)',
        hexes: [
          'cackle',
          'misfortune',
          'evil eye',
          'slumber',
          'flight',
          'gift of consumption',
        ],
      },
      {
        name: 'Conduit Surge (1d4)',
        usesPerDay: 1,
      },
    ],
    spellLikeAbilities: '',
  },
  tactics: '',
  statistics: {
    abilityScore: {
      strength: {
        pointBuy: 6,
      },
      dexterity: {
        pointBuy: 15,
      },
      constitution: {
        pointBuy: 14,
        enhancement: 2,
      },
      intelligence: {
        pointBuy: 17,
        racial: 2,
        levelUp: 2,
      },
      wisdom: {
        pointBuy: 13,
      },
      charisma: {
        pointBuy: 13,
      },
    },
    feats: [
      {
        name: 'Skill Focus (Bluff)',
        bonusType: 'untyped',
        bonus: {
          bluff: 2,
        },
      },
      'Accursed Hex',
      'Improved Initiative',
      // 'Spell Focus (Enchantment)',
      'Extra Hex (Flight)',
      // 'Spell Focus (Necromancy)',
      // 'Spell Focus (Illusion)',
      // 'Witch Knife',
    ],
    skills: {
      acrobatics: {
        ranks: 4,
        ability: 'dexterity',
        modifier: [],
      },
      appraise: {
        ranks: 0,
        ability: 'intelligence',
        modifier: [],
      },
      bluff: {
        ranks: 4,
        ability: 'intelligence',
        modifier: [{
          name: 'trait',
          bonus: 1,
        },
        ],
      },
      climb: {
        ranks: 0,
        ability: 'strength',
        modifier: [],
      },
      craft: {
        ranks: 0,
        ability: 'intelligence',
        modifier: [],
      },
      diplomacy: {
        ranks: 4,
        ability: 'intelligence',
        modifier: [],
      },
      'disable device': {
        ranks: 0,
        ability: 'dexterity',
        modifier: [],
      },
      disguise: {
        ranks: 0,
        ability: 'charisma',
        modifier: [],
      },
      'escape artist': {
        ranks: 0,
        ability: 'dexterity',
        modifier: [],
      },
      fly: {
        ranks: 0,
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
        ranks: 0,
        ability: 'charisma',
        modifier: [],
      },
      knowledge: {
        arcana: {
          ranks: 1,
          ability: 'intelligence',
          modifier: [],
        },
        dungeoneering: {
          ranks: 1,
          ability: 'intelligence',
          modifier: [],
        },
        engineering: {
          ranks: 1,
          ability: 'intelligence',
          modifier: [],
        },
        geography: {
          ranks: 1,
          ability: 'intelligence',
          modifier: [],
        },
        history: {
          ranks: 1,
          ability: 'intelligence',
          modifier: [],
        },
        local: {
          ranks: 1,
          ability: 'intelligence',
          modifier: [],
        },
        nature: {
          ranks: 1,
          ability: 'intelligence',
          modifier: [],
        },
        nobility: {
          ranks: 1,
          ability: 'intelligence',
          modifier: [],
        },
        planes: {
          ranks: 1,
          ability: 'intelligence',
          modifier: [],
        },
        religion: {
          ranks: 1,
          ability: 'intelligence',
          modifier: [],
        },
      },
      linguistics: {
        ranks: 0,
        ability: 'intelligence',
        modifier: [],
      },
      perception: {
        ranks: 0,
        ability: 'wisdom',
        modifier: [],
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
        ranks: 0,
        ability: 'dexterity',
        modifier: [],
      },
      'sense motive': {
        ranks: 0,
        ability: 'wisdom',
        modifier: [],
      },
      'slight of hand': {
        ranks: 0,
        ability: 'dexterity',
        modifier: [],
      },
      spellcraft: {
        ranks: 4,
        ability: 'intelligence',
        modifier: [],
      },
      stealth: {
        ranks: 0,
        ability: 'dexterity',
        modifier: [],
      },
      survival: {
        ranks: 0,
        ability: 'wisdom',
        modifier: [],
      },
      swim: {
        ranks: 1,
        ability: 'strength',
        modifier: [],
      },
      'use magic device': {
        ranks: 0,
        ability: 'charisma',
        modifier: [],
      },
    },
    languages: '',
    specialQualities: '',
  },
  specialAbilities: '',
  gear: {
    'Headband of Vast Intellect +6': {
      bonusType: 'enhancement',
      cost: 0,
      bonus: {
        intelligence: 6,
      },
    },
    'Belt of Con +2': {
      bonusType: 'enhancement',
      cost: 0,
      bonus: {
        constitution: 2,
      },
    },
    'Cloak of Resistance +5': {
      bonusType: 'resistance',
      cost: 25000,
      bonus: {
        fortitude: 2,
        reflex: 2,
        will: 2,
      },
    },
    'Masterwork Tools (Bluff)': {
      bonusType: 'circumstance',
      bonus: {
        bluff: 2,
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

  toggle: {
    Haste: {
      bonusType: 'Dodge',
      active: false,
      duration: 2,
      bonus: {
        attackRolls: 1,
        ref: 1,
        ac: 1,
      },

    },
    'Gub\'s Grace': {
      bonusType: 'enhancement',
      active: false,
      duration: 1,
      bonus: {
        dexterity: 6,
      },
    },
    'Gub\'s Cunning': {
      bonusType: 'enhancement',
      active: false,
      duration: 1,
      bonus: {
        intelligence: 6,
      },
    },
  },
});

</script>

<style scoped>

</style>
