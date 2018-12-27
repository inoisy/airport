<template>
  <div>
    <v-container>
      <v-layout class="main" wrap>
        <nuxt-link to="/tablo/departure" class="ml-0 xs12 md6 flex">Табло вылета</nuxt-link>
        <nuxt-link to="/tablo/arrival" class="xs12 md6 flex">Табло прилета</nuxt-link>
      </v-layout>

      <v-text-field v-model="search" append-icon="search" label="Поиск" single-line hide-details></v-text-field>
      <v-data-table
        :headers="headers"
        :items="items"
        :rows-per-page-items="[ 25, 50, 100, { text: '$vuetify.dataIterator.rowsPerPageAll', value: -1 } ]"
        :search="search"
        item-key="i_id"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td class="pr-0" style="text-decoration: line-through;">{{props.item.timePrev}}</td>
          <td class="title text-xs-center pl-0">{{props.item.displayedTime}}</td>
          <td class="headline text-no-wrap">{{props.item.displayedCity}}</td>
          <td class>{{ props.item.fullNumber}}</td>
          <td class="px-1 text-xs-center">{{ props.item.term }}</td>
          <td class>{{ props.item.vip_status }}</td>
        </template>
        <v-alert
          slot="no-results"
          :value="true"
          color="error"
          icon="warning"
        >Вы искали"{{ search }}". Ничего не найдено.</v-alert>
      </v-data-table>
    </v-container>
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
}
.main {
  min-height: 30vh;
  display: flex;
  align-items: center;
}
.main a {
  font-weight: 700;
  font-size: 4rem;
}
.nuxt-link-exact-active {
  color: #ffac02;
}
</style>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  data() {
    return {
      search: ""
    };
  },

  components: {
    Logo,
    VuetifyLogo
  },
  computed: {
    direction() {
      return this.$store.state.direction;
    },
    items() {
      return this.$store.state.items;
    },
    searchItems() {
      return this.$store.state.items.map(item => item.fullNumber);
    },
    headers() {
      return [
        { text: "", sortable: false, value: "t_otpr" },
        {
          text:
            this.$route.params.direction === "departure"
              ? "Время вылета"
              : "Время посадки",
          align: "center",
          value:
            this.$route.params.direction === "departure" ? "t_otpr" : "t_st"
        },
        {
          text: "Пункт назначения",
          value:
            this.$route.params.direction === "departure"
              ? "mar2.description"
              : "mar1.description"
        },
        { text: "Номер борта", value: "fullNumber" },
        { text: "Выход", value: "term_gate" },
        { text: "Статус", value: "vip_status" }
      ];
    }
  },

  methods: {},
  validate({ params, query, store }) {
    if (params.direction === "arrival" || params.direction === "departure")
      return true;
    else return false;
    // if the params are valid
    // will stop Nuxt.js to render the route and display the error page
  },
  async fetch(ctx) {
    // console.log(ctx.route.params.direction);
    const data = require(`~/assets/api/${ctx.route.params.direction}.json`);
    const modified = data.items.map(item => {
      item.fullNumber = item.co.code + " " + item.flt;

      item.displayedCity =
        ctx.route.params.direction === "departure"
          ? item.mar2.description
          : item.mar1.description;
      item.displayedTime =
        ctx.route.params.direction === "departure"
          ? item.t_otpr
            ? ctx.$moment(item.t_otpr).format("HH:mm")
            : ctx.$moment(item.t_st).format("HH:mm")
          : item.t_at
          ? ctx.$moment(item.t_at).format("HH:mm")
          : ctx.$moment(item.t_st).format("HH:mm");

      if (ctx.route.params.direction === "departure") {
        if (
          (ctx.$moment(item.t_otpr).format("X") -
            ctx.$moment(item.t_st).format("X")) /
            60 >
          10
        ) {
          item.timePrev = item.t_st
            ? ctx.$moment(item.t_st).format("HH:mm")
            : "";
        }
      } else {
        if (
          (ctx.$moment(item.t_at).format("X") -
            ctx.$moment(item.t_st).format("X")) /
            60 >
          10
        ) {
          item.timePrev = item.t_st
            ? ctx.$moment(item.t_st).format("HH:mm")
            : "";
        }
      }
      return item;
    });
    ctx.store.commit("items", modified);
  }
};
</script>
