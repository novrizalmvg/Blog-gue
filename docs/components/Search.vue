<template>
  <div>
    <div class="search-container">
      <div class="search-input-container">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Cari Artikel..."
          class="search-input"
        />
      </div>

      <button @click="search" class="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          class="search-icon"
        >
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path
            d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
        </svg>
      </button>
    </div>
    <div v-for="post in searchResults" :key="post._id">
      <a :href="path + post._id">
        <div class="card">
          <div class="flex">
            <div class="media">
              <img :src="post.image" :alt="post.title" />
            </div>
            <div class="details">
              <h2 class="title">{{ post.title }}</h2>
              <p class="excerpt">{{ truncateText(post.description, 50) }}</p>
              <div class="author">
                <div>
                  <h3 class="name">{{ post.author }}</h3>
                  <p class="date">{{ post.date_posted }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { server } from "../utils/helper";
export default {
  data() {
    return {
      searchQuery: "",
      searchResults: [],
    };
  },
  methods: {
    truncateText(text, length) {
      if (text.length > length) {
        return text.substring(0, length) + "...";
      }
      return text;
    },
    search() {
      axios
        .get(`${server.baseURL}/blog/posts?keyword=` + this.searchQuery)
        .then((data) => {
          this.searchResults = data.data;
        });
    },
  },
};
</script>
<style scoped>
.card {
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  margin-bottom: 1.5rem;
  overflow: hidden;
  width: 100%;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
  transition: ease-in-out 0.2s all;
}

.flex {
  display: flex;
}

.media {
  width: 45%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.details {
  margin-left: 1.2rem;
}

.title {
  border-top: none;
  margin: 0 0;
}

.name {
  margin: 0 0;
  font-size: 0.7rem;
  color: #999;
}

/* Gaya CSS untuk container utama */
.search-container {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

/* Gaya CSS untuk container input */
.search-input-container {
  flex: 1; /* Membuat input mengisi sisa ruang yang tersedia */
  position: relative;
}

/* Gaya CSS untuk input pencarian */
.search-input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 40px 0 0 40px;
  margin-right: 8px;
  width: 100%; /* Biarkan input mengisi sisa ruang yang tersedia */
  border-right: none;
  padding-left: 20px;
}

/* Gaya CSS untuk tombol pencarian */
.search-button {
  padding: 8px;
  background-color: #f8f8f8;
  border: 1px solid #d3d3d3;
  border-radius: 0 40px 40px 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 60px;
}

/* Gaya CSS untuk ikon dalam tombol pencarian */
.search-icon {
  fill: #333;
}
</style>
