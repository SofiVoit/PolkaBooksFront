<template>
  <div>
    <table class="table tablesorter" :class="tableClass">
      <thead :class="theadClasses">
        <tr>
          <slot name="columns" :columns="columns">
            <th v-for="column in columns" :key="column">{{ column }}</th>
          </slot>
        </tr>
      </thead>
      <tbody v-if="!load" :class="tbodyClasses">
        <tr v-for="(item, index) in data" :key="index">
          <slot :item="item">
            <td v-for="column in columns" :key="column">
              <template v-if="hasValue(item, column)">
                {{ itemValue(item, column) }}
              </template>
            </td>
          </slot>
        </tr>
      </tbody>
    </table>
    <div v-if="load" style="text-align: center;">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "base-table",
  props: {
    load: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default: () => [],
      description: "Table columns",
    },
    data: {
      type: Array,
      default: () => [],
      description: "Table data",
    },
    type: {
      type: String, // striped | hover
      default: "",
      description: "Whether table is striped or hover type",
    },
    theadClasses: {
      type: String,
      default: "",
      description: "<thead> css classes",
    },
    tbodyClasses: {
      type: String,
      default: "",
      description: "<tbody> css classes",
    },
  },
  computed: {
    tableClass() {
      return this.type && `table-${this.type}`;
    },
    colsWithValue() {
      return (row) => {
        return this.columns.filter((column) => this.hasValue(row, column));
      };
    },
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== "undefined";
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    },
  },
};
</script>
<style scoped>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 84px;
  height: 84px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #2DCE8B;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #2DCE8B transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}</style>
