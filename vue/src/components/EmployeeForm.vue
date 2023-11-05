<template>
  <div>
    <h2>{{ mode === 'create' ? 'Create Employee' : 'Edit Employee' }}</h2>
    <form @submit.prevent="saveEmployee">
      <label for="name">Name</label>
      <input v-model="employee.name" type="text" id="name" required />

      <label for="email">Email</label>
      <input v-model="employee.email" type="email" id="email" required />

      <label for="employeeId">Employee ID</label>
      <input v-model="employee.employeeId" type="text" id="employeeId" required />
      <br>

      <button type="submit">{{ mode === 'create' ? 'Create' : 'Save' }}</button>
      <br><br>
      <router-link to="/">Cancel</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employee: {
        name: '',
        email: '',
        employeeId: '',
      },
      mode: 'create',
    };
  },
  created() {
    if (this.$route.params.id) {
      this.mode = 'edit';
      this.fetchEmployee(this.$route.params.id);
    }
  },
  methods: {
    async fetchEmployee(id) {
      try {
        const response = await fetch(`http://localhost:3000/employees/${id}`);
        const data = await response.json();
        this.employee = data;
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    },
    async saveEmployee() {
      if (this.mode === 'create') {
        try {
          const response = await fetch("http://localhost:3000/employees", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.employee),
          });
          if (response.ok) {
            this.$router.push("/");
          }
        } catch (error) {
          console.error("Error creating employee:", error);
        }
      } else if (this.mode === 'edit') {
        try {
          const response = await fetch(`http://localhost:3000/employees/${this.$route.params.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.employee),
          });
          if (response.ok) {
            this.$router.push("/");
          }
        } catch (error) {
          console.error("Error updating employee:", error);
        }
      }
    },
  },
};
</script>
<style scoped>
div{
    display: flexbox;
}
form
{
    margin: 2%;

}
input{display: inline;}
label{
    margin: 2%;
    display: block;
}
button  {
    /* display: block; */
   margin-top: 1%;

}
</style>