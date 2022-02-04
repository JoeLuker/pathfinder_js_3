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
    heritageTraits: [
      {
        name: 'Mismatched',
        bonusType: 'racialTrait',
        bonus: {
          initiative: 4,
          reflex: -2,
        },
      },
    ],
    traits: [
      'oblivious',
      'less effort',
      'auspicious tattoo',
      'advantageous distraction',
      {
        name: 'reactionary',
        bonusType: 'trait',
        bonus: {
          initiative: 2,
        },
      },
      'fate\'s favored',
      {
        name: 'bluff trait (fill this later)',
        bonusType: 'trait',
        bonus: {
          bluff: 1,
        },
      },
    ],
    class: [
      {
        archetype: ['ley-line gaurdian'],
        name: 'witch',
        level: 11,
        hitDie: 6,
        bab: 1 / 2,
        first: true,
        skillRanks: 2,
        classSkills: ['craft', 'bluff', 'diplomacy', 'fly', 'heal', 'arcana', 'history', 'nature', 'history', 'planes', 'profession', 'spellcraft', 'use magic device'],
        favored: {
          hp: 4,
          skill: 0,
          race: {
            'half-elf': 7,
          },
        },
        saves: {
          fortitude: false,
          reflex: false,
          will: true,
        },
        casterLevel: 11,
        casting: 'spontanious',
        spells: {
          '5th': {
            slots: 5,
            prepared: [
              'hold monster',
              'teleport',
            ],
          },
          '4th': {
            slots: 8,
            prepared: [
              'enervation',
              'confusion',
              'demanding message',
              'hunger of flesh',
            ],
          },
          '3rd': {
            slots: 8,
            prepared: [
              'suggestion',
              'lightning bolt',
              'bestow curse',
              'fly',
              'howling agony',
              'call the void',
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
              'glitterdust',
              'perceive cues',
            ],
          },
          '1st': {
            slots: 8,
            prepared: [
              'murderous command',
              'charm person',
              'mage armor',
              'ear-piercing scream',
              'beguiling gift',
              'ill omen',
              'ray of enfeeblement',
              'blend',
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
              'stabilize',
              'create water',
            ],
          },

        },
        patronSpells: {
          name: 'jynx',
          '1st': 'animate rope',
          '2nd': 'mirror image',
          '3rd': 'major image',
          '4th': 'hallucinatory terrain',
          '5th': 'mirage arcana',

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
      fortitude: 'constitution',
      reflex: 'dexterity',
      will: 'wisdom',
    },
  },
  offense: {
    speed: 30,
    space: 5,
    reach: 5,
    specialAttacks: [
      {
        name: 'Witch Hexes (DC 23)',
        hexes: [
          'cackle',
          'misfortune',
          'evil eye',
          'slumber',
          'flight',
          'gift of consumption',
          'major ???',
        ],
      },
      {
        name: 'Conduit Surge (1d4)',
        usesPerDay: 1,
      },
    ],
    spellLikeAbilities: '',
    melee: [
      {
        name: 'cestus',
        weaponGroup: 'light',
        attack: 0,
        dieCount: 1,
        dieSize: 4,
        damage: 0,
      },
    ],
    ranged: [
      {
        name: 'generic ranged attack',
        attack: 0,
      },
    ],
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
      {
        name: 'Improved Initiative',
        type: 'combat',
        bonusType: 'untyped',
        bonus: {
          initiative: 4,
        },
      },
      // 'Spell Focus (Enchantment)',
      'Extra Hex (Flight)',
      'Split Hex',
      // 'Spell Focus (Necromancy)',
      // 'Spell Focus (Illusion)',
      // 'Witch Knife',
      'spell penetration',
    ],
    skills: {
      acrobatics: {
        ranks: 11,
        ability: 'dexterity',
      },
      appraise: {
        ranks: 0,
        ability: 'intelligence',
      },
      bluff: {
        ranks: 11,
        ability: 'intelligence',
      },
      climb: {
        ranks: 0,
        ability: 'strength',
      },
      craft: {
        ranks: 0,
        ability: 'intelligence',
      },
      diplomacy: {
        ranks: 11,
        ability: 'intelligence',
      },
      'disable device': {
        ranks: 0,
        ability: 'dexterity',
      },
      disguise: {
        ranks: 0,
        ability: 'charisma',
      },
      'escape artist': {
        ranks: 0,
        ability: 'dexterity',
      },
      fly: {
        ranks: 0,
        ability: 'dexterity',
      },
      'handle animal': {
        ranks: 0,
        ability: 'charisma',
      },
      heal: {
        ranks: 0,
        ability: 'wisdom',
      },
      intimidate: {
        ranks: 0,
        ability: 'charisma',
      },
      knowledge: {
        arcana: {
          ranks: 8,
          ability: 'intelligence',
        },
        dungeoneering: {
          ranks: 1,
          ability: 'intelligence',
        },
        engineering: {
          ranks: 1,
          ability: 'intelligence',
        },
        geography: {
          ranks: 1,
          ability: 'intelligence',
        },
        history: {
          ranks: 1,
          ability: 'intelligence',
        },
        local: {
          ranks: 1,
          ability: 'intelligence',
        },
        nature: {
          ranks: 1,
          ability: 'intelligence',
        },
        nobility: {
          ranks: 1,
          ability: 'intelligence',
        },
        planes: {
          ranks: 8,
          ability: 'intelligence',
        },
        religion: {
          ranks: 1,
          ability: 'intelligence',
        },
      },
      linguistics: {
        ranks: 0,
        ability: 'intelligence',
      },
      perception: {
        ranks: 0,
        ability: 'wisdom',
      },
      perform: {
        ranks: 0,
        ability: 'charisma',
      },
      profession: {
        ranks: 0,
        ability: 'wisdom',
      },
      ride: {
        ranks: 0,
        ability: 'dexterity',
      },
      'sense motive': {
        ranks: 0,
        ability: 'wisdom',
      },
      'slight of hand': {
        ranks: 0,
        ability: 'dexterity',
      },
      spellcraft: {
        ranks: 9,
        ability: 'intelligence',
      },
      stealth: {
        ranks: 0,
        ability: 'dexterity',
      },
      survival: {
        ranks: 0,
        ability: 'wisdom',
      },
      swim: {
        ranks: 8,
        ability: 'strength',
      },
      'use magic device': {
        ranks: 0,
        ability: 'charisma',
      },
    },
    languages: '',
    specialQualities: '',
  },
  specialAbilities: '',
  gear: [
    {
      name: 'Cracked Pale Green Prism',
      bonusType: 'competence bonus',
      cost: 4000,
      bonus: {
        saves: 1,
      },
    },
    {
      name: 'Dusty Rose Prism Ioun Stone',
      bonusType: 'insight',
      cost: 5000,
      bonus: {
        ac: 1,
        ffAC: 1,
        touchAC: 1,
      },
    },
    {
      name: 'Headband of Vast Intellect +6',
      bonusType: 'enhancement',
      cost: 0,
      bonus: {
        intelligence: 6,
      },
    },
    {
      name: 'Belt of Dex/Con +6',
      bonusType: 'enhancement',
      cost: 90000,
      bonus: {
        dexterity: 6,
        constitution: 6,

      },
    },
    {
      name: 'Cloak of Resistance +5',
      bonusType: 'resistance',
      cost: 25000,
      bonus: {
        saves: 5,
      },
    },
    {
      name: 'Mythril Buckler +5',
      bonusType: 'shield',
      cost: 26000,
      bonus: {
        ac: 6,
        ffAC: 6,
      },
    },
    {
      name: 'Ring of Protection +1',
      bonusType: 'deflection',
      cost: 2000,
      bonus: {
        ac: 1,
        ffAC: 1,
        touchAC: 1,
      },
    },
    {
      name: 'Cracked Dusty Rose Prism Ioun Stone',
      bonusType: 'insight',
      cost: 500,
      bonus: {
        initiative: 1,
      },
    },
    {
      name: 'Masterwork Tools (Bluff)',
      bonusType: 'circumstance',
      bonus: {
        bluff: 2,
      },
    },
  ],
  ecology: '',
  // ecology: {
  //   environment: '',
  //   organization: '',
  //   treasure: '',
  // },
  miscellaneous: '',

  toggle: [

    {
      name: 'Perceive Cues',
      bonusType: 'competence',
      active: false,
      duration: 1,
      bonus: {
        perception: 5,
        'sense motive': 5,
      },
    },
    {
      name: 'Haste',
      bonusType: 'dodge',
      active: false,
      duration: 2,
      bonus: {
        attackRolls: 1,
        reflex: 1,
        ac: 1,
        touchAC: 1,
      },
    }, {
      name: 'Mage Armor',
      bonusType: 'armor',
      active: true,
      duration: 0,
      bonus: {
        ac: 4,
        ffAC: 4,

      },
    }, {
      name: 'C-4PO\'s Skin',
      bonusType: 'naturalArmorEnhancement',
      active: true,
      duration: 0,
      bonus: {
        ac: 4,
        ffAC: 4,
      },
    }, {
      name: 'Gub\'s Reduce Person',
      bonusType: 'size',
      active: false,
      duration: 1,
      bonus: {
        strength: -2,
        dexterity: 4,
        size: 1,
      },
    },
    {
      name: 'Gub\'s Monstrous Physique II',
      bonusType: 'size',
      active: false,
      duration: 1,
      bonus: {
        strength: -2,
        dexterity: 6,
        size: 2,
        ac: 1,
        ffAC: 1,
      },
    },
  ],
});

</script>

<style scoped lang="scss">

#page {
  text-shadow: 2px 2px 4px #000000;
  color: white;
  text-align: left;
  align-items: baseline;
  padding: 1vmin;
  background-image: url("../assets/sareah_placeholder.png");
  background-repeat: no-repeat;

  background-size: 100vmax;
  background-position: 50% 50%;
  background-attachment: fixed;
  justify-content: space-between;

}
</style>
