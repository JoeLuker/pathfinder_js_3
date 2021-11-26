<template>
  <div id="page">

    <div id="stat-block">

      <div id="introduction">

        <div>
          <div id="name" class="capitalize" v-text="character.introduction.name"></div>
          <div id="cr" v-text="cr"></div>
        </div>

        <div id="xp" v-text="xp"></div>

        <div>
          <span id="race" class="capitalize" v-text="character.introduction.race"/>
          <span v-text="'&nbsp;'"/>
          <span id="class" class="capitalize">
            {{ formatList(character.introduction.class[0], ['name']) }}

            {{
              formatList(character.introduction.class[0].gestalt
                , ['archetype', 'name', 'level'])
            }}
          </span>
        </div>

        <div>
          <span id="alignment" v-text="character.introduction.alignment"/>
          <span v-text="'&nbsp;'"/>
          <span id="size" class="capitalize">
            {{ character.introduction.size }}
          </span>
          <span v-text="'&nbsp;'"/>
          <span id="type">
           {{ character.introduction.type }}
          </span>
          <span id="subtype">
            ({{ formatList(character.introduction.subtype) }})
          </span>

        </div>

        <div>
          <b>Init </b><span id="initiative" v-text="formatBonus(initiative)"></span>
          <b> Senses </b>
          <!--          <span id="senses" v-text="formatList(character.introduction.senses)"/>-->
          <!-- <span id="senses">Perception {{ formatBonus(skills.skills.perception) }}</span>-->

        </div>

        <div id="aura" v-text="character.introduction.aura"></div>

      </div>

      <div v-show="character.defense" id="defense">
        <hr>
        <span>DEFENSE</span>
        <hr>

        <div id="ac">
          <b>AC</b> <span> {{ ac }}</span>
        </div>
        <div id="hp">
          <b>hp </b> <span>{{ currHP }}/{{ maxHP }}</span>
        </div>
        <div id="saving throws">
          <b>Fort </b> <span id="fortitude" v-text="savingThrows.fort"/>
          <b>, Ref </b> <span id="reflex" v-text="savingThrows.ref"/>
          <b>, Will </b> <span id="will" v-text="savingThrows.will"/>
        </div>
        <div>

          <div id="defensive abilities" v-text="character.defensiveAbilities"></div>
          <div id="dr">
            <b>DR </b>
            <span v-for="(drValue, drType, index) in character.defense.dr" :key="index">
              {{ drValue }}/{{ drType }}
            </span>
          </div>
          <div id="immune" v-text="character.immune"></div>
          <div id="resist" v-text="character.resist"></div>
          <div id="sr" v-text="character.sr"></div>

        </div>
        <div v-if="character.defense.weaknesses" id="weaknesses">
          <b>Weaknesses </b>
          <span class="capitalize">
          {{ formatArray(character.defense.weaknesses) }}
          </span>
        </div>

      </div>

      <div v-show="character.offense" id="offense">
        <hr>
        <span>OFFENSE</span>
        <hr>
        <div id="speed">
          <b>Spd</b> <span> {{ character.offense.speed }} ft.</span>
        </div>
        <div v-show="melee" id="melee">
          <b>Melee</b> {{ melee }}
        </div>
        <div id="ranged">
          <b>Ranged</b> {{ ranged }}

        </div>
        <div>
          <b>Space </b><span id="space"> {{ space }} ft.; </span>
          <b>Reach </b><span id="reach"> {{ reach }} ft.; </span>
        </div>
        <div id="specialAttacks">
          <b>Special Attacks </b>
          <span v-for="(attack, index) in character.offense.specialAttacks" :key="index"
                class="special-attacks capitalize">
         {{ formatSpecial(attack) }}<span
            v-if="index !== character.offense.specialAttacks.length - 1">, </span>
          </span>
        </div>

        <div id="spell-likeAbilities" v-text="character.offense.spellLikeAbilities"></div>

        <div id="supernaturalAbilities">
          <b @click="SupernaturalToggle = !SupernaturalToggle"> Supernatural Abilities </b>

          <span v-show="!SupernaturalToggle">..</span>

          <!--TODO-->
          <span v-show="SupernaturalToggle">

                      <span v-for="(attack, index) in character.offense.supernaturalAbilities"
                            :key="index"
                            class="special-attacks capitalize">
         {{ formatSpecial(attack) }}
                        <span
                          v-if="index !== character.offense.supernaturalAbilities.length - 1"
                        >, </span>
          </span>

          </span>
        </div>

        <div id="extraordinaryAbilities">
          <b @click="ExtraordinaryToggle = !ExtraordinaryToggle"> Extraordinary Abilities </b>

          <span v-show="!ExtraordinaryToggle">..</span>

          <!--TODO-->
          <span v-show="ExtraordinaryToggle">

             <span v-for="(attack, index) in character.offense.extraordinaryAbilities"
                   :key="index"
                   class="special-attacks capitalize">
         {{ formatSpecial(attack) }}<span
               v-if="index !== character.offense.extraordinaryAbilities.length - 1"
             >, </span>
          </span>

          </span>
        </div>

        <div id="spells" class="capitalize">
          <!--          TODO-->
          <div v-for="(caster, index) in character.introduction.class"
               :key="index">
            <SpellList v-bind:caster="character.introduction.class[index]"
                       @changeSpell="changeSpell"/>
          </div>
          <div v-for="(caster, index)
          in character.introduction.class[0].gestalt" :key="index">
            <SpellList v-bind:caster="character.introduction.class[0].gestalt[index]"
                       @changeSpell="changeSpell"/>
          </div>

        </div>

      </div>

      <div v-show="character.tactics" id="tactics">
        <hr>
        <span>TACTICS</span>
        <hr>
        <div id="before combat">
          Before Combat: {{ character.tactics.beforeCombat }}
        </div>
        <div id="during combat">
          During Combat: {{ character.tactics.duringCombat }}
        </div>
        <div id="morale">
          Morale: {{ character.tactics.morale }}
        </div>
      </div>

      <div v-show="character.statistics" id="statistics">
        <hr>
        <span>STATISTICS</span>
        <hr>
        <div id="ability scores">
          <span v-for="(score, key, index) in abilityScores" v-bind:key="index">
            <b class="capitalize"> {{ key.substr(0, 3) }}</b> {{ score }}
            ({{
              formatBonus(
                abilityMods[key])
            }})
            <span v-if="index !== 5">, </span>
          </span>
        </div>
        <div>
          <b>Base Atk </b><span id="base atk" v-text="formatBonus(baseAtk)"/>;
          <b>CMB </b><span id="cmb" v-text="formatBonus(cmb)"/>;
          <b>CMD </b><span id="cmd" v-text="formatBonus(cmd)"/>;
        </div>
        <div>
          <b @click="featToggle = !featToggle">Feats </b>
          <span v-if="featToggle" id="feats" class="capitalize"
                v-text="formatArray(character.statistics.feats)"/>
          <span v-else>...</span>
        </div>
        <div>
          <b @click="skillToggle = !skillToggle"> Skills </b>
          <span v-if="skillToggle">
            <span class="capitalize">
                <span v-if="summarySkillToggle">
                  <span class="capitalize">
                    {{ formatSkills(skills.tempSkills) }}
                  </span>
                </span>
                <span v-if="!summarySkillToggle">
                  <span class="capitalize">
                    {{ formatSkills(skills.summarySkills) }}
                  </span>
                </span>
              <span>

                <i v-if="!summarySkillToggle"
                   @click="summarySkillToggle = true"> Show More Skills..</i>
                <i v-if="summarySkillToggle"
                   @click="summarySkillToggle = false"> Show Fewer Skills..</i>

                </span>
          </span>
          </span>
          <span v-if="!skillToggle">..</span>
        </div>
        <div id="languages" v-text="character.statistics.languages"></div>
        <div id="sq" v-text="character.statistics.specialQualities"></div>

      </div>

      <div v-show="character.specialAbilities.active" id="special abilities">
        <hr>
        <span>SPECIAL ABILITIES</span>
        <hr>
      </div>

      <div v-show="character.gear.active" id="gear">
        <hr>
        <span>GEAR</span>
        <hr>
      </div>

      <div v-show="character.ecology" id="ecology">
        <hr>
        <span>ECOLOGY</span>
        <hr>
      </div>

      <div v-show="character.miscellaneous" id="miscellaneous">
        <hr>
        <span>MISCELLANEOUS</span>
        <hr>
      </div>

    </div>

    <div id="info">

      <div id="buttons">
        <div v-for="(bonus, name, index) in toggle" :key="index" class="toggle capitalize"
             v-bind:style="{ 'background-color' : bgColor(bonus.duration)}">
          <q-toggle
            v-model="bonus.active"
            :label="name"
            left-label
          />
        </div>
      </div>

<!--      <div v-if="abilityName" class="info">-->

<!--        <Info-->
<!--          v-bind:table="'ability'"-->
<!--          v-bind:name="abilityName"-->
<!--          @closeInfo="changeInfo"-->
<!--        />-->

<!--      </div>-->

      <div v-if="spellName" class="spellDesc">

        <FullText
          v-bind:table="'spell'"
          v-bind:name="spellName"
          @closeSpell="changeInfo"
        />

      </div>

    </div>

  </div>
</template>

<script setup>
import {
  computed, ref, reactive, defineProps,
} from 'vue';
import SpellList from 'src/components/SpellList.vue';
import FullText from 'src/components/FullText';
// import Info from 'src/components/Info';

const toggle = reactive({
  'shield of faith': {
    bonusType: 'deflection',
    active: false,
    duration: 1,
    bonus: {
      ac: 4,
    },
  },
  'power attack': {
    active: true,
    duration: 3,

  },
  'two handing': {
    active: false,
    duration: 3,
  },
  holy: {
    active: false,
    duration: 3,
  },
  heroism: {
    bonusType: 'morale',
    duration: 2,
    active: true,
    bonus: {
      attackRolls: 2,
      saves: 2,
      skills: 2,
    },
  },
  'archeologist\'s luck': {
    bonusType: 'luck',
    duration: 1,
    active: true,
    bonus: {
      attackRolls: 4,
      saves: 4,
      skills: 4,
      weaponDamage: 4,
    },
  },
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

});

// const spellName = ref('');
const summarySkillToggle = ref(false);
const skillToggle = ref(true);
const featToggle = ref(false);
// const acToggle = ref(false);
// const specialAbilitiesToggle = ref(true);
const ExtraordinaryToggle = ref(true);
const SupernaturalToggle = ref(true);
// const specialQualitiesToggle = ref(false);
// const defensiveAbilitiesToggle = ref(true);
// const abilityName = ref('');

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  character: Object,
});

const toggleKeys = Object.keys(toggle);

function formatBonus(bonus) {
  let text;
  if (bonus < 0) {
    text = bonus;
  } else {
    text = `+${bonus}`;
  }
  return text;
}

// STATISTICS

const abilityScores = computed(() => {
  const husk = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  };

  const keys = Object.keys(props.character.statistics.abilityScore);

  keys.forEach((score) => {
    const subKeys = Object.keys(props.character.statistics.abilityScore[score]);
    subKeys.forEach((subScore) => {
      husk[score] += props.character.statistics.abilityScore[score][subScore];
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

const baseAtk = computed(() => {
  let bab = 0;

  let maxBAB = 0;

  const CharClasses = props.character.introduction.class;

  CharClasses.forEach((charClass) => {
    if (charClass.name !== 'gestalt') {
      bab += Math.floor(charClass.level * charClass.bab);
    } else {
      charClass.gestalt.forEach((gestaltClass) => {
        maxBAB = Math.max(gestaltClass.hitDie, maxBAB);
      });
    }
    bab += maxBAB;
    maxBAB = 0;
  });

  return bab;
});

const cmb = computed(() => {
  let tempCMB = abilityMods.value.strength + baseAtk.value - props.character.introduction.sizeMod;

  toggleKeys.forEach((button) => {
    if ((typeof toggle[button].bonus !== 'undefined')
      && 'attackRolls' in toggle[button].bonus
      && toggle[button].active) {
      tempCMB += toggle[button].bonus.attackRolls;
    }
  });

  return tempCMB;
});
const cmd = computed(() => 10 + abilityMods.value.dexterity
  + abilityMods.value.strength + baseAtk.value
  - props.character.introduction.sizeMod);
// eslint-disable-next-line max-len
const level = computed(() => props.character.introduction.class.reduce(((accumulator, cur) => accumulator + cur.level), 0));

const skills = computed(() => {
  const skillRanks = props.character.statistics.skills;

  const tempSkills = {
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

  if (props.character.introduction.sizeMod !== 0) {
    tempSkills.fly += (Math.log2(props.character.introduction.sizeMod) + 1) * 2;
    tempSkills.stealth += (Math.log2(props.character.introduction.sizeMod) + 1) * 4;
  }
  const classSkills = [
    props.character.introduction.class[0].gestalt[0].classSkills,
    props.character.introduction.class[0].gestalt[1].classSkills,
  ];

  const { knowledge } = props.character.statistics.skills;

  const knowledgeKeys = Object.keys(knowledge);

  const keys = Object.keys(tempSkills);

  const summarySkills = {
    knowledge: {},
  };

  keys.forEach((skillKey) => {
    classSkills.forEach((classSkill) => {
      if (classSkill === skillKey && skillRanks[skillKey].ranks >= 1) skills[skillKey] += 3;
      if (classSkill === skillKey && classSkill === 'knowledge') {
        knowledgeKeys.forEach((knowledgeSkillKey) => {
          if (skillRanks.knowledge[knowledgeSkillKey].ranks >= 1) {
            tempSkills.knowledge[knowledgeSkillKey] += 3;
          }
        });
      }
    });
    if (skillKey === 'knowledge') {
      knowledgeKeys.forEach((knowledgeSkillKey) => {
        tempSkills.knowledge[knowledgeSkillKey] += skillRanks.knowledge[knowledgeSkillKey].ranks;
        tempSkills.knowledge[knowledgeSkillKey]
          += abilityMods.value[skillRanks.knowledge[knowledgeSkillKey].ability];
        toggleKeys.forEach((button) => {
          if ((typeof toggle[button].bonus !== 'undefined') && 'skills' in toggle[button].bonus && toggle[button].active) {
            tempSkills.knowledge[knowledgeSkillKey] += toggle[button].bonus.skills;
          }
        });
        if (props.character.specialAbilities.abilities.includes('Bardic Knowledge')) {
          tempSkills.knowledge[knowledgeSkillKey] += level.value;
        }
        if (skillRanks.knowledge[knowledgeSkillKey].ranks >= 1 || props.character.specialAbilities.abilities.includes('Bardic Knowledge')) {
          summarySkills.knowledge[knowledgeSkillKey] = tempSkills.knowledge[knowledgeSkillKey];
        }
      });
    } else {
      tempSkills[skillKey] += skillRanks[skillKey].ranks;
      tempSkills[skillKey] += abilityMods.value[skillRanks[skillKey].ability];
      // eslint-disable-next-line max-len
      tempSkills[skillKey] += skillRanks[skillKey].modifier.reduce((accumulator, cur) => (accumulator + cur.bonus), 0);
      toggleKeys.forEach((button) => {
        if ((typeof toggle[button].bonus !== 'undefined') && 'skills' in toggle[button].bonus && toggle[button].active) {
          tempSkills[skillKey] += toggle[button].bonus.skills;
        }
      });

      if (skillRanks[skillKey].ranks >= 1) {
        summarySkills[skillKey] = tempSkills[skillKey];
      }
    }
  });

  return {
    tempSkills,
    summarySkills,
  };
});

// INTRODUCTION

const cr = ref('');
const xp = ref(null);

const initiative = computed(() => abilityMods.value.dexterity);

const sizeModifier = computed(() => {
  let tempSize = props.character.introduction.sizeMod;

  toggleKeys.forEach((button) => {
    if ((typeof toggle[button].bonus !== 'undefined')
      && 'size' in toggle[button].bonus && toggle[button].active) {
      tempSize += toggle[button].bonus.size;
    }
  });

  return tempSize;
});

// DEFENSE

const ac = computed(() => {
  const abp = {
    armorEnhancement: 3,
    shieldEnhancement: 3,
    deflection: 2,
    naturalArmorEnhancement: 2,
  };

  const abpKeys = Object.keys(abp);

  let tempAC = 10;

  abpKeys.forEach((key) => {
    tempAC += abp[key];
  });

  tempAC += abilityMods.value.dexterity + sizeModifier.value;

  const gearKeys = Object.keys(props.character.gear);

  toggleKeys.forEach((button) => {
    if ('bonus' in toggle[button] && 'ac' in toggle[button].bonus && toggle[button].active) {
      if ('bonusType' in toggle[button] && toggle[button].bonusType in abp) {
        tempAC += Math.max(
          toggle[button].bonus.ac - abp[toggle[button].bonusType],
          abp[toggle[button].bonusType] - toggle[button].bonus.ac,
        );
      } else {
        tempAC += toggle[button].bonus.ac;
      }
    }
  });

  gearKeys.forEach((item) => {
    if (
      typeof props.character.gear[item] === 'object'
      && 'bonus' in props.character.gear[item]
      && 'ac' in props.character.gear[item].bonus
    ) {
      tempAC += props.character.gear[item].bonus.ac;
    }
  });

  return tempAC;
});
const maxHP = computed(() => {
  let hitPoints = 0;

  let maxHitDie = 0;

  const CharClasses = props.character.introduction.class;

  CharClasses.forEach((charClass) => {
    if (charClass.name !== 'gestalt') {
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
      charClass.gestalt.forEach((gestaltClass) => {
        maxHitDie = Math.max(gestaltClass.hitDie, maxHitDie);
      });
    }
  });

  if (props.character.introduction.solo) {
    hitPoints = maxHitDie * level.value;
  }

  // eslint-disable-next-line no-unused-vars
  hitPoints += level.value * abilityMods.value.constitution;

  return hitPoints;
});
const currHP = computed(() => maxHP.value);
const savingThrows = computed(() => {
  const totalSaves = {
    fort: 0,
    ref: 0,
    will: 0,
  };

  const resistanceBonus = 5;

  let toggleBonus = 0;

  toggleKeys.forEach((button) => {
    if ((typeof toggle[button].bonus !== 'undefined')
      && 'saves' in toggle[button].bonus && toggle[button].active) {
      toggleBonus += toggle[button].bonus.saves;
    }
  });

  toggleKeys.forEach((button) => {
    if ((typeof toggle[button].bonus !== 'undefined')
      && 'ref' in toggle[button].bonus && toggle[button].active) {
      totalSaves.ref += toggle[button].bonus.ref;
    }
  });

  const saveKeys = Object.keys(props.character.defense.saveAbilityScore);

  saveKeys.forEach((save) => {
    if (
      props.character.introduction.class[0].gestalt[0].saves[save]
      || props.character.introduction.class[0].gestalt[1].saves[save]
    ) {
      totalSaves[save] += 2;
      totalSaves[save] += Math.floor(level.value / 2);
    } else {
      totalSaves[save] += Math.floor(level.value / 3);
    }
    totalSaves[save] += abilityMods.value[props.character.defense.saveAbilityScore[save]];
    totalSaves[save] += resistanceBonus + toggleBonus;
  });
  return totalSaves;
});

// OFFENSE

const melee = computed(() => {
  let twoHanding = 0;

  if (toggle['two handing'].active) twoHanding = 1;

  let tempAttack = Math.max(abilityMods.value.dexterity, abilityMods.value.strength) + baseAtk.value
    + props.character.introduction.sizeMod;
  let tempDamage = Math.floor(abilityMods.value.strength * (1 + (0.5 * twoHanding)));

  let tempDexDamage = Math.floor(abilityMods.value.dexterity);

  if (toggle['power attack'].active) {
    tempAttack += -(Math.floor(baseAtk.value / 4) + 1);
    // eslint-disable-next-line no-unused-vars
    tempDamage += (Math.floor(baseAtk.value / 4) + 1) * (2 + twoHanding);
    tempDexDamage += (Math.floor(baseAtk.value / 4) + 1) * 2;
  }

  const dieSizeMod = sizeModifier.value;

  let holy;

  if (toggle.holy.active) {
    holy = ' plus 2d6';
  } else {
    holy = '';
  }

  toggleKeys.forEach((button) => {
    if ((typeof toggle[button].bonus !== 'undefined') && 'weaponDamage' in toggle[button].bonus && toggle[button].active) {
      tempDexDamage += toggle[button].bonus.weaponDamage;
      tempDamage += toggle[button].bonus.weaponDamage;
    }
    if ((typeof toggle[button].bonus !== 'undefined') && 'attackRolls' in toggle[button].bonus && toggle[button].active) {
      tempAttack += toggle[button].bonus.attackRolls;
    }
  });

  const option = {
    name: 'Stella\'s Holy Cutlass',
    attack: tempAttack + 4,
    dieCount: 1,
    dieSize: 6 - dieSizeMod,
    damage: tempDexDamage + 2,
    critRange: 15,
  };

  return `${option.name} ${formatBonus(option.attack)} \
      (${option.dieCount}d${option.dieSize}${formatBonus(option.damage)}/${option.critRange}-20${holy})`;
});
const ranged = computed(() => {
  let tempAttack = Math.max(abilityMods.value.dexterity, abilityMods.value.strength) + baseAtk.value
    + props.character.introduction.sizeMod;
  let tempDamage = abilityMods.value.strength;

  if (toggle['power attack'].active) {
    tempAttack += -(Math.floor(baseAtk.value / 4) + 1);
    tempDamage += (Math.floor(baseAtk.value / 4) + 1) * 2;
  }

  const dieSizeMod = sizeModifier.value;

  toggleKeys.forEach((button) => {
    if ((typeof toggle[button].bonus !== 'undefined') && 'weaponDamage' in toggle[button].bonus && toggle[button].active) {
      tempDamage += toggle[button].bonus.weaponDamage;
    }
    if ((typeof toggle[button].bonus !== 'undefined') && 'attackRolls' in toggle[button].bonus && toggle[button].active) {
      tempAttack += toggle[button].bonus.attackRolls;
    }
  });

  const option = {
    name: 'Furies\' Flaming Burst Longbow',
    attack: tempAttack + 4,
    dieCount: 1,
    dieSize: 8 - dieSizeMod,
    damage: tempDamage + 2,
    critRange: 20,
  };

  return `${option.name} ${formatBonus(option.attack)} \
      (${option.dieCount}d${option.dieSize}${formatBonus(option.damage)})`;
});

const space = computed(() => '5');

const reach = computed(() => '5');

// const specialAttacks = computed(() => ({
//   maxReservoir: Math.floor(character.introduction.class[0].level / 2) + 3,
//   currResevoir: Math.floor(character.introduction.class[0].level / 2) + 3,
// }));

// TACTICS

function formatList(myObj, myKeys) {
  let list = '';

  let keys;

  if (arguments.length === 2) {
    keys = myKeys;
  } else {
    keys = Object.keys(myObj);
  }

  if (Array.isArray(myObj)) {
    const arrSize = myObj.length;
    for (let index = 0; index < arrSize; index += 1) {
      if (typeof myObj[index] !== 'undefined') {
        if (typeof myObj[index] === 'object' && myObj[index] !== null) {
          list += formatList(myObj[index], keys);

          if (index !== arrSize - 1) {
            list += ', ';
          }
        } else {
          list += myObj[index];

          if (index !== arrSize - 1) {
            list += ' ';
          }
        }
      }
    }
  } else {
    const size = keys.length;

    for (let index = 0; index < size; index += 1) {
      if (keys[index] !== 'undefined') {
        if (typeof myObj[keys[index]] === 'object' && myObj[keys[index]][1] !== null) {
          list += formatList(myObj[keys[index]]);

          if (index !== size - 1) list += ' ';
        } else {
          list += myObj[keys[index]];
        }
        if (index !== size - 1) list += ' ';
      } else {
        list += 'undefined?';
      }
    }
  }
  return list;
}

function formatSpecial(myObj, myKeys) {
  let list = '';

  let keys;

  if (arguments.length === 2) {
    keys = myKeys;
  } else {
    keys = Object.keys(myObj);
  }

  let i = 0;

  if (Array.isArray(myObj)) {
    const arrSize = keys.length;

    for (let index = 0; index < arrSize; index += 1) {
      if (typeof myObj[index] !== 'undefined') {
        if (typeof myObj[index] === 'object' && myObj[index] !== null) {
          list += formatSpecial(myObj[index], keys);
          if (index !== arrSize - 1) {
            list += ', ';
          }
        } else {
          list += myObj[index];

          if (index !== arrSize - 1) {
            list += ', ';
          }
        }
      }
    }
  } else {
    const size = keys.length;

    for (let index = 0; index < size; index += 1) {
      if (i !== 0) {
        list += ' (';
      }
      i = 1;

      if (keys[index] !== 'undefined') {
        if (typeof myObj[keys[index]] === 'object' && myObj[keys[index]][1] !== null) {
          list += formatSpecial(myObj[keys[index]]);
          list += ')';

          if (index !== size - 1) list += ', ';
        } else {
          list += myObj[keys[index]];
        }
        if (index === size - 1) {
          if (typeof myObj.usesPerDay !== 'undefined') {
            list += '/day';
          }

          list += ')';
        }

        if (index !== size - 1) list += '';
      } else {
        list += 'undefined?';
      }
    }
  }
  return list;
}

function formatSkills(myObj) {
  let list = '';

  const keys = Object.keys(myObj);

  const arrSize = keys.length;

  let comparer = 0;

  for (let index = 0; index < arrSize; index += 1) {
    if (keys[index] === 'knowledge') {
      list += `${keys[index]} (${formatSkills(myObj[keys[index]])})`;
      comparer += 1;
    } else if (myObj.name === 'knowledge' && myObj[keys[index]] !== myObj[keys[0]]) {
      comparer += 1;
    } else {
      list += `${keys[index]} `;
      list += formatBonus(myObj[keys[index]]);
    }
    if (index !== arrSize - 1) list += ', ';
  }

  if (comparer === 0) {
    return formatBonus(myObj[keys[0]]);
  }
  return list;
}

function formatArray(myArray) {
  let list = '';

  myArray.forEach((item, idx) => {
    list += item;
    if (idx !== myArray.length - 1) list += ', ';
  });

  return list;
}

// function closeInfo() {
//   spellName = '';
// }

// function changeSpell(value) {
//   spellName.value = value;
// }
//
// function changeInfo(value) {
//   abilityName.value = value;
// }

function bgColor(duration) {
  let color;

  if (duration === 0) {
    color = 'rgba(0,0,0,.25)';
  }
  if (duration === 1) {
    color = 'rgba(255,0,0,.25)';
  }
  if (duration === 2) {
    color = 'rgba(0,0,255,.25)';
  }

  return color;
}

</script>

<style scoped lang="scss">

#page {
  //display: flex;
  //flex-direction: row;
  text-shadow: 2px 2px 4px #000000;
  color: white;
  text-align: left;
  align-items: baseline;
  padding: 1vmin;
  //background-image: url("../assets/Immogen_single.png");
  background-repeat: no-repeat;

  background-size: 100vmax;
  background-position: 50% 50%;
  background-attachment: fixed;
  justify-content: space-between;

}

#name {
  font-size: 5vmin;
}

hr {
  width: 100%
}

p {
  margin: .5vmin;
}

.capitalize {
  text-transform: capitalize;
}

#stat-block {

  padding: 1vmin;

  display: flex;
  flex-direction: column;
  min-width: 50vw;
  background: rgba(0, 0, 0, 0.5);

}

#info {

  display: flex;
  flex-direction: column;
  min-width: 30vw;

}

#buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}

.toggle {

  display: flex;
  background-color: rgba(0, 0, 0, .25);

  margin: 1vmin;
  padding: 1vmin;
  align-items: center;

}

.toggle {
  font-size: unset;
}

@media only screen and (max-width: 1100px) {
  /* For mobile phones: */
  [id*="page"] {
    flex-wrap: wrap;
  }

  [id*="sheet"] {
    width: 100%;
  }

  [id*="info"] {
    width: 100%;
  }
}

span {
  width: clamp(16px, 100%, 50vmin);
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
