<template>
  <div id="edit-job">
    <h1>Edit Job Posting</h1>

    <form v-on:submit.prevent="submitJob">
      <label for="title">Job Title</label>
      <input type="text" name="title" v-model="newJob.title" />

      <label for="company">Company</label>
      <input type="text" name="company" v-model="newJob.company" />

      <label for="description">Job Description</label>
      <input type="text" name="description" v-model="newJob.description" />

      <label for="external">External Link</label>
      <input type="text" name="external" v-model="newJob.externalLink" />

      <label for="contact-name">Contact Name</label>
      <input type="text" name="contact-name" v-model="newJob.contactName" />

      <label for="contact-email">Contact Email</label>
      <input type="text" name="contact-email" v-model="newJob.contactEmail" />

      <label>Approved to show on Job Board?</label>
      <input type="checkbox" name="approved" v-model="newJob.approved">

      <input type="submit" class="btn" value="Save Changes">
    </form>
  </div>
</template>

<script>
import Firebase from 'firebase'

export default {

  name: 'EditJob',
  data () {
    return {
      newJob: {
        id: '',
        title: '',
        company: '',
        description: '',
        contactName: '',
        contactEmail: '',
        externalLink: '',
        approved: false,
        createdOn: null,
      }
    }
  },
  created() {
    this.$root.db.collection("jobs").doc(this.$route.params.id).get()
    .then((doc) => {
      if (doc.exists) {
          var newJob = doc.data();
          newJob.id = doc.id;
          this.newJob = newJob;
          console.log("Document data:", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
      
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });
  },
  methods: {
    submitJob () {

      this.$root.errors = [];
      for (var key in this.newJob) {
        if (this.newJob.hasOwnProperty(key)) {
          console.log(key + " -> " + this.newJob[key]);
          if (typeof this.newJob[key] === 'string' && this.newJob[key].trim() == '') {
            this.$root.errors.push(`Please enter a value for ${key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })}`)
          }
        }
      }

      if (this.$root.errors.length == 0) {
        var submitJob = this.newJob;
        delete submitJob.id

        this.$root.db.collection("jobs").doc(this.$route.params.id)
        .set(submitJob)
        .then(() => {
          this.$root.messages.push('Your job posting has been added to our database. Once it\'s approved, you\'ll see it on this page');
          this.$router.push('/');
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
      }

    }
  }
}
</script>

<style lang="css" scoped>
label {
  display: block;
  text-align: left;
  font-size: 20px;
}
input {
  display: block;
  margin-bottom: 2em;
  width: 100%;
  font-size: 18px;
  padding: 2em 3em;
  border: 1px solid #E5E5E5;
}

.btn {
  background-color: #63C588;
  color: white;
  width: auto;
  padding: 1em 2em;
  cursor: button;
}
</style>