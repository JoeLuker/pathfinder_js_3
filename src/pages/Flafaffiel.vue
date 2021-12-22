<template>
  <BaseSheet :character="flafaffiel">
  </BaseSheet>
</template>

<script setup>
import BaseSheet from 'components/BaseSheet';
import {
  computed, ref, reactive,
} from 'vue';
import { useMeta } from 'quasar';
import { EldritchScion } from 'components/EldritchScion';

const sizeTable = reactive({
  fine: 8,
  diminutive: 4,
  tiny: 2,
  small: 1,
  medium: 0,
  large: -1,
  huge: -2,
  gargantuan: -4,
  colossal: -8,
});

const name = ref('Flafaffiel');
const solo = ref(false);
const traits = ref([
  'fate\'s favored',
  'reactionary',
]);
const alignment = ref('LG');

const heritage = ref('suli');
const heritageTraits = ref([]);
const type = ref('Outsider');
const subtype = ref(['native']);
const senses = ref(['']);
const aura = ref('');
const speed = ref(30);

const size = ref('medium');
const sizeMod = ref(sizeTable[size.value]);
// TODO
const space = ref(5);
const reach = ref(5);

const className = ref('magus');
const classArchetype = ref(['eldritch scion']);
const classLevel = ref(13);
const classHitDie = ref(8);
const classBab = ref(3 / 4);
const classSkillRanks = ref(2);
const classSkills = ref([
  'Climb',
  'Craft',
  'Fly',
  'Intimidate',
  'Knowledge',
  'Profession',
  'Ride',
  'Spellcraft',
  'Swim',
  'Use Magic Device',
]);
const classSaves = reactive({
  fortitude: true,
  reflex: false,
  will: true,
});
const classCasterLevel = computed(() => classLevel.value);
const classCastingStyle = ref('spontaneous');
const classCastingType = ref('arcane');

const classSpellSlots = reactive({
  '4th': 3,
  '3rd': 4,
  '2nd': 5,
  '1st': 5,
});

const specialAttacks = ref('');
const spellLikeAbilities = ref('');
const supernaturalAbilities = ref('');
const extraordinaryAbilities = ref('');

const melee = ref([
  {
    name: 'Bastard Sword',
    weaponGroup: 'heavy',
    attack: 0,
    dieCount: 1,
    dieSize: 10,
    damage: 0,
    critRange: 19,
  },
]);
const ranged = ref('');

const charGear = reactive({
  'Full-Plate Armor': {
    bonusType: 'armor',
    bonus: {
      ac: 9,
      ffAC: 9,
    },
  },
  Suli: {
    bonusType: 'racial',
    bonus: {
      strength: 2,
      intelligence: -2,
      charisma: 2,
    },
  },
});

const specialAbilitiesRef = ref([
  EldritchScion.specialAbilities,
]);

const flafaffiel = computed(() => {
  const introduction = {
    name: name.value,
    solo: solo.value,
    heritage: heritage.value,
    heritageTraits: heritageTraits.value,
    traits: traits.value,
    class: [
      {
        archetype: classArchetype.value,
        name: className.value,
        level: classLevel.value,
        first: true,
        hitDie: classHitDie.value,
        bab: classBab.value,
        skillRanks: classSkillRanks.value,
        classSkills: classSkills.value,
        favored: {
          hp: 0,
          skill: 0,
          heritage: {
            suli: 13,
          },
        },
        saves: classSaves,
        casterLevel: classCasterLevel.value,
        castingStyle: classCastingStyle.value,
        castingType: classCastingType.value,
        spells: {
          '4th': {
            slots: classSpellSlots['4th'],
            prepared: [
              'Invisibility, Greater',
              'Dimension Door',
              'Modify Memory',
              '???',
            ],
          },
          '3rd': {
            slots: classSpellSlots['3rd'],
            prepared: [
              'Haste',
              'Glibness',
              'Major Image',
              'Charm monster',
            ],
          },
          '2nd': {
            slots: classSpellSlots['2nd'],
            prepared: [
              'Heroism',
              'Gallant Inspiration',
              'Blur',
              'Invisibility',
              'Heroic Fortune',
            ],
          },
          '1st': {
            slots: classSpellSlots['1st'],
            prepared: [
              'Fabricate Disguise',
              'Saving Finale',
              'Hideous Laughter',
              'Grease',
              'Heightened Awareness',
              'Feather Fall',
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
            ],
          },

        },
      },
    ],
    alignment: alignment.value,
    size: size.value,
    sizeMod: sizeMod.value,
    type: type.value,
    subtype: subtype.value,
    senses: senses.value,
    aura: aura.value,
  };
  // TODO
  const defense = {
    defensiveAbilities: '',
    dr: '',
    resist: '',
    sr: '',
    weaknesses: '',
    saveAbilityScore: {
      fortitude: 'constitution',
      reflex: 'dexterity',
      will: 'wisdom',
    },
  };
  const offense = {
    speed: speed.value,
    space: space.value,
    reach: reach.value,
    specialAttacks: specialAttacks.value,
    spellLikeAbilities: spellLikeAbilities.value,
    supernaturalAbilities: supernaturalAbilities.value,
    extraordinaryAbilities: extraordinaryAbilities.value,
    melee: melee.value,
    ranged: ranged.value,
  };
  const tactics = '';
  const statistics = {
    abilityScore: {
      strength: {
        pointBuy: 16,
      },
      dexterity: {
        pointBuy: 10,
      },
      constitution: {
        pointBuy: 10,
      },
      intelligence: {
        pointBuy: 10,
      },
      wisdom: {
        pointBuy: 10,
      },
      charisma: {
        pointBuy: 14,
      },
    },
    feats: [
      '???',
    ],
    skills: {
      acrobatics: {
        ranks: 0,
        ability: 'dexterity',
      },
      appraise: {
        ranks: 0,
        ability: 'intelligence',
      },
      bluff: {
        ranks: 0,
        ability: 'charisma',
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
        ranks: 13,
        ability: 'charisma',
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
        ranks: 13,
        ability: 'charisma',
      },
      knowledge: {
        arcana: {
          ranks: 0,
          ability: 'intelligence',
        },
        dungeoneering: {
          ranks: 0,
          ability: 'intelligence',
        },
        engineering: {
          ranks: 0,
          ability: 'intelligence',
        },
        geography: {
          ranks: 0,
          ability: 'intelligence',
        },
        history: {
          ranks: 0,
          ability: 'intelligence',
        },
        local: {
          ranks: 0,
          ability: 'intelligence',
        },
        nature: {
          ranks: 0,
          ability: 'intelligence',
        },
        nobility: {
          ranks: 0,
          ability: 'intelligence',
        },
        planes: {
          ranks: 0,
          ability: 'intelligence',
        },
        religion: {
          ranks: 0,
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
        ranks: 0,
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
        ranks: 0,
        ability: 'strength',
      },
      'use magic device': {
        ranks: 0,
        ability: 'charisma',
      },
    },
    languages: '',
    specialQualities: '',
  };
  const specialAbilities = specialAbilitiesRef.value;
  const gear = charGear;
  const ecology = '';
  // ecology: {
  //   environment: '',
  //   organization: '',
  //   treasure: '',
  // },
  const miscellaneous = '';
  const toggle = [
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
    },
  ];

  return {
    introduction,
    defense,
    offense,
    tactics,
    statistics,
    specialAbilities,
    gear,
    ecology,
    miscellaneous,
    toggle,
  };
});

const metaData = reactive({
  title: name.value,
});
useMeta(metaData);

</script>

<style scoped>

#page {

}

</style>
