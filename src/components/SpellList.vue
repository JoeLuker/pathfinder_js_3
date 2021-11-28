<template>

  <div v-show="caster.spells">

    <b v-on:click="toggleKey = !toggleKey">{{ caster.name }} Spells
      <span v-if="caster.casting === 'spontaneous' ">Known</span>
      <span v-if="caster.casting === 'prepared' ">Prepared</span>
      (CL {{ caster.casterLevel }})<span v-show="!toggleKey"> ...</span></b>

    <div class="spells" v-for="(spellList, level) in caster.spells"
         v-bind:key="level">

      <div v-show="toggleKey">
        <b>
          {{ level }}
          <span v-if="level !== 'Cantrips'
          && level !== 'Orisons'"> ({{ spellList.slots }}/day)</span>
        </b>
        <span>—</span>
        <i v-for="(spell, index) in spellList.prepared" v-bind:key="index">
          <span v-bind:style="{ color: fuck}"
                v-on:click="emit('spellSubmit', spell)">{{ spell }}</span>

          <span v-if="index !== spellList.prepared.length - 1">, </span>

        </i>

        <span v-if="typeof caster.patronSpells !== 'undefined'">
        <i class="patron" v-show="caster.patronSpells[level]"> :
          <span @click="emit('spellSubmit', caster.patronSpells[level])">
            {{ caster.patronSpells[level] }}
          </span>
        </i>
        </span>
        <span v-if="typeof caster.mysterySpells !== 'undefined'">
        <i v-for="(mystery, index) in caster.mysterySpells" class="mystery"
           v-show="mystery[level]"
           :key="index"> :
          <span @click="emit('spellSubmit', mystery[level])">
            {{ mystery[level] }}
          </span>
        </i>
        </span>
      </div>

    </div>

  </div>

</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import { useQuasar } from 'quasar';
import { api } from 'boot/axios';

const $q = useQuasar();
const toggleKey = ref(true);
const fuck = ref('white');

defineProps({
  caster: Object,
});

const emit = defineEmits(['spellSubmit']);

const spellColorList = ref([]);

function spellColor(value) {
  return api.get(`/spell?limit=1&name.ilike.${value}`)
    .then((response) => response.data)
    .catch(() => {
      $q.notify({
        color: 'negative',
        position: 'top',
        message: 'Loading failed',
        icon: 'report_problem',
      });
    });
}

spellColor()
  .then((response) => {
    spellColorList.value = response.data;
    if (spellColorList.value !== undefined
      && spellColorList.value[0] !== undefined
      && spellColorList.value[0].school === 'enchantment') {
      return 'purple';
    }
    return 'green';
  });

</script>

<style scoped>

.spells {
  text-indent: 1rem;
  margin: .5vmin;
}

.patron {
  color: #31CCEC;
}

.mystery {
  color: #cdaeff;
}

</style>
