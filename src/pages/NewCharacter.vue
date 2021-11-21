<template>

  <q-page class="q-pa-md">
    <q-form class="q-gutter-md" style="min-width: 300px; max-width: 375px"
            ref="myForm" @submit.prevent.stop="onSubmit"
            @reset.prevent.stop="onReset">

      <q-input filled name="name" v-model="name"
               label="Name *"/>

      <q-select filled name="class" v-model="charClass" :options="classRef"
                label="Class *"/>

      <q-select filled name="heritage" v-model="heritage" :options="heritageNames"
                label="Heritage *"/>

      <q-list dense>
        <q-item v-for="(score, name, index) in pointBuy" :key="index">
          <q-item-section style="max-width: 80px">
            <q-badge class="text-capitalize" color="primary">
              {{ name }}
            </q-badge>
          </q-item-section>
          <q-item-section>
            <q-slider
            :name="pointBuy[index]"
            v-model="pointBuy[name]"
            :min="7"
            :max="18"
            :step="1"
            class="test-slider"
            snap
            label
            />
          </q-item-section>
          <q-radio v-if="radioToggle" style="max-width: 80px" :val="name"
                   v-model="radioRef"/>
          <q-item v-else>{{ heritageBonus[name] }}</q-item>
        </q-item>
        <q-item>
          <q-slider
            v-model="pointsSpent"
            :color="pointsSpentColor"
            readonly
            label
            :label-value="pointsSpent"
            :min="-12"
            :max="25"
          />
        </q-item>
      </q-list>

      <q-list class="row">
        <q-item v-for="(score, name, index) in abilityScores" :key="index">
          <q-item-section>
            <q-item-label class="text-capitalize" center overline>
              {{ name.substring(0, 3) }}
            </q-item-label>
            {{ score }}
          </q-item-section>
        </q-item>
      </q-list>

      <q-toggle v-model="accept" label="I accept these choices"/>

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat charClass="q-ml-sm"/>
      </div>

    </q-form>

    <div class="q-pa-md">
      <q-ajax-bar
        ref="bar"
        position="bottom"
        color="accent"
        size="10px"
      />
    </div>
  </q-page>
</template>

<script>
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';
import {
  computed, ref, reactive,
} from 'vue';

export default {
  name: 'NewCharacter',
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const charClass = ref(null);
    const heritage = ref(null);

    const accept = ref(false);
    const myForm = ref(null);

    const pointBuy = reactive({
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    });

    function loadClass() {
      return api.get('/class?select=name')
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

    function loadHeritage() {
      return api.get('/heritage?select=*')
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

    const pointsSpent = computed(() => {
      let pointSum = 0;
      Object.keys(pointBuy)
        .forEach((key) => {
          if (pointBuy[key] > 10) {
            pointSum += Math.round(((pointBuy[key] - 10) ** 2) / 4) + 1;
          } else if (pointBuy[key] < 10) {
            pointSum += Math.round(((pointBuy[key] - 10) ** 2) / 4) * -1;
          }
        });
      return pointSum;
    });

    const pointsSpentColor = computed(() => (pointsSpent.value > 25 ? 'red' : 'brown-10'));

    const heritageRef = reactive({});
    const heritageNames = ref(null);

    const classRef = ref(null);

    loadClass()
      .then((response) => {
        classRef.value = response.map((a) => a.name);
      });

    loadHeritage()
      .then((response) => {
        heritageNames.value = response.map((a) => a.name);
      });

    loadHeritage()
      .then((response) => {
        response.forEach((row) => {
          heritageRef[row.name] = row;
        });
      });

    const radioToggle = computed(() => (heritageRef[heritage.value]
      ? heritageRef[heritage.value].choice : false));

    const radioRef = ref(null);

    const abilityScoreNames = ['strength',
      'dexterity',
      'constitution',
      'intelligence',
      'wisdom',
      'charisma',
    ];

    const heritageBonus = computed(() => {
      const holder = reactive({});
      abilityScoreNames.forEach((ability) => {
        holder[ability] = (heritageRef[heritage.value]
          ? heritageRef[heritage.value][ability] : 0);
      });
      return holder;
    });

    const abilityScores = computed(() => {
      const holder = reactive({});
      abilityScoreNames.forEach((ability) => {
        holder[ability] = heritageBonus.value[ability] + pointBuy[ability]
          + (ability === radioRef.value && radioToggle.value ? 2 : 0);
      });
      return holder;
    });

    const sliderMax = computed(() => 25 - pointsSpent.value);

    function pushData() {
      api.post('/character', {
        name: name.value,
        class: charClass.value,
        strength: abilityScores.value.strength,
        dexterity: abilityScores.value.dexterity,
        constitution: abilityScores.value.constitution,
        intelligence: abilityScores.value.intelligence,
        wisdom: abilityScores.value.wisdom,
        charisma: abilityScores.value.charisma,
        point_buy: pointsSpent.value,
        heritage: heritage.value,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return {
      $q,

      name,
      charClass,
      heritage,
      heritageNames,

      classRef,
      heritageRef,

      myForm,
      accept,

      pointBuy,
      pointsSpent,
      pointsSpentColor,

      abilityScores,
      heritageBonus,

      radioToggle,
      radioRef,

      sliderMax,

      onSubmit() {
        if (accept.value === true) {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted',
          });
          pushData();
        } else {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
          });
        }
      },
      onReset() {
        myForm.value.resetValidation();
      },
    };
  },
};
</script>
<style lang="scss">

.test-slider {
  width: (100%/11*11);
}
</style>
