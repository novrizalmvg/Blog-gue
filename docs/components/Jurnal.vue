<template>
  <div>
    <!-- Konten Jurnal -->
    <div v-if="!isLoading">
      <h1>{{ jurnals.judul }}</h1>
      
      <!-- Pengantar -->
      <div class="entry">
        <h2>{{ jurnals.pengantar?.subjudul }}</h2>
        <p>{{ jurnals.pengantar?.konten }}</p>
      </div>

      <!-- Bagian Jurnal -->
      <div class="entry" v-for="bagian in jurnals.bagianJurnal" :key="bagian.id">
        <h2>{{ bagian.judul }}</h2>
        <p>{{ bagian.isi }}</p>
      </div>

      <!-- Penutup -->
      <div class="penutup">
        <h2>Penutup</h2>
        <p>{{ jurnals.penutup }}</p>
      </div>
    </div>

    <!-- Loading -->
    <Loading v-if="isLoading" :isLoading="isLoading" />

    <!-- Daftar Post -->
    <div v-if="!isLoading">
      <div v-for="post in searchResults" :key="post._id">
        <!-- Card Post -->
        <a :href="path + post._id">
          <div class="card">
            <!-- Konten Card -->
            <!-- ... -->
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { server } from "../utils/helper";
import Loading from "./Loading.vue";

export default {
  components: {
    Loading
  },
  data() {
    return {
      isLoading: true, // Mengatur isLoading ke true secara awal
      jurnals: {},
      searchResults: [],
      path: "/path/to/", // Ganti ini sesuai path yang kamu gunakan
    };
  },
  mounted() {
    this.fetchJurnal();
    // Hapus pemanggilan fungsi fetchPost
  },
  methods: {
    fetchJurnal() {
      axios.get(`${server.baseURL}/jurnal?keyword=`).then((data) => {
        this.jurnals = data.data[0];
        this.isLoading = false; // Mengatur isLoading kembali ke false setelah menerima data
      });
    },
    // Fungsi lain yang mungkin ada
  },
};
</script>