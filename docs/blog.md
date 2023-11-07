<script setup>
    import ArticleCard from './components/ArticleCard.vue'

    import data from '../data.json'
</script>

<div v-for="(article, index) in data" :key="index">
    <ArticleCard :title="article.title"
    :excerpt="article.excerpt" :image="article.
    image" :author="article.Author" :href="article.
    path" :date="article.Updated" :content="article?.content" />
</div>