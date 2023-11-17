<template>
    <div class="home">
        <div class="home-body">
            <div class="container">
                <h1 class="title">Hey, I'm {{ homes.name || "Novrizal" }}.</h1>
                <p class="subtitle">
                    {{ homes.subtitle }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { server } from "../utils/helper"
export default {
  data() {
    return {
        homes: {},
    };
  },
  mounted() {
    this.fetchHome();
  },
  methods: {
    fetchHome() {
        axios.get(`${server.baseURL}/home`).then((data) => {
            this.homes = data.data[0]
        });
    },
  },
};
</script>

<style>
p.subtitle {
    font-size: 1.2rem;
    border-top: none;
}
</style>