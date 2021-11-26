<template>
  <div id="page">
    <div id="search">

      <p>Select a Source Table:</p>

      <select v-model="searchEntry.table">
        <option disabled value="">Please select one</option>
        <option>item</option>
        <option>spell</option>
        <option>bestiary</option>
        <option>feat</option>
      </select>

      <p>Search by Name: {{ nameSearch }}</p>

      <input v-model="nameSearch" placeholder="search for Entries by Name Here"/>

      <p>Search by Full-Text: {{ descSearch }}</p>

      <input v-model="descSearch" placeholder="search for Entries by Description Here"/>

      <p>Filter by Full-Text: {{ descFilter }}</p>

      <input v-model="descFilter" placeholder="search for Entries by Description Here"/>
      <br>

      <div id="search-results" v-if="nameSearch !== '' || descSearch !== ''">

        <p>Results Shown: {{ infoRef ? infoRef.length : 0}}</p>
        <br>

        <table>
          <tr>
            <th>Name</th>

            <th v-if="searchEntry.table === 'bestiary'">CR</th>
            <th v-if="searchEntry.table === 'item'">CL</th>
            <th v-if="searchEntry.table === 'spell'">SLA Level</th>

            <th>Source</th>

          </tr>

          <tr v-for="text in infoRef" v-bind:key="text.id"
              v-on:click="makeTab(text.name, text.id,
              searchEntry.table, text.source, text.alternatenameform, text.third_party)">

            <td class="entry-name">          <span v-bind:entry-name="text.name">
                                                 {{ text.name }}<sup
              v-if="text.alternatenameform"> ({{ text.alternatenameform }})</sup>
            </span>
            </td>
            <td class="center" v-if="searchEntry.table === 'bestiary'">{{ text.cr }}</td>
            <td class="center" v-if="searchEntry.table === 'item'">{{ text.cl }}</td>
            <td class="center" v-if="searchEntry.table === 'spell'">{{ text.SLA_Level }}</td>
            <td id="source">{{ text.source }}<sup
              v-if="searchEntry.table === 'bestiary' && text.third_party === 1">3pp</sup></td>

          </tr>
        </table>

        <button @click="offset += 30"
                :disabled="offset + 30 > (infoRef ? infoRef.length : 0) + offset">Next</button>
        <button @click="offset -= 30" :disabled="offset - 1 < 0">Back</button>

      </div>

    </div>

    <div id="stat-block">

      <div id="nav">

      </div>
      <div id="content">
        <div id="dynamic-component-demo" class="demo">
          <button
            v-for="tab in tabs"
            v-bind:key="tab.entryID"
            v-bind:class="['tab-button', { active: currentTab.name === tab.name
              && currentTab.entryID === tab.entryID,
              'third-party': tab.thirdParty === 1}]"
            v-on:click="currentTab = tab; entry = tab;"
          >
            {{ tab.name }}<sup v-if="tab.alternateNameForm">{{ tab.alternateNameForm }}</sup>
          </button>

        </div>

        <div id="info-sheet" v-show="tabs.length !== 0">
          <FullText :v-model="currentTab"
                    @closeSpell="closeInfo"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import FullText from 'src/components/FullText';
import {
  computed, ref, reactive,
} from 'vue';
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const entry = reactive({
  entryID: 0,
  table: '',
});
const searchEntry = reactive({
  entryID: 0,
  table: '',
});
const nameSearch = ref('');
const descSearch = ref('');
const descFilter = ref('');
const offset = ref(0);
const tabs = ref([]);
const currentTab = reactive({});

const infoRef = ref([]);

function loadInfo() {
  let order = ['name'];
  let select = ['id', 'name', 'fulltext', 'source'];

  if (searchEntry.table === 'bestiary') {
    order = ['cr.desc.nullslast'];
    select = ['id', 'name', 'cr', 'ac', 'fulltext', 'alignment', 'third_party', 'source', 'alternatenameform'];
  }
  if (searchEntry.table === 'item') {
    order = ['cl.desc.nullslast'];
    select = ['id', 'name', 'fulltext', 'source', 'cl'];
  }

  if (searchEntry.table === 'spell') {
    order = ['SLA_Level.desc.nullslast'];
    select = ['id', 'name', 'fulltext', 'source', 'SLA_Level'];
  }

  let filter = '';
  if (descFilter.value === '') {
    filter = '';
  } else {
    filter = `*${descFilter.value}*`;
  }

  return api.get(`/${searchEntry.table}?limit=30
  &select=${select}
  &offset=${offset.value}
  &name.ilike.*${nameSearch.value}*
  &fulltext.ilike.*${descSearch.value}*
    &fulltext.not.ilike.${filter}
    &order=${order}
  `)
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

loadInfo()
  .then((response) => {
    infoRef.value = response.data;
  });

// eslint-disable-next-line no-unused-vars
const pData = computed(() => {
  const resultLength = infoRef.value.length;

  const tempResult = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < resultLength; i++) {
    tempResult.push(infoRef.value[i].cr);
  }

  return tempResult;
});

// eslint-disable-next-line no-unused-vars
function onError(err) {
  return console.log(err);
}

function makeTab(name, entryId, table, source, alternateNameForm, thirdParty) {
  const newTab = {
    name,
    entryID: entryId,
    table,
    source,
    alternateNameForm,
    thirdParty,
  };

  const contains = this.tabs.some((elem) => JSON.stringify(newTab) === JSON.stringify(elem));
  if (!contains) {
    this.tabs.push(newTab);
  }

  this.currentTab = newTab;
}

function closeInfo(tab) {
  const arrayLength = this.tabs.length;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arrayLength; i++) {
    const word = this.tabs[i];

    if ((word.name === tab.name)
      && (word.entryID === tab.entryID)
      && (word.table === tab.table)) {
      this.tabs.splice(i, 1);

      this.currentTab = this.tabs[i - 1];
    }
  }
}

</script>

<style scoped lang="scss">

p {
  margin: 0;
}

.stat-block {
  background-blend-mode: color;
  //border: solid 10px rgba(0, 0, 0, .5);

}

#content {
  padding: 1vmin;
}

#search {
  display: flex;
  flex-direction: column;
  min-width: 20rem;

}

#search-results {
  display: flex;
  flex-direction: column;

}

#entry-name:hover {
  background: rgba(0, 0, 0, .5);
}

#page {
  display: flex;
  justify-content: space-between;
  align-content: center;

}

input, select {
  margin: 1vmin 0 1vmin 0;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [id*="page"] {
    flex-wrap: wrap;
  }

  [id*="search"] {
    width: 100%;

  }
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #cccccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;

  &:hover {
    background: #e0e0e0;
  }

  &.active {
    background: #e0e0e0;
  }

  &.third-party {
    background-color: rgba(255, 200, 200, 1);
  }

  &.third-party.active {
    background-color: rgba(255, 164, 164, 1);

  }
}

.tab {
  border: 1px solid #ccc;
  padding: 10px;
}

#search-results tr:nth-child(even) {
  background-color: rgba(0, 0, 0, .25);
}

#search-results tr:hover {
  background-color: rgb(159, 149, 111);
}

#search-results td {
  display: table-cell;
  height: 100%;

}

#source {
  display: block;
  text-align: right;
}

.center {
  display: block;
  text-align: center;
}

</style>
