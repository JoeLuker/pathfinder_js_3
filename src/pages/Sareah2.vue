<template>
  <BaseSheet3
    :character="sareah"
  />
</template>

<script setup>
import BaseSheet3 from 'components/BaseSheet3';
import {
  computed,
  reactive,
  ref,
  defineExpose,
} from 'vue';
import {
  useMeta,
} from 'quasar';

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

const character = computed(() => {
  const name = ref('Sareah');
  const solo = ref(false);
  const traits = ref([
    {
      name: 'reactionary',
      bonusType: 'trait',
      bonus: {
        initiative: 2,
      },
    },
    {
      name: 'bluff trait (fill this later)',
      bonusType: 'trait',
      bonus: {
        bluff: 1,
      },
    },
  ]);
  const alignment = ref('NG');

  const heritage = ref('humanoid');
  const heritageTraits = ref([
    {
      name: 'Mismatched',
      bonusType: 'racialTrait',
      bonus: {
        initiative: 4,
        reflex: -2,
      },
    },
  ]);
  const type = ref('humanoid');
  const subtype = ref(['human']);
  const senses = ref([
    'arcane sight',
    'darkvision 60 ft.',
    'see invisibility',
  ]);
  const aura = ref('');
  const speed = ref(30);

  const size = ref('medium');
  const sizeMod = ref(sizeTable[size.value]);
  // TODO
  const space = ref(5);
  const reach = ref(5);

  const charMelee = ref([
    {
      name: 'caestus',
      weaponGroup: 'light',
      dieCount: 1,
      dieSize: 4,
      critRange: 20,
    },
  ]);
  const charRanged = ref([
    {
      name: 'generic ranged attack',
    },
  ]);

  const charGear = reactive({
    'Cracked Pale Green Prism': {
      bonusType: 'competence bonus',
      cost: 4000,
      bonus: {
        saves: 1,
      },
    },
    'Dusty Rose Prism Ioun Stone': {
      bonusType: 'insight',
      cost: 5000,
      bonus: {
        ac: 1,
        ffAC: 1,
        touchAC: 1,
      },
    },
    'Headband of Vast Intellect +6': {
      bonusType: 'enhancement',
      cost: 0,
      bonus: {
        intelligence: 6,
      },
    },
    'Belt of Dex/Con +6': {
      bonusType: 'enhancement',
      cost: 0,
      bonus: {
        dexterity: 6,
        constitution: 6,
      },
    },
    'Cloak of Resistance +5': {
      bonusType: 'resistance',
      cost: 25000,
      bonus: {
        saves: 5,
      },
    },
    'Mythril Buckler +5': {
      bonusType: 'shield',
      cost: 26000,
      bonus: {
        ac: 6,
        ffAC: 6,
      },
    },
    'Ring of Protection +1': {
      bonusType: 'deflection',
      cost: 2000,
      bonus: {
        ac: 1,
        ffAC: 1,
        touchAC: 1,
      },
    },
    'Cracked Dusty Rose Prism Ioun Stone': {
      bonusType: 'insight',
      cost: 500,
      bonus: {
        initiative: 1,
      },
    },
    'Masterwork Tools (Bluff)': {
      bonusType: 'circumstance',
      bonus: {
        bluff: 2,
      },
    },
  });

  const charLevel = ref(13);

  const introduction = {
    name: name.value,
    solo: solo.value,
    heritage: heritage.value,
    heritageTraits: heritageTraits.value,
    traits: traits.value,
    class: [
      {
        archetype: ['ley-line gaurdian'],
        name: 'witch',
        level: charLevel.value,
        hitDie: 6,
        bab: 1 / 2,
        first: true,
        skillRanks: 2,
        classSkills: ['craft', 'bluff', 'diplomacy', 'fly', 'heal', 'arcana', 'history', 'nature', 'history', 'planes', 'profession', 'spellcraft', 'use magic device'],
        favored: {
          hp: 4,
          skill: 0,
          race: {
            'half-elf': charLevel.value - 4,
          },
        },
        saves: {
          fortitude: false,
          reflex: false,
          will: true,
        },
        casterLevel: charLevel.value,
        casting: 'spontaneous',
        castingStat: 'intelligence',
        spells: {
          '6th': {
            slots: 4,
            prepared: [
              'wither limb',
              'fey form II',
            ],
          },
          '5th': {
            slots: 6,
            prepared: [
              'hold monster',
              'teleport',
              'Curse, Major',
              'banish seeming',
              'waves of fatigue',
            ],
          },
          '4th': {
            slots: 6,
            prepared: [
              'enervation',
              'confusion',
              'demanding message',
              'hunger for flesh',
              'inveigle person',
            ],
          },
          '3rd': {
            slots: 6,
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
            slots: 6,
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
            slots: 6,
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
          '6th': 'mislead',

        },
      }],
    alignment: alignment.value,
    size: size.value,
    sizeMod: sizeMod.value,
    type: type.value,
    subtype: subtype.value,
    senses: senses.value,
    aura: aura.value,
  };

  introduction.class.forEach((charClass) => {
    charClass.casterLevel = charClass.level;
  });

  const level = computed(() => introduction.class.reduce(
    ((accumulator, cur) => ((cur.gestalt ?? false)
      ? Math.max(accumulator, cur.level) : accumulator + cur.level)), 0,
  ));
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
    melee: charMelee.value,
    ranged: charRanged.value,

  };
  const tactics = '';
  const statistics = {
    abilityScore: {
      strength: {
        pointBuy: 9,
      },
      dexterity: {
        pointBuy: 15,

      },
      constitution: {
        pointBuy: 14,

      },
      intelligence: {
        pointBuy: 17,

      },
      wisdom: {
        pointBuy: 13,

      },
      charisma: {
        pointBuy: 13,
      },
    },
    feats: {
      'Skill Focus (Bluff)': {
        bonusType: 'untyped',
        bonus: {
          bluff: 2,
        },
      },

      'Accursed Hex': {},
      'Improved Initiative': {
        type: 'combat',
        bonusType: 'untyped',
        bonus: {
          initiative: 4,
        },
      },
      'Extra Hex (Flight)': {},
      'Split Hex': {},
      'spell penetration': {},
      'greater spell penetration': {},
    },
    skills: {
      acrobatics: {
        ranks: level.value,
        ability: 'dexterity',
      },
      appraise: {
        ranks: 0,
        ability: 'intelligence',
      },
      bluff: {
        ranks: level.value,
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
        ranks: level.value,
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
        ranks: 3,
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
          ranks: level.value,
          ability: 'intelligence',
        },
        dungeoneering: {
          ranks: 0,
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
          ranks: level.value,
          ability: 'intelligence',
        },
        religion: {
          ranks: 1,
          ability: 'intelligence',
        },
      },
      linguistics: {
        ranks: 1,
        ability: 'intelligence',
      },
      perception: {
        ranks: level.value,
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
        ranks: 1,
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
        ranks: level.value,
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
  const gear = charGear;
  const ecology = '';
  // ecology: {
  //   environment: '',
  //   organization: '',
  //   treasure: '',
  // },
  const miscellaneous = '';

  const baseAtk = computed(() => {
    let bab = 0;

    let maxBAB = 0;

    const CharClasses = ref(introduction.class);

    CharClasses.value.forEach((charClass) => {
      if (charClass.gestalt === true) {
        maxBAB = Math.max(Math.floor(charClass.level * charClass.bab), maxBAB);
      } else {
        bab += Math.floor(charClass.level * charClass.bab);
      }
    });
    bab += maxBAB;

    return bab;
  });

  const toggle = reactive([
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
    },
    {
      name: 'Mage Armor',
      bonusType: 'armor',
      active: true,
      duration: 0,
      bonus: {
        ac: 4,
        ffAC: 4,

      },
    },
    {
      name: 'C-4PO\'s Skin',
      bonusType: 'naturalArmorEnhancement',
      active: false,
      duration: 0,
      bonus: {
        ac: 4,
        ffAC: 4,
      },
    },
    {
      name: 'Reduce Person',
      bonusType: 'size',
      active: false,
      duration: 1,
      bonus: {
        strength: -2,
        dexterity: 2,
        size: 1,
      },
    },
    {
      name: 'Monstrous Physique II',
      bonusType: 'size',
      active: false,
      duration: 1,
      bonus: {
        strength: -2,
        dexterity: 4,
        size: 2,
        ac: 1,
        ffAC: 1,
      },
    },
    {
      name: 'Fey Form II',
      bonusType: 'size',
      active: false,
      duration: 1,
      bonus: {
        strength: -2,
        dexterity: 6,
      },
    },
  ]);

  const charMods = reactive({
    'half-elf': {
      bonusType: 'racial',
      bonus: {
        intelligence: 2,
      },
    },
    levelUp: {
      bonusType: '',
      bonus: {
        intelligence: 3,
      },
    },
    Wish: {
      bonusType: 'inherent',
      cost: 0,
      bonus: {
        intelligence: 1,
      },
    },
  });

  const acBonuses = computed(() => {
    const modifiersHolder = reactive({});

    function modifierLoop(myObj) {
      const myObjKeys = ref(Object.keys(myObj));
      myObjKeys.value.forEach((button) => {
        if (typeof myObj[button].bonus !== 'undefined' && myObj[button].active !== false) {
          modifiersHolder.ac = modifiersHolder.ac ?? {};
          if (myObj[button].bonus.ac) {
            modifiersHolder.ac[myObj[button].bonusType] = modifiersHolder.ac[
              myObj[button].bonusType] ?? [];
            modifiersHolder.ac[myObj[button].bonusType].push(myObj[button].bonus.ac);
          }
        }
      });
    }

    modifierLoop(toggle);
    modifierLoop(charMods);
    modifierLoop(gear);
    modifierLoop(statistics.feats);
    modifierLoop(introduction.traits);
    modifierLoop(introduction.heritageTraits);

    const holder = reactive({});

    const stackableTypes = ref(['dodge', 'circumstance', 'untyped']);

    const modifiersHolderKeys = ref(Object.keys(modifiersHolder));

    modifiersHolderKeys.value.forEach((bonusTarget) => {
      const bonusTargetKeys = ref(Object.keys(modifiersHolder[bonusTarget]));
      bonusTargetKeys.value.forEach((bonusType) => {
        holder[bonusTarget] = holder[bonusTarget] ?? {};
        holder[bonusTarget][
          bonusType] = holder[bonusTarget][bonusType] ?? 0;
        holder[bonusTarget][
          bonusType] += modifiersHolder[bonusTarget][bonusType].reduce(
          (accumulator, cur) => ((cur >= 0 || !(bonusType in stackableTypes.value))
            ? Math.max(accumulator, cur) : accumulator + cur), 0,
        );
      });
    });

    return holder.ac;
  });
  const modifiers = computed(() => {
    const modifiersHolder = reactive({});

    function modifierLoop(myObj) {
      const myObjKeys = ref(Object.keys(myObj));
      myObjKeys.value.forEach((button) => {
        if (typeof myObj[button].bonus !== 'undefined' && myObj[button].active !== false) {
          const bonusKeys = ref(Object.keys(myObj[button].bonus));
          bonusKeys.value.forEach((key) => {
            modifiersHolder[key] = modifiersHolder[key] ?? {};
            modifiersHolder[key][myObj[button].bonusType] = modifiersHolder[key][
              myObj[button].bonusType] ?? [];
            modifiersHolder[key][myObj[button].bonusType].push(myObj[button].bonus[key]);
          });
        }
      });
    }

    modifierLoop(toggle);
    modifierLoop(charMods);
    modifierLoop(gear);
    modifierLoop(statistics.feats);
    modifierLoop(introduction.traits);
    modifierLoop(introduction.heritageTraits);

    const holder = reactive({});

    const stackableTypes = ref(['dodge', 'circumstance', 'untyped']);

    const modifiersHolderKeys = ref(Object.keys(modifiersHolder));

    modifiersHolderKeys.value.forEach((bonusTarget) => {
      const bonusTargetKeys = ref(Object.keys(modifiersHolder[bonusTarget]));
      bonusTargetKeys.value.forEach((bonusType) => {
        holder[bonusTarget] = holder[bonusTarget] ?? 0;
        holder[bonusTarget] += modifiersHolder[bonusTarget][bonusType].reduce(
          (accumulator, cur) => ((cur >= 0 && !(bonusType in stackableTypes.value))
            ? Math.max(accumulator, cur) : accumulator + cur), 0,
        );
      });
    });

    return holder;
  });

  const sizeModifier = computed(() => {
    let tempSize = introduction.sizeMod;

    tempSize += modifiers.value.size ?? 0;

    return tempSize;
  });

  // STATISTICS

  const abilityScores = computed(() => {
    const husk = reactive({
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    });

    const objectHusk = reactive(statistics.abilityScore);

    const keys = ref(Object.keys(objectHusk));

    keys.value.forEach((score) => {
      const subKeyHusk = reactive({});
      const existingSubKeys = ref(Object.keys(objectHusk[score]));

      existingSubKeys.value.forEach((subScore) => {
        subKeyHusk[subScore] = objectHusk[score][subScore];
      });

      husk[score] += modifiers.value[score] ?? 0;

      const subKeys = Object.keys(subKeyHusk);

      subKeys.forEach((subScore) => {
        husk[score] += subKeyHusk[subScore];
      });
    });

    return husk;
  });

  const abilityMods = computed(() => {
    const husk = reactive({
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    });

    const keys = Object.keys(husk);

    keys.forEach((score) => {
      husk[score] = Math.floor((abilityScores.value[score] - 10) / 2);
    });

    return husk;
  });

  const cmb = computed(() => {
    let tempCMB = abilityMods.value.strength + baseAtk.value + sizeModifier.value;

    tempCMB += modifiers.value.attackRolls ?? 0;

    return tempCMB;
  });
  const cmd = computed(() => 10 + abilityMods.value.dexterity
    + abilityMods.value.strength + baseAtk.value
    + sizeModifier.value);

  const skills = computed(() => {
    const skillRanks = statistics.skills;

    const totalSkills = {
      acrobatics: 0,
      appraise: 0,
      bluff: 0,
      climb: 0,
      craft: 0,
      diplomacy: 0,
      'disable device': 0,
      disguise: 0,
      'escape artist': 0,
      fly: 0,
      'handle animal': 0,
      heal: 0,
      intimidate: 0,
      knowledge: {
        arcana: 0,
        dungeoneering: 0,
        engineering: 0,
        geography: 0,
        history: 0,
        local: 0,
        nature: 0,
        nobility: 0,
        planes: 0,
        religion: 0,
      },
      linguistics: 0,
      perception: 0,
      perform: 0,
      profession: 0,
      ride: 0,
      'sense motive': 0,
      'slight of hand': 0,
      spellcraft: 0,
      stealth: 0,
      survival: 0,
      swim: 0,
      'use magic device': 0,
    };

    if (sizeModifier.value !== 0) {
      totalSkills.fly += (Math.log2(sizeModifier.value) + 1) * 2;
      totalSkills.stealth += (Math.log2(sizeModifier.value) + 1) * 4;
    }

    const tempClassSkills = ref(introduction.class[0].classSkills);

    const { knowledge } = statistics.skills;

    const knowledgeKeys = Object.keys(knowledge);

    const keys = Object.keys(totalSkills);

    const summarySkills = {};

    keys.forEach((skillKey) => {
      tempClassSkills.value.forEach((classSkill) => {
        if (classSkill === skillKey && skillRanks[skillKey].ranks >= 1) totalSkills[skillKey] += 3;
        if (classSkill === skillKey && classSkill === 'knowledge') {
          knowledgeKeys.forEach((knowledgeSkillKey) => {
            if (skillRanks.knowledge[knowledgeSkillKey].ranks >= 1) {
              totalSkills.knowledge[knowledgeSkillKey] += 3;
            }
          });
        }
      });
      if (skillKey === 'knowledge') {
        knowledgeKeys.forEach((knowledgeSkillKey) => {
          totalSkills.knowledge[knowledgeSkillKey] += skillRanks.knowledge[knowledgeSkillKey].ranks;
          totalSkills.knowledge[knowledgeSkillKey]
            += abilityMods.value[skillRanks.knowledge[knowledgeSkillKey].ability];
          totalSkills.knowledge[knowledgeSkillKey] += modifiers.value.knowledge ?? 0;
          totalSkills.knowledge[knowledgeSkillKey] += modifiers.value.skills ?? 0;
        });
      } else {
        totalSkills[skillKey] += skillRanks[skillKey].ranks;
        totalSkills[skillKey] += abilityMods.value[skillRanks[skillKey].ability];
        totalSkills[skillKey] += modifiers.value[skillKey] ?? 0;
        totalSkills[skillKey] += modifiers.value.skills ?? 0;

        if (skillRanks[skillKey].ranks >= 1) {
          summarySkills[skillKey] = totalSkills[skillKey];
        }
      }
    });

    return {
      totalSkills,
      summarySkills,
    };
  });

  // INTRODUCTION

  const cr = ref('');
  const xp = ref(null);

  // eslint-disable-next-line max-len
  const initiative = computed(() => abilityMods.value.dexterity + (modifiers.value.initiative ?? 0));

  // DEFENSE

  const ac = computed(() => {
    const tempAC = 10 + sizeModifier.value;

    return reactive({
      default: tempAC + (modifiers.value.ac ?? 0) + abilityMods.value.dexterity,
      touch: tempAC + (modifiers.value.touchAC ?? 0) + abilityMods.value.dexterity,
      'flat-footed': tempAC + (modifiers.value.ffAC ?? 0),
    });
  });
  const maxHP = computed(() => {
    let hitPoints = 0;

    let maxHitDie = 0;

    const CharClasses = introduction.class;

    CharClasses.forEach((charClass) => {
      if (charClass.gestalt !== true) {
        if (charClass.first) {
          hitPoints += charClass.hitDie;
          hitPoints += (charClass.level - 1) * Math.ceil((charClass.hitDie + 1) / 2);
        } else {
          hitPoints += charClass.level * Math.ceil((charClass.hitDie + 1) / 2);
        }
        if (typeof charClass.favored !== 'undefined') {
          if (typeof charClass.favored.hp !== 'undefined') {
            hitPoints += charClass.favored.hp;
          }
        }
      } else {
        maxHitDie = Math.max(charClass.hitDie, maxHitDie);
      }
    });

    if (introduction.solo) {
      hitPoints = maxHitDie * level.value;
    }

    hitPoints += level.value * abilityMods.value.constitution;

    hitPoints += modifiers.value.hp ?? 0;

    return hitPoints;
  });
  // const inputDamage = ref(0);

  const savingThrows = computed(() => {
    const totalSaves = {
      fortitude: 0,
      reflex: 0,
      will: 0,
    };

    let allBonus = 0;

    allBonus += modifiers.value.saves ?? 0;

    const saveKeys = Object.keys(defense.saveAbilityScore);

    const charClasses = ref(introduction.class);

    const maxCharSaves = {
      fortitude: false,
      reflex: false,
      will: false,
    };

    saveKeys.forEach((save) => {
      charClasses.value.forEach((charClass) => {
        maxCharSaves[save] = (charClass.saves[save] || maxCharSaves[save]);
      });
    });

    saveKeys.forEach((save) => {
      if (maxCharSaves[save] ?? false) {
        totalSaves[save] += 2;
        totalSaves[save] += Math.floor(level.value / 2);
      } else {
        totalSaves[save] += Math.floor(level.value / 3);
      }
      totalSaves[save] += modifiers.value[save] ?? 0;
      totalSaves[save] += abilityMods.value[defense.saveAbilityScore[save]];
      totalSaves[save] += allBonus;
    });

    return totalSaves;
  });

  // OFFENSE

  const melee = computed(() => {
    let twoHanding = 0;

    if (toggle['two handing']?.active) twoHanding = 1;

    const tempMeleeAttack = ref(Math.max(abilityMods.value.dexterity, abilityMods.value.strength)
      + baseAtk.value
      + sizeModifier.value);
    const tempMeleeDamage = ref(Math.floor(abilityMods.value.strength * (1 + (0.5 * twoHanding))));

    const tempDexDamage = ref(Math.floor(abilityMods.value.dexterity));

    if (toggle['power attack']?.active) {
      tempMeleeAttack.value += -(Math.floor(baseAtk.value / 4) + 1);
      // eslint-disable-next-line no-unused-vars
      tempMeleeDamage.value += (Math.floor(baseAtk.value / 4) + 1) * (2 + twoHanding);
      // tempDexDamage += (Math.floor(baseAtk.value / 4) + 1) * 2;
    }

    const dieSizeMod = ref(sizeModifier.value);

    // let holy;

    // if (toggle.holy?.active) {
    //   holy = ' plus 2d6';
    // } else {
    //   holy = '';
    // }

    tempMeleeDamage.value += modifiers.value.weaponDamage ?? 0;
    tempDexDamage.value += modifiers.value.weaponDamage ?? 0;

    tempMeleeAttack.value += modifiers.value.attackRolls ?? 0;

    const mOptions = ref([]);

    offense.melee.forEach((meleeOption) => {
      const option = ref({
        attack: 0,
        damage: 0,
      });
      Object.keys(meleeOption)
        .forEach((meleeAttr) => {
          option.value[meleeAttr] = meleeOption[meleeAttr];
        });
      option.value.attack += tempMeleeAttack.value;
      option.value.damage += option.value.weaponGroup === 'light'
        ? Math.max(tempMeleeDamage.value, tempDexDamage.value) : tempMeleeDamage.value;
      option.value.dieSize -= dieSizeMod.value;
      mOptions.value.push(option.value);
    });

    return mOptions.value;
  });

  const ranged = computed(() => {
    const tempRangedAttack = ref(Math.max(abilityMods.value.dexterity, abilityMods.value.strength)
      + baseAtk.value
      + sizeModifier.value + (modifiers.value.attackRolls ?? 0));
    const tempRangedDamage = ref(abilityMods.value.strength + (modifiers.value.weaponDamage ?? 0));

    const dieSizeMod = ref(sizeModifier.value);

    const rOptions = ref([]);

    offense.ranged.forEach((rangedOption) => {
      const option = ref({
        attack: 0,
        damage: 0,
      });
      Object.keys(rangedOption)
        .forEach((rangedAttr) => {
          option.value[rangedAttr] = rangedOption[rangedAttr];
        });
      option.value.attack += tempRangedAttack.value;
      option.value.damage += tempRangedDamage.value;
      option.value.dieSize -= dieSizeMod.value;
      rOptions.value.push(option.value);
    });

    return rOptions.value;
  });

  const featDescriptions = ref([
    {
      name: 'Luck of Heroes',
      type: '',
      header: 'Luck of Heroes',
      description: [
        'Whenever you spend a hero point to reroll a die roll or to grant yourself a bonus before a die roll is made, there is a chance that the hero point is not spent. Whenever you spend a hero point, roll a d20. If the result is greater than 15, the hero point is not spent. You cannot use this Feat when you use the cheat death Hero Point option.',
      ],
    },
  ]);
  const heroPointAbilities = ref('');
  const mythicAbilities = ref('');

  const hexDC = computed(() => 10 + Math.floor(level.value / 2)
    + abilityMods.value.intelligence);

  const specialAbilities = ref([
    {
      name: 'Defensive Roll',
      type: 'Ex',
      header: 'Defensive Roll (Ex)',
      description: [
        'With this advanced talent, the rogue can roll with a potentially lethal blow to take less damage from it than she otherwise would.',
        'Once per day, when she would be reduced to 0 or fewer hit points by damage in combat (from a weapon or other blow, not a spell or special ability), the rogue can attempt to roll with the damage. To use this ability, the rogue must attempt a Reflex saving throw (DC = damage dealt). If the save succeeds, she takes only half damage from the blow; if it fails, she takes full damage.',
        'She must be aware of the attack and able to react to it in order to execute her defensive roll—if she is denied her Dexterity bonus to AC, she can’t use this ability. Since this effect would not normally allow a character to make a Reflex save for half damage, the rogue’s evasion ability does not apply to the defensive roll.',

      ],
    },
  ]);

  const specialAttacks = reactive([
    {
      name: 'Witch Hexes (DC 25)',
      hexes: [
        'cackle',
        'misfortune',
        'evil eye',
        'slumber',
        'flight',
        'gift of consumption',
        'retribution',
        'agony',
      ],
    },
    {
      name: 'Conduit Surge (1d4)',
      usesPerDay: 1,
    },
  ]);

  return {
    name,
    introduction,
    defense,
    offense,
    tactics,
    statistics,
    gear,
    ecology,
    miscellaneous,
    // TODO
    initiative,
    cr,
    xp,
    maxHP,
    ac,
    acBonuses,
    savingThrows,
    melee,
    ranged,
    baseAtk,
    cmb,
    cmd,
    skills,
    abilityScores,
    abilityMods,
    featDescriptions,
    specialAbilities,
    toggle,
    modifiers,
    heroPointAbilities,
    mythicAbilities,
    specialAttacks,
    hexDC,
  };
});

const sareah = character.value;

const metaData = reactive({
  title: character.value.name,
});
useMeta(metaData);

defineExpose({ sareah });

</script>

<style lang="scss" scoped>

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
