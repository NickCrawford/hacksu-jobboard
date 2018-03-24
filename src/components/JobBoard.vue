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
        <router-link :to="{ name: 'EditJob', params: { id: job.id }}">Edit</router-link> 
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
      jobs: [],
    }
  },
  created() {
    this.$root.db.collection("jobs")
    .get()
    .then((querySnapshot) => {
        var newJobsArray = [];
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            var newJob = doc.data();
            newJob.id = doc.id;
            newJobsArray.push(newJob);
        });
        this.jobs = newJobsArray;
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
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