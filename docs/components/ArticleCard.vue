<template>
  <div v-for="post in posts" :key="post._id">
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
  <Loading :isLoading=isLoading />
</template>

<script>
import { server } from "../utils/helper";
import axios from "axios";
import Loading from "./Loading.vue";
export default {
  components: {
    Loading
  },
  data() {
    return {
      posts: [],
      path:"",
      isLoading: true,
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    truncateText(text, length) {
      if (text.length > length) {
        return text.substring(0, length) + "...";
      }
      return text;
    },
    fetchPosts() {

      axios.get(`${server.baseURL}/blog/posts?keyword`).then((data) => {
        this.path = "articles/article.html?id=";
        this.isLoading = false;
        this.posts = data.data;
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
</style>
