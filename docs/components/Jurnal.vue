<template>
  <div>
    <h1>{{ jurnals.judul }}</h1>

    <div class="entry">
      <h2>{{ jurnals.pengantar?.subjudul }}</h2>
      <p>{{ jurnals.pengantar?.konten }}</p>
    </div>

    <div class="entry" v-for="bagian in jurnals.bagianJurnal">
      <h2>{{ bagian.judul }}</h2>
      <p>{{ bagian.isi }}</p>
    </div>

    <div class="penutup">
      <h2>Penutup</h2>
      <p>{{ jurnals.penutup }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { server } from "../utils/helper";

export default {
  data() {
    return {
      jurnals: {},
    };
  },
  mounted() {
    this.fetchJurnal();
  },
  methods: {
    fetchJurnal() {
      axios.get(`${server.baseURL}/jurnal`).then((data) => {
        this.jurnals = data.data[0];
      });
    },
  },
};
</script>
