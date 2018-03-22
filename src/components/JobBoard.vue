<template>
  <div id="job-board">
    <div class="flex-row">
      <h1>Job Board</h1>
      <router-link :to="{ name: 'NewJob' }">Post a job</router-link>
    </div>
    <hr>
    <ul>
      <li v-for="job in jobs">
        <h2>{{ job.title }}</h2>
        <h3>{{ job.company }}</h3>
        <p>{{ job.description }}</p>
        <p>Posted on {{ job.createdOn }}</p>

        <details>
          <summary>View Contact Information</summary>

          <p>{{ job.contactName }}</p>
          <p>{{ job.contactEmail }}</p>
        </details>
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  name: 'JobBoard',

  data () {
    return {
      jobs: [
        {
          title: 'VueJS Developer',
          company: 'Startup Stir-fry',
          description: 'We\'re looking for a rockstar VueJS developer to help us create awesome websites',
          contactName: 'Nick Crawford',
          contactEmail: 'ncrawfo7@kent.edu',
          externalLink: 'https://hacksu.com',
          createdOn: new Date(),
        },
        {
          title: 'VueJS Developer',
          company: 'Startup Stir-fry',
          description: 'We\'re looking for a rockstar VueJS developer to help us create awesome websites',
          contactName: 'Nick Crawford',
          contactEmail: 'ncrawfo7@kent.edu',
          externalLink: 'https://hacksu.com',
          createdOn: new Date(),
        }
      ],
    }
  }
}
</script>

<style lang="css" scoped>

li {
  display: block;
  text-align: left;
  border-bottom: 1px solid #EAEAEA;
  padding: 1em 3em;
  background-color: #FFF;
  margin: 0;
}

li:nth-child(2n) {
  background-color: #FAFAFA;
}

.flex-row {
  display: flex;
  justify-content: center;
  align-items: baseline;
}

.flex-row h1 {
  margin: 0 auto;
}
</style>